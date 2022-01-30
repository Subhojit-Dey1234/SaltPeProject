import React from 'react';
import "../Mobile.css";
import "../App.css";
import cash from '../Images/cash.png'
import money from '../Images/money.png'
import coin from '../Images/coin.png'

export default function About() {
  return <div style={{marginTop:"20px"}}>
      <h1 style={{textAlign:"center",fontSize:"3em",marginBottom:"20px"}}>About Us</h1>
      <div className='about-container'>
          <div className='about'>
              <img alt='bank' src={cash}/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
          </div>
          <div className='about'>
              <img alt='bank' src={money}/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
          </div>
          <div className='about'>
              <img alt='bank' src={coin}/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
          </div>
          <div className='about'>
              <img alt='bank' src={cash}/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
          </div>
          <div className='about'>
              <img alt='bank' src={money}/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
          </div>
          <div className='about'>
              <img alt='bank' src={coin}/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </p>
          </div>
      </div>
  </div>
}
