import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { Button, OverlayTrigger, Popover, Modal } from 'react-bootstrap'
import { deleteAssignment, setAssignments, selectAssignment } from './assignmentsReducer'
import * as client from './client'

const DeleteButton = ({ assignmentId }) => {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()

  const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId))
    })
  }
  return (
    <OverlayTrigger
      show={show}
      onToggle={(nextShow) => setShow(nextShow)}
      trigger="click"
      overlay={
        <Popover id="popover-basic">
          <Popover.Header as="h3">Are you sure you want to remove the assignment?</Popover.Header>
          <Popover.Body className="d-flex justify-content-around">
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                handleDeleteAssignment(assignmentId)
                setShow(false)
              }}
            >
              Ok
            </Button>
            <Button size="sm" onClick={() => setShow(false)}>
              Cancel
            </Button>
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="danger" size="sm">
        Delete
      </Button>
    </OverlayTrigger>
  )
}

function Assignments() {
  const { courseId } = useParams()
  const assignments = useSelector((state) => state.assignmentsReducer.assignments)
  const dispatch = useDispatch()

  useEffect(() => {
    client.findAssignmentsForCourse(courseId).then((assignments) => {
      dispatch(setAssignments(assignments))
    })
  }, [courseId])

  return (
    <div className="flex-column justify-content-center p-3 pt-0 flex-fill">
      <div className="d-flex float-start flex-nowrap w-25">
        <input type="text" className="form-control" id="search-for-assignment" placeholder="Search for Assignment" />
      </div>

      <div className="d-flex float-end flex-nowrap">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments/Editor`}
          onClick={() => {
            dispatch(
              selectAssignment({
                title: 'New Assignment',
                description: 'New Assignment Description',
                dueDate: '2023-09-18',
                availableFromDate: '2023-09-06',
                availableUntilDate: '2023-09-18',
                course: 'RS101',
              })
            )
          }}
        >
          <button type="button" className="btn btn-danger btn-sm ms-1 no-wrap-btn">
            <i className="fa-solid fa-plus"></i>
            Assignment
          </button>
        </Link>

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
              <a className="dropdown-item">Edit Assignment Dates</a>
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
        {assignments.map((assignment) => (
          <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center flex-nowrap content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <i className="fa-solid fa-book float-start no-wrap-btn" style={{ color: 'green' }}></i>
            <div className="flex-column flex-grow-1 ps-3">
              <div className="fw-bold assignment-title-link">
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/Editor/${assignment._id}`}
                  onClick={() => dispatch(selectAssignment(assignment))}
                  className="assignment-title-link"
                >
                  {assignment.title}
                </Link>
              </div>
              <div className="assignment-sub-font-style">
                {assignment.description ?? 'Week 0 - SETUP - Week starting on Monday September 5th (9/5/2022) Module |'}
              </div>
              <div className="assignment-sub-font-style">
                <span className="fw-bold">Due&nbsp;</span>
                {assignment.dueDate ?? 'Sep 18, 2022 at 11:59pm | 100pts'}
              </div>
            </div>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: '#9ec19a' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
              <DeleteButton assignmentId={assignment._id} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Assignments
