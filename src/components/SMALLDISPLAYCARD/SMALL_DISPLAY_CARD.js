import React from 'react';
import { Page } from 'framer';
import './SMALL_DISPLAY_CARD.css';
import '../SMALLCARDWITHARROW/SMALLCARD.css';
import validURL from '../../utils/validUrl'; 
export default function SMALL_DISPLAY_CARD({ data }) {
  const DISPLAY_CARD = (cards, flag) => {
    return cards.map((card, idx) => (
      <div
        key={flag + idx}
        onClick={() => {
          if(validURL(`${card['url']}`)) window.location.href = `${card['url']}`
        }}
        className="smallCard"
        style={{ backgroundColor: card.bg_color || '#FBAF03' }}
      >
        <div className="cardContent">
          <img className="smallCardImage" src={card.icon.image_url} alt="" />
          {card.formatted_title.text}
        </div>
      </div>
    ));
  };

  return (
    <div className="smallCardContainers">
      {data.is_scrollable ? (
        <div className="scrollContainer">
          <Page
            width="auto"
            height={60}
            contentWidth="auto"
            contentHeight="auto"
            direction="horizontal"
          >
            {DISPLAY_CARD(data.cards, 'scroll')}
          </Page>
        </div>
      ) : (
        <div className="nonScrollContainer">
          {DISPLAY_CARD(data.cards, 'unscroll')}
        </div>
      )}
    </div>
  );
}
