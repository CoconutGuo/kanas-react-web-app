import { Routes, Route, Navigate } from 'react-router-dom'
import Nav from './nav'
import Signin from '../users/signin'
import Signup from '../users/signup'
import Account from '../users/account'
import UserTable from '../users/table'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/index.esm'

function Project() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-2">
          <Nav />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Navigate to="/project/home" />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Project
