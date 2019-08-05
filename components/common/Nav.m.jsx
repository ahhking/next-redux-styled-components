
import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

import * as types from '../actions/ActionsTypes';

import { connect } from 'react-redux';
import { getUser } from '../modules';

const GlobalStyle = createGlobalStyle`
  body, html {
    overflow-y: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
  } 
`;

const Wrapper = styled.div`
  position: absolute;
  top: 48px;
  /* top: 0; */
  width: 100%;
  height: 100%;
  background: white;
  z-index: 9999;
`;

const Container = styled.div`
  box-sizing: border-box;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  height: calc(100% - 48px);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

const Content = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e2e6ea;
  & div {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  & a {
    text-decoration: none;
  }
  & a:visited {
    color: black;
  }
`;

class NavM extends React.Component {
  constructor(props) {
    super(props);

    this.onLink = this._onLink.bind(this);
  }

  render() {
    console.log('navm props: ', this.props);

    const { action, isMenu } = this.props;

    console.log('user: ', getUser());

    if (!isMenu) {
      return null;
    }



    return (
      <Wrapper>
        <GlobalStyle></GlobalStyle>
        <Container>
          <Content>
            <div onClick={() => this.onLink('/')}>홈</div>
          </Content>
          <Content>
            <div onClick={() => this.onLink('/search')}>공간찾기</div>
            <div onClick={() => this.onLink('/add')}>공간등록</div>
            <div onClick={() => this.onLink('/btl')}>행사대행</div>
            {/* <div onClick={() => this.onLink('/event')}>행사정보</div> */}
          </Content>
          <Content>
            {
              getUser() ?
                <React.Fragment>
                  <div onClick={() => this.onLink('/like')}>찜 공간</div>
                  <div onClick={() => this.onLink('/mypage')}>My SweetSpot</div>
                  <div onClick={() => this.onLink('/myaccount/my')}>계정 설정</div>
                  <div onClick={() => { action(types.LOGOUT, { history: history }); this.onLink('/'); }}>로그아웃</div>
                </React.Fragment>
                :
                <React.Fragment>
                  <div onClick={() => this.onLink('/join')}>회원가입</div>
                  <div onClick={() => this.onLink('/login')}>로그인</div>
                </React.Fragment>
            }
          </Content>
        </Container>
      </Wrapper>
    );
  }

  _onLink(path) {
    const { history, action, isMenu } = this.props;

    history.push(path);

    action(types.HEADER_ON_CLICK_MENU, !isMenu);
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    action: (type, data) => dispatch({ type, data })
  }
}

export default connect(null, mapDispatchToProps)(NavM);
