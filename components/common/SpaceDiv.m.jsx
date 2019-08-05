import React from 'react';
import styled, { css } from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

import PointSpan from './PointSpan';
import ImageDiv from './ImageDiv';

import { getSpaceType } from '../modules';

import ImageGallery from 'react-image-gallery';

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding-bottom: 14.5px;
  border-bottom: 1px solid #d5dbe2;

  &:not(:nth-of-type(1)) {
    padding-top: 15.5px;
  }

  & > section {
    margin-bottom: 8px;

    & > img {
      float: left;
      background-color: gray;
      width: 90px;
      height: 90px;
      border-radius: 7px;
    }

    & > div {
      float: left;
      width: calc(100% - 90px);
      padding-left: 15px;
      padding-right: 15px;
      box-sizing: border-box;

      & > p {
        &:nth-of-type(1) {
          font-size: 12px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #9a9a9a;
        }
        &:nth-of-type(2) {
          font-size: 14px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #333333;
        }
        &:nth-of-type(3) {
          font-size: 12px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #333333;
        }
      }
    }

    &::after {
      display: block;
      content: '';
      clear: both;
      height: 26px;
    }
  }
`;

class SpaceDivM extends React.Component {
  constructor(props) {
    super(props);

    this.onClickBuilding = this._onClickBuilding.bind(this);

    this.getShortAddress = this._getShortAddress.bind(this);
  }

  render() {
    const { className, item } = this.props;
    console.log('SpaceDivM: ', this.props);

    return (
      <Wrapper 
        className={className}
        onClick={() => this.onClickBuilding(item.id)}>
        <section>
          {
            item.buildingImages && Array.isArray(item.buildingImages) && item.buildingImages.length > 0 ?
            <img src={item.buildingImages[0].image}></img>
            :
            <img src="/assets/images/dummy-img-logo.svg"></img>
          }
          <div>
            <p>
              {
                getSpaceType(item.type)
              }
            </p>
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
          </div>
        </section>
        {this.props.children}
      </Wrapper>
    );
  }

  _getShortAddress(address) {
    console.log('address: ', address);
    let addr = address.split(' ');
    let _addr = null;

    let shortAddress = '';
    _addr = addr.pop();
    // console.log(_addr);

    shortAddress = addr.join(' ');
    console.log(addr.join(' '));

    return shortAddress;
  }

  _onClickBuilding(id) {
    const { history } = this.props;

    history.push('/building/' + id);

    window.location.reload();
  }
}

export default withRouter(SpaceDivM);
