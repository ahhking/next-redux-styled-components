import React from 'react';
import { connect } from 'react-redux';
import Layout from '../common/Layout';
import * as types from '../../actions';

import Link from 'next/link';

class HomeM extends React.Component {
  static async getInitalProps(props) {
    console.log('init homem');
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        homem
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeM);