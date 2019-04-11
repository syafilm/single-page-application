import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Styles,
  Helpers,
  I18n,
} from 'utils'

import userImage from 'images/user.png'

class Comment extends Component {
  state = {
    comment: '',
    show: false,
  }

  showForm = (value, body) => () => {
    this.setState({
      show: value,
      comment: body,
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  submitComment = (item, value) => () => {
    const {
      comment,
    } = this.state

    const {
      onEditComment,
    } = this.props

    const objectToSend = {
      postId: item.postId,
      id: item.id,
      name: item.name,
      email: item.email,
      body: comment,
    }

    onEditComment(objectToSend)
    this.setState({
      show: value,
    })
  }

  render() {
    const {
      show,
      comment,
    } = this.state

    const {
      item,
      onDelete,
    } = this.props

    return (
      <div
        key={item.email}
        className={Helpers.mergeCss(
          Styles.card,
          Styles.border0,
          Styles.boxShadow,
          Styles.marginBottom4,
        )}
      >
        <div className={Styles.cardBody}>
          <div className={Styles.row}>
            <div className={Styles.col}>
              <div className={Helpers.mergeCss(
                Styles.dFlex,
                Styles.linkPost,
              )}
              >
                <img alt="" src={userImage} className={Styles.imgTinyAvaRadius} />
                <div className={Styles.dBlock}>
                  <h4 className={Helpers.mergeCss(
                    Styles.marginLeft3,
                    Styles.marginBottom,
                  )}
                  >
                    {item.name}
                  </h4>
                  <span className={Helpers.mergeCss(
                    Styles.marginLeft3,
                    Styles.dBlock,
                    Styles.textRead,
                  )}
                  >
                    {item.email}
                  </span>
                </div>
              </div>
            </div>
            {item.id === 501 && (
            <div className={Helpers.mergeCss(Styles.col, Styles.textRight)}>
              <button
                type="button"
                className={Helpers.mergeCss(
                  Styles.btn,
                  Styles.btnEdit,
                )}
                onClick={this.showForm(true, item.body)}
              >
                <i className="la la-edit" />
              </button>
              <button
                type="button"
                className={Helpers.mergeCss(
                  Styles.marginLeft2,
                  Styles.btn,
                  Styles.btnDelete,
                )}
                onClick={onDelete(item)}
              >
                <i className="la la-trash" />
              </button>
            </div>
            )}
          </div>
          <div className={Helpers.mergeCss(Styles.dBlock, Styles.marginTop4)}>
            {!show && (
            <span className={Styles.textRead}>
              {item.body}
            </span>
            )}
            {show
              && (
              <div>
                <textarea
                  className={Helpers.mergeCss(
                    Styles.marginTop3,
                    Styles.formControl,
                    Styles.formControlTextarea,
                  )}
                  value={comment}
                  name="comment"
                  onChange={this.onChange}
                />
                <button
                  type="button"
                  onClick={this.submitComment(item, false)}
                  className={Helpers.mergeCss(
                    Styles.btnDark,
                    Styles.marginTop3,
                    Styles.boxShadow,
                  )}
                >
                  {I18n.t('post.comment')}
                </button>
              </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

Comment.propTypes = {
  item: PropTypes.object,
  onEditComment: PropTypes.func,
  onDelete: PropTypes.func,
}

Comment.defaultProps = {
  item: {},
  onEditComment: null,
  onDelete: null,
}

export default Comment
