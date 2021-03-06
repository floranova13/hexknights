/* eslint-disable react/prop-types */
import React from 'react';

const Text = ({ paragraphs, classes }) => {
  return (
    <>
      {paragraphs
        .filter((p) => p) // ignore empty paragraphs
        .map((p, i) => {
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
