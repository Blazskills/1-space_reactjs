import React from 'react'
import css from './Services.module.css'
import main_service_img from '../../assets/images/service_img.png'
import toggle_nav from '../../assets/images/service_nav.png'
import service_tour_play_img from '../../assets/images/service_tour_play.png'
import service_bg from '../../assets/images/bg_img.png'


export const Services = () => {
  return (
    <div className={css.container}>
       <div className={css.service_first_section}>
        <img src={main_service_img} alt="" />
        <img src={toggle_nav} alt="" />
       </div>

       <div className={css.service_second_section}>
        <img className={css.bg_img} src={service_bg} alt="" />
        <h3 className={css.service_header}>services</h3>
        <h1 className={css.service_txt}>
            Solutions designed for 
            all your needs
        </h1>
        <p className={css.service_description}>
        Coworking is an arrangement in which workers of different companies share an office space, 
        allowing cost savings and convenience through the use of common infrastructures, 
        such as equipment, utilities, and receptionist and custodial services, 
        and in some cases refreshments and parcel acceptance services.
        </p>
        <div className={css.service_cta}>
             <button className={css.available_btn}>View Availability</button>
            <div className={css.service_tour}>
                <img className={css.tour_play} src={service_tour_play_img} alt="" />
                <p className={css.tour_text}>3D Tour of Space</p>
            </div> 
        </div>
      
       </div>

    </div>
  )
}
