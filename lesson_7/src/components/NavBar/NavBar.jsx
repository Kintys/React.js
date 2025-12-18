import { NavLink } from 'react-router'
import navSetting from '../../router/NavRoutes.js'
import styles from './NavBar.module.css'

function NavBar() {
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

export default NavBar
