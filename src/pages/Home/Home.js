import React, { Component, Fragment } from 'react'
import {
  Header,
  Footer,
  Modal,
  Sidebar,
  Posts,
  Loadmore,
  Loading,
} from 'components'

import {
  Styles,
  Helpers,
  I18n,
  Constants,
} from 'utils'

import {
  ApiUsers,
  ApiPosts,
} from 'api'

class Home extends Component {
  state = {
    users: [],
    posts: [],
    paginate: 1,
    loading: true,
    totalPost: null,
    showModal: false,
    title: '',
    body: '',
    showButton: true,
  }

  componentDidMount() {
    this.getDefaultData()
  }

  getDefaultData = async () => {
    const {
      paginate,
    } = this.state

    await ApiUsers.index().then((response) => {
      this.setState({
        users: response.data,
      })
    })

    await ApiPosts.index(paginate).then((response) => {
      this.setState({
        posts: response.data,
      })
    })

    await ApiPosts.getTotalPost().then((response) => {
      this.setState({
        loading: false,
        totalPost: response.data.length,
      })
    })
  }

  getLoad = number => async () => {
    const {
      posts,
      paginate,
    } = this.state

    const value = paginate + number
    this.setState({
      paginate: value,
    })

    const { data } = await ApiPosts.index(value)
    const newPosts = posts.concat(data)
    this.setState({
      posts: newPosts,
    })
  }

  onCloseModal = value => () => {
    this.setState({
      showModal: value,
    })
  }

  submitPost = async () => {
    const {
      title,
      body,
      posts,
    } = this.state

    const objectToSend = {
      userId: 1,
      title,
      body,
    }

    const { data } = await ApiPosts.create(objectToSend)
    const newPosts = [data].concat(posts)
    this.setState({
      showModal: false,
      title: '',
      body: '',
      posts: newPosts,
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onDelete = item => async () => {
    const {
      posts,
    } = this.state

    const newPosts = posts.filter(data => data.id !== item.id)

    await ApiPosts.destroy(item.id).then(() => {
      this.setState({
        posts: newPosts,
      })
    })
  }

  onEditPost = async (item) => {
    const {
      posts,
    } = this.state

    const id = posts.findIndex(i => (item.email === i.email))

    const newPosts = [
      ...posts.slice(0, id),
      item,
      ...posts.slice(id + 1),
    ]

    await ApiPosts.update(item.id, item).then(() => {
      this.setState({
        posts: newPosts,
      })
    })
  }

  render() {
    const {
      users,
      posts,
      loading,
      totalPost,
      showModal,
      title,
      body,
      showButton,
    } = this.state

    const currentTotal = posts.length

    if (loading) {
      return (
        <div>
          <Loading />
        </div>
      )
    }

    return (
      <Fragment>
        <Header menu={Constants.navbarMenu} />
        <div className={Helpers.mergeCss(
          Styles.container,
          Styles.marginTop4,
          Styles.marginBottom4,
        )}
        >
          <div className={Styles.row}>
            <div className={Helpers.mergeCss(Styles.col, Styles.w9)}>
              <Posts
                onEditPost={this.onEditPost}
                onDelete={this.onDelete}
                onCloseModal={this.onCloseModal}
                show={showButton}
                items={posts}
              />
              <Loadmore
                totalPost={totalPost}
                currentTotal={currentTotal}
                onLoadmore={this.getLoad}
              />
            </div>
            <div className={Helpers.mergeCss(Styles.col, Styles.w3)}>
              <Sidebar items={users} />
            </div>
          </div>
        </div>
        <Footer />
        <Modal
          onClose={this.onCloseModal}
          show={showModal}
          content={(
            <div className={Helpers.mergeCss(Styles.dBlock, Styles.w12)}>
              <div className={Helpers.mergeCss(Styles.card, Styles.border0)}>
                <div className={Helpers.mergeCss(Styles.cardBody, Styles.border0)}>
                  <h4 className={Styles.marginBottom}>
                    {I18n.t('post.title')}
                  </h4>
                  <input
                    onChange={this.onChange}
                    value={title}
                    name="title"
                    className={Helpers.mergeCss(Styles.formControl, Styles.borderSoftGrey)}
                  />
                  <h4 className={Helpers.mergeCss(Styles.marginBottom,
                    Styles.marginTop3)}
                  >
                    {I18n.t('post.content')}
                  </h4>
                  <textarea
                    className={Helpers.mergeCss(
                      Styles.formControl,
                      Styles.borderSoftGrey,
                    )}
                    onChange={this.onChange}
                    value={body}
                    name="body"
                  />
                  <button
                    type="button"
                    className={Helpers.mergeCss(
                      Styles.btnDark,
                      Styles.marginTop3,
                    )}
                    onClick={this.submitPost}
                  >
                    {I18n.t('post.post')}
                  </button>
                </div>
              </div>
            </div>
          )}
        />
      </Fragment>
    )
  }
}

export default Home
