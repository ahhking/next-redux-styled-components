import { takeEvery, put, call, actionChannel, all, fork } from 'redux-saga/effects';
import * as types from '../actions';
import { BASE_URL } from '../constants';
import { authHeader, setCookie, fetchApi } from '../modules';
// import es6promise from 'es6-promise';
// import 'isomorphic-unfetch';

// es6promise.polyfill()

import axios from 'axios';

export function* homeInitFlow(payload) {
  let res = null;
  let data = {
    recommendation: [],
    banners: [],
    reviewVideos: [],
    userInfo: {},
    newRegistration: []
  };
  let vimeo = null;
  const { isServer, cookie } = payload.req;

  try {
    console.log('@@@@@homeInitFlow begin');
    console.log(payload);

    res = yield call(
      fetchApi,
      BASE_URL + '/v1/display/banners?location=MAIN',
      'get',
      payload.req
    );
    data.banners = res.data;
    console.log('banners: ', res);

    res = yield call(
      fetchApi,
      BASE_URL + '/v1/display/reviewVideos?location=MAIN',
      'get',
      payload.req
    );
    // Add vimeo thumbnail_url

    vimeo = yield all(res.data.map(item => call(getThumbnailVimeo, item)))

    data.reviewVideos = vimeo;

    res = yield call(
      fetchApi,
      BASE_URL + '/v1/space/recommendation',
      'get',
      payload.req
    );
    data.recommendation = res.data;
    console.log('/v1/space/recommendation: ', res);

    console.log('authheader: ', authHeader());

    let _usr = authHeader();
    if (_usr.hasOwnProperty('Authorization')) {
      res = yield call(
        fetchApi,
        BASE_URL + '/v1/user/myInfo',
        'get',
        payload.req
      );

      data.userInfo = res.data;
      console.log('user: ', res);

      if (res.status == 200) {
        if (res.data.type == null || res.data.type == '') {
          data.isModal = true;
        } else {
          data.isModal = false;
        }
      }
    } else {
      console.log('없음')
    }

    res = yield call(
      fetchApi,
      BASE_URL + '/v1/building/newRegistration?page=0&size=3',
      'get',
      payload.req
    );
    data.newRegistration = res.data.content;
    console.log(res);

    yield put({
      type: types.HOME_INIT_SUCCESS,
      data: data
    });
  } catch (e) {
    console.error('ERR: ', e);
    console.error('ERR: ', e.response);
  } finally {
    console.log('@@@@@homeInitFlow end');
    yield put({
      type: types.SET_LOADER,
      data: false
    });

    yield put({
      type: types.HOME_REQUEST_SUCCESS,
      data: {
        pKey: 'init',
        cKey: 'isSuccess',
        value: true
      }
    });
  }
}

export function* logoutFlow(payload) {
  try {
    setCookie('access_token', '');
    setCookie('refresh_token', '');

    payload.data.history.push('/')
  } catch (e) {
    console.error('ERR: ', e);
    console.error('ERR: ', e.response);
  } finally {
    yield put({
      type: types.HOME_DESTROY
    });

    yield put({
      type: types.HEADER_ON_CLICK_MENU,
      data: false
    });
  }
}

export function* putUserDetailFlow(payload) {
  let res = null;
  try {
    res = yield call(
      fetchApi,
      BASE_URL + '/v1/user/info',
      'put',
      payload.data
    );
    console.log(res);

    yield put({
      type: types.HOME_SET_MODAL,
      data: false
    });
  } catch (e) {
    console.log(e.response);
  }
}

export function* homeGetBannerClickFlow(payload) {
  try {
    res = yield call(
      fetchApi,
      BASE_URL + '/v1/banner/click/' + payload.data,
      'get'
    );
  } catch (e) {
    console.error('ERR: ', e);
    console.error('ERR: ', e.response);
  }
}

export function* getThumbnailVimeo(videoList) {
  if (!videoList.reviewVideoVO) {
    return videoList
  }

  let vimeoUrl = videoList.reviewVideoVO.url
  if (vimeoUrl) {
    let url = `https://vimeo.com/api/oembed.json?url=${vimeoUrl}`
    yield axios.get(url)
      .then(response => {
        videoList.reviewVideoVO.thumbnail_url = response.data.thumbnail_url

      })
      .catch(error => {
        console.error(error);
      });
  }
  return videoList;
}


export default function* watch() {
  // fork(homeInitFlow),
  yield takeEvery(types.HOME_INIT, homeInitFlow);
  yield takeEvery(types.LOGOUT, logoutFlow);
  yield takeEvery(types.PUT_USER_DETAIL, putUserDetailFlow);
  yield takeEvery(types.HOME_GET_BANNER_CLICK, homeGetBannerClickFlow);
}
