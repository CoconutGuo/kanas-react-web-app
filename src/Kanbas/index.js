import KanbasNavigation from './KanbasNavigation'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import Courses from './Courses'
import Account from './Account'
import EditProfile from './Account/EditProfile'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/index.esm'
import './index.css' // optionally import CSS files as needed

function Kanbas() {
  return (
    <div className="d-flex flex-row">
      <KanbasNavigation>
        <div className="flex-column flex-fill" id="main-screen">
          {/* <h1>Account</h1>
        <h1>Dashboard</h1>
        <h1>Courses</h1> */}
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<Account />} />
            <Route path="Account/Profile/*" element={<EditProfile />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses" element={<Navigate to="RS101" />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </KanbasNavigation>
    </div>
  )
}
export default Kanbas
