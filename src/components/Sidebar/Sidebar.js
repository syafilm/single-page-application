
import React from 'react'
import PropTypes from 'prop-types'
import {
  Styles,
  Helpers,
  I18n,
} from 'utils'

import { Link } from 'react-router-dom'
import userImage from 'images/user.png'

const Sidebar = ({
  items,
}) => (
  <div>
    <h4>
      {I18n.t('home.active-user')}
    </h4>
    {
      items.map(item => (
        <div
          key={item.id}
          className={Helpers.mergeCss(
            Styles.card,
            Styles.border0,
            Styles.boxShadow,
            Styles.marginTop3,
          )}
        >
          <div className={Helpers.mergeCss(Styles.cardBody, Styles.padding2)}>
            <Link
              className={Styles.linkNoStyle}
              to={`/@${item.username}`}
            >
              <div className={Helpers.mergeCss(
                Styles.media,
                Styles.alignItemsCenter,
              )}
              >
                <img
                  alt=""
                  src={userImage}
                  className={Helpers.mergeCss(
                    Styles.imgTinyAvaRadius,
                  )}
                />
                <div className={Helpers.mergeCss(
                  Styles.mediaBody,
                  Styles.marginLeft3,
                )}
                >
                  {item.name}
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))
    }
  </div>
)

Sidebar.propTypes = {
  items: PropTypes.array,
}

Sidebar.defaultProps = {
  items: [],
}

export default Sidebar
