// editor 사용시 사용하는 컴포넌트에서 width height 를 잡아주시길 바랍니다
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

 & div {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  padding: 18px;
  border: 1px solid #e2e6ea;
  display: inline-block;
  overflow-y: auto;
}

& div:empty:before {
  content: '최대한 자세히 입력해 주시면 담당 매니저 배정이 빠르게 이루어집니다.';
  color: #c2c2c2;
}

& p {
  text-align: right;
  margin-top: 5px;
  color: #8a8a8a;
}
`;

class Editor extends React.Component {
  render() {
    return (
      <Wrapper>
        <div contentEditable="true">

        </div>
        <p>Max 0 / 1000</p>
      </Wrapper>

    );
  }
}

export default Editor;
