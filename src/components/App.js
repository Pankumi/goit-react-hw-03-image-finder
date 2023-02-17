// // Для HTTP-запитів використана бібліотека axios.
// // npm install axios
import axios from 'axios';

// // Підключаю notiflix сповіщєння https://github.com/notiflix/Notiflix#readme
// // npm i notiflix
import Notiflix from 'notiflix';
// Notiflix.Notify.success('Sol lucet omnibus');
// Notiflix.Notify.failure('Qui timide rogat docet negare');
// Notiflix.Notify.warning('Memento te hominem esse');
// Notiflix.Notify.info('Cogito ergo sum');

import React, { Component } from 'react';
// // npm i styled-components
import { Searchbar } from './Searchbar/Searchbar';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';

import { Box } from "./Styled";

export class App extends Component {
  state = {
  };


  render() {

    // <Searchbar>, <ImageGallery>, <ImageGalleryItem>, <Loader>, <Button> і <Modal>
    return (
      <>
        <Searchbar />

        {/* <ImageGallery> */}
        <section class="section">
          <div class="gallery">

            {/* <ImageGalleryItem> */}
            <div class="photo-card">
              <img src="${webformatURL}" alt="${tags}" loading="lazy" />
              <div class="info">
                <p class="info-item">
                  <b>Likes</b>
                  {/* ${likes} */}
                </p>
                <p class="info-item">
                  <b>Views</b>
                  {/* ${views} */}
                </p>
                <p class="info-item">
                  <b>Comments</b>
                  {/* ${comments} */}
                </p>
                <p class="info-item">
                  <b>Downloads</b>
                  {/* ${downloads} */}
                </p>
              </div>
            </div>
            {/* </ImageGalleryItem> */}

          </div>

          {/* <Button> */}
          <div class="button-box">
            <button type="button" class="load-more is-hidden">Load more</button>
          </div>
          {/* </Button> */}

        </section>
        {/* </ImageGallery> */}

        <script src="./js/index.js" type="module"></script>
      </>
    );
  }
}
