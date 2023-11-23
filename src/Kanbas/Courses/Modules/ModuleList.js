import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import db from '../../Database'
import { Button, Form, Stack, Card } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import { addModule, deleteModule, updateModule, setModule, setModules } from './modulesReducer'
import * as client from './client'

function ModuleList() {
  const { courseId } = useParams()

  const modules = useSelector((state) => state.modulesReducer.modules)
  const module = useSelector((state) => state.modulesReducer.module)
  const dispatch = useDispatch()

  useEffect(() => {
    client.findModulesForCourse(courseId).then((modules) => dispatch(setModules(modules)))
  }, [courseId])

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module))
    })
  }

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId))
    })
  }

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module)
    dispatch(updateModule(module))
  }

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
          <Button variant="success" onClick={() => handleAddModule()}>
            Add
          </Button>
          <Button onClick={() => handleUpdateModule()}>Update</Button>
        </Stack>
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((mod, index) => (
          <li key={index} className="list-group-item">
            <span className="d-flex align-items-center flex-fill flex-row justify-content-between">
              <h3>{mod.name}</h3>
              <Stack direction="horizontal" gap={1}>
                <Button variant="danger" onClick={() => handleDeleteModule(mod._id)}>
                  Delete
                </Button>
                <Button variant="success" onClick={() => dispatch(setModule(mod))}>
                  Edit
                </Button>
              </Stack>
            </span>
            <p>{mod.description}</p>
            <p>{mod._id}</p>
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
