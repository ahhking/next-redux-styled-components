import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../modules';
import styled, { css } from 'styled-components';

import * as types from '../actions/ActionsTypes';

import CenterDiv from '../components/CenterDiv';
import ImageDiv from '../components/ImageDiv';

const StyledLi = styled.li``;
const StyledImageDiv = styled(ImageDiv)``;
const MyDiv = styled.div`
  /* display: none; */
  display: ${props => (props.isShow ? 'inline-block' : 'none')};
  position: absolute;
  box-sizing: border-box;
  width: 220px;
  background-color: #ffffff;
  left: 0;
  top: 30px;
  padding: 30px 0;
  margin-left: -150px;
  border-radius: 7px;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
  z-index: 99999;
  cursor: auto;

  & > ul {

    & > ${StyledLi} {
      z-index: 10;
      cursor: pointer;
      padding: 9px 27px;
      font-size: 16px;
      line-height: 18px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      
      &:hover {
        background-color: #e9efff;  
      }
    }
  }
`;
const SelectDiv = styled.div``;

const Span = styled.span`
  ${props => {
    if (props.isActive) {
      return css`
        color: blue;
      `;
    }
  }}
`;

const Container = styled.div`
  width: 1920px;
  margin: 0 auto;
`;

const Wrapper = styled.nav`
  /* width: 1920px; */
  width: 100%;
  height: 68px;
  background-color: #ffffff;
  margin: 0 auto;


  ${props => {
    if (props.isLogin) {
      return css`
        display: none;
      `;
    }
  }}  
`;

const LogoImg = styled.img`
  width: 148px;
  height: 30px;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 19px;
  float: left;
`;

const LeftMenuUl = styled.ul`
  /* display: inline; */
  list-style: none;
  float: left;
  margin: 0px 0px 0px 0px;

  /* &:after {

  } */
`;

const LeftMenuLi = styled.li`
  float: left;
  /* margin: 25px 20px 0px 20px; */
  margin-top: 25px;
  margin-right: 40px;
  /* width: 52px; */
  height: 19px;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #222222;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: black;
  }
`;

const RightMenu = styled.div`
  height: 100%;
  float: right;
  margin-right: 20px;
  margin-top: 20px;

  & > div {
    display: inline-block;
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;

    &:nth-of-type(2) {
      & ${SelectDiv} {
        position: relative;
        cursor: pointer;
        outline: none;

        & > ${StyledImageDiv} {
          display: inline-block;
          background-image: url('/assets/images/arrow-down.svg');
          background-repeat: no-repeat;
          width: 14px;
          height: 8px;
          margin: 0 8px;
        }      
      }
    }
  }
`;

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.onBlurSelect = this._onBlurSelect.bind(this);
    this.onClickSelect = this._onClickSelect.bind(this);
    this.onClickOption = this._onClickOption.bind(this);

    this.onClickLogout = this._onClickLogout.bind(this);

    this.onMouseEnterOption = this._onMouseEnterOption.bind(this);
    this.onMouseLeaveOption = this._onMouseLeaveOption.bind(this);
  }

  componentDidMount() {
    // window.addEventListener('click', this.onClickBody);
  }

  componentWillUnmount() {
    // window.removeEventListener('click', this.onClickBody);
  }

  render() {
    const { location, history, action, home } = this.props;
    let isLogin = false;
    let isSearch = false;
    let isAdd = false;
    let isBtl = false;

    console.log(location);

    if (location.pathname == '/login') {
      isLogin = true;
    }

    if (location.pathname == '/search') {
      isSearch = true;
    }

    if (location.pathname.indexOf('/add') != -1) {
      isAdd = true;
    }

    if (location.pathname == '/btl') {
      isBtl = true;
    }

    if (location.pathname == '/join' ||
      location.pathname == '/join/success' ||
      location.pathname == '/find') {
      return null;
    }

    if (location.pathname.indexOf('add/apply') > -1 || location.pathname.indexOf('space') > -1 && location.pathname.indexOf('reservation') > -1) {
      return null;
    }

    let user = getUser();

    return (
      <Wrapper isLogin={isLogin} isSearch={isSearch} ref={(ref) => this.wrap = ref}>
        {/* <img style={{ height: '100%' }} src="/assets/images/sweetspot-logo.png"></img> */}
        <Container>
          <Link to="/"><LogoImg src="./assets/images/sweetspot-logo.svg"></LogoImg></Link>

          <LeftMenuUl>
            <LeftMenuLi><StyledLink to="/search"><Span isActive={isSearch}>공간찾기</Span></StyledLink></LeftMenuLi>
            <LeftMenuLi><StyledLink to="/add"><Span isActive={isAdd}>공간등록</Span></StyledLink></LeftMenuLi>
            <LeftMenuLi><StyledLink to="/btl"><Span isActive={isBtl}>행사대행</Span></StyledLink></LeftMenuLi>
            {/* <LeftMenuLi><StyledLink to="/event">행사정보</StyledLink></LeftMenuLi> */}
          </LeftMenuUl>
          {
            user ?
              <RightMenu>
                <div>
                  <div style={{ display: 'table', width: '100%', height: '100%' }}>
                    <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                      <StyledLink to="/like">찜 공간</StyledLink>
                    </div>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'table', width: '100%', height: '100%' }}>
                    <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                      <SelectDiv
                        ref={(ref) => this.selectUser = ref}
                        tabIndex={0}
                        onBlur={() => this.onBlurSelect()}
                        onClick={() => this.onClickSelect()}
                      >
                        <a>{user.name}님</a>
                        <StyledImageDiv></StyledImageDiv>
                        <MyDiv
                          isShow={home.menu.user.isShow}
                          onMouseEnter={this.onMouseEnterOption}
                          onMouseLeave={this.onMouseLeaveOption}
                        >
                          <ul>
                            <StyledLi onClick={(e) => this.onClickOption('/mypage', e)}>My Sweetspot</StyledLi>
                            <StyledLi onClick={(e) => this.onClickOption('/myaccount/my', e)}>계정 설정</StyledLi>
                            {/* <StyledLi onClick={() => action(types.LOGOUT, { history: history })}>로그아웃</StyledLi> */}
                            <StyledLi onClick={(e) => this.onClickLogout(e)}>로그아웃</StyledLi>
                          </ul>
                        </MyDiv>
                      </SelectDiv>
                    </div>
                  </div>
                </div>
              </RightMenu>
              :
              (
                <RightMenu>
                  <div>
                    <div style={{ display: 'table', width: '100%', height: '100%' }}>
                      <div
                        style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                        <StyledLink to="/join">회원가입</StyledLink>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div style={{ display: 'table', width: '100%', height: '100%' }}>
                      <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                        <StyledLink to="/login">로그인</StyledLink>
                      </div>
                    </div>
                  </div>
                </RightMenu>
              )
          }
        </Container>
      </Wrapper>
    );
  }

  _onBlurSelect() {
    console.log('blur!');
    const { action, home } = this.props;
    const { menu } = home;

    if (!menu.user.isOver) {
      action(types.HOME_ON_CLICK_MENU, {
        key: 'user',
        value: {
          isShow: false
        }
      });
    }
  }

  _onClickSelect() {
    const { action } = this.props;

    console.log('click select!');

    action(types.HOME_ON_CLICK_MENU, {
      key: 'user',
      value: {
        isShow: true
      }
    });
  }

  _onClickOption(path, e) {
    console.log('click option!')
    const { history, action } = this.props;

    history.push(path);

    action(types.HOME_ON_CLICK_MENU, {
      key: 'user',
      value: {
        isShow: false
      }
    });

    if (e.stopPropagation()) {
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }
  }

  _onMouseEnterOption() {
    const { action } = this.props;

    action(types.HOME_ON_MOUSE_ENTER_OPTION, {
      key: 'user',
      value: {
        isOver: true
      }
    });
  }

  _onMouseLeaveOption() {
    const { action } = this.props;

    action(types.HOME_ON_MOUSE_ENTER_OPTION, {
      key: 'user',
      value: {
        isOver: false
      }
    });
  }

  _onClickLogout(e) {
    const { action, history } = this.props;

    action(types.LOGOUT, {
      history: history
    });

    if (e.stopPropagation()) {
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (type, data) => dispatch({ type, data })
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
