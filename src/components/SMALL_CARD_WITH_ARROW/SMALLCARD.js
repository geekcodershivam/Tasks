import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import getformttedHTML from '../../utils/getFormatted';
import './SMALLCARD.css';

export default function SMALLCARD({ data }) {
  
  return (
    <div
      onClick={() => (window.location.href = `${data['url']}`)}
      className="smallCard"
      style={{ backgroundColor: data.bg_color ? data.bg_color : 'white' }}
    >
      <div className="cardContent">
        <img className="smallCardImage" src={data.icon.image_url} alt="" />
        {getformttedHTML(data.formatted_title, data.title, '')}
      </div>
      <ArrowForwardIosIcon className="smallCardArrow" />
    </div>
  );
}
