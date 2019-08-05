import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import Modal from './Modal';

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const Wrapper = styled.div`
  width: 89.3%;
  border-radius: 7px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 68px;

  & > div {
    position: relative;

    &:nth-of-type(1) {
      padding: 40px 20px;

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
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.63;
        letter-spacing: normal;
        color: #222222;
      }
    }

    &:nth-of-type(2) {
      height: 66px;
      border-top: 1px solid #d5dbe2;

      & > span {
        position: absolute;
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #2962ff;
        right: 30px;
        bottom: 25px;
      }
    }
  }
`;

class AlertM extends React.Component {
  render() {
    if (!this.props.isShow) {
      return null;
    }

    return (
      <Modal isModal={true}>
        <GlobalStyle></GlobalStyle>
        <Wrapper>
          <div>
            <h2>{this.props.title}</h2>
            <p>{this.props.content}</p>
          </div>
          <div>
            <span onClick={this.props.callback}>확인</span>
          </div>
        </Wrapper>
      </Modal>
    );
  }
}

export default AlertM;
