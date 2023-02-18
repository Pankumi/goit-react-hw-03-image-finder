import React from 'react';

export class Button extends React.Component {

  handleClick = () => {
    // console.log('click >>', this.props);
    const { fRunSearsh, stateSearchQuery, statePageNum } = this.props;
    fRunSearsh(stateSearchQuery, statePageNum + 1);
  }

  render() {
    // console.log('Button props >>', this.props);
    return (
      <div className="button-box">
        <button
          type="button"
          className="load-more is-hidden"
          onClick={this.handleClick}
        >
          Load more
        </button>
      </div>
    );
  }
}
