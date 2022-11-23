import React from 'react'
import css from '../whyus/WhyUs.module.css'
import event from '../../assets/images/event.png'
import facility from '../../assets/images/dumbbell.png'
import wireless from '../../assets/images/wifi.png'
import global from '../../assets/images/internet.png'
import comfort from '../../assets/images/armchair.png'

export const WhyUs = () => {
  return (
    <div className={css.container}>
        <div className={css.left_whyus}>
            <h3>
            Why Choose Us?
            </h3>
            <h2>
            The benefits that will
            make you comfort
            </h2>
        </div>
        <div className={css.benefit_outline}>
            <div className={css.benefit_item}>
                <img src={event} alt="" />
                <h4>Community Events</h4>
                <p>Allowing cost savings and convenience 
                    through the use of common infrastructures.
                    </p>
            </div>
            <div>
                <img src={facility} alt="" />
                <h4>Exercise Facilities</h4>
                <p>Allowing cost savings and convenience 
                    through the use of common infrastructures.
                    </p>
            </div>
            <div>
                <img src={wireless} alt="" />
                <h4>High-Speed Wireless</h4>
                <p>Allowing cost savings and convenience 
                    through the use of common infrastructures.
                    </p>
            </div>
            <div>
                <img src={global} alt="" />
                <h4>Global Availability</h4>
                <p>Allowing cost savings and convenience 
                    through the use of common infrastructures.
                    </p>
            </div>
            <div>
                <img src={comfort} alt="" />
                <h4>Comfort Lounges</h4>
                <p>Allowing cost savings and convenience 
                    through the use of common infrastructures.
                    </p>
            </div>
        </div>
    </div>
  )
}