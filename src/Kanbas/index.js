import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import db from './Database'
import store from './store'
import { Provider } from 'react-redux'

import KanbasNavigation from './KanbasNavigation'
import Dashboard from './Dashboard'
import Courses from './Courses'
import Account from './Account'
import EditProfile from './Account/EditProfile'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/index.esm'
import './index.css' // optionally import CSS files as needed

function Kanbas() {
  const [courses, setCourses] = useState(db.courses)
  const [course, setCourse] = useState({
    name: 'New Course',
    number: 'New Number',
    startDate: '2023-09-10',
    endDate: '2023-12-15',
  })
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime() }])
  }
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId))
  }
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course
        } else {
          return c
        }
      })
    )
  }
  return (
    <Provider store={store}>
      <div className="d-flex flex-row">
        <KanbasNavigation>
          <div className="flex-column flex-fill" id="main-screen">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account" element={<Account />} />
              <Route path="Account/Profile/*" element={<EditProfile />} />
              <Route
                path="Dashboard"
                element={
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                }
              />
              <Route path="Courses" element={<Navigate to="RS101" />} />
              <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
            </Routes>
          </div>
        </KanbasNavigation>
      </div>
    </Provider>
  )
}
export default Kanbas
