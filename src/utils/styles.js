import { css } from 'emotion'

const formControl = css`
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:focus{
    outline: 0;
    border: 1px solid transparent !important;
    box-shadow: 0 0px 0px 0 rgba(0,0,0,0.5);
  }
`

const formControlTextarea = css`
  height: 150px;
`

const card = css`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
`

const cardBody = css`
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
`

const navbar = css`
  display: block;
  height: 55px;
  background: #fff;
  box-shadow: 0 10px 10px -10px rgba(33,43,55,0.1);
`

const navbarFooter = css`
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #fff;
  margin-top: 10px;
`

const navbarMenu = css`
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  -ms-flex-pack: start;
  justify-content: flex-start;
  display: flex;
  ul{
    &:first-of-type {
      li{
        &:first-of-type{
          margin-left: 0px !important;
        }
      }
    }

    li{
      margin-left: 15px;
      margin-right:15px;
      a{
        text-decoration: none !important;
        color: #000;
      }
    }

    &:last-child{
      li{
        display: flex;
        align-items: center;
        &:last-child{
          margin-right: 0px;
          a{
            display: inline-block;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            border: 1px solid transparent;
            padding: .375rem .75rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: .25rem;
            transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            background: #000 !important;
            border: 1px solid #000 !important;
            color: #fff !important;
            border-radius: 30px;
          }
        }
      }
    }
  }
`

const container = css`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 576px){
    max-width: 540px;
  }

  @media (min-width: 768px){
    max-width: 720px;
  }

  @media (min-width: 992px){
    max-width: 960px;
  }

  @media (min-width: 1200px){
    max-width: 1200px;
  }
`
const row = css`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

const col = css`
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`

const flexRow = css`
  -ms-flex-direction: row!important;
  flex-direction: row!important;
`

const border0 = css`
  border: 0px !important;
`

const ulUnstyled = css`
  padding-left: 0;
  list-style: none;
  margin: 0px;
  display: inline-block;
`

const ulInline = css`
  padding-left: 0;
  list-style: none;
  margin: 0px;
  display: inline-block;

  li{
    display: inline-block;
    margin-right: .5rem;

    &:last-child{
      margin-right: 0px;
    }
  }
`

const modal = css`
  top: 0;
  left: 0;
  z-index: 1050;
  display: block;
  width: 100%;
  height: 100%;
  position: fixed !important;
  align-item: center !important;
  justify-content: center !important;
  outline: 0;
  z-index: 1072;
  overflow: unset !impotant;
  transition: opacity .15s linear;
  position: relative;
  display: flex;
  align-items: center;
`

const modalDialog = css`
  position: relative;
  width: auto;
  margin: .5rem;
  pointer-events: none;
  @media (min-width: 576px){
    width: 600px;
    height: auto !important;
    margin: 1.75rem auto;
  }
`

const modalContent = css`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: .3rem;
  outline: 0;
  box-shadow: 0 10px 10px -10px rgba(33,43,55,0.1);
`

const modalHeader = css`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: .3rem;
  border-top-right-radius: .3rem;
`

const modalBody = css`
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
`

const modalFooter = css`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: .3rem;
  border-bottom-left-radius: .3rem;
`

const modalBackdrop = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`

const mlAuto = css`
  margin-left: auto!important;
`

const mrAuto = css`
  margin-right: auto!important;
`

const dBlock = css`
  display: block!important;
`

const dInlineBlock = css`
  display: inline-block!important;
`

const dFlex = css`
  display: -ms-flexbox!important;
  display: flex!important;
`

const alignItemsStart = css`
  -ms-flex-align: start!important;
  align-items: flex-start!important;
`

const alignItemsCenter = css`
  -ms-flex-align: center!important;
  align-items: center!important;
`

const alignItemsEnd = css`
  -ms-flex-align: end!important;
  align-items: flex-end!important;
`

const justifyContentStart = css`
-ms-flex-pack: start!important;
justify-content: flex-start!important;
`

const justifyContentCenter = css`
  -ms-flex-pack: center!important;
  justify-content: center!important;
`

const justifyContentEnd = css`
  -ms-flex-pack: end!important;
  justify-content: flex-end!important;
`

const w1 = css`
  -ms-flex: 0 0 8.333333%;
  flex: 0 0 8.333333%;
  max-width: 8.333333%;
`

const w2 = css`
  -ms-flex: 0 0 16.666667%;
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
`

const w3 = css`
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
`

const w4 = css`
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
`

const w5 = css`
  -ms-flex: 0 0 41.666667%;
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
`

const w6 = css`
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
`

const w7 = css`
  -ms-flex: 0 0 58.333333%;
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
`

const w8 = css`
  -ms-flex: 0 0 66.666667%;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
`

const w9 = css`
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%;
`

const w10 = css`
  -ms-flex: 0 0 83.333333%;
  flex: 0 0 83.333333%;
  max-width: 83.333333%;
`

const w11 = css`
  -ms-flex: 0 0 91.666667%;
  flex: 0 0 91.666667%;
  max-width: 91.666667%;
`

const w12 = css`
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
`

const w100 = css`
  width: 100%;
`

const h100 = css`
  height: 100%;
`

const margin0 = css`
  margin: 0!important;
`

// margin top
const marginTop = css`
  margin-top: .25rem!important;
`

const marginTop2 = css`
  margin-top: .5rem!important;
`

const marginTop3 = css`
  margin-top: 1rem!important;
`

const marginTop4 = css`
  margin-top: 2rem!important;
`

const marginTop5 = css`
  margin-top: 4rem!important;
`

const padding0 = css`
  padding: 0!important;
`

// padding top
const paddingTop = css`
  padding-top: .25rem!important;
`

const paddingTop2 = css`
  padding-top: .5rem!important;
`

const paddingTop3 = css`
  padding-top: 1rem!important;
`

const paddingTop4 = css`
  padding-top: 2rem!important;
`

const paddingTop5 = css`
  padding-top: 4rem!important;
`

// margin bottom
const marginBottom = css`
  margin-bottom: .25rem!important;
`

const marginBottom2 = css`
  margin-bottom: .5rem!important;
`

const marginBottom3 = css`
  margin-bottom: 1rem!important;
`

const marginBottom4 = css`
  margin-bottom: 2rem!important;
`

const marginBottom5 = css`
  margin-bottom: 4rem!important;
`

// padding bottom
const paddingBottom = css`
  padding-bottom: .25rem!important;
`

const paddingBottom2 = css`
  padding-bottom: .5rem!important;
`

const paddingBottom3 = css`
  padding-bottom: 1rem!important;
`

const paddingBottom4 = css`
  padding-bottom: 2rem!important;
`

const paddingBottom5 = css`
  padding-bottom: 4rem!important;
`

// margin right
const marginRight = css`
  margin-right: .25rem!important;
`

const marginRight2 = css`
  margin-right: .5rem!important;
`

const marginRight3 = css`
  margin-right: 1rem!important;
`

const marginRight4 = css`
  margin-right: 2rem!important;
`

const marginRight5 = css`
  margin-right: 4rem!important;
`

// padding right
const paddingRight = css`
  padding-right: .25rem!important;
`

const paddingRight2 = css`
  padding-right: .5rem!important;
`

const paddingRight3 = css`
  padding-right: 1rem!important;
`

const paddingRight4 = css`
  padding-right: 2rem!important;
`

const paddingRight5 = css`
  padding-right: 4rem!important;
`

// margin left
const marginLeft = css`
  margin-left: .25rem!important;
`

const marginLeft2 = css`
  margin-left: .5rem!important;
`

const marginLeft3 = css`
  margin-left: 1rem!important;
`

const marginLeft4 = css`
  margin-left: 2rem!important;
`

const marginLeft5 = css`
  margin-left: 4rem!important;
`

// padding left
const paddingLeft = css`
  padding-left: .25rem!important;
`

const paddingLeft2 = css`
  padding-left: .5rem!important;
`

const paddingLeft3 = css`
  padding-left: 1rem!important;
`

const paddingLeft4 = css`
  padding-left: 2rem!important;
`

const paddingLeft5 = css`
  padding-left: 4rem!important;
`

// padding
const padding = css`
  padding: .25rem!important;
`

const padding2 = css`
  padding: .5rem!important;
`

const padding3 = css`
  padding: 1rem!important;
`

const padding4 = css`
  padding: 2rem!important;
`

const padding5 = css`
  padding: 4rem!important;
`

// text
const textRead = css`
  color: rgba(0,0,0,.38)!important;
`

const textMuted = css`
  color: #6c757d!important;
  a{
    color: #6c757d!important;
  }
`

const textRight = css`
  text-align: right!important;
`

const textLeft = css`
  text-align: left!important;
`

const textCenter = css`
  text-align: center!important;
`

// media
const media = css`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: start;
  align-items: flex-start;
`

const mediaBody = css`
  -ms-flex: 1;
  flex: 1;
`

//button
const btnDark = css`
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  background: #000 !important;
  border: 1px solid #000 !important;
  color: #fff !important;
  border-radius: 30px;
  cursor: pointer !important;
`

const btn = css`
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  background: #000 !important;
  border: 1px solid #000 !important;
  color: #fff !important;
  border-radius: 30px;
`

const btnDelete = css`
  padding: 0px !important;
  background: red !important;
  border: 0px solid #000 !important;
  color: #fff !important;
  border-radius: 30px !important;
  width: 25px !important;
  height: 25px !important;
`

const btnEdit = css`
  padding: 0px !important;
  background: green !important;
  border: 0px solid #000 !important;
  color: #fff !important;
  border-radius: 30px !important;
  width: 25px !important;
  height: 25px !important;
`

const btnClose = css`
  padding: 0px !important;
  background: black !important;
  border: 0px solid #000 !important;
  color: #fff !important;
  border-radius: 30px !important;
  width: 23px !important;
  height: 23px !important;
  position: absolute !important;
  top: -10px;
  right: -10px;
  z-index: 1111;
`

// custom css
const imgTinyAvaRadius = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-block;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 1px 4px rgba(0,0,0, .1);
`

const imgTinyHome = css`
  width: auto;
  height: 30px;
`

const boxShadow = css`
  box-shadow: 0 1px 4px rgba(0,0,0, .1);
`

const subTitle = css`
  font-size: 14px;
`

const linkNoStyle = css`
  text-decoration: none;
  color: #000;
  cursor: pointer;
`

const bgDark = css`
  width: 100%;
  background: #000;
  height: 200px;
`

const bgLight = css`
  border-radius: 0px;
  border: 0px;
  min-height: 0;
  background: #fff;
  color: #000;
  box-shadow: 0 3px 6px rgba(0,0,0,0.05);
  margin-bottom: 0px;
  height: 50px;
`

const imgBigAvaRadius = css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: inline-block;
  object-fit: cover;
  object-position: center;
  margin-top: -30px;
  border: 2px solid #fff;
`

const twoRow = css`
  overflow: hidden !important;
  display: -webkit-box !important;
  -webkit-line-clamp: 2 !important;
  -webkit-box-orient: vertical !important;
`

const threeRow = css`
  overflow: hidden !important;
  display: -webkit-box !important;
  -webkit-line-clamp: 3 !important;
  -webkit-box-orient: vertical !important;
`

const imgBigPost = css`
  width: 100%;
  height: 420px;
  object-fit: cover;
  object-position: center;
`

const imgBigPosts = css`
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: center;
`

const linkNavbar = css`
  color: #000;
`

const linkPost = css`
  h4{
    font-size: 14px;
  }
  span{
    font-size: 14px;
  }
`

const indicator = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(6);
  svg{
    & polyline {
      fill: none;
      stroke-width: 1;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    & polyline#back {
      stroke:rgba(0,0,0, 0.5);
    }

    & polyline#front {
      stroke: rgb(0,0,0) !important;
      stroke-dasharray: 12, 36;
      stroke-dashoffset: 48;
      animation: dash 1.2s linear infinite;
    }

  }

  @-moz-keyframes dash {
    62.5% {
      opacity: 0;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
  @-webkit-keyframes dash {
    62.5% {
      opacity: 0;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
  @-o-keyframes dash {
    62.5% {
      opacity: 0;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    62.5% {
      opacity: 0;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
`

const borderSoft = css`
  height: auto !important;
  &:focus{
    border: 1px solid #ced4da !important;
  }
`

const borderSoftGrey = css`
  height: auto !important;
  border: 1px solid #ced4da !important;
  &:focus{
    border: 1px solid #ced4da !important;
  }
`

const formWrapper = css`
  input{
    font-size: 14px;
    &:last-child{
      font-size: 12px;
    }
  }
`

export default {
  // base
  formControl,
  formControlTextarea,
  card,
  cardBody,
  navbar,
  navbarMenu,
  navbarFooter,
  container,
  row,
  col,
  flexRow,

  // border
  border0,

  // list
  ulUnstyled,
  ulInline,

  // display
  dBlock,
  dInlineBlock,
  dFlex,

  // position
  alignItemsStart,
  alignItemsCenter,
  alignItemsEnd,

  // position
  justifyContentStart,
  justifyContentCenter,
  justifyContentEnd,

  // width
  w1,
  w2,
  w3,
  w4,
  w5,
  w6,
  w7,
  w8,
  w9,
  w10,
  w11,
  w12,
  w100,
  h100,
  
  // modal
  modal,
  modalDialog,
  modalContent,
  modalHeader,
  modalBody,
  modalFooter,
  modalBackdrop,

  // margin
  mlAuto,
  mrAuto,
  margin0,
  marginTop,
  marginTop2,
  marginTop3,
  marginTop4,
  marginTop5,
  marginBottom,
  marginBottom2,
  marginBottom3,
  marginBottom4,
  marginBottom5,
  marginRight,
  marginRight2,
  marginRight3,
  marginRight4,
  marginRight5,
  marginLeft,
  marginLeft2,
  marginLeft3,
  marginLeft4,
  marginLeft5,

  // padding
  padding0,
  paddingTop,
  paddingTop2,
  paddingTop3,
  paddingTop4,
  paddingTop5,
  paddingBottom,
  paddingBottom2,
  paddingBottom3,
  paddingBottom4,
  paddingBottom5,
  paddingRight,
  paddingRight2,
  paddingRight3,
  paddingRight4,
  paddingRight5,
  paddingLeft,
  paddingLeft2,
  paddingLeft3,
  paddingLeft4,
  paddingLeft5,
  padding,
  padding2,
  padding3,
  padding4,
  padding5,

  //text
  textRead,
  textMuted,
  textRight,
  textLeft,
  textCenter,

  // media
  media,
  mediaBody,

  //button,
  btn,
  btnDark,
  btnDelete,
  btnEdit,
  btnClose,
  //custom css
  imgTinyAvaRadius,
  imgTinyHome,
  boxShadow,
  subTitle,
  linkNoStyle,
  bgDark,
  bgLight,
  imgBigAvaRadius,
  twoRow,
  threeRow,
  imgBigPost,
  imgBigPosts,
  linkNavbar,
  linkPost,
  indicator,
  borderSoft,
  borderSoftGrey,
  formWrapper,
}