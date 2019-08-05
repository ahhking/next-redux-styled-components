import React from 'react';

class Img extends React.Component {
  render() {
    return (
      <img className={this.props.className} src={false ? '' : '/assets/images/dummy-img-logo.svg'}></img>
    );
  }
}

export default Img;
