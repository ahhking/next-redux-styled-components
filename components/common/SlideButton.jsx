import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
`;

const Button = styled.label`
  width: 52px;
  height: 29px;
  position: relative;
  display: inline-block;
`;

const Slider = styled.span`
  position: absolute;
  content: '';
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #e0e0e0;
  transition: .3s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 23px;
    width: 23px;
    left: 26px;
    bottom: 3px;
    background-color: white;
    transition: .3s;
    border-radius: 34px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 30;
  height: 30;

  &:checked + ${Slider} {
    background-color: #2962ff;
  }

  &:checked + ${Slider}:before {
    transform: translateX(-23px);
  }
`;

class SlideButton extends React.Component {
  constructor(props) {
    super(props);

    console.log('slidebutton props: ', props);
  }

  componentDidMount() {
    // this.isMap.checked = true;
  }

  render() {
    const { onClick } = this.props;
    console.log('slidebutton this.props: ', this.props);
    console.log('this.props.value: ', this.props.valcheckValueue);

    let b = this.props.checkValue;

    return (
      <Wrapper className={this.props.className}>
        <Button>
          {
            b ?  
            <Input type="checkbox" ref={(ref) => this.isMap = ref}></Input>
            :
            <Input type="checkbox" ref={(ref) => this.isMap = ref}></Input>
          }
          <Slider onClick={(e) => onClick(this.isMap, e)}></Slider>
        </Button>
      </Wrapper>
    );
  }
}

export default SlideButton;
