import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Styles,
  Helpers,
} from 'utils'

class Modal extends Component {
  render() {
    const {
      show,
      onClose,
      content,
    } = this.props

    return (
      show && (
      <div>
        <div className={Styles.modal} tabIndex="-1" role="dialog">
          <div className={Styles.modalDialog}>
            <div className={Styles.modalContent}>
              <div
                role="presentation"
                onClick={onClose(false)}
                className={Helpers.mergeCss(Styles.btn, Styles.btnClose)}
              >
                <i className="la la-times" />
              </div>
              <div className={Styles.modalBody}>
                <div className={Styles.row}>
                  {content}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div role="presentation" onClick={onClose(false)} className={Styles.modalBackdrop} />
      </div>
      )
    )
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  content: PropTypes.object,
}

Modal.defaultProps = {
  show: false,
  onClose: null,
  content: {},
}

export default Modal
