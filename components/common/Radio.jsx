import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';

const Wrapper = styled.div`
  width : ${props => props.width ? props.width : 'auto'};
  display: flex;
  justify-content : ${props => props.left ? 'flex-start' : 'center'};
  align-items: center;
  cursor: pointer;

  & > span {
    margin-left : 11px;
    color : ${props => props.isChecked && '#2962ff'};
  }
`
const Raido = ({content, isChecked, onClick, width, left}) => {
  return (
    <Wrapper 
      left={left}
      width={width} 
      isChecked={isChecked} 
      onClick={() => {
        if(!onClick){
          return
        }
        onClick();
      }}>
      <img src={isChecked ? '/assets/images/radio-btn-s.svg' : '/assets/images/radio-btn-d.svg'} />
      <span>{content}</span>
    </Wrapper>
  )
}

export default Raido;