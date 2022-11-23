import React from 'react'
import css from './Header.module.css'

export const Header = () => {
  return (
    <div className={css.container}>

        <div className={css.header_nav}>
            <ul className={css.nav_url}>
                <li className={css.left_nav}>
                    Home
                </li>
                <li className={css.left_nav}>
                    About
                </li>
                <li className={css.left_nav}>
                    Services
                </li>
            </ul>

            <p className={css.logo}>1-Space</p>

            <ul className={css.nav_url}>
                <li className={css.right_nav}>
                    Services
                </li>
                <li className={css.right_nav}>
                    Space
                </li>
                <li className={css.right_nav}>
                    Event
                </li>
            </ul>

        </div>
    </div>
  )
}

