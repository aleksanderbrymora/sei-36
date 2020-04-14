import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    return (
      <div className="avatar_container">
        <img className="avatar_thumbnail" src={this.props.image} alt="avatar" />
      </div>
    );
  }
}

export default Gallery;
