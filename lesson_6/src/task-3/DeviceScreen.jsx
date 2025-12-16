import { useMemo } from 'react'
import useWindowSize from './useWindowSize'

function DeviceScreen() {
    const { width, hight } = useWindowSize()

    const deviceType = useMemo(() => {
        if (width >= 1200) return 'desktop'
        if (width >= 768) return 'tablet'
        return 'mobile'
    }, [width])

    const currentImg = useMemo(() => {
        switch (deviceType) {
            case 'desktop':
                return 'https://toppng.com/uploads/preview/computer-icon-vector-11562871490efladtm5vr.png'
            case 'tablet':
                return 'https://as2.ftcdn.net/jpg/02/22/84/81/1000_F_222848154_IEzTwIerelU7Qq1pJ4CZNIYeKpqxhODq.jpg'
            case 'mobile':
                return 'https://toppng.com/uploads/preview/symbol-icon-free-icons-cell-phone-icon-transparent-background-11562886253b1ifzbkfrd.png'
            default:
                return ''
        }
    }, [deviceType])
    return (
        <>
            <img src={currentImg} style={{ width: '100px' }} alt="Image" />
            <div>поточна ширина : {width}</div>
            <div>поточна висота : {hight}</div>
        </>
    )
}

export default DeviceScreen
