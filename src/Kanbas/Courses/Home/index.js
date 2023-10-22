import React from 'react'
import ModuleList from '../Modules/ModuleList'

function index() {
  return (
    <>
      <div className="flex-column justify-content-center p-3 pt-0 flex-fill">
        <div className="d-flex float-end flex-nowrap">
          <button type="button" className="btn btn-secondary btn-sm ms-1 no-wrap-btn">
            Collapse All
          </button>
          <button type="button" className="btn btn-secondary btn-sm ms-1 no-wrap-btn">
            View Progress
          </button>

          <span className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle btn-sm ms-1 no-wrap-btn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ height: '33.81px' }}
            >
              <i className="fa-regular fa-circle-check" style={{ color: '#9ec19a' }}></i>
              Publish All
            </button>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Publish All
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Publish One
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Unpublish
                </a>
              </li>
            </ul>
          </span>
          <button type="button" className="btn btn-danger btn-sm ms-1 no-wrap-btn">
            <i className="fa-solid fa-plus"></i>
            Modules
          </button>
          <button type="button" className="btn btn-secondary btn-sm ms-1 no-wrap-btn">
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>
        </div>

        <hr className="mt-5" />

        <ModuleList />
        {/* <ul className="list-group">
          <li className="list-group-item list-group-item-secondary d-flex flex-nowrap fw-bold">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="float-start no-wrap-btn d-flex align-items-center flex-fill">
              <i className="fa-solid fa-caret-down float-start fa-xs"></i>
              Week 0 - INTRO
            </span>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-plus"></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap fw-bold content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="d-flex flex-fill">LEARNING OBJECTIVES</span>

            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap fw-bold content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="ps-5 d-flex flex-fill">Intruduction to the course</span>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap fw-bold content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="ps-5 d-flex flex-fill">Learn what is Web Development</span>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap fw-bold content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="ps-5 d-flex flex-fill">Create a development environment</span>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap fw-bold content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="ps-5 d-flex flex-fill">Create a Web Application</span>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap fw-bold content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="ps-5 d-flex flex-fill">Getting started with 1st assignment</span>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap fw-bold content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="d-flex flex-fill">READING</span>

            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap d-inline fw-bold content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="ps-5 d-flex flex-fill">Full Stack Developer - Chapter 1 - Introduction</span>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap fw-bold content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="ps-5 d-flex flex-fill">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</span>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap fw-bold content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="d-flex flex-fill">SLIDES</span>

            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <div className="red-link d-flex flex-fill">
              <a href="#" style={{ textDecoration: 'none' }} className="icon_red ps-3">
                <i className="fa-solid fa-link" style={{ color: 'black' }}></i>
                Intruduction to Web Development Links to an external site
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <div className="red-link d-flex flex-fill">
              <a href="#" style={{ textDecoration: 'none' }} className="icon_red ps-3">
                <i className="fa-solid fa-link" style={{ color: 'black' }}></i>
                Creating an HTTP server with Node.js Links to an external site
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <div className="red-link d-flex flex-fill">
              <a href="#" style={{ textDecoration: 'none' }} className="icon_red ps-3">
                <i className="fa-solid fa-link" style={{ color: 'black' }}></i>
                Creating a React Application Links to an external site
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center flex-nowrap fw-bold">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="float-start no-wrap-btn d-flex align-items-center flex-fill">
              <i className="fa-solid fa-caret-down float-start fa-xs"></i> Week 1 - HTML
            </span>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-plus"></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap fw-bold content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="flex-fill d-flex">LEARNING OBJECTIVES</span>

            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap fw-bold content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="ps-5 flex-fill d-flex">Learn how to create user interfaces with HTML</span>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap fw-bold content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="ps-5 flex-fill d-flex">Keep working on assignment 1</span>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap fw-bold content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="ps-5 flex-fill d-flex">Deploy the assignment to Netlify</span>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap fw-bold content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="flex-fill d-flex">READING</span>

            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap fw-bold content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="ps-5 flex-fill d-flex">Full Stack Developer - Chapter 1 - Introduction</span>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap fw-bold content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="ps-5 flex-fill d-flex">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</span>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap fw-bold content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <span className="flex-fill d-flex">SLIDES</span>

            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <div className="red-link flex-fill d-flex">
              <a href="#" style={{ textDecoration: 'none' }} className="icon_red ps-3">
                <i className="fa-solid fa-link" style={{ color: 'black' }}></i>
                Introduction to HTML and the DOM
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center flex-nowrap content">
            <span className="float-start pe-3 no-wrap-btn">
              <i className="fas fa-ellipsis-v tight-gap"></i>
              <i className="fas fa-ellipsis-v tight-gap"></i>
            </span>
            <div className="red-link flex-fill d-flex">
              <a href="#" style={{ textDecoration: 'none' }} className="icon_red ps-3">
                <i className="fa-solid fa-link" style={{ color: 'black' }}></i>
                Formatting Web content with Headings and Paragraphs
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
            <span className="float-end no-wrap-btn">
              <i className="fa-solid fa-circle-check" style={{ color: 'green' }}></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </span>
          </li>
        </ul> */}
      </div>

      {/* <!-- third column --> */}
      <div className="flex-column d-flex third-side-w d-none d-xl-block">
        <p className="fs-5">Course Status</p>
        <div className="flex-row d-flex justify-content-between">
          <button type="button" className="btn btn-secondary btn-sm d-inline third-side-button">
            <i className="fa-solid fa-ban"></i>
            <span className="third-side-fs">Unpublish</span>
          </button>
          <button type="button" className="btn btn-success btn-sm d-inline third-side-button">
            <i className="fa-regular fa-circle-check"></i>
            <span className="third-side-fs">Published</span>
          </button>
        </div>

        <div className="list-group mt-2">
          <a href="#" className="list-group-item list-group-item-action third-side-fs list-group-item-secondary ps-1">
            <i className="fa-solid fa-file-import"></i>
            Import Existing Content
          </a>
          <a href="#" className="list-group-item list-group-item-action third-side-fs list-group-item-secondary ps-1">
            <i className="fa-solid fa-folder-open"></i>Import From Commons
          </a>
          <a href="#" className="list-group-item list-group-item-action third-side-fs list-group-item-secondary ps-1">
            <i className="fa-regular fa-circle-dot"></i>Choose Home Page
          </a>
          <a href="#" className="list-group-item list-group-item-action third-side-fs list-group-item-secondary ps-1">
            <i className="fa-solid fa-chart-simple"></i>View Course Stream
          </a>
          <a href="#" className="list-group-item list-group-item-action third-side-fs list-group-item-secondary ps-1">
            <i className="fa-solid fa-bullhorn"></i>New Annoucement
          </a>
          <a href="#" className="list-group-item list-group-item-action third-side-fs list-group-item-secondary ps-1">
            <i className="fa-solid fa-chart-simple"></i>New Analytics
          </a>
          <a href="#" className="list-group-item list-group-item-action third-side-fs list-group-item-secondary ps-1">
            <i className="fa-regular fa-bell"></i>View Course Notifications
          </a>
        </div>
      </div>
    </>
  )
}

export default index
