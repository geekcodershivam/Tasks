import React from 'react';
import ContentLoader from 'react-content-loader';

const LOADER = (props) => (
  <ContentLoader
    speed={1}
    width={340}
    height={620}
    viewBox="0 0 340 620"
    backgroundColor="#f3f3f3"
    foregroundColor="#e5d715"
    {...props}
  >
    <rect x="0" y="0" rx="12" ry="12" width="340" height="210" />
    <rect x="0" y="234" rx="12" ry="12" width="340" height="70" />
    <rect x="0" y="360" rx="12" ry="12" width="340" height="150" />
  </ContentLoader>
);

export default LOADER;
