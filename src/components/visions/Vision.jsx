import React from 'react'
import css from '../../components/visions/Vision.module.css'
import vision_img from '../../assets/images/vision.png'
import v_1 from '../../assets/images/v-1.png'
import v_2 from '../../assets/images/v-2.png'
import v_3 from '../../assets/images/v-3.png'


export const Vision = () => {
  return (
    <div className={css.container}>
        <div className={css.left_vision}>
            <p className={css.left_1}>
                Visions
            </p>

            <h1 className={css.left_vision_heading}>
            Our vision in 1-space to
            make something
            </h1>
            <p className={css.left_content_3}>
            Coworking is an arrangement in which workers of different 
            companies share an office space, allowing cost savings and 
            convenience through the use of common infrastructures services.
            </p>
            <div className={css.space_benefits}>
                <div className={css.benefit_img}>
                    <img src={v_1} alt="" />
                    <div>
                        <h3 className={css.space_benefit_head}>
                        High quality co-living spaces
                        </h3>
                        <p className={css.space_benefit_details}>
                        Coworking is an arrangement in which workers of different companies.
                        </p>
                    </div>
                </div>
                <div className={css.benefit_img}>
                    <img src={v_2} alt="" />
                    <div>
                        <h3 className={css.space_benefit_head}>
                        Equipped for productivity
                        </h3>
                        <p className={css.space_benefit_details}>
                        Coworking is an arrangement in which workers of different companies.
                        </p>
                    </div>
                </div>
                <div className={css.benefit_img}>
                    <img src={v_3} alt="" />
                    <div>
                        <h3 className={css.space_benefit_head}>
                        Simple and inclusive
                        </h3>
                        <p className={css.space_benefit_details}>
                        Coworking is an arrangement in which workers of different companies.
                        </p>
                    </div>
                </div>
            </div>
            <button className={css.vision_btn}>Explore More</button>
        </div>
        <div>
            <img src={vision_img} alt="" />
        </div>
    </div>
  )
}