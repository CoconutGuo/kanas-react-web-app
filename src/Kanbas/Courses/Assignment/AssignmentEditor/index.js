import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import db from '../../../Database'
import { useSelector, useDispatch } from 'react-redux'
import { addAssignment, updateAssignment, selectAssignment } from '../assignmentsReducer'

function AssignmentEditor() {
  const { courseId, assignmentId } = useParams()
  // const assignment = db.assignments.find((assignment) => assignment._id === assignmentId) ?? {}
  const assignments = useSelector((state) => state.assignmentsReducer.assignments)
  const assignment = useSelector((state) => state.assignmentsReducer.assignment)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    const assignment = assignments.find((assignment) => assignment._id === assignmentId) ?? {
      title: 'New Assignment',
      description: 'New Assignment Description',
      dueDate: '2023-09-18',
      availableFromDate: '2023-09-06',
      availableUntilDate: '2023-09-18',
      course: 'RS101',
    }
    console.log('🚀 ~ file: index.js:18 ~ assignment ~ assignment:', assignment)

    dispatch(selectAssignment(assignment))
  }, [assignmentId, assignments, dispatch])

  const handleSave = () => {
    if (assignmentId) {
      // updateAssignment
      dispatch(updateAssignment(assignment))
    } else {
      // addAssignment
      dispatch(addAssignment(assignment))
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`)
  }

  return (
    <div className="flex-column justify-content-center p-3 pt-0 flex-fill">
      <div className="d-flex float-end flex-nowrap align-items-center no-wrap-btn">
        <span className="px-3">
          <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
          <span style={{ color: 'green' }} className="fw-bold">
            Published
          </span>
        </span>

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
                SpeedGrader
              </a>
            </li>
          </ul>
        </span>
      </div>

      <hr className="mt-5" />

      <div className="mb-3">
        <label htmlFor="assignment-name" className="form-label">
          Assignment Name
        </label>
        <input
          type="text"
          id="assignment-name"
          placeholder="Please enter the assignment name"
          value={assignment.title}
          className="form-control mb-2"
          onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value }))}
        />
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          // id="description"
          rows="5"
          value={assignment.description}
          onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))}
        ></textarea>
      </div>

      <div className="row mb-3 justify-content-left align-items-center">
        <div className="col-3 text-end me-0">
          <label htmlFor="points" className="form-label mb-0 align-self-center">
            Points
          </label>
        </div>
        <div className="col-6 px-0">
          <input type="number" className="form-control mx-0" id="points" placeholder="Enter the points" value="100" min="0" max="100" />
        </div>
      </div>

      <div className="row mb-3 justify-content-left align-items-start">
        <div className="col-3 text-end me-0">
          <label htmlFor="assign-form" className="form-label mb-0 align-self-center">
            Assign
          </label>
        </div>

        <div className="col-6 border rounded px-3 py-3" id="assign-form">
          {/* <label htmlFor="assign-to" className="form-label fw-bold">
            Assign to
          </label>
          <input type="text" className="form-control mb-3" id="assign-to" value="Everyone" /> */}

          <label htmlFor="due" className="form-label fw-bold">
            Due
          </label>
          <input
            type="date"
            className="form-control mb-3"
            id="due"
            value={assignment.dueDate}
            onChange={(e) => dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))}
          />

          <div className="row mb-3">
            <div className="col-6 pe-1">
              <label htmlFor="due" className="form-label fw-bold">
                Available from
              </label>
              <input
                type="date"
                className="form-control"
                id="due"
                value={assignment.availableFromDate}
                onChange={(e) => dispatch(selectAssignment({ ...assignment, availableFromDate: e.target.value }))}
              />
            </div>
            <div className="col-6 ps-1">
              <label htmlFor="due" className="form-label fw-bold">
                Until
              </label>
              <input
                type="date"
                className="form-control"
                id="due"
                value={assignment.availableUntilDate}
                onChange={(e) => dispatch(selectAssignment({ ...assignment, availableUntilDate: e.target.value }))}
              />
            </div>
          </div>
        </div>

        {/* <div className="row justify-content-left align-items-start px-0 m-0">
          <div className="col-3 text-end"></div>

          <div className="col-6 border p-0 rounded-bottom justify-content-center d-flex bg-secondary">
            <button className="btn btn-secondary m-0 f-flex flex-fill no-wrap-btn flex-nowrap">
              <i className="fa-solid fa-add"></i>
              Add
            </button>
          </div>
        </div> */}
      </div>
      <div className="row mb-3 justify-content-left align-items-center">
        <div className="col-3 text-end me-0">
          <label htmlFor="assignments-group" className="form-label mb-0 align-self-center">
            Assignments Group
          </label>
        </div>
        <div className="col-6 px-0">
          <select name="assignmentsGroup" className="form-select mx-0" id="assignments-group">
            <option selected>ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div className="row mb-3 justify-content-left align-items-center">
        <div className="col-3 text-end me-0">
          <label htmlFor="display-grade" className="form-label mb-0 align-self-center">
            Display Grade as
          </label>
        </div>
        <div className="col-6 px-0">
          <select name="assignmentsGroup" className="form-select mx-0" id="display-grade">
            <option selected>Percentage</option>
          </select>
        </div>
      </div>

      <div className="row mb-3 justify-content-left align-items-center">
        <div className="col-3 text-end"></div>
        <div className="col-9 px-0">
          <div className="form-check px-0 mb-0 no-wrap-btn">
            <input className="form-check-input mx-0/" type="checkbox" id="checkbox1" />
            <label className="form-check-label ps-2" htmlFor="checkbox1">
              Do not count this assignment towards the final grade
            </label>
          </div>
        </div>
      </div>

      <div className="row mb-3 justify-content-left align-items-start">
        <div className="col-3 text-end me-0">
          <label htmlFor="submission-type" className="form-label mb-0 align-self-center">
            Submission Type
          </label>
        </div>
        <div className="col-6 border rounded-2 px-3 py-3" id="submission-type">
          <select name="assignmentsGroup" className="form-select mb-3">
            <option selected>Online</option>
          </select>
          <div className="mb-3 fw-bold">Online Entry Options</div>
          <div className="form-check px-0 mb-3">
            <input className="form-check-input mx-0/" type="checkbox" id="checkbox1" checked />
            <label className="form-check-label ps-2" htmlFor="checkbox1">
              Text Entry
            </label>
          </div>
          <div className="form-check px-0 mb-3">
            <input className="form-check-input mx-0/" type="checkbox" id="checkbox1" checked />
            <label className="form-check-label ps-2" htmlFor="checkbox1">
              Website URL
            </label>
          </div>
          <div className="form-check px-0 mb-3">
            <input className="form-check-input mx-0/" type="checkbox" id="checkbox1" checked />
            <label className="form-check-label ps-2" htmlFor="checkbox1">
              Media Recordings
            </label>
          </div>
          <div className="form-check px-0 mb-3">
            <input className="form-check-input mx-0/" type="checkbox" id="checkbox1" />
            <label className="form-check-label ps-2" htmlFor="checkbox1">
              Student Annotation
            </label>
          </div>
          <div className="form-check px-0 mb-0">
            <input className="form-check-input mx-0/" type="checkbox" id="checkbox1" />
            <label className="form-check-label ps-2" htmlFor="checkbox1">
              File Uploads
            </label>
          </div>
        </div>
      </div>

      <hr className="mt-5 justify-content-between" />

      <div className="flex-row d-flex">
        <div className="form-check px-0 mb-0 no-wrap-btn d-flex flex-fill">
          <input className="form-check-input mx-0/" type="checkbox" id="checkbox2" />
          <label className="form-check-label ps-2" htmlFor="checkbox2">
            Notify users that this content has changed
          </label>
        </div>

        <div className="d-flex float-end flex-nowrap align-items-center no-wrap-btn">
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-secondary btn-danger mx-1">
            Cancel
          </Link>
          <button onClick={handleSave} className="btn btn-success me-2">
            Save
          </button>
        </div>
      </div>

      {/* <h2>Assignment Name</h2>
      <input value={assignment.title} className="form-control mb-2" //>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger">
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button> */}
    </div>
  )
}

export default AssignmentEditor
