import React from "react";

const GithubLogo = ({fillColor}) => { 
  return (<svg
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    x="0"
    y="0"
    version="1.1"
    viewBox="0 0 274.1 267.3"
    xmlSpace="preserve"
    style={{ enableBackground: "new 0 0 274.1 267.3" }}
  >
    <path
      d="M137.1,0C61.4,0,0,61.3,0,136.9C0,196,37.8,248.4,93.8,267c6.8,1.3,9.3-3,9.3-6.6c0-3.3-0.1-11.9-0.2-23.3	c-38.1,8.3-46.1-18.4-46.1-18.4c-6.2-15.8-15.2-20-15.2-20c-12.4-8.5,0.9-8.3,0.9-8.3c13.7,1,21,14.1,21,14.1	c12.2,20.9,32.1,14.9,39.9,11.4c1.2-8.9,4.8-14.9,8.7-18.3c-30.4-3.5-62.4-15.2-62.4-67.7c-0.2-13.6,4.8-26.8,14.1-36.8	c-1.4-3.5-6.1-17.4,1.3-36.3c0,0,11.5-3.7,37.7,14c11.2-3.1,22.7-4.6,34.3-4.6c11.6,0.1,23.1,1.6,34.3,4.6	c26.2-17.7,37.6-14,37.6-14c7.5,18.9,2.8,32.8,1.4,36.3c9.3,10,14.3,23.2,14.1,36.8c0,52.6-32,64.2-62.5,67.6	c4.9,4.2,9.3,12.6,9.3,25.4c0,18.3-0.2,33.1-0.2,37.6c0,3.7,2.5,7.9,9.4,6.6c71.8-24,110.5-101.7,86.5-173.5	C248.3,37.7,196,0,137.1,0L137.1,0z"
      fill={fillColor}
    />
  </svg>);
};

export default GithubLogo;
