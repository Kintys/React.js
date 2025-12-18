import styles from '../components/NavBar/NavBar.module.css'

const getActiveClass = ({ isActive }) => [styles['nav-link'], isActive ? styles.active : ''].join(' ')

export default [
    {
        name: 'Home',
        to: '/',
        getCurrentClass: getActiveClass
    },
    {
        name: 'About Us',
        to: '/about',
        getCurrentClass: getActiveClass
    },
    {
        name: 'Shop',
        to: '/products',
        getCurrentClass: getActiveClass
    },
    {
        name: 'Admin',
        to: '/admin',
        getCurrentClass: getActiveClass
    }
]
