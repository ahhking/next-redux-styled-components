import React from 'react';
import styled, { css } from 'styled-components';
import { Z_BLOCK } from 'zlib';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
`;
const Item = styled.div`
  margin-left: 4px;
  margin-right: 4px;
`;

const CircleButton = styled.div`
  width: 8px;
  height: 8px;
  background: rgba(255 255 255, 0.6);
  border-radius: 100%;
  margin-bottom: 9px;
  background-color: rgba(255, 255, 255, 0.6);

  /* &:hover {
    background: white;
  } */
`;

const Main = styled.div`
  display: inline-block;
  width: 222px;
  height: 100%;
`;

const LeftImage = styled.div`
  width: 17px;
  height: 30px;
  background-repeat: no-repeat;
  background-image: url('/assets/images/list-arrw-l-d.svg');
`;

const LeftButton = styled.div`
  display: inline-block;
  width: 60px;
  height: 210px;

  &:hover {
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
  }

  &:hover ${LeftImage} {
    background-image: url('/assets/images/list-arrw-l-f.svg');
  }
`;

const LeftImageContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 60px;
  height: 210px;
  padding-left: 14px;
`;

const RightImage = styled.div`
  width: 17px;
  height: 30px;
  background-repeat: no-repeat;
  background-image: url('/assets/images/list-arrw-r-d.svg');
  float: right;
`;
const RightButton = styled.div`
  display: inline-block;
  width: 60px;
  height: 210px;

  &:hover {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
  }

  &:hover ${RightImage} {
    background-image: url('/assets/images/list-arrw-r-f.svg');
  }
`;
const RightImageContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 60px;
  height: 210px;
  padding-right: 14px;
  text-align: right;
`;


class SlideShow extends React.Component {
  render() {

    return (
      <Wrapper>
        <LeftButton>
          <LeftImageContainer>
            <LeftImage></LeftImage>

          </LeftImageContainer>
        </LeftButton>
        <Main>
          <Container>
            <Item>
              <CircleButton></CircleButton>
            </Item>
            <Item>
              <CircleButton></CircleButton>
            </Item>
            <Item>
              <CircleButton></CircleButton>
            </Item>
            <Item>
              <CircleButton></CircleButton>
            </Item>
            <Item>
              <CircleButton></CircleButton>
            </Item>
          </Container>
        </Main>
        <RightButton>
          <RightImageContainer>
            <RightImage></RightImage>
          </RightImageContainer>
        </RightButton>
      </Wrapper>
    );
  }
}

export default SlideShow;
