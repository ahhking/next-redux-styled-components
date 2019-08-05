import React from 'react';
import { connect } from 'react-redux';
import Layout from '../common/Layout';
import * as types from '../../actions';

import Link from 'next/link';

class Home extends React.Component {
  static async getInitialProps(props) {
    console.log('init home');
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('mount home');
  }

  render() {
    console.log('render Home');
    console.log(this.props);

    const { home } = this.props;
    let tst = null;

    if (home && home.banners) {
      tst = home.banners.map((item, index) => {
        console.log(item);
        // console.log(item.banner.title);

        return (
          <div key={index}>
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
      <div>
        Home
        <span>
          {tst}
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app,
    home: state.home
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: (type, data) => dispatch({ type, data })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);