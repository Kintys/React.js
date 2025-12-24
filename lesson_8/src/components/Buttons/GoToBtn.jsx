import { useNavigate } from 'react-router'
import styles from './GoTo.module.css'
import { memo } from 'react'

function GoToBtn({ route, children, bgColor }) {
    const goTo = useNavigate()

    const handleClick = () => {
        if (typeof route === 'function') {
            const result = route()
            goTo(result.to, result.options)
        } else {
            goTo(route)
        }
    }

    return (
        <>
            <button className={styles.button} style={{ backgroundColor: bgColor ? bgColor : '' }} onClick={handleClick}>
                <span>{children}</span>
            </button>
        </>
    )
}

export default memo(GoToBtn)
