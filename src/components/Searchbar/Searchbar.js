import React from 'react';
// npm i react-icons
import { FiSearch } from 'react-icons/fi';
import css from './Searchbar.module.css';

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

      <section className={css.SearchBar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>

          <button className={css.SearchForm_button} type="submit" >
              <FiSearch size="20px" />
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </form>
      </section>
    );
  }
}
