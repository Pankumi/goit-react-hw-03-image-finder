import React from 'react';
import css from './Button.modal.css';

export class Button extends React.Component {

  handleClick = () => {
    // console.log('click >>', this.props);
    const { fRunSearsh, stateSearchQuery, statePageNum } = this.props;
    fRunSearsh(stateSearchQuery, statePageNum + 1);
  }

  render() {
    // console.log('Button props >>', this.props);
    return (
        <button
        className={css.Button}
        type="button"
        onClick={this.handleClick}
        >
          Load more
        </button>
    );
  }
}
