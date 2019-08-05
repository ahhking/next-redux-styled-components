import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
`;

const StyledSpan = styled.span`
  box-sizing: border-box;
  display: inline-block;
  font-size: 13px;
  margin-right: 5px;
  padding: 2.5px 14px;
  border-radius: 10.5em;
  border: 1px solid ${props => props.color};
  vertical-align: middle;

  ${props => {
    if (props.reverse) {
      return css`
        border: 0;
        color: ${props.color};
        background-color: ${props.backgroundColor};
      `;
    } else {
      return css`
        color: ${props => props.color};
      `;
    }
  }}
  
`;

class PointSpan extends React.Component {
  render() {
    return (
      <StyledSpan
        type={this.props.type}
        reverse={this.props.reverse}
        color={this.props.color}
        backgroundColor={this.props.backgroundColor}>
        {this.props.children}
      </StyledSpan>
    );
  }
}

export default PointSpan;
