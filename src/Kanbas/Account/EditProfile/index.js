import React from 'react'
import { Link } from 'react-router-dom'

function EditProfile() {
  return (
    <div className="flex-column" style={{ paddingTop: '20px' }}>
      <div className="flex-row d-inline-flex align-items-center">
        <i className="fa-solid fa-bars fa-lg icon_red p-1"></i>
        <span id="profile-title">Yishuai Guo's Profile</span>
      </div>
      <hr />
      <div className="d-flex flex-row flex-fill">
        <div className="flex-column profile-nav">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link justify-content-left profile-links" href="#">
                <span className="flex-wrap">Notifications</span>
              </a>
            </li>
            <li className="nav-item">
              <Link to="/Kanbas/Account/Profile" className="nav-link justify-content-left profile-links account-nav-active active">
                <span className="flex-wrap">Profile</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link justify-content-left profile-links" href="#">
                <span className="flex-wrap">Files</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link justify-content-left profile-links" href="#">
                <span className="flex-wrap">Settings</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link justify-content-left profile-links" href="#">
                <span className="flex-wrap">ePortfolios</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link justify-content-left profile-links" href="#">
                <span className="flex-wrap">Shared Content</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link justify-content-left profile-links" href="#">
                <span className="flex-wrap">The Hub</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link justify-content-left profile-links" href="#">
                <span className="flex-wrap">Qwickly Course Tools</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link justify-content-left profile-links" href="#">
                <span className="flex-wrap">Global Announcements</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-column justify-content-center p-3 pt-0 profile-main">
          <span>
            <i className="fa-regular fa-circle-user fa-8x icon_white_2"></i>
          </span>
          <label htmlFor="name" className="form-lable">
            <b>Name:*</b>
          </label>
          <input className="form-control" value="Yishuai Guo" id="name" placeholder="Please enter the name" />
          <label htmlFor="pronouns" className="form-lable">
            <b>Pronouns:</b>
          </label>
          <select className="form-select" defaultValue="None" style={{ width: '350px' }}>
            <option>None</option>
            <option>she/her</option>
            <option>he/his</option>
            <option>others</option>
          </select>
          <label htmlFor="title" className="form-lable">
            <b>Title:</b>
          </label>
          <input className="form-control" value="" id="title" placeholder="Please enter the title" />

          <br />

          <h3 className="profile-font-size">Contact</h3>
          <p>
            No registered services, you can add some on the{' '}
            <span className="red-link">
              <a href="#" style={{ textDecoration: 'none' }} className="icon_red">
                settings
              </a>
            </span>{' '}
            page.
          </p>

          <br />

          <h3 className="profile-font-size">Biography</h3>
          <textarea cols="50" rows="3" className="form-control">
            Faculty, Software Engineer, AI, Space, and renewables enthusiast.
          </textarea>

          <br />

          <h3 className="profile-font-size">Links</h3>
          <div className="rol d-flex">
            <div className="col-5 text-center">
              <label htmlFor="title" className="form-lable">
                <h6>label</h6>
              </label>
            </div>
            <div className="col-1 text-center"></div>
            <div className="col-5 text-center">
              <label htmlFor="url" className="form-lable">
                <h6>URL</h6>
              </label>
            </div>
            <div className="col-1 text-center"></div>
          </div>

          <div className="rol d-flex">
            <div className="col-5 text-center">
              <input className="form-control" value="YouTube" id="link-title" placeholder="Please enter the link title" />
            </div>
            <div className="col-1 d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
            <div className="col-5 text-center">
              <input
                className="form-control"
                value="https://www.youtube.com/watch?v=EeYwdytpSDs"
                id="link-url"
                placeholder="Please enter the link url"
              />
            </div>
            <div className="col-1 d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-xmark" style={{ color: '#d41a2b' }}></i>
            </div>
          </div>

          <div className="rol d-flex">
            <div className="col-3 text-center py-1">
              <button type="button" className="btn btn-secondary text-center" style={{ width: '160px', height: '38px' }}>
                Add another link
              </button>
            </div>
          </div>

          <hr />

          <div className="flex-row d-flex justify-content-end">
            <Link to="/Kanbas/Account" className="btn btn-secondary mx-2">
              Cancel
            </Link>
            <Link to="/Kanbas/Account" className="btn btn-danger">
              Save Profile
            </Link>
          </div>
        </div>
        <div className="flex-column flex-fill d-flex float-end">
          <Link to="/Kanbas/Account" className="btn btn-secondary no-wrap-btn">
            <i className="fa-solid fa-pencil fa-rotate-270"></i>
            <span style={{ fontSize: '14px' }}>Cancel Editing</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EditProfile
