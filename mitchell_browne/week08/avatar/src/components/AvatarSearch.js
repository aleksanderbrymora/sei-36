import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Gallery from './Gallery';
import axios from 'axios';

class AvatarSearch extends Component {
  constructor() {
    super();
    this.state = {
      image: '',
      history: [{
        image: '',
      }],
      searchNumber: 0,
    };
    this.fetchImage = this.fetchImage.bind(this);
  }

  fetchImage(q) {
    const generateURL = function(q) {
      return ['https://api.adorable.io/avatars/500/',q].join('');
    }

    const url = generateURL(q);
    const history = this.state.history.slice(0, this.state.searchNumber + 1);
    this.setState({
      image: url,
      history: history.concat([{
        image: q,
      }]),
      searchNumber: history.length,
    });
    console.log(this.state.history);

    // axios.get(generateURL(q)).then(function(result) {
    //   console.log(result);
    // })
  }

  jumpTo(search, step) {
    console.log(search.image);
    console.log(step);
    this.setState({
      image: ['https://api.adorable.io/avatars/500/',search.image].join(''),
    });
  }

  render() {
    const history = this.state.history;
    const searches = history.map((search, step) => {
      const desc = step ? ('Go to: ' + search.image) : ('Go to start');
      return (
        <li key={step}>
          <img
            className='history_thumbnail'
            src={['https://api.adorable.io/avatars/500/',search.image].join('')}
            onClick={() => this.jumpTo(search, step)}
          />
          <button
            onClick={() => this.jumpTo(search, step)}
          >{desc}</button>
        </li>
      )
    })

    return (
      <div>
        <h1 className="main_title">Avatar Search</h1>
        <SearchForm onSubmit={ this.fetchImage }/>
        <Gallery image={ this.state.image }/>
        <div className="searchNumber_container">
          <ol>{searches}</ol>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchImage('mate!');
  }
}

export default AvatarSearch;
