import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  Styles,
  Helpers,
  I18n,
} from 'utils'
import { Link } from 'react-router-dom'

const dummyImage = 'https://dummyimage.com/1600x1600/425257/ffffff&text=dummy+image'

class Post extends Component {
  state = {
    show: false,
    title: '',
    body: '',
  }

  showForm = (value, item) => () => {
    this.setState({
      show: value,
      title: item.title,
      body: item.body,
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  submitPost = (item, value) => () => {
    const {
      title,
      body,
    } = this.state

    const {
      onEditPost,
    } = this.props

    const objectToSend = {
      id: item.id,
      userId: item.userId,
      title,
      body,
    }

    onEditPost(objectToSend)
    this.setState({
      show: value,
    })
  }

  render() {
    const {
      items,
      onDelete,
    } = this.props

    const {
      show,
      body,
      title,
    } = this.state

    return (
      <div className={Helpers.mergeCss(Styles.row, Styles.marginTop3)}>
        {items.map(item => (
          <Fragment key={item.id}>
            {item.id === 101
              && (
              <div
                className={Helpers.mergeCss(
                  Styles.linkNoStyle,
                  Styles.col,
                  Styles.w6,
                )}
                to={`/post/${item.id}`}
              >
                <div className={Helpers.mergeCss(
                  Styles.card,
                  Styles.border0,
                  Styles.boxShadow,
                  Styles.marginBottom4,
                )}
                >
                  <img alt="" src={dummyImage} className={Styles.imgBigPosts} />
                  <div className={Styles.cardBody}>
                    <div className={Styles.row}>
                      {!show && (
                      <div className={Helpers.mergeCss(Styles.col, Styles.w8)}>
                        {item.title}
                      </div>
                      )}
                      {show
                    && (
                    <div className={Styles.col}>
                      <input
                        className={Helpers.mergeCss(Styles.formControl,
                          Styles.padding0,
                          Styles.borderSoft)}
                        value={title}
                        name="title"
                        onChange={this.onChange}
                      />
                    </div>
                    )
                      }
                      <div className={Helpers.mergeCss(
                        Styles.col,
                        Styles.w4,
                        Styles.textRight,
                      )}
                      >
                        <button
                          className={Helpers.mergeCss(
                            Styles.btn,
                            Styles.btnEdit,
                          )}
                          type="button"
                          onClick={this.showForm(true, item)}
                        >
                          <i className="la la-edit" />
                        </button>
                        <button
                          className={Helpers.mergeCss(
                            Styles.marginLeft2,
                            Styles.btn,
                            Styles.btnDelete,
                          )}
                          type="button"
                          onClick={onDelete(item)}
                        >
                          <i className="la la-trash" />
                        </button>
                      </div>
                    </div>
                    {!show && (
                    <span className={Helpers.mergeCss(Styles.textRead,
                      Styles.dBlock,
                      Styles.marginTop3,
                      Styles.threeRow)}
                    >
                      {item.body}
                    </span>
                    )}
                    {show
                    && (
                    <div>
                      <textarea
                        className={Helpers.mergeCss(Styles.formControl,
                          Styles.padding0,
                          Styles.borderSoft)}
                        value={body}
                        name="body"
                        onChange={this.onChange}
                      />
                      <button
                        type="button"
                        onClick={this.submitPost(item, false)}
                        className={Helpers.mergeCss(
                          Styles.btnDark,
                          Styles.marginTop3,
                          Styles.boxShadow,
                        )}
                      >
                        {I18n.t('post.post')}
                      </button>
                    </div>
                    )
                  }
                  </div>
                </div>
              </div>
              )}
            {item.id !== 101
              && (
              <Link
                className={Helpers.mergeCss(
                  Styles.linkNoStyle,
                  Styles.col,
                  Styles.w6,
                )}
                to={`/post/${item.id}`}
              >
                <div className={Helpers.mergeCss(
                  Styles.card,
                  Styles.border0,
                  Styles.boxShadow,
                  Styles.marginBottom4,
                )}
                >
                  <img alt="" src={dummyImage} className={Styles.imgBigPosts} />
                  <div className={Styles.cardBody}>
                    <div className={Styles.row}>
                      <div className={Helpers.mergeCss(Styles.col, Styles.w8)}>
                        {item.title}
                      </div>
                      {item.id === 101
                      && (
                      <div className={Helpers.mergeCss(Styles.col, Styles.w4)}>
                        <button
                          className={Helpers.mergeCss(
                            Styles.btn,
                            Styles.btnEdit,
                          )}
                          type="button"
                          onClick={this.showForm(true, item)}
                        >
                          <i className="la la-edit" />
                        </button>
                        <button
                          className={Helpers.mergeCss(
                            Styles.marginLeft2,
                            Styles.btn,
                            Styles.btnDelete,
                          )}
                          type="button"
                          onClick={onDelete(item)}
                        >
                          <i className="la la-trash" />
                        </button>
                      </div>
                      )
                    }
                    </div>
                    <span className={Helpers.mergeCss(Styles.textRead,
                      Styles.dBlock,
                      Styles.marginTop3,
                      Styles.threeRow)}
                    >
                      {item.body}
                    </span>
                  </div>
                </div>
              </Link>
              )}
          </Fragment>
        ))}
      </div>
    )
  }
}

Post.propTypes = {
  items: PropTypes.array,
  onEditPost: PropTypes.func,
  onDelete: PropTypes.func,
}

Post.defaultProps = {
  items: [],
  onEditPost: null,
  onDelete: null,
}

export default Post
