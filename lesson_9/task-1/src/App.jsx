import './App.css'
import { RouterProvider } from 'react-router'
import router from '@/routes/router.jsx'
import ThemeProvider from './provider/ThemeProvider'

function App() {
    return (
        <>
            <ThemeProvider theme={'light'}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    )
}

export default App
