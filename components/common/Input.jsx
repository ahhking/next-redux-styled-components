import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import ImageDiv from './ImageDiv';

const ClearImageDiv = styled.div`
  display : inline-block;
  background-repeat: no-repeat;
  background-position: center;
  width: 18px;
  height: 100%;
  top : 0;
  background-repeat: none;    
  position: absolute;
  right: 46px;
  vertical-align: center;
  cursor: pointer;
`;
const CheckImageDiv = styled(ImageDiv)`
  background-image: url('/assets/images/check-focus-01.svg');
  background-repeat: no-repeat;
  background-position: center;
  width: 18px;
  height: 100%;
  background-repeat: none;
  display: inline-block;
  position: absolute;
  top: 0;
  right: 18px;
  background-repeat: no-repeat;`;


const ErrorP = styled.p`
  display: ${props => (props.isShow === false ? 'static' : 'none')};
  margin-top: 8px;  
  font-size: 12px;
  text-align : left;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #f00d38;
`;
const InfoP = styled.p`
  display: ${props => (props.isShow ? 'static' : 'none')};
  margin-top: 8px;  
  font-size: 12px;
  text-align : left;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2962ff;
`
const NormalP = styled.p`
  margin-top: 8px;  
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #999999;
`;

const _Input = styled.input`
  width : ${props => props.width ? `${props.width}` : '100%'};
  outline: none;
  border-radius: 7px;
  border: solid 1px #e2e6ea;
  background-color : ${props => props.disabled ? '#fbfbfb' : props.readOnly ? '#fbfbfb' : '#ffffff'};
  box-sizing: border-box;
  padding: 11px 18px;
  padding-right : ${props => props.isMobile ? '18px' : '65px'};
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.disabled ? '#8a8a8a' : '#222222'};
  position: relative;

  ${props => {
    if (props.type == 'password') {
      return css`
        letter-spacing: 15px;
      `;
    }
  }}

  ${props => {
    if (props.isValidate == false) {
      return css`
        border-color: #f00d38;
      `;
    }
  }}

  &:focus {
    border-color: #2962ff;
    box-shadow: 0 0 8px 0 rgba(41, 98, 255, 0.1);

    & ~ ${ClearImageDiv} {
      background-image: url('/assets/images/btn-input-delete.svg');
    }
  }

  &::placeholder {
    color: #c2c2c2;
    letter-spacing: normal;
  }

  
`;

class Input extends Component {
  constructor(props) {
    super(props)
    this.handleClear = this._handleClear.bind(this);
    this.handleChange = this._handleChange.bind(this);

    this.input = React.createRef();

    this.state = {
      showClearBtn: false,
      showCheckImg: false
    }
  }
  


  _handleChange(e) {
    const { onChange, isMobile, isValidate } = this.props;

    // clear 버튼 조건 체크
    if (!isMobile && this.input.value && this.input.value.length > 1) {
      this.setState({
        showClearBtn: true
      })
    }

    // check 이미지 조건 체크
    if (!isMobile && this.input.value && isValidate) {
      this.setState({
        showCheckImg: true
      })
    } else {
      this.setState({
        showCheckImg: false
      })
    }
    
    // props의 onChange 함수 호출
    if(onChange) {
      onChange()
    }
  }

  _handleClear(e) {
    const { onChange } = this.props;
    e.preventDefault();

    // value값 빈값으로 적용
    this.input.value = '';
    
    // check 이미지 제거
    this.setState({
      showCheckImg: false
    })

    // validation을 체크하는 리듀서 값을 바꿔야 할 수 있으므로 onChange 함수를 호출한다.
    if(onChange) {
      onChange()
    }
  }
  

  render() {
    const { isValidate, errorText, normalText, infoText, type, innerRef, hideCheckImg } = this.props;
    const { showClearBtn, showCheckImg } = this.state;
    return (
      <React.Fragment>
        <span>
          <div style={{position : 'relative'}}>
            <_Input 
            {...this.props} 
            ref={(ref) => {
              this.input = ref; // 내부, 외부에서 값변경 가능 ref
              innerRef(this.input)
            }} 
            type={type}
            onChange={(e) => this.handleChange(e)}/>
            { showClearBtn && <ClearImageDiv onClick={(e) => this.handleClear(e)}/> }
            { !hideCheckImg && showCheckImg && <CheckImageDiv/>}       
          </div>
        { normalText && <NormalP>{normalText}</NormalP> }
        <InfoP isShow={isValidate}>{infoText}</InfoP>
        { errorText && <ErrorP isShow={isValidate}>{errorText}</ErrorP>}
      </span>
    </React.Fragment>
    )
  }
}


export default React.forwardRef((props, ref) => <Input innerRef={ref} {...props} />);

