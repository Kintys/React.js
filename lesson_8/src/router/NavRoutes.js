import styles from '../layout/components/NavBar/NavBar.module.css'

const getActiveClass = ({ isActive }) => [styles['nav-link'], isActive ? styles.active : ''].join(' ')

export default [
    {
        name: 'Вчителі',
        to: '/',
        getCurrentClass: getActiveClass
    },
    {
        name: 'Про додаток',
        to: '/about/app',
        getCurrentClass: getActiveClass
    },
    {
        name: 'Про розробника',
        to: '/about/dev',
        getCurrentClass: getActiveClass
    }
]
