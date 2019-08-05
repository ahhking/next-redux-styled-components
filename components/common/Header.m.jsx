import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

import * as types from '../actions/ActionsTypes';

import { Link, withRouter } from 'react-router-dom';

import NavM from './Nav.m';

const Wrapper = styled.div``;
const Header = styled.header`
  background: #ffffff;
  height: 48px;
  box-sizing: border-box;
  padding: 14px 20px;
  display: flex;
`;
const Logo = styled.div`
  /* position: absolute; */
`;
const LogoImg = styled.img`
  height: 20px;
`;

const ToggleButton = styled.span`
  float: right;
  width: 20px;
  box-sizing: border-box;

  & > span {
    display: block;
    width: 100%;
    height: 2px;
    background: #222222;
  }

  & > span:nth-child(2) {
    margin: 6px 0;
  }
`;

class HeaderM extends React.Component {
  constructor(props) {
    super(props);

    this.onClickMenu = this._onClickMenu.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate!!!')
    console.log(nextProps);
    console.log(this.props)
    return true;
  }

  render() {

    const { history, appData, action } = this.props;
    const { isMenu } = this.props.headerData;
    console.log(this.props);


    /**
     * 모바일 페이지 에서는 reducer 값을 이용한 show 처리로 바꾸는 중
     * 전부 merge 후 테스트 완료 시 정리 
     */
    // if (this.props.match.url === '/join') return null;
    console.log('header render: ', location);

    // if (location.pathname == '/join') return null;

    // if (location.pathname == '/add/apply') {
    //   return null;
    // }

    // if (location.pathname == '/login') {
    //   return null;
    // }

    // if (location.pathname == '/find') {
    //   return null;
    // }

    // if (location.pathname.indexOf('reservation') > -1) {
    //   return null;
    // }

    if (appData.pageState != 'HEADER_ENABLED') {
      return null;
    }

    if (location.pathname == '/search') {
      console.log('헤더 리턴: ', 1);
      return (
        <Wrapper style={{ height: '0' }}>
          <Header>
            <Logo>
              <Link to="/" onClick={() => action(types.HEADER_ON_CLICK_MENU, false)}>
                <div>
                  <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                    <LogoImg src="/assets/images/sweetspot-logo.svg"></LogoImg>
                  </div>
                </div>
              </Link>
            </Logo>
            <div style={{ marginLeft: 'auto' }}>
              <div>
                <ToggleButton onClick={this.onClickMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                </ToggleButton>
              </div>
            </div>
          </Header>
          <NavM isMenu={isMenu} history={this.props.history}>
          </NavM>
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <Header>
          <Logo>
            <Link to="/" onClick={() => action(types.HEADER_ON_CLICK_MENU, false)}>
              <div>
                <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                  <LogoImg src="/assets/images/sweetspot-logo.svg"></LogoImg>
                </div>
              </div>
            </Link>
          </Logo>
          <div style={{ marginLeft: 'auto' }}>
            <div>
              <ToggleButton onClick={this.onClickMenu}>
                <span></span>
                <span></span>
                <span></span>
              </ToggleButton>
            </div>
          </div>
        </Header>
        <NavM isMenu={isMenu} history={this.props.history}>
        </NavM>
      </Wrapper>
    );
  }

  _onClickMenu() {
    const { action, headerData } = this.props;
    const { isMenu } = headerData;

    action(types.HEADER_ON_CLICK_MENU, !isMenu);
  }
}

const mapStateToProps = (state) => {
  console.log('headerm connect state: ', state);

  return {
    appData: state.appData,
    headerData: state.appData.headerData
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (type, data) => dispatch({ type, data })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderM));
