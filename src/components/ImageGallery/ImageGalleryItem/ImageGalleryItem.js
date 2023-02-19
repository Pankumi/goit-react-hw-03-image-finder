import React from 'react';
import css from './ImageGalleryItem.modul.css';

export class ImageGalleryItem extends React.Component {
  render() {
    const {webformatURL, tags, likes, views, comments, downloads} = this.props.imgItems;
    // console.log('props ImageGalleryItem >> ', this.props);

    return (
      <li 
      className={css.ImageGalleryItem}
      onClick={ () =>this.props.handleClick(this.props.imgItems) }>
        <img
        className={css.ImageGalleryItemImage}
        src={webformatURL} alt={tags} loading="lazy" />
        {/* <div className="info">
          <p className="info-item">
            <b>Likes</b>
            {likes}
          </p>
          <p className="info-item">
            <b>Views</b>
            {views}
          </p>
          <p className="info-item">
            <b>Comments</b>
            {comments}
          </p>
          <p className="info-item">
            <b>Downloads</b>
            {downloads}
          </p>
        </div> */}
      </li>
    );
  }
}
