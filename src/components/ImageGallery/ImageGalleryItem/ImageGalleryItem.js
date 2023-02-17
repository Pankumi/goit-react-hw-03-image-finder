import React from 'react';

export class ImageGalleryItem extends React.Component {
  render() {
    const {webformatURL, largeImageURL, tags, likes, views, comments, downloads} = this.props.imgItems;
    // console.log('props ImageGalleryItem >> ', this.props);

    return (
      <div className="photo-card">
        <img src={webformatURL} alt={tags} loading="lazy" />
        <div className="info">
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
        </div>
      </div>
    );
  }
}
