import React from 'react';
import { connect } from 'react-redux'
import Layout from '../components/Layout';
import * as types from '../actions';

import Head from 'next/head';
import Link from 'next/link';

class Index extends React.Component {
  static async getInitialProps(props) {
    console.log('init index');
    // console.log(props.ctx);
    const { store, isServer } = props.ctx;
    // console.log('req: ', req);

    console.log('pending..');
    // types.homeInit();
    store.dispatch({
      type: types.HOME_INIT
    });
    console.log('success..');

    return { isServer };
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

    const { home } = this.props;
    let tst = null;

    if (home && home.banners) {
      tst = home.banners.map((item) => {
        console.log(item);
        // console.log(item.banner.title);

        return (
          <div>
            {
              item.banner ?
                item.banner.title
                :
                ''
            }
            {/* <span>{item.banner.title}</span> */}
          </div>
        )
      })
    }
    return (
      <Layout>
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
        <div>
          <h2>Home 입니다</h2>
          <Link href={'/about'}>
            <a>about</a>
          </Link>
          <p>123123
            {
              home && home.banners ?
                tst
                // tst
                :
                null
            }
          </p>
          {/* <p>
            {home ? home : null}
          </p> */}
        </div>

      </Layout>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (type, data) => dispatch({ type, data })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);