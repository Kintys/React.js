import { Route, Routes } from 'react-router'
import Home from '../views/Home'
import MasterPage from '../layout/MasterPage'
import Meetings from '../views/Meetings'
import About from '../views/About'
import Admin from '../views/Admin'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MasterPage />}>
                <Route index element={<Home />} />
                <Route path="add" element={<Admin />} />
                <Route path="edit/:id" element={<Admin />} />
                <Route path="/meetings" element={<Meetings />} />
                <Route path="/about/:section" element={<About />} />
            </Route>
        </Routes>
    )
}
export default AppRoutes
