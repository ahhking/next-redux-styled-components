import React from 'react';
import Styled, { css } from 'styled-components';


class DummyImg extends React.Component {
  render() {
    return (
      <img className={this.props.className} src="/assets/images/dummy-img-logo.svg"></img>
    );
  }
}

export default DummyImg;
