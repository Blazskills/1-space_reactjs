import React from 'react'
import css from '../solutions/Solution.module.css'
import solution_slide from '../../assets/images/solution_img.png'


export const Solution = () => {
  return (
    <div className={css.container}>
        <div className={css.solution_left}>
            <h3 className={css.solution_txt}>Solutions</h3>
            <h1>
                The 1-space all view
                experience technology
            </h1>
            <p>
            Coworking is an arrangement in which workers of different companies 
            share an office space, allowing cost savings and convenience through 
            the use of common infrastructures, such as equipment, utilities, 
            and receptionist and custodial services, and in some cases refreshments 
            and parcel acceptance services.
            </p>
            <button>View Availability</button>
        </div>

        <div className={css.right_solution}>
            <img src={solution_slide} alt="" />
        </div>

    </div>
  )
}