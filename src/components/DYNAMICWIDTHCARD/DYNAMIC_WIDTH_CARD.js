import React from 'react';
import './DYNAMIC_WIDTH_CARD.css';
import { Page } from 'framer';
import CARD from './CARD';
export default function DYNAMIC_WIDTH_CARD({ data }) {
 
  let renderlist = () => {
    if (data === undefined) {
     return null
    } else {
      return (
        <Page
          width="auto"
          height="135px"
          drag={true}
          contentWidth="auto"
          contentHeight="auto"
          direction="horizontal"
        >
          {' '}
          {data['cards'].map((data) => (
            <CARD data={data} />
          ))}{' '}
        </Page>
      );
    }
  };

  return (
    <div className="smallCardContainer">
      <div key="uyuyui" className="scrollContainer">
        {renderlist()}
      </div>
    </div>
  );
}
