import React from 'react';
import SMALLCARD from './SMALLCARD';
import './SMALLCARDWITHARROW.css';
export default function SMALL_CARD_WITH_ARROW({ data }) {
  let renderlist = () => {
    if (data === undefined) {
      <div>Loading....</div>;
    } else {
      return data['cards'].map((card) => (
        <SMALLCARD data={card} key={card.name} />
      ));
    }
  };
  return <div className="smallCardArrowContainer">{renderlist()}</div>;
}
