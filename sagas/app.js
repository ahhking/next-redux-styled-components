import { takeEvery, put, call } from 'redux-saga/effects';
import * as types from '../actions';
import { BASE_URL, COMMON_CODES } from '../constants';

import { fetchApi } from '../modules';

export function* appInitFlow(payload) {
  let res = null;
  let data = new Array(150);

  try {
    yield put({
      type: types.SET_LOADER,
      data: true
    });

    res = yield call(
      fetchApi,
      BASE_URL + '/v1/commonCodes?parentId=' + COMMON_CODES.PURPOSE,
      'get',
      payload.req
    );
    data[COMMON_CODES.PURPOSE] = res.data;

    res = yield call(
      fetchApi,
      BASE_URL + '/v1/commonCodes?parentId=' + COMMON_CODES.SCALE,
      'get',
      payload.req
    );
    data[COMMON_CODES.SCALE] = res.data;

    res = yield call(
      fetchApi,
      BASE_URL + '/v1/commonCodes?parentId=' + COMMON_CODES.AREA,
      'get',
      payload.req
    );
    data[COMMON_CODES.AREA] = res.data;

    res = yield call(
      fetchApi,
      BASE_URL + '/v1/commonCodes?parentId=' + COMMON_CODES.SUB_AREA_SEOUL,
      'get',
      payload.req
    );
    data[COMMON_CODES.SUB_AREA_SEOUL] = res.data;

    res = yield call(
      fetchApi,
      BASE_URL + '/v1/commonCodes?parentId=' + COMMON_CODES.SUB_AREA_GYEONGGI,
      'get',
      payload.req
    );
    data[COMMON_CODES.SUB_AREA_GYEONGGI] = res.data;

    res = yield call(
      fetchApi,
      BASE_URL + '/v1/commonCodes?parentId=' + COMMON_CODES.INDUSTRY_GROUP,
      'get',
      payload.req
    );
    data[COMMON_CODES.INDUSTRY_GROUP] = res.data;

    res = yield call(
      fetchApi,
      BASE_URL + '/v1/commonCodes?parentId=' + COMMON_CODES.SALES_ITEMS,
      'get',
      payload.req
    );
    data[COMMON_CODES.SALES_ITEMS] = res.data;

    res = yield call(
      fetchApi,
      BASE_URL + '/v1/commonCodes?parentId=' + COMMON_CODES.SPACE_TYPE,
      'get',
      payload.req
    );
    data[COMMON_CODES.SPACE_TYPE] = res.data;

    res = yield call(
      fetchApi,
      BASE_URL + '/v1/commonCodes?parentId=' + COMMON_CODES.BUSINESS_MODEL,
      'get',
      payload.req
    );
    data[COMMON_CODES.BUSINESS_MODEL] = res.data;

    res = yield call(
      fetchApi,
      BASE_URL + '/v1/commonCodes?parentId=' + COMMON_CODES.SPACE_TYPE_DIVISION,
      'get',
      payload.req
    );
    data[COMMON_CODES.SPACE_TYPE_DIVISION] = res.data;

    res = yield call(
      fetchApi,
      BASE_URL + '/v1/commonCodes?parentId=' + COMMON_CODES.RESERVATION_STATUS,
      'get',
      payload.req
    );
    data[COMMON_CODES.RESERVATION_STATUS] = res.data;

    res = yield call(
      fetchApi,
      BASE_URL + '/v1/commonCodes?parentId=' + COMMON_CODES.USER_TYPE,
      'get',
      payload.req
    );
    data[COMMON_CODES.USER_TYPE] = res.data;

  } catch (e) {
    console.log('ERR: ', e);
    console.log('ERR: ', e.response);
  } finally {
    yield put({
      type: types.APP_INIT_SUCCESS,
      data: data
    });

    yield put({
      type: types.SET_LOADER,
      data: false
    });
  }
}

export default function* watch() {
  yield takeEvery(types.APP_INIT, appInitFlow);
}
