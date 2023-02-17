import React from 'react';
import {ImageGalleryItem} from './ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends React.Component {

  render() {
    const {imgArr} = this.props
    // console.log('render in ImageGallery >> ', imgArr );
    if(imgArr === null) {
        return
    }

    return (
      <section className="section">
        <div className="gallery">
            {imgArr.map( imgItems => {
                // console.log('map in ImageGallery >> ', imgItems );
                return <ImageGalleryItem imgItems={imgItems}/>
            })}

        </div>
      </section>
    );
  }
}
