import React from 'react'
import PropTypes from 'prop-types'
import {
  Styles,
  Helpers,
  I18n,
} from 'utils'

import {
  Post,
} from 'components'

const Posts = ({
  items,
  show,
  onCloseModal,
  onDelete,
  onEditPost,
}) => (
  <div>
    <div className={Styles.row}>
      <div className={Styles.col}>
        <h4>
          {I18n.t('profile.posts')}
        </h4>
      </div>
      {show && (
      <div
        role="presentation"
        onClick={onCloseModal(true)}
        className={Helpers.mergeCss(Styles.col, Styles.textRight)}
      >
        <div className={Helpers.mergeCss(Styles.btnDark)}>
          <span className={Helpers.mergeCss(Styles.marginRight3)}>
            {I18n.t('post.add-post')}
          </span>
          <i className="la la-plus" />
        </div>
      </div>
      )}
    </div>
    <Post onEditPost={onEditPost} onDelete={onDelete} items={items} />
  </div>
)

Posts.propTypes = {
  items: PropTypes.array,
  show: PropTypes.bool,
  onCloseModal: PropTypes.func,
  onDelete: PropTypes.func,
  onEditPost: PropTypes.func,
}

Posts.defaultProps = {
  items: [],
  show: true,
  onCloseModal: null,
  onDelete: null,
  onEditPost: null,
}

export default Posts
