import React from 'react';
import styled, { css } from 'styled-components';

import ImageDiv from './ImageDiv';

const StyledImageDiv = styled(ImageDiv)``;

const Wrapper = styled.li`
  cursor: pointer;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.19;
  letter-spacing: normal;
  color: ${props => (props.isActive ? '#2962ff' : '#222222')};

  & > ${StyledImageDiv} {
    display: inline-block;
    background-image: none;
    width: 18px;
    height: 13px;
    background-repeat: no-repeat;
    margin-left: 20px;
    margin-right: 15px;

    ${props => {
    if (props.isActive) {
      return css`
          background-image: url('/assets/images/check-focus-01.svg');
      `;
    }
  }}
  }

  &:hover {
    background-color: #e9efff;
  }
`;

// class OptionLi extends React.Component {
//   render() {
//     console.log('OptionLi : ', this.props);
//     return (
//       <Wrapper {...this.props} onClick={() => this._onTest(this.props.callback, event)}>
//         <StyledImageDiv></StyledImageDiv>
//         {this.props.children}
//       </Wrapper>
//     );
//   }

//   _onTest(callback, e) {
//     callback();
//     e.target.parentNode.parentNode.blur();
//   }
// }

export const OptionLi = React.forwardRef((props, ref) => {
  
  const onBlur = (e, ref) => {
    console.log('e: ', e);
    console.log('ref: ', ref);
    console.log('ref: ', ref.target);
    props.callback();
    ref.target.parentNode.parentNode.blur();
    e.target.parentNode.parentNode.blur();
  }

  return (
    <Wrapper {...props} onClick={(ref) => onBlur(event, ref)}>
      <StyledImageDiv></StyledImageDiv>
      {props.children}
    </Wrapper>
  );
})


export default OptionLi;
