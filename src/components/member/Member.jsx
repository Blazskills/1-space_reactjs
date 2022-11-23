import React from 'react'
import css from '../member/Member.module.css'
import member_img from '../../assets/images/member.png'


export const Member = () => {
  return (
    <div className={css.container}>
      <div className={css.member_into}>
        <p>
            Become a member
        </p>
        <h3>
        Ready to try different work
        environment now?
        </h3>
        <p>
        Coworking is an arrangement in which workers of different 
        companies share an office space, allowing cost savings and 
        convenience through the use of common infrastructures, 
        such as equipment, utilities, and receptionist and custodial services, 
        and in some cases refreshments and parcel acceptance services.
        </p>
        <div className={css.member_btn}>
            <button>
            Sign Up Now
            </button>
            <button>
            Schedule Visit
            </button>
        </div>
      </div>
        <div>
            <img src={member_img} alt="" />
        </div>
    </div>
  )
}