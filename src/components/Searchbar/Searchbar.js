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
    console.log(value.length );
    // this.props.F(value);
    this.reset();
  }

  reset = () => {
    this.setState({ search: ''})
  }

  render() {
    return (
      <section class="section section__search" onSubmit={this.handleSubmit}>
        <div class="search-block">
          <form class="search-form" id="search-form">
            <input
              type="text"
              name="search"
              autocomplete="off"
              placeholder="Search images..."
              value={this.state.search}
              onChange={this.handleChange}
            />
            <button type="submit" >Search</button>
          </form>
        </div>
      </section>
    );
  }
}
