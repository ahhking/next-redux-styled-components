import React from 'react';
import Layout from '../components/common/Layout';

import Head from 'next/head';
import Router, { useRouter } from 'next/router';

import 'isomorphic-unfetch'

class About extends React.Component {
  static async getInitialProps(props) {
    console.log('init about');
    console.log(props);
    // let router = useRouter();
    

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(data => {
        console.log('data: ', data);
      });

    return {
      site: {
        "id": 21,
        "name": "스위트스팟",
        "type": "OFFICE",
        "address": "서울시 강남구 역삼동",
        "addressAddition": "역세권",
        "addressBrief": "서울시 강남구 역삼동",
        "locationParentId": 16,
        "locationCode": "01",
        "size": 100.11,
        "aboveground": 14,
        "underground": 3,
        "description": "wework building",
        "keyPoint": "역삼역 역세권2",
        "managerOpinion": "good",
        "managerId": null,
        "insertedTime": "2019-01-14T08:37:59.000+0000",
        "updatedTime": "2019-01-14T08:37:59.000+0000",
        "buildingImages": [],
        "buildingRules": [],
        "spaces": [],
        "open": true,
        "descOpen": true,
        "keyPointOpen": true,
        "opinionOpen": false,
        "rulesOpen": false,
        "addressAdditionOpen": true,
        "xcoordinate": 0.0,
        "ycoordinate": 0.0
      }
    };
  }

  constructor(props) {
    super(props);

    console.log('new about: ', this.props);

    this.state = {
      test: 1
    };

    this.onTest = this._onTest.bind(this);
  }

  componentDidMount() {
    console.log('mount about: ', this.props);

    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(r => r.json())
    // .then(data => {
    //   console.log('data: ', data);
    // });
  }

  componentDidUpdate() {
    console.log('update about: ', this.props);
  }

  

  render() {
    return (
      <Layout>
        <Head>
          <meta name="title" content="스위트스팟 | 팝업스토어 공간 플랫폼" />
          <meta name="description" content="스위트스팟 공간에서 플리마켓, 팝업스토어, 위탁판매, 공간대관, 장기임대, btl마케팅 등 브랜드 매장 오픈에 필요한 모든 서비스를 제공합니다." />
          <meta name="keywords" content="스위트스팟, 공간대관, 플리마켓, 팝업스토어, 팝업,  위탁판매, 공간대관, 장기임대, 부동산 매매, 상가임대, btl마케팅" />
          <meta property="og:description" content="about 입니당" />
          <meta property="og:site_name" content="스위트스팟" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.sweetspot.co.kr/" />
          <meta property="og:image" content="https://repo.sweetspot.co.kr/images/system/sweetspot_tag.png" />
          <meta property="og:image:url" content="https://repo.sweetspot.co.kr/images/system/sweetspot_tag.png" />
          <meta property="og:image:secure_url" content="https://repo.sweetspot.co.kr/images/system/sweetspot_tag.png" />
          <link rel="canonical" href="https://www.sweetspot.co.kr" />
        </Head>
        <div>
          <h2>about 입니당</h2>
          <button onClick={this.onTest}>click</button>
        </div>
      </Layout>
    );
  }

  _onTest() {
    event.preventDefault();
    console.log(this.props);
    Router.push('/');

    this.setState({
      test: this.state.test + 1
    });
  }
}

export default About;