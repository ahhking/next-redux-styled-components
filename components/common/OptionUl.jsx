import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.ul`
  z-index: 9;
  cursor: auto;
  display: none;
  position: absolute;
  top: calc(100% + 1px);
  width: 100%;
  left: 0;
  border-radius: 7px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  box-sizing: border-box;
  padding-top: 20px;
  padding-bottom: 20px;
`;

class OptionUl extends React.Component {
  render() {
    return (
      <Wrapper {...this.props}>
      </Wrapper>
    );
  }
}

export default OptionUl;
