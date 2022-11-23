import React from "react";
import css from './HeaderHero.module.css'
import hero_sign from '../../assets/images/hero_sign.png'
import city_icon from '../../assets/images/city_pin.png'
import user1 from '../../assets/images/user1.png'
import user2 from '../../assets/images/user2.png'
import user3 from '../../assets/images/user3.png'
import user4 from '../../assets/images/user4.png'
import user5 from '../../assets/images/user5.png'
import user6 from '../../assets/images/user6.png'
import user7 from '../../assets/images/user7.png'
import workspace_img from '../../assets/images/workspace_img.png'

export const HeaderHero = () => {
  return (
  <div className={css.container}> 

      <div className={css.hero_left}>
              {/* left first section */}
              <img className={css.hero_sign} src={hero_sign} alt="" />
              {/* left Second section */}
              <h1 className={css.hero_bg_text}>
                A new way to revolutionise your workspace to yourself
              </h1>
              {/* left third section */}
              <div className={css.shadow_city_location}>
                  <div className={css.city_pin}>
                          <img className={css.pin_city} src={city_icon} alt="" />
                          <p className={css.city_text}>City</p>
                  </div>
                  <p className={css.location_text}>Location</p>
                  <div className={css.btn_body}>
                  <button className={css.shadow_btn}>Schedule Visit</button>

                  </div>

              </div>
              {/* left fourth section */}
              <div className={css.booked_count}>
                  <div className={css.booked_images}>
                        <img className={`${css.userimg} ${css.user1}`} src={user1} alt="" />
                        <img className={`${css.userimg} ${css.user2}`} src={user2} alt="" />
                        <img className={`${css.userimg} ${css.user3}`} src={user3} alt="" />
                        <img className={`${css.userimg} ${css.user4}`} src={user4} alt="" />
                        <img className={`${css.userimg} ${css.user5}`} src={user5} alt="" />
                        <img className={`${css.userimg} ${css.user6}`} src={user6} alt="" />
                        <img className={`${css.userimg} ${css.user7}`} src={user7} alt="" />
                        <p className={css.wk_count}>+10</p>
                  </div>
                  <p className={css.booked_text}>16 people booked a visit in last 24 hours</p>
              </div>
      </div>
      <div className={css.hero_right}>
      <img className={css.right_img} src={workspace_img} alt="" />
      </div>
      
    </div>
  )
};
