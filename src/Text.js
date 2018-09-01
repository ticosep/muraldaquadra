import React, { Component } from 'react';
import soccerball from './soccer-ball.svg';

class Text extends Component {
    render() {
      return (
        <div className="Text">
          <img width="200px" height = "200px" src={soccerball} className="Text-logo" alt="logo" />
        </div>
      );
    }
  }
  
  export default Text;