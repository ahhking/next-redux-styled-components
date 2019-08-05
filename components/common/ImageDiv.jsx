import React from 'react';
// import styled from 'styled-components';

class ImageDiv extends React.Component {
  render() {
    return (
      <div className={this.props.className} onClick={this.props.callback}>
      </div>
    );
  }
}

export default ImageDiv;
