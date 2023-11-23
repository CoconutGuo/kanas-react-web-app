import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import axios from 'axios'

import KanbasNavigation from './KanbasNavigation'
import Dashboard from './Dashboard'
import Courses from './Courses'
import Account from './Account'
import EditProfile from './Account/EditProfile'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/index.esm'
import './index.css' // optionally import CSS files as needed

function Kanbas() {
  const [courses, setCourses] = useState([])
  const URL = 'http://localhost:4000/api/courses'

  const [course, setCourse] = useState({
    name: 'New Course',
    number: 'New Number',
    startDate: '2023-09-10',
    endDate: '2023-12-15',
  })

  const updateCourse = async () => {
    const response = await axios.put(`${URL}/${course._id}`, course)
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data
        }
        return c
      })
    )
    setCourse({ name: '' })
  }

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(`${URL}/${courseId}`)
    setCourses(courses.filter((c) => c._id !== courseId))
  }
  const addNewCourse = async () => {
    const response = await axios.post(URL, course)
    setCourses([response.data, ...courses])
    setCourse({ name: '' })
  }
  const findAllCourses = async () => {
    const response = await axios.get(URL)
    setCourses(response.data)
  }
  useEffect(() => {
    findAllCourses()
  }, [])

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
              <Route path="Courses/:courseId/*" element={<Courses />} />
            </Routes>
          </div>
        </KanbasNavigation>
      </div>
    </Provider>
  )
}
export default Kanbas
