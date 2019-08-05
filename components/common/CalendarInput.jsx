import React, {Component} from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import * as types from '../actions/ActionsTypes';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker } from 'react-dates';

import 'moment/locale/ko';

const Wrapper = styled.div`
   width : 100%;
   font-size : 16px;

   .DateRangePicker.DateRangePicker_1{
     width : 100%;
   }
   .CalendarDay {
     padding : 8px;
   }
  
  .CalendarDay__default {
    border : none;
  }
  .CalendarDay__default:hover {
    border : none;
  }
  .DateRangePickerInput_calendarIcon {
    margin : ${props => props.platform !=='MOBILE' && '0px 15px' };
    padding : 0;
    vertical-align : middle;
  }
  
  .DateRangePickerInput.DateRangePickerInput_1 {
    width : 100%;
    padding-right : 0px;
  }
  .CalendarDay__selected {
    background: #2962ff;
    color: white;
    border : none;
  }
  .DateInput_input {
    font-size : 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    padding : 0;
    text-align : center;
    color : #222222;
    width : 100%;
    padding-bottom : 5px;
  }

  .DateInput {
    width : ${props => props.inputWidth ? `${props.inputWidth}` : 'calc((47vw - 52px))' };
    /* border : 1px solid blue; */
  }
  .DateRangePickerInput_arrow.DateRangePickerInput_arrow_1 {
    position : relative;
    box-sizing : border-box;
    vertical-align : middle;
    margin : ${props => props.platform ==='MOBILE' ? '8px' : '10px' };
  }
  
  .CalendarDay__selected:hover {
    background: #2962ff;
    border : none;
    color: white;
  } 

  .CalendarDay__selected_span {
    color: white;
  }
  .CalendarDay__hovered_span:hover,
  .CalendarDay__hovered_span,
  .CalendarDay__selected_span:active, .CalendarDay__selected_span:hover {
    background: rgba(41, 98, 255, 0.2);
    border : none;
    color : white;
  }
  .CalendarDay__selected_span {
    background : rgba(41, 98, 255, 0.2);
    border : none;  
  }
  .DateInput_input__focused {
    border-bottom : 2px solid #2962ff;
  }
  .DateRangePickerInput_clearDates_default:hover {
    background: none;
  }
  .clearBtn {
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #2962ff;
    cursor: pointer;
    padding-bottom : 20px;
  }
  .DateInput_fang.DateInput_fang_1 {
    display : none;
  }
`

class CalendarInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
    };
  }

  render() {
    const { action, platform, calendar } = this.props;
    const { startDate, endDate } = calendar;

    const clearBtn = () => {
      return (
        <p className='clearBtn' onClick={() => { 
          this.setState({focusedInput : 'startDate'}); 
          action(types.CALENDAR_SET_DEFAULT)}}>날짜 초기화</p>
      )
    }


    return (
      <Wrapper inputWidth={this.props.inputWidth} platform={platform} >
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDatePlaceholderText='시작일'
          endDatePlaceholderText='종료일'
          showDefaultInputIcon={true}
          startDate={startDate}
          endDate={endDate}
          onDatesChange={({ startDate, endDate }) => { action(types.CALENDAR_SET_DATE, { startDate, endDate })}}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
          displayFormat='YYYY[-]MM[-]DD'
          monthFormat='YYYY[년] MM[월]'
          numberOfMonths={ platform === 'MOBILE' ? 1 : 2}
          customArrowIcon={<img src='../../assets/images/arrw-r-detail.svg' />}
          customInputIcon={<img src='../../assets/images/ic-calendar.svg' />}
          readOnly
          noBorder
          hideKeyboardShortcutsPanel
          renderCalendarInfo={clearBtn}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    calendar : state.appData.calendar,
    platform : state.commonData.platform
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (type, data) => dispatch({ type, data })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarInput);

