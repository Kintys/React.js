import useLocalStorage from './hooks/useLocalStorage'
import AppRoutes from './router/AppRoutes'

function App() {
    useLocalStorage('cart', ['2', '3'])
    return (
        <>
            <AppRoutes />
        </>
    )
}

export default App
