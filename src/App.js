import React, { useEffect, useState } from 'react';
import API from './utils/API/api';
import LOADER from './components/LOADER/Loader';
import HEADER from './components/HEADER/HEADER';
import BIGDISPLAYCARD from './components/BIGDISPLAYCARD/BIGDISPLAYCARD';
import SMALLCARDWITHARROW from './components/SMALLCARDWITHARROW/SMALL_CARD_WITH_ARROW';
import IMAGECARD from './components/IMAGECARD/IMAGE_CARD';
import DYNAMICWIDTHCARD from './components/DYNAMICWIDTHCARD/DYNAMIC_WIDTH_CARD';
import SMALLDISPLAYCARD from './components/SMALLDISPLAYCARD/SMALL_DISPLAY_CARD';
import './App.css';
export default function App() {
  const [designType, setdesignType] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      // api request 
      const response = await API.get('/04a04703-5557-4c84-a127-8c55335bb3b4');
      // arr => arr of card_groups for easy to maintain response data
      let arr = response['data']['card_groups'];
      // obj => filtering the DesignType example: HC1 : [] 
      let obj = {
        HC1: [],
        HC3: [],
        HC5: [],
        HC6: [],
        HC9: [],
      };
      arr.forEach((element) => {
        obj[`${element.design_type}`].push(element);
      });
      setdesignType(obj);
      setLoading(false);
    })();
  }, []);
  
  // DesignType array for rendering the components

  const DesignType = ['HC3', 'HC6', 'HC5', 'HC9', 'HC1'];

 // DesignType match with any following type component render if not match render null.
  const DesignTypes = (type) => {
    if (designType[type] === undefined) {
      return null;
    } else {
      if (type === 'HC1') {
        return designType[type].map((data, idx) => (
          <SMALLDISPLAYCARD key={idx} data={data} />
        ));
      } else if (type === 'HC3') {
        return designType[type].map((data, idx) => (
          <BIGDISPLAYCARD key={idx} data={data} />
        ));
      } else if (type === 'HC6') {
        return designType[type].map((data, idx) => (
          <SMALLCARDWITHARROW key={idx} data={data} />
        ));
      } else if (type === 'HC5') {
        return designType[type].map((data, idx) => (
          <IMAGECARD key={idx} data={data} />
        ));
      } else if (type === 'HC9') {
        return designType[type].map((data, idx) => (
          <DYNAMICWIDTHCARD key={idx} data={data} />
        ));
      }
    }
  };

  return (
    <div className="app">
      <HEADER />
      <div className="Wrap">
        <div className="Container">{
        loading ? <LOADER/> : DesignType.map((type) => DesignTypes(type))}</div>
      </div>
    </div>
  );
}
