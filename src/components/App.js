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

import React from 'react';
// // npm i styled-components
import { requestApi } from '../services/pixabay';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Box } from "./Styled";

export class App extends React.Component {
  state = {
    images: null,
    isLoading: false,
    error: null,
  };

  // // Обробляю відповідь бекенду
runSearsh = async (searchQuery, page) => {
  console.log('searchQuery >> ', searchQuery, page);
  try {
    const {data} = await requestApi(searchQuery, page);
    console.log('try >>', data);
    this.setState( { images: data.hits })

    // runAction(serverResponse);
  } catch (err) {
    console.log('err >> ', err);
    Notiflix.Notify.failure(
      'Sorry, ' + err
    );
  }
};
  
  render() {
    // console.log('render state >> ',this.state );
    // <Searchbar>, <ImageGallery>, <ImageGalleryItem>, <Loader>, <Button> і <Modal>
    return (
      <>
        <Searchbar runSearsh = {this.runSearsh}/>
        <ImageGallery imgArr={this.state.images} />
        {/* <Button> */}
          <div className="button-box">
            <button type="button" className="load-more is-hidden">Load more</button>
          </div>
        {/* </Button> */}

        <script src="./js/index.js" type="module"></script>
      </>
    );
  }
}
