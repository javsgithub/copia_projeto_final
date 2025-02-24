import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'

const ApplicationRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile/:id" element={<Profile />} />
  </Routes>
)

export default ApplicationRoutes
