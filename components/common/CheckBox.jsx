import React from 'react';
import styled, { css } from 'styled-components';

import { connect } from 'react-redux';

const Box = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 4px;

  &::after {
    content: '';
    position: absolute;
    display: none;
  }
`;

const Wrapper = styled.label`
  position: relative;
  padding-left: 33px;
  margin-bottom: 22px;
  cursor: pointer;
  font-size: 16px;
  /* color: #222222; */
  color: ${props => (props.isCheck ? '#2962ff' : '#222222')};
  user-select: none;
  padding-top: 2px;

  &:hover > ${Box} {
    background-color: #ccc;
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0; 

  &:checked ~ ${Box} {
    background-color: #2196F3;
  }

  &:checked ~ ${Box}::after {
    display: block;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

class CheckBox extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this._onChange.bind(this);
  }

  render() {
    // console.log('checkbox render: ', this.props);

    const { onChange, className, isCheck } = this.props;
    this.input && (this.input.checked = isCheck); 

    return (
      <Wrapper className={className} isCheck={isCheck}>
        {this.props.children}
        <Input type="checkbox" onClick={() => onChange(isCheck ? 0 : 1)} ref={ref => this.input = ref}></Input>
        <Box></Box>
      </Wrapper>
    );
  }

  _onChange() {
    const { onChange } = this.props;

    console.log('change!');
    // appdata loginpagedata 에서 관리해야할듯
    console.log(onChange);
  }
}

export default CheckBox;
