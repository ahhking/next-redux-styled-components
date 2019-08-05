import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  height: ${props => (props.height)};
  width: ${props => (props.width)};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '6.5px'};
  background-color: rgba(91, 91, 98, 0.1);
`;

class Skeleton extends React.Component {
  render() {
    return (
      <Wrapper {...this.props} >
      </Wrapper>
    );
  }
}

export default Skeleton;
