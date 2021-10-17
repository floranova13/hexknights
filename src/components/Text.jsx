/* eslint-disable react/prop-types */
import React from 'react';

const Description = ({ paragraphs, classes }) => {
  return (
    <>
      {paragraphs.map((p) => {
        <p className={classes}>{p}</p>;
      })}
    </>
  );
};

export default Description;
