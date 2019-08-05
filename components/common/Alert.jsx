import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import Modal from './Modal';

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const Wrapper = styled.div`
  width: 700px;
  height: 334px;
  border-radius: 7px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 68px;
  padding: 40px;
  position: relative;

  & > h2 {
    font-size: 24px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #222222;
    margin-bottom: 30px;
  }

  & > p {
    font-size: 21px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #222222;
    margin-bottom: 11px;
  }

  & > button {
    cursor: pointer;
    position: absolute;
    border: none;
    outline: none;
    width: 139px;
    height: 56px;
    border-radius: 7px;
    background-image: linear-gradient(292deg, #2962ff, #00cbd4);
    font-size: 19px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    right: 40px;
    bottom: 40px;
  }
`;

class Alert extends React.Component {
  render() {
    if (!this.props.isShow) {
      return null;
    }

    return (
      <Modal isModal={true}>
        <GlobalStyle></GlobalStyle>
        <Wrapper>
          <h2>{this.props.title}</h2>
          <p>{this.props.content}</p>
          <button onClick={this.props.callback}>확인</button>
        </Wrapper>
      </Modal>
    );
  }
}

export default Alert;
