import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import CenterDiv from './CenterDiv';

const StyledCenterDiv = styled(CenterDiv)``;
const DotDiv = styled.div``;

const DotsKeyframes = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
const Wrapper = styled.div`
  /* width: ${props => props.width ? props.width : '100%'}; */
  /* width: ${props => props.width}; */
  position: ${props => props.isFullScreen ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  background-color: white;
  z-index: 999;

  & ${StyledCenterDiv} ${DotDiv} {
    display: inline-block;
    box-sizing: border-box;
    width: 12px;
    height: 12px;
    background-color: #2962ff;
    border-radius: 10px;
    margin: 4px;
    animation: ${DotsKeyframes} 0.8s infinite;
  }

  & ${DotDiv}:nth-of-type(2) {
    animation-delay: .1s;
  }
  & ${DotDiv}:nth-of-type(3) {
    animation-delay: .2s;
  }
  & ${DotDiv}:nth-of-type(4) {
    animation-delay: .3s;
  }
`;

class Loader extends React.Component {
  render() {

    if (!this.props.isShow) {
      return null;
    } else {
      return (
        <Wrapper isFullScreen={this.props.isFullScreen}>
          <StyledCenterDiv align="center">
            <DotDiv></DotDiv>
            <DotDiv></DotDiv>
            <DotDiv></DotDiv>
            <DotDiv></DotDiv>
          </StyledCenterDiv>
        </Wrapper>
      );
    }
  }
}

export default Loader;
