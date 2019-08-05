import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  ${props => {
      if(props.platform === 'PC') {
        return css `
          background: '#fafafa';
        `
      }
    }}
`
const ContentsDiv = styled.div``
const Container = styled.div`
  width: ${props => props.platform === 'MOBILE' ? '100%' : '43.75em'};
  margin: 0 auto;
  background-color: #fff;
  text-align: center;

  & > h2 {
    font-size: 27px;
    font-weight: bold;
    color: ${props => props.platform === 'MOBILE' ? '#2962ff' : '#222222'};
    
    ${props => {
      if(props.platform !== 'MOBILE') {
        return css `
          padding-top: 40px;
        `
      }
    }}
  }

  & > ${ContentsDiv} {
    margin-bottom: 40px;
    & > p {
      font-size: 18px;
      line-height: 1.67;
      text-align: center;
      color: #222222;
    }
  }

  & button {
    cursor: pointer;
    outline: none;
    border: none;
    width : ${props => props.platform === 'MOBILE' ? '100%' : '286px'};
    height :  ${props => props.platform === 'MOBILE' ? '48px' : '56px'};
    max-width : ${props => props.platform === 'MOBILE' ? '335px' : '24.6875em'};;
    border-radius: 7px;
    background-image: linear-gradient(278deg, #2962ff, #00cbd4);
    font-size: 19px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 40px;
  }
`
const IconDiv = styled.div`
    margin: 50px auto;
`
const StyledLink = styled(Link)``;


const Success = ({title, content, platform, src}) => {
  return (
      <Wrapper platform={platform}>
        <Container platform={platform}>
          <h2>{title}</h2>
          <IconDiv>
            <img src={src}/>
          </IconDiv>
          <ContentsDiv>
            {
              content.map((item, index) => {
                return <p key={index}>{item}</p>
              })
            }
          </ContentsDiv>
          <StyledLink to="/">
            <button>
              홈으로
            </button>
          </StyledLink>
        </Container>
      </Wrapper>
  )
}
export default Success;