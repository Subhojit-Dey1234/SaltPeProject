import React from 'react';
import girl from '../Images/girl.png'
import "../Mobile.css";
import "../App.css";
export default function Details() {
  return <div className='detail'>
      <h1>Details</h1>
      <div className='details-container'>
          <div className='details'>
              <img src={girl} alt='girl'/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          </div>
          <div className='details'>
              <img src={girl} alt='girl'/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          </div>
          <div className='details'>
              <img src={girl} alt='girl'/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
          </div>
      </div>
  </div>;
}
