import React from 'react'
import {
  Styles,
} from 'utils'

const back = 'back'
const front = 'front'
const width = '16px'
const height = '12px'
const point1 = '1 6 4 6 6 11 10 1 12 6 15 6'
const point2 = '1 6 4 6 6 11 10 1 12 6 15 6'

const Footer = () => (
  <div className={Styles.indicator}>
    <svg width={width} height={height}>
      <polyline id={back} points={point1} />
      <polyline id={front} points={point2} />
    </svg>
  </div>
)

export default Footer
