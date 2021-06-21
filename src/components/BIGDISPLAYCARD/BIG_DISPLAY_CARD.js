import React, { useState } from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CancelIcon from '@material-ui/icons/Cancel';
import LongPress from '../../utils/LongPress';
import getformattedHTML from '../../utils/getFormatted';
import validURL from '../../utils/validUrl'; 
export default function BIG_DISPLAY_CARD({ cards }) {
  const [longPressed, setLongPressed] = useState(false);
  const [isRemoved, setisRemoved] = useState(false);

  const defaultOptions = { shouldPreventDefault: true, delay: 500 };

  const onLongPress = () => {
    setLongPressed((prevState) => !prevState);
  };

  const longPressEvent = LongPress(onLongPress, defaultOptions);

  const removedCard = (cardItem) => {
    setisRemoved(true);
    const items = JSON.parse(localStorage.getItem('removedCardList'));
    if (items) {
      items.push(cardItem);
      localStorage.setItem('removedCardList', JSON.stringify(items));
    } else localStorage.setItem('removedCardList', JSON.stringify([cardItem]));
  };

  const isRenderItem = () => {
    const items = JSON.parse(localStorage.getItem('removedCardList'));
    const istrue = (items) => items === cards.name;
    if (items) return items.some(istrue);
    else return false;
  };

  const card = (
    <div className="BigcardWrap" style={{ display: isRemoved ? 'none' : '' }}>
      <div
        className="bigDisplay"
        key={cards.name}
        style={{
          backgroundImage: `url(${cards.bg_image.image_url})`,
          transform: `translateX(${longPressed ? '114px' : '0px'})`,
        }}
        {...longPressEvent}
      >
        {getformattedHTML(cards.formatted_title, cards.title, 'Title')}
        {getformattedHTML(
          cards.formatted_description,
          cards.title,
          'Description'
        )}
        <div>
          {cards.cta.map((card) => (
            <button
              className="addBtn"
              type="button"
              style={{
                backgroundColor: card.bg_color,
                color: card.text_color,
              }}
              onClick={() => {
                if(validURL(`${card['url']}`)) window.location.href = `${card['url']}`
              }}
            >
              {card.text}
            </button>
          ))}
        </div>
      </div>
      <div className="controls">
        <button
          className="controlBtn"
          type="button"
          title="Remind me later about this"
          onClick={() => removedCard(cards.name)}
        >
          <NotificationsIcon style={{ color: '#FBAF03' }} />
          <div className="controlText">remind later</div>
        </button>
        <button
          className="controlBtn"
          type="button"
          title="Dismiss this card"
          onClick={() =>removedCard(cards.name)}
        >
          <CancelIcon style={{ color: '#FBAF03' }} />
          <div className="controlText">dismiss now</div>
        </button>
      </div>
    </div>
  );

  const renderItem = () => (isRenderItem() ? null : card);

  return renderItem();
}
