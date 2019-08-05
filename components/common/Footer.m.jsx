import React from 'react';
import styled, { css } from 'styled-components';
import CenterDiv from './CenterDiv'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as types from '../actions/ActionsTypes';

/* simple footer */
const FooterContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 11px;
  background-color: #fff;

  & > p {
    font-size: 14px;
    text-align: center;
    color: #8a8a8a;
    margin-bottom: 9px;
  }
`;
const Separate = styled.label`
    margin: 0 10px;
`

/* menu footer */
const Wrapper = styled.div`
  background-color: #222222;
  color: #77777e;
`
const Div = styled.div`
  display: inline-block;
`;
const SubItemsDiv = styled.div`
`
const SubItem = styled.div`
  height: 60px;
  line-height: 60px;
  vertical-align: center;
  background-color: #111111;
  color: white;
  text-align: left;
  padding: 0px 20px 0px 40px;
  font-weight: normal;
`
const Item = styled(CenterDiv)`
  font-size: 16px;
  height: 60px;
  padding: 0px 25px 0px 20px;
  border: none;

  /* label DIV*/
  ${Div}:nth-of-type(1) {
    width: calc(100% - 12px);
  }  
`
const ItemDiv = styled.div`
  outline: none;
  & > ${SubItemsDiv} {
    display: ${props => props.isFocused ? 'block' : 'none'};
  }
  & > ${Item} {
    ${Div}:nth-of-type(2){
      background-image: url( ${props => props.isFocused ? '/assets/images/arrow-up-gry.svg' : '/assets/images/arrow-down-gry.svg'} );
      width: 12px;
      height: 7px;
    }
  }
`;

const LogoDiv = styled(CenterDiv)`
  margin-top: 90px;
  ${Div} {
    vertical-align: middle;
  }
  /* sweetspot 로고 */
  ${Div}:nth-of-type(1) {
    width: calc(100% - 200px);
    padding-left: 20px;
    text-align: left;
  }
  /* sns 로고 */
  ${Div}:nth-of-type(2) {
    * {
      width: 32px;
      margin-right: 20px;
    }
  }
`
const LabelDiv = styled.div`
  font-size: 3.2vw;
  padding: 20px 20px 46.6px 20px;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`

class FooterM extends React.Component {
  constructor(props) {
    super(props);
    this.onLink = this._onLink.bind(this);
    this.onDeepLink = this._onDeepLink.bind(this);
  }
  render() {
    const { tabIndex, action, os } = this.props;
    const path = location.pathname;

    return (
      path.indexOf('/join') === 0 || path.indexOf('/login') === 0 || path.indexOf('/find') === 0 ?
        <FooterContainer>
          <p>
            <span onClick={() => window.open('https://help.sweetspot.co.kr/hc/ko/sections/360003425331-%EC%8A%A4%EC%9C%84%ED%8A%B8%EC%8A%A4%ED%8C%9F-%EC%9D%B4%EC%9A%A9%EC%95%BD%EA%B4%80', '_blank')}>
              이용약관
          </span>
            <Separate>|</Separate>
            <span onClick={() => window.open('https://help.sweetspot.co.kr/hc/ko/sections/360003425351-%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8', '_blank')}>
              개인정보처리방침
          </span>
            <Separate>|</Separate>
            <span onClick={() => window.open('https://help.sweetspot.co.kr/hc/ko', '_blank')}>
              고객센터
          </span>
          </p>
          <p>© Sweet Spot Co., Ltd. All rights reserved.</p>
        </FooterContainer>
        : path === '/' || path.indexOf('/mypage') === 0 ||
          path.indexOf('/like') === 0 || path.indexOf('/btl') === 0 || 
          path.indexOf('/myaccount') === 0 || path.indexOf('/about') === 0 ||
          path.indexOf('/add') === 0 || path.indexOf('/premiumaward_invite') === 0 ?
          <Wrapper>
            {/* <Link to='/find'>공간 찾기</Link> */}
            <ItemDiv isFocused={tabIndex == 0} onClick={() => action(types.APP_SET_FOOTER_TABIDX, tabIndex == 0 ? -1 : 0)}>
              <Item align='left'>
                <Div><label>공간 찾기/등록</label></Div>
                <Div></Div>
              </Item>
              <SubItemsDiv>
                <SubItem onClick={() => this.onLink('/search')}>공간 찾기</SubItem>
                <SubItem onClick={() => this.onLink('/add')}>공간 등록</SubItem>
              </SubItemsDiv>
            </ItemDiv>
            <ItemDiv isFocused={tabIndex == 1} onClick={() => action(types.APP_SET_FOOTER_TABIDX, tabIndex == 1 ? -1 : 1)}>
              <Item align='left'>
                <Div><label>행사대행</label></Div>
                <Div></Div>
              </Item>
              <SubItemsDiv>
                <SubItem onClick={() => this.onLink('/btl')}>서비스 소개</SubItem>
              </SubItemsDiv>
            </ItemDiv>
            <ItemDiv isFocused={tabIndex == 2} onClick={() => action(types.APP_SET_FOOTER_TABIDX, tabIndex == 2 ? -1 : 2)}>
              <Item align='left'>
                <Div><label>스위트스팟 정보</label></Div>
                <Div></Div>
              </Item>
              <SubItemsDiv>
                <SubItem onClick={() => {
                  this.onLink('/about/service');
                  window.scrollTo(0, 0);
                }}>서비스 소개</SubItem>
                <SubItem onClick={() => {
                  this.onLink('/about/company')
                  window.scrollTo(0, 0);
                }}>회사 소개</SubItem>
                <SubItem onClick={() => window.open('https://help.sweetspot.co.kr/hc/ko/sections/360003433312-%EC%96%B8%EB%A1%A0-%EC%86%8D-%EC%8A%A4%EC%9C%84%ED%8A%B8%EC%8A%A4%ED%8C%9F', '_blank')}>언론 보도</SubItem>
              </SubItemsDiv>
            </ItemDiv>
            <ItemDiv isFocused={tabIndex == 3} onClick={() => action(types.APP_SET_FOOTER_TABIDX, tabIndex == 3 ? -1 : 3)}>
              <Item align='left'>
                <Div><label>스위트스팟 안내</label></Div>
                <Div></Div>
              </Item>
              <SubItemsDiv>
                <SubItem onClick={() => window.open('https://help.sweetspot.co.kr/hc/ko/categories/360001382651-%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD', '_blank')}>공지사항</SubItem>
                <SubItem onClick={() => window.open('https://help.sweetspot.co.kr/hc/ko/categories/360000911271-%EC%9E%90%EC%A3%BC-%EB%AC%BB%EB%8A%94-%EC%A7%88%EB%AC%B8', '_blank')}>FAQ</SubItem>
                <SubItem onClick={() => window.open('https://help.sweetspot.co.kr/hc/ko', '_blank')}>고객센터</SubItem>
                <SubItem onClick={() => window.open('https://help.sweetspot.co.kr/hc/ko/sections/360003425331-%EC%8A%A4%EC%9C%84%ED%8A%B8%EC%8A%A4%ED%8C%9F-%EC%9D%B4%EC%9A%A9%EC%95%BD%EA%B4%80', '_blank')}>이용약관</SubItem>
                <SubItem onClick={() => window.open('https://help.sweetspot.co.kr/hc/ko/sections/360003425351-%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8', '_blank')}>개인정보처리방침</SubItem>
              </SubItemsDiv>
            </ItemDiv>
            <ItemDiv isFocused={tabIndex == 4} onClick={() => action(types.APP_SET_FOOTER_TABIDX, tabIndex == 4 ? -1 : 4)}>
              <Item align='left'>
                <Div><label>고객센터</label></Div>
                <Div></Div>
              </Item>
              <SubItemsDiv>
                <SubItem style={{ color: '#77777e' }}>전화 : 02-553-0741</SubItem>
                <SubItem style={{ color: '#77777e' }}>팩스 : 02-553-0742</SubItem>
                <SubItem style={{ color: '#77777e' }}>운영시간 : 평일 10:00~18:00</SubItem>
                <SubItem style={{ color: '#77777e' }}>점심시간 : 11:40~13:00</SubItem>
                <SubItem style={{ color: '#77777e' }}>메일 : help@sweetspot.co.kr</SubItem>
              </SubItemsDiv>
            </ItemDiv>
            <LogoDiv algin='left'>
              <Div><img src='/assets/images/sweetspot-logo-gry-98.svg' /></Div>
              <Div>
                <Div onClick={() => {
                  os === 'ANDROID' ?
                  this.onDeepLink('fb://page/465943543609485', 'https://www.facebook.com/sweetspot.co.kr/')
                  : window.open('https://www.facebook.com/pg/465943543609485', '_blank')
                }}><img src='/assets/images/facebook-logo-2.svg' /></Div>
                <Div onClick={() => window.open('https://blog.naver.com/sweetspot_co', '_blank')}><img src='/assets/images/naver-logo-2.svg' /></Div>
                <Div onClick={() => location.href = 'https://www.instagram.com/sweetspot_official/'}><img src='/assets/images/instagram-logo-2.svg' /></Div>
              </Div>
            </LogoDiv>
            <LabelDiv>
              스위트스팟 | 서울시 강남구 테헤란로 26길 14 9층 | 대표 : 김정수<br />
              개인정보책임관리자 : 김승하 사업자등록번호 : 846-86-00225<br />
              © Sweet Spot Co., Ltd. All rights reserved.
            </LabelDiv>
          </Wrapper>
          : <div></div>
    )
  }
  _onLink(path) {
    const { history } = this.props;
    history.push(path);
  }
  _onDeepLink(appScheme, url) {
    function clearTimers() { // timer들 초기화
      clearInterval(interval_timer);
      clearTimeout(delay_timer);
    }

    function checkAppInstalled() { // 앱 설치 되어 있는지 체크
      if (document.webkitHidden || document.hidden) {
        console.log('앱이 설치 되어 있습니다.');
        clearTimers();
      }
    }

    var interval_timer = setInterval(checkAppInstalled, 100); // 100ms 마다 app이 설치 되었는지 체크
    var delay = 2000; // 2000ms 뒤에 web url로 연결( app이 이미 설치되어 있는 경우는 timer clear 시키므로 실행되지 않음. )
    var delay_timer = setTimeout(function () {
      console.log('앱이 없습니다.');
      window.open(url, '_blank')
    }, delay);

    // 먼저 deep link 요청
    location.href = appScheme;
  }
}

const mapStateToProps = (state) => {
  return {
    tabIndex: state.appData.footer.tabIndex,
    os: state.commonData.os
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (type, data) => dispatch({ type, data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FooterM));
