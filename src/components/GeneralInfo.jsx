/* eslint-disable react/prop-types */
import React from 'react';
import info from '../common/resources/generalInformation.json';

const GeneralInfo = () => {
  return (
    <div className='general-info-container'>
      <h1 className='title-text'>X Faction Archive</h1>
      <h1 className='subheader subheader-left'>Mission Statement:</h1>
      <p className='text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque assumenda
        non enim dicta quidem vitae beatae ratione doloremque asperiores cum!
      </p>
      <h1 className='subheader subheader-left'>Mission Description:</h1>
      <p className='text'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati iure
        nulla totam beatae quos neque vero quis nesciunt et quaerat.
      </p>
      <h1 className='subheader subheader-left'>X</h1>
      <p className='text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        dignissimos ratione dolore temporibus saepe quis perspiciatis provident
        esse voluptas excepturi!
      </p>
      <h1 className='subheader subheader-left'>X</h1>
      <p className='text'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum nulla
        ipsa quo doloribus fugit enim nobis aliquid nostrum, inventore deserunt!
      </p>
    </div>
  );
};

export default GeneralInfo;
