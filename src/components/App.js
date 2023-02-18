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
import { Button } from './Button/Button';


import { Box } from './Styled';

export class App extends React.Component {
  state = {
    imgList: null,
    isLoading: false,
    error: null,
    imgOnPage: 12,
    totalImg: null,
    pageNum: null,
  };

  // // Обробляю відповідь бекенду
  runSearsh = async (searchQuery, pageNum) => {
    // console.log('searchQuery >> ', searchQuery, pageNum);
    try {
      const { data } = await requestApi(
        this.state.imgOnPage,
        searchQuery,
        pageNum
      );
      console.log('try >>', data);
      this.setState({
        imgList: data.hits,
        totalImg: data.totalHits,
        pageNum: pageNum,
      });

      // runAction(serverResponse);
    } catch (err) {
      console.log('err >> ', err);
      Notiflix.Notify.failure('Sorry, ' + err);
    }
  };

  render() {
    // console.log('render state >> ',this.state );
    // <Searchbar>, <ImageGallery>, <ImageGalleryItem>, <Loader>, <Button> і <Modal>
    const { imgList, imgOnPage, pageNum, totalImg } = this.state;
    return (
      <>
        <Searchbar runSearsh={this.runSearsh} />
        {imgList && <ImageGallery imgList={this.state.imgList} />}
        {imgOnPage * pageNum < totalImg && <Button />}

        <script src="./js/index.js" type="module"></script>
      </>
    );
  }
}
