import React from 'react';

import styled, { css } from 'styled-components';

const Wrapper = styled.footer`
  /* width: 1920px; */
  width: 100%;
  min-width: 1920px;
  height: 500px;
  background-color: #222222;
  /* margin: 0 auto; */
  box-sizing: border-box;
  
  ${props => {
    if (props.isSearch) {
      return css`
        margin-top: 68px;
      `;
    }
  }}
`;

const TopDiv = styled.div`
  height: 336px;
  border-bottom: 1px solid #3d3d3d;
`;

const TopDivContainer = styled.div`
  display: flex;
  width: 1100px;
  height: 300px;
  justify-content: space-between;
  padding-top: 50px;
  margin: auto;
  text-align: center;
  box-sizing: border-box;
`;

const TopDivItem = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
`;

const TopDivTitle = styled.span`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #8a8a8a;
  margin-bottom: 15px;
`;

const TopDivContent = styled.span`
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #ffffff;
  margin-bottom: 15px;

  & > a {
    color: #ffffff;
    text-decoration: none;
  }
`;


/** 
 * 
*/
const BottomWrapper = styled.div`
  width: 100%;
  height: 163px;
`;

const BottomDivContainer = styled.div`
  width: 1100px;
  height: 100%;
  margin: auto;
  ;
`;

const BottomDivItem = styled.div`
  padding-top: 45px;
`;

const LogoDiv = styled.div`
  float: left;
`;
const MainDiv = styled.div`
  font-size: 13px;
  color: #8a8a8a;
  float: left;
  padding-left: 30px;
  line-height: 20px;
`;
const SNSDiv = styled.div`
  float: right;
`;

const Clear = styled.div`
  clear: both;
`;

const FooterContainer = styled.div`
  width: 700px;
  margin: 0 auto;
  margin-top: 30px;

  & > p {
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #8a8a8a;
    margin-bottom: 9px;

    &:nth-of-type(3) {
      & > a {
        text-decoration: none;
        color: #8a8a8a;
      }

      & > span {
        width: 1px;
        height: 15.5px;
        border-left: solid 1px #8a8a8a;
        margin: 0 10px;
      }
    }
  }
`;

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let path = location.pathname;
    let isSearch = false;
    // Footer type
    // (0) menu 있는 footer (1) 간략한 정보만 있는 footer
    let type = 0; 

    if (path == '/login' ||
        path == '/join' ||
        path == '/join/success' ||
        path == '/find' ) {
      type = 1;
    }

    if (path == '/search') {
      // isSearch = true;
      return null;
    }
    return (
      type === 0 ?
      <Wrapper isSearch={isSearch}>
        <TopDiv>
          <TopDivContainer>
            <TopDivItem>
              <TopDivTitle>공간 찾기/등록</TopDivTitle>
              <TopDivContent>
                <a href="/search">공간 찾기</a>
              </TopDivContent>
              <TopDivContent>
                <a href="/add">
                  공간 등록
                </a>
              </TopDivContent>
              <br></br>
              {/* <div>' '</div> */}
              <TopDivTitle>행사대행</TopDivTitle>
              <TopDivContent>
                <a href="/btl">
                  서비스 소개
                </a>
              </TopDivContent>
            </TopDivItem>
            <TopDivItem>
              <TopDivTitle>스위트스팟 정보</TopDivTitle>
              <TopDivContent>
                <a href="/about/service">
                  서비스 소개
                </a>
              </TopDivContent>
              <TopDivContent><a href="/about/company">회사 소개</a></TopDivContent>
              <TopDivContent>
                <a href="https://help.sweetspot.co.kr/hc/ko/sections/360003433312-%EC%96%B8%EB%A1%A0-%EC%86%8D-%EC%8A%A4%EC%9C%84%ED%8A%B8%EC%8A%A4%ED%8C%9F" target={'_blank'}>
                언론 보도
                </a>
              </TopDivContent>
            </TopDivItem>
            <TopDivItem>
              <TopDivTitle>스위트스팟 안내</TopDivTitle>
              <TopDivContent>
                <a href="https://help.sweetspot.co.kr/hc/ko/categories/360001382651-%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD" target={'_blank'}>
                  공지사항
                </a>
              </TopDivContent>
              <TopDivContent>
                <a href="https://help.sweetspot.co.kr/hc/ko/categories/360000911271-%EC%9E%90%EC%A3%BC-%EB%AC%BB%EB%8A%94-%EC%A7%88%EB%AC%B8" target={'_blank'}>
                  FAQ
                </a>
              </TopDivContent>
              <TopDivContent>
                <a href={'https://help.sweetspot.co.kr/hc/ko'} target={'_blank'}>
                  고객센터
                </a>
              </TopDivContent>
              <TopDivContent>
                <a href={'https://help.sweetspot.co.kr/hc/ko/sections/360003425331-%EC%8A%A4%EC%9C%84%ED%8A%B8%EC%8A%A4%ED%8C%9F-%EC%9D%B4%EC%9A%A9%EC%95%BD%EA%B4%80'} target={'_blank'}>
                  이용약관
                </a>
              </TopDivContent>
              <TopDivContent>
                <a href={'https://help.sweetspot.co.kr/hc/ko/sections/360003425351-%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8'} target={'_blank'}>
                  개인정보처리방침
                </a>
              </TopDivContent>
            </TopDivItem>
            <TopDivItem>
              <TopDivTitle>고객센터</TopDivTitle>
              <TopDivContent>전화 : 02-553-0741</TopDivContent>
              <TopDivContent>팩스 : 02-553-0742</TopDivContent>
              <TopDivContent>운영시간 : 평일 10:00~18:00</TopDivContent>
              <TopDivContent>점심시간 : 11:40~13:00</TopDivContent>
              <TopDivContent>메일 : help@sweetspot.co.kr</TopDivContent>
            </TopDivItem>
          </TopDivContainer>
        </TopDiv>
        <BottomWrapper>
          <BottomDivContainer>
            <BottomDivItem>
              <LogoDiv>
                <img src="/assets/images/sweetspot-logo-gry-98.png"></img>
              </LogoDiv>
              <MainDiv>
                스위트스팟 | 서울시 강남구 테헤란로 26길 14 9층 | 대표 : 김정수<br style={{ marginBottom: '1px' }}></br>
                개인정보책임관리자 : 김승하 사업자등록번호 : 846-86-00225<br></br>
                © Sweet Spot Co., Ltd. All rights reserved.
              </MainDiv>
              <SNSDiv>
                <a href={'https://www.facebook.com/sweetspot.co.kr'} target={'_blank'}>
                  <img style={{ 'margin': '10px' }} src="/assets/images/facebook-logo-2.png"></img>
                </a>
                <a href={'https://blog.naver.com/sweetspot_co'} target={'_blank'}>
                  <img style={{ 'margin': '10px' }} src="/assets/images/naver-logo-2.png"></img>
                </a>
                <a href={'https://www.instagram.com/sweetspot_official/'} target={'_blank'}>
                  <img style={{ 'margin': '10px' }} src="/assets/images/instagram-logo-2.png"></img>
                </a>
              </SNSDiv>
              <Clear></Clear>
            </BottomDivItem>
          </BottomDivContainer>
        </BottomWrapper>
      </Wrapper>
      :
      <FooterContainer>
        <p>
          © Sweet Spot Co., Ltd. All rights reserved.
        </p>
        <p>
          문의 : help@sweetspot.co.kr
        </p>
        <p>
          <a href="https://help.sweetspot.co.kr/hc/ko/sections/360003425331-%EC%8A%A4%EC%9C%84%ED%8A%B8%EC%8A%A4%ED%8C%9F-%EC%9D%B4%EC%9A%A9%EC%95%BD%EA%B4%80" target="_blank">
            이용약관
          </a>
          <span></span>
          <a href="https://help.sweetspot.co.kr/hc/ko/sections/360003425351-%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EB%B0%A9%EC%B9%A8" target="_blank">
            개인정보처리방침
          </a>
          <span></span>
          <a href="https://help.sweetspot.co.kr/hc/ko" target="_blank">
            고객센터
          </a>
        </p>
      </FooterContainer>
    );
  }
}

export default Footer;
