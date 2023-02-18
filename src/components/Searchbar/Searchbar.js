import React from 'react';

export class Searchbar extends React.Component {
  state = {
    search: '',
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const value = this.state.search
    
    if(value.length < 2 ) {return};
    // console.log(value.length );
    this.props.runSearsh(value, 1);
    this.reset();
  }

  reset = () => {
    this.setState({ search: ''})
  }

  render() {
    return (

      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>

          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
