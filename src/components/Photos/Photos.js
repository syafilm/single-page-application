import React from 'react'
import PropTypes from 'prop-types'
import {
  Styles,
  Helpers,
  I18n,
} from 'utils'

const Photos = ({
  photos,
  getDetailPhoto,
}) => (
  <div className={Helpers.mergeCss(Styles.dBlock, Styles.marginTop3)}>
    <div className={Styles.row}>
      {photos.map(item => (
        <div
          key={item.id}
          className={Helpers.mergeCss(
            Styles.linkNoStyle,
            Styles.col,
            Styles.w3,
          )}
          role="presentation"
          onClick={getDetailPhoto(true, item.id)}
        >
          <div className={Helpers.mergeCss(
            Styles.card,
            Styles.border0,
            Styles.boxShadow,
            Styles.marginBottom4,
          )}
          >
            <img alt="" src={item.thumbnailUrl} className={Styles.imgBigPosts} />
            <div className={Styles.cardBody}>
              <h4 className={Helpers.mergeCss(Styles.marginBottom2)}>
                {I18n.t('profile.image', { number: item.id })}
              </h4>
              <span className={Helpers.mergeCss(Styles.textRead,
                Styles.dBlock,
                Styles.threeRow)}
              >
                {item.title}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

Photos.propTypes = {
  photos: PropTypes.array,
  getDetailPhoto: PropTypes.func,
}

Photos.defaultProps = {
  photos: [],
  getDetailPhoto: null,
}

export default Photos
