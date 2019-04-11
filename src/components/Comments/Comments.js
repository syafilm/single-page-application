
import React from 'react'
import PropTypes from 'prop-types'
import {
  Comment,
} from 'components'

const Comments = ({
  comments,
  onEditComment,
  onDelete,
}) => (
  <div>
    {comments.map(item => (
      <div key={item.email}>
        <Comment onDelete={onDelete} onEditComment={onEditComment} item={item} />
      </div>
    ))
    }
  </div>
)

Comments.propTypes = {
  comments: PropTypes.array,
  onEditComment: PropTypes.func,
  onDelete: PropTypes.func,
}

Comments.defaultProps = {
  comments: [],
  onEditComment: null,
  onDelete: null,
}

export default Comments
