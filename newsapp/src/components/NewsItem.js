import React, { Component } from 'react';
import noImage from '../noImage.jpg';

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    
    return (
     <div className="card" style={{width:"20rem"}}>
        <img className="card-img-top" src={imageUrl?imageUrl:noImage} alt="News" />
        <div className="card-body">
          <h5 className="card-title">{title && title.slice(0,40)}...</h5>
          <p className="card-text">{description && description.slice(0,80)}...</p>
          <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
