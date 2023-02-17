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
      <section className="section section__search" onSubmit={this.handleSubmit}>
        <div className="search-block">
          <form className="search-form" id="search-form">
            <input
              type="text"
              name="search"
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
