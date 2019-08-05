import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  width: 70px;
  width: ${props => (props.width ? props.width : 'auto')};
  height: 20px;
  box-sizing: border-box;

  & > div {
    display: inline-block;
    box-sizing: border-box;
    width: 50%;
    text-align: center;
    box-sizing: border-box;
    vertical-align: middle;

    /* 평 */
    &:nth-of-type(1) {
      font-size: 14px;
      text-align: center;
      color: ${props => props.selectedIdx === 0 ? '#222222' : '#bbbbbb'};
      background: ${props => props.selectedIdx === 0 ? 'white' : '#fbfbfb'};
      height: 100%;
      line-height: 18px;
      border-top: 1px solid #e2e6ea;
      border-left: 1px solid #e2e6ea;
      border-bottom: 1px solid #e2e6ea;
    }

    /* 가로x세로 */
    &:nth-of-type(2) {
      font-size: 14px;
      color: ${props => props.selectedIdx === 1 ? '#222222' : '#bbbbbb'};
      background: ${props => props.selectedIdx === 1? 'white' : '#fbfbfb'};
      line-height: 18px;
      height: 100%;
      border-top: 1px solid #e2e6ea;
      border-right: 1px solid #e2e6ea;
      border-bottom: 1px solid #e2e6ea;
    }
  }
`;


class StandardSpan extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {width, unit1, unit2, selectedIdx} = this.props;
    let index = selectedIdx === undefined ? 1 : selectedIdx;
    return (
      <Wrapper
        width={width}
        selectedIdx={index}
      >
        <div>{unit1}</div>
        <div>{unit2}</div>
      </Wrapper>
    );
  };
}

export default StandardSpan;
