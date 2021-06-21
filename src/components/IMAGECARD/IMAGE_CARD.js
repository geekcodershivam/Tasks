import React from 'react';
import { Frame, Page } from 'framer';
import './IMAGE_CARD.css';
import validURL from '../../utils/validUrl'; 
export default function IMAGE_CARD({ data }) {
 
  let CARDs = () => {
    if (data === undefined) {
      <div>Loading....</div>;
    } else {
      return (
        <Page
          direction="horizontal"
          drag={data.is_scrollable}
          width="100%"
          height="136px"
        >
          {' '}
          {IMGs}{' '}
        </Page>
      );
    }
  };

  const IMGs =
    data === undefined
      ? ''
      : data['cards'].map((card, idx) => (
          <Frame
            key={idx}
            className="cardImage"
            style={{ backgroundImage: `url(${card.bg_image.image_url})` }}
            alt="Card"
            onClick={() => {
              if(validURL(`${card['url']}`)) window.location.href = `${card['url']}`
            }}
          />
        ));

  return (
    <div className="imgCardContainer">
      <div className="imageCard">{CARDs()}</div>
    </div>
  );
}
