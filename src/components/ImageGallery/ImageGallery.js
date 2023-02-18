import React from 'react';
import {ImageGalleryItem} from './ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends React.Component {

  render() {
    const {imgList} = this.props
    // console.log('render in ImageGallery >> ', imgList );

    return (
      <section className="section">
        <div className="gallery">
            {imgList.map( (imgItems, idx) => {
                // console.log('map in ImageGallery >> ', imgItems );
                return <ImageGalleryItem key={idx} imgItems={imgItems}/>
            })}

        </div>
      </section>
    );
  }
}
