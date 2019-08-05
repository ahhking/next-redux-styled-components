import React from 'react';
import { connect } from 'react-redux'
import Layout from '../components/common/Layout';

import * as types from '../actions';

import Head from 'next/head';
import Link from 'next/link';

import Home from '../components/page/Home';
import HomeM from '../components/page/Home.m';

class Index extends React.Component {
  static async getInitialProps(props) {
    console.log('init index');
    console.log(props.ctx);

    const { store, isServer } = props.ctx;
    let headers = null;
    let isMobile = false;

    if (isServer) {
      headers = props.ctx.req.headers;
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(headers['user-agent'])) {
        isMobile = true;
      } else {
        isMobile = false;
      }
    } else {
      headers = {};

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
      } else {
        isMobile = false;
      }
    }

    // device 에 따른 init 분기처리도 필요할 듯

    console.log('pending..');
    store.dispatch({
      type: types.HOME_INIT,
      data: {},
      req: {
        isServer: isServer,
        cookie: isServer && props.ctx.req.headers['cookie']
      }
    });
    console.log('success..');

    return { isServer, isMobile, headers };
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { action } = this.props;
    console.log('mount index');
    console.log(this.props);
  }

  componentDidUpdate() {
    console.log('update index');
  }

  render() {
    console.log('render index');
    console.log(this.props);

    const { home, isServer, headers, isMobile } = this.props;

    console.log('@@@@@server client')

    return (
      <Layout>
        {/* head */}
        <Head>
          <meta name="title" content="스위트스팟 | 팝업스토어 공간 플랫폼" />
          <meta name="description" content="스위트스팟 공간에서 플리마켓, 팝업스토어, 위탁판매, 공간대관, 장기임대, btl마케팅 등 브랜드 매장 오픈에 필요한 모든 서비스를 제공합니다." />
          <meta name="keywords" content="스위트스팟, 공간대관, 플리마켓, 팝업스토어, 팝업,  위탁판매, 공간대관, 장기임대, 부동산 매매, 상가임대, btl마케팅" />
          <meta property="og:description" content="home 입니당" />
          <meta property="og:site_name" content="스위트스팟" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.sweetspot.co.kr/" />
          <meta property="og:image" content="https://repo.sweetspot.co.kr/images/system/sweetspot_tag.png" />
          <meta property="og:image:url" content="https://repo.sweetspot.co.kr/images/system/sweetspot_tag.png" />
          <meta property="og:image:secure_url" content="https://repo.sweetspot.co.kr/images/system/sweetspot_tag.png" />
          <link rel="canonical" href="https://www.sweetspot.co.kr" />
        </Head>
        {/* content */}
        {
          isMobile ?
            <HomeM />
            :
            <Home />
        }
      </Layout>

    );
  }
}

export default Index;