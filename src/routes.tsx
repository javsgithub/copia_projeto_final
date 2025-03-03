import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'

const ApplicationRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile/:id" element={<Profile />} />
  </Routes>
)

export default ApplicationRoutes
