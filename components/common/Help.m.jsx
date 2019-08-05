import React from 'react';
import styled, { css } from 'styled-components';

const ImageDiv = styled.div``;
const CloseDiv = styled.div`
  display: inline-block;
  background-image: url('/assets/images/ic-close-01.svg');
  background-size: 100% 100%;
  width: 13px;
  height: 13px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  box-sizing: border-box;
`;
const ContentDiv = styled.div`
  width: calc(100% - 40px);
  background-color: tomato;
  border-radius: 7px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  top: ${props => {
    console.log('props: ', props);
    return props.top + 'px';
  }};
  left: 20px;
  transform: translateY(-50%);
  padding: 20px;
  box-sizing: border-box;
  z-index: 100;
`;

const Wrapper = styled.div`
  display: inline-block;
  width: 17px;
  height: 17px;
  cursor: pointer;
  /* position: relative; */

  & ${ImageDiv} {
    width: 17px;
    height: 17px;
    background-image: url('/assets/images/ic-info-17.svg');
    background-repeat: no-repeat;
    background-position: center;
  }

  & ${ContentDiv} {
    position: absolute;
    display: none;
  }
`;

class HelpM extends React.Component {
  constructor(props) {
    super(props);

    this.onClickWrap = this._onClickWrap.bind(this);
    this.onClickBlur = this._onClickBlur.bind(this);
  }  
  render() {
    console.log('this.props: ', this.props);

    console.log('this.props.children: ', this.props.children);

    return (
      <Wrapper
        onClick={() => this.onClickWrap()}
        ref={(ref) => this.wrap = ref}
        className={this.props.className}>
        <ImageDiv></ImageDiv>
        <ContentDiv
          ref={(ref) => this.content = ref}
          isActive={this.props.isActive}
          top={this.props.top - 84}
          width={this.props.width}
          height={this.props.height}>
          <CloseDiv onClick={(e) => this.onClickBlur(e)}></CloseDiv>
          {this.props.children}
        </ContentDiv>
      </Wrapper>
    )
  }

  _onClickWrap() {
    this.content.style.display = 'block';
  }

  _onClickBlur(e) {
    if (e.stopPropagation()) {
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }

    this.content.style.display = 'none';
  }
}

export default HelpM;
