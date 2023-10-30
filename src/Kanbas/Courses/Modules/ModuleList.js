import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import db from '../../Database'
import { Button, Form, Stack, Card } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import { addModule, deleteModule, updateModule, setModule } from './modulesReducer'

function ModuleList() {
  const { courseId } = useParams()

  const modules = useSelector((state) => state.modulesReducer.modules)
  const module = useSelector((state) => state.modulesReducer.module)
  const dispatch = useDispatch()

  // const modules = db.modules
  // const [modules, setModules] = useState(db.modules)
  // const [module, setModule] = useState({
  //   name: 'New Module',
  //   description: 'New Description',
  //   course: courseId,
  // })
  // const addModule = (module) => {
  //   setModules([{ ...module, _id: new Date().getTime().toString() }, ...modules])
  // }
  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter((module) => module._id !== moduleId))
  // }
  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module
  //       } else {
  //         return m
  //       }
  //     })
  //   )
  // }

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <Stack direction="horizontal" gap={3}>
          <div className="w-100 ">
            <Form.Control type="text" value={module.name} onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} />
            <Form.Control
              className="mt-2"
              as="textarea"
              rows={3}
              value={module.description}
              onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
            />
          </div>
          <Button variant="success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </Button>
          <Button onClick={() => dispatch(updateModule(module))}>Update</Button>
        </Stack>
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <span className="d-flex align-items-center flex-fill flex-row justify-content-between">
              <h3>{module.name}</h3>
              <Stack direction="horizontal" gap={1}>
                <Button variant="danger" onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </Button>
                <Button variant="success" onClick={() => dispatch(setModule(module))}>
                  Edit
                </Button>
              </Stack>
            </span>
            <p>{module.description}</p>
            <p>{module._id}</p>
          </li>
        ))}

      {/* {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
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
        ))} */}
    </ul>
  )
}
export default ModuleList
