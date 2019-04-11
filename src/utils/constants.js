import { I18n } from 'utils'

const navbarMenu = [
  {
    id: 0,
    title: I18n.t('menu.woman'),
    link: '/woman',
  },
  {
    id: 1,
    title:
    I18n.t('menu.man'),
    link: '/man',
  },
  {
    id: 2,
    title: I18n.t('menu.login'),
    link: '/login',
  },
  {
    id: 3,
    title: I18n.t('menu.register'),
    link: '/register',
  },
]

export default {
  navbarMenu,
}
