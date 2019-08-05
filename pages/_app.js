import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import createStore from '../store';

import * as types from '../actions';

class _App extends App {
  static async getInitialProps({ Component, ctx }) {
    console.log('init app');
    console.log(ctx);
    const { isServer } = ctx;
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  componentDidMount() {
    console.log('mount app');
    console.log(this.props);
    const { store, isServer } = this.props;

    store.dispatch({
      type: types.APP_INIT,
      data: {},
      req: {
        isServer: isServer,
        cookie: null
      }
    });

  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(_App));
