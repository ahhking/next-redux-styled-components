import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import CenterDiv from './CenterDiv';
import { isBoolean } from 'util';

const StyledCenterDiv = styled(CenterDiv)``;


const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 32px;
  z-index: 1;
  left: 0;
  bottom: 0;
  content: '';
  text-align: center;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  
  & :not(:nth-of-type(1)) {
    margin-left: 8px;
  }
`;

const Bullet = styled.div`
  vertical-align: middle;
  opacity: 1;
  border-radius: 4px;

  ${props => { // active 효과
    if (props.currentIndex === props.index) {
      return css`
          width: 8px;
          height: 8px;
          border-radius: 8px;
          background-color: #fff;
        `;
    } else {
      return css` 
          width: 6px;
          height: 6px;
          border-radius: 6px;
          background-color: rgba(255, 255, 255, 0.6);
        `;
    }
  }}

  ${props => {
    if (props.isFade == 'fadeIn') {
      return css`
      -webkit-animation: ${fadeIn} 0.5s ease-in-out;
      -moz-animation: ${fadeIn} 0.5s ease-in-out;
      -ms-animation: ${fadeIn} 0.5s ease-in-out;
      -o-animation: ${fadeIn} 0.5s ease-in-out;
      animation: ${fadeIn} 0.5s ease-in-out;
      `;
    } else if (props.isFade == 'fadeOut') {
      return css`
      -webkit-animation: ${fadeOut} 0.5s ease-in-out;
      -moz-animation: ${fadeOut} 0.5s ease-in-out;
      -ms-animation: ${fadeOut} 0.5s ease-in-out;
      -o-animation: ${fadeOut} 0.5s ease-in-out;
      animation: ${fadeOut} 0.5s ease-in-out;
      `;
    }
  }}
`;

const fadeIn = keyframes`
  from {
    opacity: 0.2;
  }
  to {
    opacity: 0.6;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0.6;
  }
  to {
    opacity: 0.2;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  ${props => {
    if (props.isWay == 0) {
      return css`
        & :nth-child(7) {
          width: 4px;
          height: 4px;
        }
      `;
    }
  }}
`;


class BulletsDiv extends React.Component {
  constructor(props) {
    super(props);

    this.isFadeIn = this._isFadeIn.bind(this);
    this.isFadeOut = this._isFadeOut.bind(this);

    this.state = {
      /**
       * 갤러리 이동 방향
       * 0: left
       * 1: right
       */
      way: 0
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('bulletsDiv prevProps: ', prevProps);
    // console.log('bulletsDiv this.props: ', this.props);

    if (prevProps.currentIndex != this.props.currentIndex) {
      if (prevProps.currentIndex < this.props.currentIndex) {
        // console.log('오른쪽 이동');
        this.setState({
          way: 1
        });
      } else {
        // console.log('왼쪽 이동');
        this.setState({
          way: 0
        });
      }
    }
  }

  render() {
    const { imgLength } = this.props;
    // console.log('bullet this.props: ', this.props);

    let images = [];
    for (let i = 0; i < imgLength; i++) {
      images.push(i);
    }

    let showList = null;
    showList = this._getBullets(this.props.currentIndex, imgLength);
    // console.log('indexOf: ', showList.indexOf(true));

    return (
      <Wrapper className={this.props.className}>
        <StyledCenterDiv align="center">
          <Container isWay={this.state.way} className="container">
            {
              // image 개수만큼 bullet 그려줌
              images.map((image, i) => {
                let first = false;
                let last = false;

                first = showList.indexOf(true);
                last = showList.lastIndexOf(true);

                let show = showList.filter((item) => item == true);
                // console.log('show: ', show);

                if (isBoolean(showList[i]) && showList[i] == true) {
                  // 네 번째 bullet 일 때
                  if (this.props.currentIndex >= 3 && i == first) {
                    return (
                      <Bullet
                        key={i}
                        ref={(ref) => this['bullet-' + i] = ref}
                        index={i}
                        style={
                          this.state.way == 1 ?
                            { width: '4px', height: '4px' }
                            :
                            imgLength - 3 <= this.props.currentIndex ?
                              { width: '4px', height: '4px' }
                              :
                              { width: '6px', height: '6px' }
                        }
                        currentIndex={this.props.currentIndex}
                      >
                      </Bullet>
                    );
                    // 보여질 bullet이 6개 이하일 때
                  } else if (show.length <= 6) {
                    // 이미지가 6개 이하일 때
                    if (imgLength <= 6) {
                      return (
                        <Bullet
                          key={i}
                          ref={(ref) => this['bullet-' + i] = ref}
                          index={i}
                          currentIndex={this.props.currentIndex}
                        >
                        </Bullet>
                      );
                    } else {
                      // 이미지가 6개 이상일 때
                      if (imgLength > 6) {
                        return (
                          <Bullet
                            key={i}
                            ref={(ref) => this['bullet-' + i] = ref}
                            index={i}
                            style={
                              this.props.currentIndex <= 2 && i == last ?
                                { width: '4px', height: '4px' }
                                :
                                {}
                            }
                            currentIndex={this.props.currentIndex}
                          >
                          </Bullet>
                        );
                      }
                    }
                  } else {
                    // 3보다 작을 때는 맨 뒤 bullet을 4px로 보여줌
                    if (this.props.currentIndex <= 3) {
                      return (
                        <Bullet
                          key={i}
                          ref={(ref) => this['bullet-' + i] = ref}
                          index={i}
                          style={
                            i == 6 ?
                              { width: '4px', height: '4px' }
                              :
                              {}
                          }
                          currentIndex={this.props.currentIndex}
                        >
                        </Bullet>
                      );
                      // showBullet이 7개 이상이고 currentIndex가 4 이상일 때 마지막 bullet을 4px로 보여줌
                    } else {
                      return (
                        <Bullet
                          key={i}
                          ref={(ref) => this['bullet-' + i] = ref}
                          index={i}
                          style={
                            showList[i] && i == (last + 1) && show.length > 6 ?
                              { width: '4px', height: '4px' }
                              :
                              {}
                          }
                          currentIndex={this.props.currentIndex}
                        >
                        </Bullet>
                      );
                    }
                  }
                }

                // 오른쪽 화살표 클릭 시
                if (this.state.way == 1) {
                  // -1은 fade out 상태
                  if (showList[i] == -1 && !isBoolean(showList[i])) {
                    return (
                      <Bullet
                        key={i}
                        ref={(ref) => this['bullet-' + i] = ref}
                        index={i}
                        style={{ width: '4px', height: '4px' }}
                        currentIndex={this.props.currentIndex}
                        isFade={'fadeOut'}
                        onLoad={this.isFadeOut('bullet-' + i)}
                        id={'bullet-' + i}
                      >
                      </Bullet>
                    )
                  }
                  // 1은 fade in 상태
                  if (showList[i] == 1 && !isBoolean(showList[i])) {
                    return (
                      <Bullet
                        key={i}
                        ref={(ref) => this['bullet-' + i] = ref}
                        index={i}
                        style={{ width: '4px', height: '4px' }}
                        currentIndex={this.props.currentIndex}
                        isFade={'fadeIn'}
                        onLoad={this.isFadeIn('bullet-' + i)}
                        id={'bullet-' + i}
                      >
                      </Bullet>
                    );
                  }
                  // 왼쪽 화살표 클릭 시
                } else {
                  // -1은 fade in 상태
                  if (showList[i] == -1 && !isBoolean(showList[i])) {
                    return (
                      <Bullet
                        key={i}
                        ref={(ref) => this['bullet-' + i] = ref}
                        index={i}
                        style={{ width: '4px', height: '4px' }}
                        currentIndex={this.props.currentIndex}
                        isFade={'fadeIn'}
                        onLoad={this.isFadeIn('bullet-' + i)}
                        id={'bullet-' + i}
                      >
                      </Bullet>
                    )
                  }
                  // 1은 fade out 상태
                  if (showList[i] == 1 && !isBoolean(showList[i])) {
                    return (
                      <Bullet
                        key={i}
                        ref={(ref) => this['bullet-' + i] = ref}
                        index={i}
                        style={{ width: '4px', height: '4px' }}
                        currentIndex={this.props.currentIndex}
                        isFade={'fadeOut'}
                        onLoad={this.isFadeOut('bullet-' + i)}
                        id={'bullet-' + i}
                      >
                      </Bullet>
                    );
                  }
                }
                /**
                 * 전체적인 흐름은
                 * [false, -1, true, true, true, true, true, true, 1, false, false, false]
                 * 식의 움직임으로 움직이며 보여줄 것과 처리해야할 것들을 표시하며 움직입니다.
                 */
              })
            }
          </Container>
        </StyledCenterDiv>
      </Wrapper>
    );
  }

  // 화면에 보여줄 bullet 개수 구하는 함수
  /**
   * 
   * @param {number} i - 현재 인덱스
   * @param {number} len - 이미지 총 갯수
   * 
   * boolean 배열에 
   * false -> 미표시
   * true -> 표시
   * -1, 1 양끝 fadein, fadeout 표시를 위한 값
   * 위와 같은 값으로 구성하여 렌더링 시 불릿을 그려준다
   * 
   * [false, -1, true, true, true, true, true, true, 1, false, false ...]
   * 오른쪽 이동일 시 1이 그려지고
   * 왼쪽 이동일 시 -1이 그려진다
   */
  _getBullets(i, len) {
    // console.log('_getBullets');
    // console.log('i: ', i);
    // console.log('len: ', len);
    // 왼쪽이동인지 오른쪽이동인지를 알아야한다

    let arr = [];

    // 이미지 전체 갯수가 6개 이하일 때
    if (len <= 6) {
      for (let j = 0; j < len; j++) {
        arr.push(true);
      }
    } else {
      /**
       * 현재 인덱스가 3일 경우
       * 아무 효과 없이 그려주기 위해 7개를 true로 채운다
       */

      
      if (i == 3) {
        // 현재 인덱스가 3일 경우
        for (let j = 0; j < len; j++) {
          if (j < 7) {
            arr.push(true);
          } else {
            arr.push(false);
          }
        }
      } else {
        /**
         * 현재 인덱스가 3 이상이거나 뒤에서 3미만 일때
         * 양끝이 축소되어져서 그려질 경우(중간에 위치할 때))
         */
        if (i >= 4 && i < (len - 3)) {
          for (let j = 0; j < len; j++) {
            // this.state.way == 1 ? 4 : 3 >> 오른쪽 화살표 클릭 시 active bullet 기준으로 왼쪽은 bullet 4개 그려주고 오른쪽은 3개 그려줌 
            if (j >= (i - (this.state.way == 1 ? 4 : 3)) && j <= (i + (this.state.way == 1 ? 3 : 4))) {
              if (j == (i - (this.state.way == 1 ? 4 : 3))) {
                arr.push(-1);
              } else {
                if (j == (i + (this.state.way == 1 ? 3 : 4))) {
                  arr.push(1);
                } else {
                  arr.push(true);
                }
              }
            } else {
              arr.push(false);
            }
          }
        } else {
          // 처음 or 끝
          for (let j = 0; j < len; j++) {
            if (i <= 3) {
              if (j < 6) {
                arr.push(true);
              } else {
                arr.push(false);
              }
            } else {
              if (j >= (len - 6)) {
                arr.push(true);
              } else {
                arr.push(false);
              }
            }
          }
        }
      }
    }

    // 렌더링 시 배열을 가지고 불릿을 그려준다
    return arr;
  }

  _isFadeIn(id) {
    setTimeout(() => {
      if (this[id] != null) {
        this[id].style.display = 'flex';
      }
    }, 500);
  }

  _isFadeOut(id) {
    setTimeout(() => {
      if (this[id] != null) {
        this[id].style.display = 'none';
      }
    }, 500);
  }
}

export default BulletsDiv;
