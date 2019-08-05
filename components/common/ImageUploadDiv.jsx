import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import * as types from '../actions/ActionsTypes';

const Div = styled.div`
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
const Wrapper = styled.div`
  display: inline-block;
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : 'auto')};
  box-sizing: border-box;
  border-radius: 7px;
  text-align: center;
  position: relative;
  border: solid 1px #d8d8d8;
  background-color: #fcfcfc;
  overflow: hidden;
`;

const Input = styled.input`
  display: none;
`;
const Label = styled.label`
  & > ${Div} {
    display: inline-block;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  & span {
    font-size: 18px;
    color: #8a8a8a;
  }
`;

const Outer = styled.div`
  display: table;
  width: 100%;
  height: 100%;
`;
const Inner = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const DeleteButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  width: 27px;
  height: 27px;
  background-image: url('/assets/images/btn-img-del.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;

  ${props => {
    if (!props.isShow) {
      return css`
        display: none;
      `;
    }
  }}
`;

class ImageUploadDiv extends React.Component {
  constructor(props) {
    super(props);

    this.onTest = this._onTest.bind(this);
  }
  render() {
    // console.log('ImageUploadDiv render: ', this.props);
    const { addApply, action } = this.props;
    const { buildingImages, spaceImages } = addApply;

    let isShow = false;

    if (this.props.type == 'building' && buildingImages[this.props.index] != undefined) {
      isShow = true;
    }
    if (this.props.type == 'space' && spaceImages[this.props.index] != undefined) {
      isShow = true;
    }

    if (!isShow) {
      if (this.view) {
        this.view.style.backgroundImage = 'none';
        this.image.value = '';
      }
    }

    // console.log('uploadDiv: ', this.props);

    if (this.props.binary != null && this.props.binary != '' && this.view) {
      this.view.style.backgroundImage = 'url(' + this.props.binary + ')';
    }

    return (
      <Wrapper
        width={this.props.width}
        height={this.props.height}
        className={this.props.className}>
        <Label>
          <Div ref={(ref) => this.view = ref}>
            <Outer>
              <Inner>
                {
                  isShow ?
                    ''
                    :
                    (
                      <span>+ 추가하기</span>
                    )
                }
              </Inner>
            </Outer>
          </Div>
          <Input disabled={isShow} type="file" ref={(ref) => this.image = ref} onChange={(e) => this.onTest(e)}></Input>
        </Label>
        {
          this.props.type == 'building' ?
            (
              <DeleteButton
                isShow={isShow}
                onClick={() => action(types.ADD_APPLY_ON_CLICK_DEL_BUILDING_IMAGE, this.props.index)}
              ></DeleteButton>
            )
            :
            (
              <DeleteButton
                isShow={isShow}
                onClick={() => action(types.ADD_APPLY_ON_CLICK_DEL_SPACE_IMAGE, this.props.index)}
              ></DeleteButton>
            )
        }
      </Wrapper>
    );
  }

  _onTest(e) {
    const { onChange } = this.props;
    console.log('this.image.files[0]: ', this.image.files[0]);

    if (e.target.files && e.target.files[0] && e.target.files[0].size < 10485760 && e.target.files[0].type == 'image/jpeg') {
      const r = new FileReader();
      r.onload = (e) => {
        onChange(this.image.files[0], e.currentTarget.result);
      }
      r.readAsDataURL(this.image.files[0]);
    } else {
      this.props.callback();
    }
  }
}

const mapStateToProps = (state) => {
  return {
    addApply: state.addApply
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (type, data) => dispatch({ type, data })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploadDiv);
