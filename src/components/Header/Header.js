import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Styles,
  Helpers,
  I18n,
} from 'utils'
import { Link } from 'react-router-dom'

class Header extends Component {
  renderContent = () => (
    <div className={Styles.navbar}>
      <div className={
          Helpers.mergeCss(
            Styles.container,
            Styles.h100,
            Styles.w100,
          )}
      >
        <div className={
            Helpers.mergeCss(
              Styles.row,
              Styles.h100,
              Styles.w100,
            )}
        >
          <div className={
              Helpers.mergeCss(
                Styles.col,
                Styles.h100,
                Styles.w100,
              )}
          >
            <div className={Helpers.mergeCss(
              Styles.navbarMenu,
              Styles.w100,
              Styles.h100,
              Styles.alignItemsCenter,
            )}
            >
              <Link className={Styles.linkNavbar} to="/">
                <h4 className={Helpers.mergeCss(Styles.dInlineBlock, Styles.marginRight3)}>
                  {I18n.t('menu.social-media')}
                </h4>
              </Link>
              <ul className={
                  Helpers.mergeCss(
                    Styles.flexRow,
                    Styles.ulInline,
                    Styles.dFlex,
                  )}
              />
              <ul className={
                  Helpers.mergeCss(
                    Styles.flexRow,
                    Styles.ulInline,
                    Styles.dFlex,
                    Styles.mlAuto,
                  )}
              >
                {this.renderMenuRight()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  renderMenuLeft = () => {
    const {
      menu,
    } = this.props
    const listMenu = menu ? menu.slice(0, 2) : null

    if (listMenu) {
      return (
        listMenu.map(item => (
          <li key={item.id}>
            <Link to={item.link}>
              {item.title}
            </Link>
          </li>
        ))
      )
    }

    return null
  }

  renderMenuRight = () => {
    const {
      menu,
    } = this.props
    const listMenu = menu ? menu.slice(2, 4) : null

    if (listMenu) {
      return (
        listMenu.map(item => (
          <li key={item.id}>
            <Link to={item.link}>
              {item.title}
            </Link>
          </li>
        ))
      )
    }

    return null
  }

  render() {
    return (
      <header>
        {this.renderContent()}
      </header>
    )
  }
}

Header.propTypes = {
  menu: PropTypes.array,
}

Header.defaultProps = {
  menu: [],
}

export default Header
