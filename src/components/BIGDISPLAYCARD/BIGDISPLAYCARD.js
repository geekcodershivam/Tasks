import React from 'react';
import BIG_DISPLAY_CARD from './BIG_DISPLAY_CARD';
import './BIGDISPLAYCARD.css';
export default function BIGDISPLAYCARD({ data }) {
  
  let renderDisplayItem = () => {
    if (data === undefined) {
      return null;
    } else {
      return data['cards'].map((card) => <BIG_DISPLAY_CARD key={card.name} cards={card} />)
    }
  };
  return <div className="bigContainer">{renderDisplayItem()}</div>;
}
