import React from 'react'
import css from '../footer/Footer.module.css'
import facebook from '../../assets/images/Facebook.png'
import twitter from '../../assets/images/Twitter.png'
import dribble from '../../assets/images/Dribbble.png'
import linkedin from '../../assets/images/LinkedIn.png'


export const Footer = () => {
  return (
    <div className={css.container}>
        <div className={css.container2}>
        <div className={css.footer_1}>
            <p>1-space</p>
            <p>
            Men cannot not live by exchanging articles, 
            but producing them. They live by work not trade.
            </p>
        </div>
        <div className={css.footer_company}>
            <p>Company</p>
            <ul>
                <li>Global Localities</li>
                <li>Missions</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Newsroom</li>
            </ul>
        </div>
        <div className={css.footer_partnership}>
            <p>Partnership</p>
            <ul>
                <li>Tasks</li>
                <li>Profile</li>
                <li>Events</li>
                <li>Services</li>
            </ul>
        </div>
        <div className={css.follow_us}>
            <p>Follow us</p>
            <div>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={dribble} alt="" />
                <img src={linkedin} alt="" />
            </div>
        </div>
        </div>
   
      

    </div>
  )
}