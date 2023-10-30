import { Link, Routes, Route, Navigate } from 'react-router-dom'
import Assignment3 from './a3'
import Assignment4 from './a4'
import Nav from '../Nav'
import store from './store'
import { Provider } from 'react-redux'

function Labs() {
  return (
    <Provider store={store}>
      <div className="container">
        {/* <h1>Assignment 3</h1> */}
        {/* <Link to="/hello">Hello</Link> | <Link to="/Labs/a3">A3</Link> |
      <Link to="/Kanbas">Kanbas</Link> */}
        <Nav />
        {/* <Assignment3 /> */}
        <Routes>
          <Route path="/" element={<Navigate to="a3" />} />
          <Route path="a3" element={<Assignment3 />} />
          <Route path="a4" element={<Assignment4 />} />
        </Routes>
      </div>
    </Provider>
  )
}
export default Labs
