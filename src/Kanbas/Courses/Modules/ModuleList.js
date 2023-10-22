import React from 'react'
import { useParams } from 'react-router-dom'
import db from '../../Database'

function ModuleList() {
  const { courseId } = useParams()
  const modules = db.modules
  return (
    <ul className="list-group">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          // <li key={index} className="list-group-item">
          //   <h3>{module.name}</h3>
          //   <p>{module.description}</p>
          // </li>
          <li key={index} className="list-group-item list-group-item-secondary d-flex flex-nowrap fw-bold">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="float-start no-wrap-btn d-flex align-items-center flex-fill">
              <i className="fa-solid fa-caret-down float-start fa-xs"></i>
              {module.name}
            </span>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-plus"></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
        ))}
    </ul>
  )
}
export default ModuleList
