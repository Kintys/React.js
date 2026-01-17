import { NavLink, useLocation } from 'react-router'
import { routes } from '@routes/router'
import styles from './NavBar.module.css'
import { memo, useEffect, useState } from 'react'

function NavBar() {
    const { pathname } = useLocation()
    const [menuItems, setMenuItems] = useState([])

    function checkRoutesList(routeItems, menuItemsRoutes) {
        for (const routeItem of routeItems) {
            if (routeItem.handle?.isShow) {
                menuItemsRoutes.push({
                    name: routeItem.handle.navName,
                    to: routeItem.path,
                    icon: routeItem.handle?.icon
                })
            }
            if (routeItem.children) checkRoutesList(routeItem.children, menuItemsRoutes)
        }
    }

    useEffect(() => {
        const menuItemsRoutes = []
        checkRoutesList(routes, menuItemsRoutes)
        setMenuItems(menuItemsRoutes)
    }, [])

    return (
        <>
            <nav className={styles.menu}>
                <ul className={styles.list}>
                    {menuItems.map((route, i) => {
                        const isActive = pathname === route.to

                        return (
                            <li key={i}>
                                {isActive ? (
                                    <span className={`${styles.link} ${styles.active}`}>
                                        {route?.icon} {route?.name}
                                    </span>
                                ) : (
                                    <NavLink to={route.to} className={styles.link}>
                                        {route?.icon} {route?.name}
                                    </NavLink>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default memo(NavBar)
