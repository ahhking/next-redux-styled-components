import React from 'react';
import styled, { css } from 'styled-components';

const Outer = styled.div`
  display: table;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
const Inner = styled.div`
  box-sizing: border-box;
  display: table-cell;
  vertical-align: middle;
  text-align: ${props => props.align ? props.align : 'center'};
`;

class CenterDiv extends React.Component {
  render() {

    const { className } = this.props;

    return (
      <Outer className={className}>
        <Inner align={this.props.align}>
          {this.props.children}
        </Inner>
      </Outer>
    );
  }
}

export default CenterDiv;
