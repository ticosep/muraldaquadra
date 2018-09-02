import React, { Component } from 'react';
import soccerball from './soccer-ball.svg';
import './logo.css';
class Logo extends Component {
    render() {
      return (
        <div className="General">
          <img src={soccerball} className="Logo" alt="logo show"/>
        </div>
      );
    }
  }
  
  export default Logo;