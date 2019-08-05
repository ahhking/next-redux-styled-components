import React from 'react';
import styled, { css } from 'styled-components';

const ImageDiv = styled.div``;
const ContentDiv = styled.div`
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : 'auto')};
  background-color: tomato;
  border-radius: 7px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  top: 50%;
  left: 25px;
  transform: translateY(-50%);
  padding: 20px;
`;

const Wrapper = styled.div`
  display: inline-block;
  width: 17px;
  height: 17px;
  cursor: pointer;
  position: relative;

  & ${ImageDiv} {
    width: 17px;
    height: 17px;
    background-image: url('/assets/images/ic-info-17.svg');
    background-repeat: no-repeat;
    background-position: center;
  }

  & ${ContentDiv} {
    position: absolute;

    /* display: ${props => (props.isActive ? 'static' : 'none')}; */
    display: none;
  }

  &:hover > ${ContentDiv} {
    display: block;
    z-index: 9999;
  }
`;

class Help extends React.Component {
  render() {
    return (
      <Wrapper

        className={this.props.className}>
        <ImageDiv></ImageDiv>
        <ContentDiv
          isActive={this.props.isActive}
          width={this.props.width}
          height={this.props.height}
        >
          {this.props.children}
        </ContentDiv>
      </Wrapper>
    )
  }
}

export default Help;
