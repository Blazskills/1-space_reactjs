import React from 'react'
import css from '../gallery/Gallery.module.css'

import gallery_main_img from '../../assets/images/main_gallery_img.png'


import gallery_1 from '../../assets/images/gallery_img_1.png'
import gallery_2 from '../../assets/images/gallery_img_2.png'
import gallery_3 from '../../assets/images/gallery_img_3.png'
import gallery_4 from '../../assets/images/gallery_img_4.png'


export const Gallery = () => {
  return (
    <div className={css.container}>
        <div className={css.gallery_left}>
            <h3>
                gallery
            </h3>
            <p>
            Immersive beautiful <br/>co-working space gallery
            </p>
            <div className={css.gallery_list}>
                <img src={gallery_1} alt="" />
                <img src={gallery_2} alt="" />
                <img src={gallery_3} alt="" />
                <img src={gallery_4} alt="" />
            </div>
        </div>
        <div className={css.main_gallery_img_right}>
            <img src={gallery_main_img} alt="" />
        </div>
    </div>
  )
}