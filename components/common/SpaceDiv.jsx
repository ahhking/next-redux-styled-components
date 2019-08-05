import React from 'react';
import styled, { css } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

import PointSpan from './PointSpan';
import ImageDiv from './ImageDiv';
import BulletsDiv from '../components/BulletsDiv';

import { getSpaceType } from '../modules';

import ImageGallery from 'react-image-gallery';

const StyledImageDiv = styled(ImageDiv)``;
const StyledBulletsDiv = styled(BulletsDiv)``;

const GalleryLeftNav = styled.nav`
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 60px;
  height: 100%;
  box-sizing: border-box;
  z-index: 4;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));

  & > ${StyledImageDiv} {
    background-image: url('/assets/images/list-arrw-l-d.svg');
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
  }

  &:hover {
    & > ${StyledImageDiv} {
      background-image: url('/assets/images/list-arrw-l-f.svg');
    }
  }
`;
const GalleryRightNav = styled.nav`
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  width: 60px;
  height: 100%;
  box-sizing: border-box;
  z-index: 4;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));

  & > ${StyledImageDiv} {
    background-image: url('/assets/images/list-arrw-r-d.svg');
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
  }

  &:hover {
    & > ${StyledImageDiv} {
      background-image: url('/assets/images/list-arrw-r-f.svg');
    }
  }
`;
const GalleryDiv = styled.div`
`;

const Wrapper = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 342px;
  height: 412px;
  border-radius: 7px;
  overflow: hidden;
  /* margin-right: 31px; */
  position: relative;

  &:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

const TopDiv = styled.div`
  width: 100%;
  height: 210px;
  background: pink;
  cursor: pointer;
`;
const BottomDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 202px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left: 1px solid #e2e6ea;
  border-bottom: 1px solid #e2e6ea;
  border-right: 1px solid #e2e6ea;
  padding: 30px 17px;
  background: #fff;
  position: relative;
  cursor: pointer;

  & > p {
    margin: 0;
  }

  /* & > p:nth-last-of-type(1) {
    font-size: 14px;
    text-align: right;
    color: #999999;  
    position: absolute;
    bottom: 30px;
    right: 17px;  
  } */

  & > p:nth-of-type(1) {
    font-size: 18px;
    color: #9a9a9a;
    margin: 5px 0;
  }
  & > p:nth-of-type(2) {
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.6;
    letter-spacing: normal;
    color: #333333;
    margin: 5px 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  & > p:nth-of-type(3) {
    font-size: 14px;
    color: #333333;
    margin: 5px 0;
  }

  & > div {
    margin: 10px 0;
  }
`;

class SpaceDiv extends React.Component {
  constructor(props) {
    super(props);

    this.onClickBuilding = this._onClickBuilding.bind(this);

    this.onMouseLeave = this._onMouseLeave.bind(this);

    this.onGalleryMouseOver = this._onGalleryMouseOver.bind(this);

    this.getShortAddress = this._getShortAddress.bind(this);
  }
  render() {
    const { className, item } = this.props;
    // console.log('spaceDiv render: ', this.props);

    const renderItem = (item, id) => {
      return (
        <GalleryDiv className='image-gallery-image' onClick={() => this.onClickBuilding(id)}>
          <img width={'100%'} height={'100%'} src={item.original} style={{ backgroundColor: 'gray', height: '210px', objectFit: 'cover', fontFamily: "'object-fit: scale-down'" }} />
        </GalleryDiv>
      );
    }

    const renderBullets = (imgLength) => {
      let currentIndex = 0;
      if (this.gallery !== undefined && this.gallery !== null) {
        currentIndex = this.gallery.getCurrentIndex();
      }
      return (
        <StyledBulletsDiv imgLength={imgLength} currentIndex={currentIndex}></StyledBulletsDiv>
      )
    };

    if (!item) {
      return null;
    }

    let _buildingImages = Object.assign([], item.buildingImages);
    let images = [];

    for (var i = 0; i < _buildingImages.length; i++) {
      images.push({
        original: _buildingImages[i].image,
        thumbnail: ''
      });
    }

    if (images.length == 0) {
      images.push({
        original: '/assets/images/dummy-img-logo.svg',
        thumbnail: ''
      });
    }


    // console.log('_buildingImages: ', _buildingImages);
    // console.log('images: ', images);
    return (
      <Wrapper className={className}>
        <TopDiv
          onMouseLeave={() => this.onMouseLeave(event)}>
          <ImageGallery
            ref={(ref) => this.gallery = ref}
            items={images}
            showThumbnails={false}
            showNav={true}
            showPlayButton={false}
            showFullscreenButton={false}
            renderItem={(o) => renderItem(o, item.id)}
            onMouseOver={() => this.onGalleryMouseOver(event)}
            renderLeftNav={this._onGalleryRenderLeftNav}
            renderRightNav={this._onGalleryRenderRightNav}
            renderCustomControls={() => renderBullets(images.length)}
          >
          </ImageGallery>
        </TopDiv>
        <BottomDiv onClick={() => this.onClickBuilding(item.id)}>
          <p>{getSpaceType(item.type)}</p>
          <p>
            {
              item.useByname ?
              item.byname
              :
              item.name
            }
          </p>
          <p>
            {
              item.addressDisplayType == 1 ?
              item.address
              :
              null
            }
            {
              item.addressDisplayType == 2 ?
              this.getShortAddress(item.address)
              :
              null
            }
            {
              item.addressDisplayType == 3 ?
              ''
              :
              null
            }
          </p>
          <div>
            {/* <PointSpan color={'#00d8a2'}>수수료 Base</PointSpan> */}
          </div>
          {/* <p>공간 찜ㆍ
            {
              item.likeCount ?
                item.likeCount
                :
                0
            }
          </p> */}
        </BottomDiv>
        {this.props.children}
      </Wrapper>
    );
  }

  _onClickBuilding(id) {
    const { history } = this.props;

    history.push('/building/' + id);
    window.location.reload();
  }

  _onMouseLeave(e) {
    let leftNav, rightNav = null;

    leftNav = this.gallery._imageGallery.children[0].children[0].children[0].children[0];
    rightNav = this.gallery._imageGallery.children[0].children[0].children[0].children[1];


    // console.log('leftNav: ', leftNav);
    // console.log('rightNav:', rightNav);

    if (leftNav == undefined || rightNav == undefined) {
      if (e.path[5].children.length < 3) {
        // console.log(e.path[3].children[0].localName);
        if (e.path[3].children[0].localName == 'span') {
          // console.log('leftNav: ', leftNav);
          // console.log('rightNav: ', rightNav);

          leftNav = e.path[3].children[0].children[0];
          rightNav = e.path[3].children[0].children[1];

          leftNav.style.display = 'none';
          rightNav.style.display = 'none';
        }

      } else {
        // console.log(e.path[5].children[0].localName);

        if (e.path[5].children[0].localName == 'span') {
          leftNav = e.path[5].children[0].children[0];
          rightNav = e.path[5].children[0].children[1];

          // console.log('leftNav: ', leftNav);
          // console.log('rightNav: ', rightNav);

          leftNav.style.display = 'none';
          rightNav.style.display = 'none';
        }
      }
    } else {
      leftNav.style.display = 'none';
      rightNav.style.display = 'none';
    }
  }

  _onGalleryMouseOver(e) {
    let leftNav, rightNav = null;

    leftNav = this.gallery._imageGallery.children[0].children[0].children[1].children[0];
    rightNav = this.gallery._imageGallery.children[0].children[0].children[1].children[1];

    console.log(rightNav);

    if(!!leftNav && !!rightNav) {
      leftNav.style.display = 'inline-block';
      rightNav.style.display = 'inline-block';
    }
  }

  _onGalleryRenderLeftNav(onClick, disabled) {
    return (
      <GalleryLeftNav onClick={onClick}>
        <StyledImageDiv></StyledImageDiv>
      </GalleryLeftNav>
    );
  }

  _onGalleryRenderRightNav(onClick, disabled) {
    return (
      <GalleryRightNav onClick={onClick}>
        <StyledImageDiv></StyledImageDiv>
      </GalleryRightNav>
    );
  }

  _getShortAddress(address) {
    let addr = address.split(' ');
    let _addr = null;

    let shortAddress = '';
    _addr = addr.pop();
    // console.log(_addr);

    shortAddress = addr.join(' ');
    console.log(addr.join(' '));

    return shortAddress;
  }
}

export default withRouter(SpaceDiv);
