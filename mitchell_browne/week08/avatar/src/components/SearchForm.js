import React, { Component } from 'react';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
    this._handleInput = this._handleInput.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleInput(event) {
    this.setState({query: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this._handleSubmit}>
          <input type="search" placeholder="Woohaha" required onInput={this._handleInput} />
          <input type="submit" value="search" />
        </form>
      </div>
    );
  }
}

export default SearchForm;
