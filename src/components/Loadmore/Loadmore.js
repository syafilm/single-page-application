import React from 'react'
import PropTypes from 'prop-types'
import {
  Styles,
  Helpers,
} from 'utils'

const Loadmore = ({
  onLoadmore,
  totalPost,
  currentTotal,
}) => {
  if (currentTotal !== totalPost) {
    return (
      <div className={Helpers.mergeCss(Styles.dBlock, Styles.textCenter)}>
        <button type="button" onClick={onLoadmore(1)} className={Styles.btnDark}>
          Loadmore
        </button>
      </div>
    )
  }
  return null
}

Loadmore.propTypes = {
  onLoadmore: PropTypes.func,
  currentTotal: PropTypes.number,
  totalPost: PropTypes.number,
}

Loadmore.defaultProps = {
  onLoadmore: null,
  currentTotal: 10,
  totalPost: 0,
}

export default Loadmore
