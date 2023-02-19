// // Для HTTP-запитів використана бібліотека axios.
// // npm install axios
// import axios from 'axios';

// // Підключаю notiflix сповіщєння https://github.com/notiflix/Notiflix#readme
// // npm i notiflix
// import Notiflix from 'notiflix';
// Notiflix.Notify.success('Sol lucet omnibus');
// Notiflix.Notify.failure('Qui timide rogat docet negare');
// Notiflix.Notify.warning('Memento te hominem esse');
// Notiflix.Notify.info('Cogito ergo sum');

import React from 'react';
// COMPONENTS:
import { requestImg } from '../services/pixabay';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

// // npm i styled-components
import { Box } from './Styled';

export class App extends React.Component {
  state = {
    imgList: null,
    isLoading: false,
    error: null,
    imgOnPage: 12,
    searchQuery: null,
    totalImg: null,
    pageNum: null,
    selectedImg: null,
  };

  handleClick = selectedImg => {
    this.setState({ selectedImg: selectedImg });
    // console.log('URL >>', selectedImg);
  };

  // largeImageURL

  runSearsh = async (searchQuery, pageNum) => {
    // console.log('searchQuery >> ', searchQuery, pageNum);
    this.setState({ isLoading: true });
    try {
      const data = await requestImg(this.state.imgOnPage, searchQuery, pageNum);
      console.log('try >>', data);
      this.setState({
        searchQuery: searchQuery,
        pageNum: pageNum,
        imgList: data.hits,
        totalImg: data.totalHits,
      });

      // runAction(serverResponse);
    } catch (err) {
      console.log('err >> ', err);
      // Notiflix.Notify.failure('Sorry, ' + err);
      this.setState({
        error: err.message,
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    console.log('render state >> ', this.state);
    const {
      imgList,
      isLoading,
      error,
      imgOnPage,
      searchQuery,
      totalImg,
      pageNum,
      selectedImg,
    } = this.state;
    const switchButton = imgOnPage * pageNum < totalImg;
    return (
      <Box>
        <Searchbar runSearsh={this.runSearsh} />

        {isLoading && <Loader />}

        {totalImg === 0 && (
          <p>
            Sorry, there are no images matching your search query. Please try
            again.
          </p>
        )}

        {error && <p>Oops, some arror occured... Massage: {error}</p>}

        {imgList && (
          <ImageGallery imgList={imgList} handleClick={this.handleClick} />
        )}

        {switchButton && (
          <Button
            fRunSearsh={this.runSearsh}
            stateSearchQuery={searchQuery}
            statePageNum={pageNum}
          />
        )}

        {selectedImg && <Modal selectedImg={selectedImg} />}
      </Box>
    );
  }
}
