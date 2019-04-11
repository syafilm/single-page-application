import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  Styles,
  Helpers,
  I18n,
  Constants,
} from 'utils'
import {
  Header,
  Footer,
  Comments,
  Loading,
} from 'components'

import {
  ApiPosts,
  ApiUsers,
  ApiComments,
} from 'api'

import { Link } from 'react-router-dom'

import userImage from 'images/user.png'

const dummyImage = 'https://dummyimage.com/1600x1600/425257/ffffff&text=dummy+image'
const newUser = 'New User'
const newUserEmail = 'newuser@newuser.com'

class Post extends Component {
  state = {
    post: null,
    loading: true,
    comments: [],
    comment: '',
    showFormEmail: false,
    showFormUsername: false,
    userName: newUser,
    userEmail: newUserEmail,
  }

  componentDidMount() {
    this.getDefaultData()
  }

  getDefaultData = async () => {
    const {
      match,
    } = this.props

    await ApiPosts.show(match.params.id).then((response) => {
      this.setState({
        post: response.data,
      })
    })

    this.getDefaultDataUser()
  }

  getDefaultDataUser = async () => {
    const {
      post,
    } = this.state

    await ApiUsers.show(post.userId).then((response) => {
      this.setState({
        user: response.data,
      })
    })

    await ApiComments.index(post.userId).then((response) => {
      this.setState({
        loading: false,
        comments: response.data,
      })
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  submitComment = value => async () => {
    const {
      comment,
      comments,
      userName,
      userEmail,
    } = this.state

    const objectToSend = {
      postId: value,
      name: userName,
      email: userEmail,
      body: comment,
    }

    const { data } = await ApiComments.create(objectToSend)
    const newComments = [data].concat(comments)
    this.setState({
      comment: '',
      userName: newUser,
      userEmail: newUserEmail,
      comments: newComments,
    })
  }

  changeInput = (type, value) => (e) => {
    if (e.target.value === 0) {
      this.setState({
        userName: newUser,
        userEmail: newUserEmail,
        [type]: value,
      })
    }
    this.setState({
      [type]: value,
    })
  }

  onEditComment = async (item) => {
    const {
      comments,
    } = this.state

    const id = comments.findIndex(i => (item.email === i.email))

    const newComments = [
      ...comments.slice(0, id),
      item,
      ...comments.slice(id + 1),
    ]

    await ApiComments.update(item.id, item).then(() => {
      this.setState({
        comments: newComments,
      })
    })
  }

  onDelete = item => async () => {
    const {
      comments,
    } = this.state

    const newComments = comments.filter(data => data.email !== item.email)

    await ApiComments.destroy(item.id).then(() => {
      this.setState({
        comments: newComments,
      })
    })
  }

  renderContent = () => {
    const {
      post,
      user,
      comments,
      comment,
      userName,
      userEmail,
      showFormEmail,
      showFormUsername,
    } = this.state

    return (
      <Fragment>
        <Header menu={Constants.navbarMenu} />
        <div className={Styles.container}>
          <div className={Helpers.mergeCss(Styles.row, Styles.justifyContentCenter)}>
            <div className={Helpers.mergeCss(Styles.col, Styles.w9)}>
              <div className={
                  Helpers.mergeCss(Styles.card,
                    Styles.boxShadow,
                    Styles.border0,
                    Styles.marginTop4)}
              >
                <img alt="" src={dummyImage} className={Styles.imgBigPost} />
                <div className={Styles.cardBody}>
                  <Link
                    className={Helpers.mergeCss(Styles.linkNoStyle, Styles.dFlex, Styles.linkPost)}
                    to={`/@${user.username}`}
                  >
                    <img alt="" src={userImage} className={Styles.imgTinyAvaRadius} />
                    <div className={Styles.dBlock}>
                      <h4 className={Helpers.mergeCss(
                        Styles.marginLeft3,
                        Styles.marginBottom,
                      )}
                      >
                        {user.name}
                      </h4>
                      <span className={Helpers.mergeCss(
                        Styles.marginLeft3,
                        Styles.dBlock,
                        Styles.textRead,
                      )}
                      >
                        {user.email}
                      </span>
                    </div>
                  </Link>
                  <h2 className={Helpers.mergeCss(
                    Styles.textMuted,
                    Styles.marginTop3,
                    Styles.marginBottom3,
                  )}
                  >
                    {post.title}
                  </h2>
                  <span className={Helpers.mergeCss(Styles.dBlock, Styles.textRead)}>
                    {post.body}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={Helpers.mergeCss(
            Styles.marginTop4,
            Styles.row,
            Styles.justifyContentCenter,
          )}
          >
            <div className={Helpers.mergeCss(Styles.col, Styles.w9)}>
              <h3>
                {I18n.t('post.response')}
              </h3>
              <div className={Helpers.mergeCss(Styles.card,
                Styles.boxShadow,
                Styles.border0,
                Styles.marginTop3,
                Styles.marginBottom4)}
              >
                <div className={Styles.cardBody}>
                  <div className={Helpers.mergeCss(
                    Styles.dFlex,
                    Styles.linkPost,
                  )}
                  >
                    <img alt="" src={userImage} className={Styles.imgTinyAvaRadius} />
                    <div className={Helpers.mergeCss(Styles.dBlock, Styles.formWrapper)}>
                      {!showFormUsername && (
                      <div
                        role="presentation"
                        className={Helpers.mergeCss(
                          Styles.marginLeft3,
                          Styles.marginBottom,
                          Styles.fontH4,
                        )}
                        onClick={this.changeInput('showFormUsername', true)}
                      >
                        {userName}
                      </div>
                      )}
                      {showFormUsername && (
                      <input
                        className={Helpers.mergeCss(Styles.formControl,
                          Styles.marginLeft3,
                          Styles.padding0,
                          Styles.borderSoft)}
                        name="userName"
                        onChange={this.onChange}
                        onBlur={this.changeInput('showFormUsername', false)}
                        value={userName}
                      />
                      )}
                      {!showFormEmail && (
                      <span
                        role="presentation"
                        className={Helpers.mergeCss(Styles.marginLeft3,
                          Styles.dBlock,
                          Styles.textRead)}
                        onClick={this.changeInput('showFormEmail', true)}
                      >
                        {userEmail}
                      </span>
                      )}
                      {showFormEmail && (
                      <input
                        className={Helpers.mergeCss(Styles.formControl,
                          Styles.marginLeft3,
                          Styles.padding0,
                          Styles.borderSoft)}
                        name="userEmail"
                        onChange={this.onChange}
                        onBlur={this.changeInput('showFormEmail', false)}
                        value={userEmail}
                      />
                      )}
                    </div>
                  </div>
                  <textarea
                    className={Helpers.mergeCss(
                      Styles.marginTop3,
                      Styles.formControl,
                      Styles.formControlTextarea,
                    )}
                    value={comment}
                    name="comment"
                    placeholder={I18n.t('post.comment-here')}
                    onChange={this.onChange}
                  />
                  <button
                    type="button"
                    onClick={this.submitComment(post.id)}
                    className={Helpers.mergeCss(
                      Styles.btnDark,
                      Styles.marginTop3,
                      Styles.boxShadow,
                    )}
                  >
                    {I18n.t('post.comment')}
                  </button>
                </div>
              </div>
              <Comments
                onDelete={this.onDelete}
                onEditComment={this.onEditComment}
                comments={comments}
              />
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    )
  }

  render() {
    const {
      loading,
    } = this.state

    if (loading) {
      return (
        <div>
          <Loading />
        </div>
      )
    }

    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

Post.propTypes = {
  match: PropTypes.object,
}

Post.defaultProps = {
  match: {},
}

export default Post
