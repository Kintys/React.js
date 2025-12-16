import { useEffect, useState } from 'react'

export function useWindowSize(initValue = null) {
    const [windowWidth, setWindowWidth] = useState(initValue)
    const [windowHight, setWindowHight] = useState(initValue)

    function getDynamicSize() {
        setWindowWidth(window.innerWidth)
        setWindowHight(window.innerHeight)
    }

    useEffect(() => {
        getDynamicSize()
        window.addEventListener('resize', getDynamicSize)
        return () => window.removeEventListener('resize', getDynamicSize)
    }, [])

    return {
        width: windowWidth,
        hight: windowHight
    }
}
export default useWindowSize
