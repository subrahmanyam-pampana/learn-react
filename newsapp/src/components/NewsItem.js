import React, { Component } from 'react';
import noImage from '../noImage.jpg';

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    
    return (
     <div className="card">
        <img className="card-img-top" src={imageUrl?imageUrl:noImage} alt="News" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
