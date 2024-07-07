import React, { Component } from 'react';
import loadGif from '../loading.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className='spinner-container'>
        <img src={loadGif} alt="loading icon" />
      </div>
    );
  }
}
