import ThemeContext from '@/context/theme/ThemeContext'
import { useState, useEffect, useMemo } from 'react'

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    const currentTheme = useMemo(() => {
        const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

        return { theme, setTheme, toggleTheme }
    }, [theme])

    return <ThemeContext value={currentTheme}>{children}</ThemeContext>
}

export default ThemeProvider
