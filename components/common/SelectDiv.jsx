import React from 'react';
import styled, { css } from 'styled-components';
import { withRouter } from 'react-router-dom'

import ImageDiv from './ImageDiv';


const StyledImageDiv = styled(ImageDiv)``;

const Wrapper = styled.div`
  cursor: pointer;
  outline: none;
  position: relative;
  width: 733px;
  height: 42px;
  border-radius: 7px;
  border: solid 1px #e2e6ea;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 11px 18px;

  & > ${StyledImageDiv} {
    display: inline-block;
    position: absolute;
    background-image: url( ${props => props.isSelected ? '/assets/images/arrow-down-b.svg' : '/assets/images/arrow-up-gry.svg' });
    background-repeat: no-repeat;
    width: 14px;
    height: 8px;
    top: 50%;
    transform: translateY(-50%);
    right: 26px;
  }

  &:focus {
    box-shadow: 0 0 8px 0 rgba(41, 98, 255, 0.1);
    border: solid 1px #2962ff;

    & > ul {
      display: inline-block;
    }
  }
`;

class SelectDiv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: true
    }
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;

    if (match.params.id !== prevProps.match.params.id) {
      this.setState({
        isSelected: true
      });
    }
  }

  render() {
    return (
      <Wrapper {...this.props}
        tabIndex={0}
        isSelected={this.state.isSelected}
        ref={(ref) => this.wrapper = ref}
        onBlur={()=> this.state.isSelected = true}
        onClick={(e)=>{

          this.setState({
            isSelected: !this.state.isSelected
          });

          if(!this.state.isSelected) {
            this.wrapper.blur();
          }
        }}>
        <StyledImageDiv></StyledImageDiv>
        {this.props.children}
      </Wrapper>
    );
  }
}

export default withRouter(SelectDiv);
