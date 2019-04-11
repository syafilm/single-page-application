
import React from 'react'
import PropTypes from 'prop-types'
import {
  Styles,
  Helpers,
  I18n,
} from 'utils'

const Albums = ({
  albums,
  getDetailAlbum,
}) => (
  <div className={Styles.dBlock}>
    <h4 className={Styles.marginTop4}>
      {I18n.t('profile.album')}
    </h4>
    <div className={Helpers.mergeCss(Styles.dBlock, Styles.marginTop3)}>
      <div className={Styles.row}>
        {albums.map(item => (
          <div
            key={item.id}
            onClick={getDetailAlbum(true, item.id)}
            className={Helpers.mergeCss(Styles.col, Styles.w6, Styles.linkNoStyle)}
            role="button"
            tabIndex="0"
          >
            <div className={Helpers.mergeCss(Styles.card,
              Styles.border0,
              Styles.boxShadow,
              Styles.marginBottom3)}
            >
              <div className={Styles.cardBody}>
                {I18n.t('profile.number', { number: item.id })}
                <span className={Helpers.mergeCss(Styles.textRead,
                  Styles.dBlock,
                  Styles.marginTop3,
                  Styles.twoRow)}
                >
                  {item.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

Albums.propTypes = {
  albums: PropTypes.array,
  getDetailAlbum: PropTypes.func,
}

Albums.defaultProps = {
  albums: [],
  getDetailAlbum: null,
}

export default Albums
