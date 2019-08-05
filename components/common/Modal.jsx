import React from 'react';
import _Modal from 'react-modal';

class Modal extends React.Component {
  render() {
    return (
      <_Modal
        isOpen={this.props.isModal}
        className="Modal"
        overlayClassName="Overlay"
        ariaHideApp={false}>
        {this.props.children}
      </_Modal>
    );
  }
}

export default Modal;
