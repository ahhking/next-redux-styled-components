import React from 'react';
import styled, { css } from 'styled-components';
import { GET_PAGER } from '../actions/ActionsTypes';

import * as types from '../actions/ActionsTypes';
import { connect } from 'react-redux';

const Wrapper = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
`;

const PrevLi = styled.li`
  display: inline-block;
  margin-right: 9px;
  cursor: pointer;
`;
const PageLi = styled.li`
  display: inline-block;
  font-size: 14px;
  text-align: center;
  color: #222222;
  margin-left: 12px;
  margin-right: 12px;
  width: 32px;
  height: 32px;
  cursor: pointer;

  ${props => {

    if (props.active) {
      return css`
          border-radius: 16px;
          background-color: #2962ff;
          color: white;
      `;
    }
  }}
`;

const Item = styled.div`
  float: left;
  vertical-align: middle;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
`;
const NextLi = styled.li`
  display: inline-block;
  margin-left: 9px;
  cursor: pointer;
`;

class Pagination extends React.Component {
  componentDidMount() {
    const { action, totalItems, pageSize, page } = this.props;

    let pager = this.getPager(totalItems, page ? page : 1, pageSize);

    action(types.SET_PAGER, pager);
  }

  componentDidUpdate(prevProps, prevState) {
    const { action, totalItems, pageSize, page } = this.props;

    if (totalItems !== prevProps.totalItems) {
      let pager = this.getPager(totalItems, 1, pageSize);

      action(types.SET_PAGER, pager);
    }

    if (pageSize !== prevProps.pageSize) {
      let pager = this.getPager(totalItems, 1, pageSize);

      action(types.SET_PAGER, pager);
    }

    if (page !== prevProps.page) {
      let pager = this.getPager(totalItems, page ? page : 1, pageSize);

      action(types.SET_PAGER, pager);
    }
  }

  setPage(page) {
    console.log('page: ', page);
    const { action, totalItems, onChangePage, pageSize } = this.props;

    let pager = this.getPager(totalItems, page, pageSize);

    console.log('pager: ', pager);

    if (page < pager.startPage || page > pager.endPage) {
      return false;
    }

    action(types.SET_PAGER, pager);

    // 콜백함수 실행
    onChangePage(page);
  }

  getPager(totalItems, currentPage, pageSize) {
    var pager = {
      totalItems: 0,
      currentPage: 0,
      pageSize: 0,
      totalPages: 0,
      startPage: 0,
      endPage: 0,
      startIndex: 0,
      endIndex: 0,
      pages: []
    }

    pager.totalItems = totalItems;
    pager.currentPage = currentPage;
    pager.pageSize = 10;

    var totalPages = Math.ceil(totalItems / pageSize);
    var startPage, endPage;

    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

    pager.totalPages = totalPages;
    pager.startPage = startPage;
    pager.endPage = endPage;
    pager.startIndex = startIndex;
    pager.endIndex = endIndex;
    pager.pages = pages;

    return pager;
  }

  render() {
    console.log('pager props: ', this.props);

    const { pager } = this.props;

    return (
      <Wrapper>
        {
          pager.currentPage == pager.startPage ?
            null
            :
            <PrevLi onClick={() => this.setPage(pager.currentPage - 1)}>
              <img src="/assets/images/btn-pg-navi-l.svg"></img>
            </PrevLi>
        }

        {pager.pages.map((page, index) => {
          return (
            <PageLi
              key={index}
              onClick={() => this.setPage(page)} active={pager.currentPage == page ? true : false}>
              <Item>{page}</Item>
            </PageLi>
          )
        })}
        {
          pager.currentPage == pager.endPage ?
            null
            :
            <NextLi onClick={() => this.setPage(pager.currentPage + 1)}>
              <img src="/assets/images/btn-pg-navi-r.svg"></img>
            </NextLi>
        }
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pager: state.appData.paginationData
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (type, data) => dispatch({ type, data })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
