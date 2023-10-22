import React from 'react'
import { Link } from 'react-router-dom'

function Account() {
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
              <Link to="/Kanbas/Account" className="nav-link justify-content-left profile-links account-nav-active active">
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
        <div className="flex-column justify-content-center p-3 pt-0 profile-main">
          <i className="fa-regular fa-circle-user fa-8x icon_white_2"></i>
          <p style={{ fontSize: '30px' }}>Yishuai Guo</p>
          <br />
          <p className="profile-font-size">Contact</p>
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
          <p className="profile-font-size">Biography</p>
          <p>Faculty, Software Engineer, AI, Space, and renewables enthusiast.</p>
          <br />
          <p className="profile-font-size">Links</p>
          <div className="red-link">
            <a href="https://www.youtube.com/watch?v=EeYwdytpSDs" style={{ textDecoration: 'none' }} className="icon_red">
              <i className="fa-solid fa-link" style={{ color: 'black' }}></i>
              Youtube
              <i className="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <div className="flex-column flex-fill d-flex float-end">
          <Link to="/Kanbas/Account/Profile/EditProfile" className="btn btn-secondary no-wrap-btn">
            <i className="fa-solid fa-pencil fa-rotate-270"></i>
            <span style={{ fontSize: '14px' }}>Edit Profile</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Account
