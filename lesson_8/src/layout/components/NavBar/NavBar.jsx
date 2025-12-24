import { NavLink } from 'react-router'

import styles from './NavBar.module.css'
import { memo } from 'react'

function NavBar({ navSetting }) {
    return (
        <>
            <nav className={styles.navbar}>
                <ul>
                    {!!navSetting &&
                        navSetting.map((route, index) => (
                            <li key={index}>
                                <NavLink to={route.to} className={route.getCurrentClass}>
                                    {route.name}
                                </NavLink>
                            </li>
                        ))}
                </ul>
            </nav>
        </>
    )
}

export default memo(NavBar)
