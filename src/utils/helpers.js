import { css } from 'emotion'

function mergeCss(...options) {
  return css`
    ${options.map(option => option)}
  `
}

export default {
  mergeCss,
}
