import React from 'react'
import css from './Brand.module.css'
import google from '../../assets/images/google.png'
import slack from '../../assets/images/slack.png'
import atlassian from '../../assets/images/atlassian.png'
import dropbox from '../../assets/images/dropbox.png'
import shopify from '../../assets/images/shopify.png'


export const Brand = () => {
  return (
    <div className={css.brand_container}>
       <img className={css.brands} src={google} alt="" />
       <img className={css.brands} src={slack} alt="" />
       <img className={css.brands} src={atlassian} alt="" />
       <img className={css.brands} src={dropbox} alt="" />
       <img className={css.brands} src={shopify} alt="" />
    </div>
  )
}
