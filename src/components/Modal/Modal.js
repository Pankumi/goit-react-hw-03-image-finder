import React, { Component } from 'react';
import css from './Modal.module.css'

export class Modal extends Component {
  render() {
    const { largeImageURL, tags } = this.props.selectedImg
    return (
      <div className={css.Overlay}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
