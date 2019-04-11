import React from 'react'
import {
  Styles,
  I18n,
  Helpers,
} from 'utils'

const Footer = () => (
  <footer className={Styles.dBlock}>
    <div className={Styles.navbarFooter}>
      <div className={Styles.container}>
        <div className={Styles.row}>
          <div className={Styles.col}>
            <span className={Styles.textMuted}>
              {I18n.t('label.copyright')}
            </span>
          </div>
          <div className={Helpers.mergeCss(Styles.col, Styles.textRight)}>
            <div
              className={Styles.textMuted}
              dangerouslySetInnerHTML={{ __html: I18n.t('copy.made-width', { name: 'Syafil' }) }}
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
