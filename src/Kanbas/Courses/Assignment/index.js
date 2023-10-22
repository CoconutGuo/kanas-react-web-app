import React from 'react'
import { Link, useParams } from 'react-router-dom'
import db from '../../Database'

function Assignments() {
  const { courseId } = useParams()
  const assignments = db.assignments
  const courseAssignments = assignments.filter((assignment) => assignment.course === courseId)
  return (
    <div className="flex-column justify-content-center p-3 pt-0 flex-fill">
      {/* <h2>Assignments for course {courseId}</h2>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link key={assignment._id} to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="list-group-item">
            {assignment.title}
          </Link>
        ))}
      </div> */}
      <div className="d-flex float-start flex-nowrap w-25">
        <input type="text" className="form-control" id="search-for-assignment" placeholder="Search for Assignment" />
      </div>

      <div className="d-flex float-end flex-nowrap">
        <button type="button" className="btn btn-secondary btn-sm ms-1 no-wrap-btn">
          <i className="fa-solid fa-plus"></i>
          Group
        </button>

        <button type="button" className="btn btn-danger btn-sm ms-1 no-wrap-btn">
          <i className="fa-solid fa-plus"></i>
          Modules
        </button>

        <span className="dropdown">
          <button
            className="btn dropdown-toggle btn-sm ms-1 no-wrap-btn btn-secondary chevron"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>

          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Edit Assignment Dates
              </a>
            </li>
          </ul>
        </span>
      </div>

      <hr className="mt-5" />
      <ul className="list-group">
        <li className="list-group-item list-group-item-secondary d-flex justify-content-between flex-nowrap">
          <span className="float-start pe-3 no-wrap-btn">
            <i className="fas fa-ellipsis-v tight-gap"></i>
            <i className="fas fa-ellipsis-v tight-gap"></i>
          </span>
          <span className="float-start no-wrap-btn d-flex align-items-center flex-fill">
            <i className="fa-solid fa-caret-down float-start fa-xs"></i>
            <span className="fw-bold">Assignments</span>
          </span>
          <span className="float-end no-wrap-btn">
            <span style={{ border: '1px solid #898989' }} className="px-2 rounded-5">
              40% of Total
            </span>
            <i className="fa-solid fa-plus"></i>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </span>
        </li>
        {courseAssignments.map((assignment) => (
          <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center flex-nowrap content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <i className="fa-solid fa-book float-start no-wrap-btn" style={{ color: 'green' }}></i>
            <div className="flex-column flex-grow-1 ps-3">
              <div className="fw-bold assignment-title-link">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="assignment-title-link">
                  {assignment.title}
                </Link>
              </div>
              <div className="assignment-sub-font-style">Week 0 - SETUP - Week starting on Monday September 5th (9/5/2022) Module |</div>
              <div className="assignment-sub-font-style">
                <span className="fw-bold">Due&nbsp;</span>Sep 18, 2022 at 11:59pm | 100pts
              </div>
            </div>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: '#9ec19a' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Assignments
