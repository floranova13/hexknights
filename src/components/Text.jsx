/* eslint-disable react/prop-types */
import React from 'react';

const Text = ({ paragraphs, classes }) => {
  console.log(paragraphs);
  return (
    <>
      {paragraphs.map((p, i) => {
        return (
          <p key={i} className={classes}>
            {p}
          </p>
        );
      })}
    </>
  );
};

export default Text;
