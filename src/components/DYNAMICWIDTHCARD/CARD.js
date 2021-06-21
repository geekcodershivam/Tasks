import React from 'react';
import validURL from '../../utils/validUrl';
import './DYNAMIC_WIDTH_CARD.css';
export default function CARD({ data }) {
  return (
    <div
      className="smallcard"
      onClick={() => {
        if (validURL(`${data['url']}`)) window.location.href = `${data['url']}`;
      }}
    >
      <img
        src={data['bg_image']['image_url']}
        style={{ width: '100%' }}
        alt="..."
      />
    </div>
  );
}
