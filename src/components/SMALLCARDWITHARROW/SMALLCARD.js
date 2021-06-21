import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import getformattedHTML from '../../utils/getFormtted';
import validURL from '../../utils/validUrl'; 
import './SMALLCARD.css';

export default function SMALLCARD({ data }) {
  console.log(data);
  return (
    <div
    onClick={() => {
      if(validURL(`${data['url']}`)) window.location.href = `${data['url']}`
    }}
      className="smallCard"
      style={{ backgroundColor: data.bg_color ? data.bg_color : 'white' }}
    >
      <div className="cardContent">
        <img className="smallCardImage" src={data.icon.image_url} alt="" />
        {getformattedHTML(data.formatted_title, data.title, '')}
      </div>
      <ArrowForwardIosIcon className="smallCardArrow" />
    </div>
  );
}
