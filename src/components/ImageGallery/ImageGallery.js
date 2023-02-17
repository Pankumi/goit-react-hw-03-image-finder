import React from 'react';

export class ImageGallery extends React.Component {

  render() {
    const {imgArr} = this.props
    console.log('render in ImageGallery >> ', imgArr );
    if(imgArr === null) {
        return
    }

    return (
      <section className="section">
        <div className="gallery">
            {imgArr.map( imgItems => {
                console.log('map in ImageGallery >> ', imgItems );
                const {
                    webformatURL,
                    largeImageURL,
                    tags,
                    likes,
                    views,
                    comments,
                    downloads,
                  } = imgItems;

            })}



          {/* <ImageGalleryItem> */}
          <div className="photo-card">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div className="info">
              <p className="info-item">
                <b>Likes</b>
                {/* ${likes} */}
              </p>
              <p className="info-item">
                <b>Views</b>
                {/* ${views} */}
              </p>
              <p className="info-item">
                <b>Comments</b>
                {/* ${comments} */}
              </p>
              <p className="info-item">
                <b>Downloads</b>
                {/* ${downloads} */}
              </p>
            </div>
          </div>
          {/* </ImageGalleryItem> */}
        </div>
      </section>
    );
  }
}
