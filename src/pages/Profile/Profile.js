import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  Footer,
  Modal,
  Posts,
  Photos,
  Loadmore,
  Loading,
  Albums,
} from 'components'

import {
  Styles,
  Helpers,
  I18n,
} from 'utils'

import {
  ApiUsers,
  ApiAlbums,
  ApiPhotos,
} from 'api'

import userImage from 'images/user.png'

import { Link } from 'react-router-dom'

class Profile extends Component {
  state = {
    user: null,
    albums: [],
    posts: [],
    photos: [],
    loading: true,
    detailAlbum: false,
    album: null,
    loadingPhotos: true,
    totalPhoto: null,
    paginate: 1,
    showModal: false,
    photo: null,
    loadingDetailPhoto: true,
    showButton: false,
  }

  componentDidMount() {
    this.getDefaultData()
  }

  getDefaultData = async () => {
    const {
      location,
    } = this.props

    const username = location.pathname.substring(2)
    await ApiUsers.show(username).then((response) => {
      this.setState({
        user: response.data[0],
      })
    })

    this.getPostsandAlbums()
  }

  getPostsandAlbums = async () => {
    const {
      user,
    } = this.state

    await ApiUsers.albums(user.id).then((response) => {
      this.setState({
        albums: response.data,
      })
    })
    await ApiUsers.posts(user.id).then((response) => {
      this.setState({
        loading: false,
        posts: response.data,
      })
    })
  }

  getDetailPhoto = (status, value) => async () => {
    this.setState({
      showModal: status,
    })

    await ApiPhotos.detail(value).then((response) => {
      this.setState({
        loadingDetailPhoto: false,
        photo: response.data,
      })
    })
  }

  getDetailAlbum = (status, value) => async () => {
    this.setState({
      detailAlbum: status,
    })

    await ApiAlbums.show(value).then((response) => {
      this.setState({
        album: response.data,
      })
    })

    this.getAllPhoto()
  }

  getAllPhoto = async () => {
    const {
      album,
      paginate,
    } = this.state

    await ApiPhotos.getTotalPhotos(album.id).then((response) => {
      this.setState({
        totalPhoto: response.data.length,
      })
    })

    await ApiPhotos.show(album.id, paginate).then((response) => {
      this.setState({
        loadingPhotos: false,
        photos: response.data,
      })
    })
  }

  getLoad = number => async () => {
    const {
      photos,
      paginate,
      album,
    } = this.state

    const value = paginate + number
    this.setState({
      paginate: value,
    })

    const { data } = await ApiPhotos.show(album.id, value)
    const newPhotos = photos.concat(data)
    this.setState({
      photos: newPhotos,
    })
  }

  onCloseModal = value => () => {
    this.setState({
      showModal: value,
      photo: null,
      loadingDetailPhoto: true,
    })
  }

  renderInsideContent = () => {
    const {
      posts,
      detailAlbum,
      photos,
      loadingPhotos,
      album,
      totalPhoto,
      showButton,
    } = this.state

    const currentTotal = photos.length

    if (detailAlbum && !loadingPhotos) {
      return (
        <div className={Helpers.mergeCss(Styles.col, Styles.w9)}>
          <div className={Helpers.mergeCss(Styles.row, Styles.marginTop4)}>
            <div className={Styles.col}>
              <h4>
                {I18n.t('profile.detail-album', { number: album.id })}
              </h4>
              <Photos
                getDetailPhoto={this.getDetailPhoto}
                photos={photos}
              />
              <Loadmore
                totalPost={totalPhoto}
                currentTotal={currentTotal}
                onLoadmore={this.getLoad}
              />
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className={Helpers.mergeCss(Styles.col, Styles.w9)}>
        <div className={Styles.row}>
          <div className={Helpers.mergeCss(Styles.col, Styles.w12)}>
            <div className={Helpers.mergeCss(Styles.row, Styles.marginTop4)}>
              <div className={Styles.col}>
                <Posts show={showButton} onCloseModal={this.onCloseModal} items={posts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderContent = () => {
    const {
      user,
      albums,
      showModal,
      photo,
      loadingDetailPhoto,
    } = this.state

    return (
      <Fragment>
        <div className={Styles.bgDark} />
        <div className={Styles.bgLight}>
          <div className={Styles.container}>
            <div className={Styles.row}>
              <div className={Helpers.mergeCss(Styles.col, Styles.w3)}>
                <div className={Helpers.mergeCss(Styles.dFlex,
                  Styles.w100,
                  Styles.h100,
                  Styles.justifyContentCenter)}
                >
                  <img alt="" src={userImage} className={Styles.imgBigAvaRadius} />
                </div>
              </div>
              <div className={Helpers.mergeCss(Styles.col, Styles.w7)}>
                <h3 className={Styles.marginTop3}>
                  {user.name}
                </h3>
              </div>
              <div className={Helpers.mergeCss(Styles.col, Styles.w2)}>
                <div className={Helpers.mergeCss(Styles.dFlex, Styles.justifyContentEnd)}>
                  <Link to="/" className={Styles.linkNoStyle}>
                    <h3 className={Styles.marginTop3}>
                      {I18n.t('profile.home')}
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.container}>
            <div className={Styles.row}>
              <div className={Helpers.mergeCss(Styles.col, Styles.w3)}>
                <div className={Styles.dBlock}>
                  <h4 className={Styles.marginTop4}>
                    {I18n.t('profile.info')}
                  </h4>
                  <div className={Helpers.mergeCss(Styles.card,
                    Styles.boxShadow,
                    Styles.border0,
                    Styles.marginTop3)}
                  >
                    <div className={Styles.cardBody}>
                      <ul className={Helpers.mergeCss(Styles.ulUnstyled, Styles.textMuted)}>
                        <li className={Styles.marginBottom3}>
                          {I18n.t('profile.email')}
                          <span className={Helpers.mergeCss(
                            Styles.textRead,
                            Styles.dBlock,
                            Styles.marginTop2,
                          )}
                          >
                            {user.email}
                          </span>
                        </li>
                        <li className={Styles.marginBottom3}>
                          {I18n.t('profile.phone')}
                          <span className={Helpers.mergeCss(
                            Styles.textRead,
                            Styles.dBlock,
                            Styles.marginTop2,
                          )}
                          >
                            {user.phone}
                          </span>
                        </li>
                        <li className={Styles.marginBottom3}>
                          {I18n.t('profile.website')}
                          <span className={Helpers.mergeCss(
                            Styles.textRead,
                            Styles.dBlock,
                            Styles.marginTop2,
                          )}
                          >
                            {user.website}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Albums
                  getDetailAlbum={this.getDetailAlbum}
                  albums={albums}
                />
              </div>
              {this.renderInsideContent()}
            </div>
          </div>
          <Footer />
        </div>
        {!loadingDetailPhoto && (
        <Modal
          onClose={this.onCloseModal}
          show={showModal}
          content={<img alt="" src={photo.url} />}
        />
        )}
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

Profile.propTypes = {
  location: PropTypes.object,
}

Profile.defaultProps = {
  location: {},
}

export default Profile
