import { Link, useLocation, useParams } from 'react-router-dom'

function KanbasNavigation({ children }) {
  //   const links = ["Account", "Dashboard", "Courses", "Calendar"];
  const links = [
    { path: 'Account', icon: 'fa-regular fa-circle-user' },
    { path: 'Dashboard', icon: 'fa-solid fa-gauge' },
    { path: 'Courses', icon: 'fa-solid fa-book' },
    { path: 'Calendar', icon: 'fa-solid fa-calendar-days' },
    { path: 'Inbox', icon: 'fa-solid fa-box-open' },
    { path: 'History', icon: 'fa-regular fa-clock' },
    { path: 'Studio', icon: 'fa-solid fa-photo-film' },
    { path: 'Commons', icon: 'fa-solid fa-share-from-square' },
    { path: 'Help', icon: 'fa-regular fa-circle-question' },
  ]
  const { pathname } = useLocation()
  const { courseId, '*': link } = useParams()

  return (
    <>
      <div className="flex-column kanbas-nav d-none d-lg-block" style={{ position: 'fixed' }}>
        <Link className="nav-link kanbas-nav-item centered-icon bg-black" to="/Kanbas/Dashboard">
          <img src="/images/neu_logo.png" alt="" style={{ width: '65px', height: '65px' }} />
        </Link>
        <ul id="kanbas-sidebar" className="nav nav-justified mb-auto text-center flex-column bg-black">
          {links.map((link, index) => (
            <li
              key={index}
              id={`${link.path == 'Account' && 'account-white'}`}
              className={`nav-item kanbas-nav-item ${pathname.includes(link.path) && ' bg-white'}`}
            >
              <Link to={`/Kanbas/${link.path}`} className={`nav-link kanbas-nav-item ${pathname.includes(link.path) && 'active'}`}>
                <i
                  className={`fa-2x ${link.icon} ${!pathname.includes(link.path) && 'icon_red'} ${link.path == 'Account' && 'icon_white'}`}
                ></i>
                <div className="icon_white text-center nav-font-size ">{link.path}</div>
              </Link>
            </li>
          ))}
          <br />
          <br />
          <li className="nav-item kanbas-nav-item">
            <a className="nav-link kanbas-nav-item" href="#">
              <i className="fa-solid fa-arrow-left fa-2x icon_red"></i>
            </a>
          </li>
          <li className="nav-item kanbas-nav-item">
            <a className="nav-link kanbas-nav-item" href="#">
              <br />
              <br />
              <br />
              <br />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex-column p-0 m-0 flex-fill">
        <div className="w-100 d-block d-lg-none prior-z-index" style={{ height: '48px' }}>
          <div style={{ position: 'fixed' }} className="w-100 flex-row align-items-center flex-fill d-flex bg-black prior-z-index">
            <span className="dropdown">
              <button
                className="btn dropdown-toggle btn-sm ms-1 no-wrap-btn btn-black"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-bars fa-lg icon_white"></i>
              </button>

              <ul className="dropdown-menu">
                {links.map((link, index) => (
                  <li key={index} id={`${link.path == 'Account' && 'account-white'}`}>
                    <Link to={`/Kanbas/${link.path}`} className={`dropdown-item ${pathname.includes(link.path) && 'active'}`}>
                      <i className={link.icon}></i>
                      {link.path}
                    </Link>
                  </li>
                ))}
              </ul>
            </span>

            <div className="flex-column flex-grow-1">
              <div className="icon_white text-center">{courseId}</div>
              <div className="icon_white text-center"> {link.split('/')[0]}</div>
            </div>

            <i className="fa-solid fa-glasses icon_white"></i>

            <span className="dropdown">
              <button
                className="btn dropdown-toggle btn-sm ms-1 no-wrap-btn btn-black"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-chevron-down icon_white"></i>
              </button>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/Kanbas/Courses/Home/home.html">
                    <i className="fa-solid fa-house-user"></i>Home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-diagram-project"></i>Modules
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-plug"></i>Piazza
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-plug"></i>Zoom Meetings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Kanbas/Courses/Assignments/index.html">
                    <i className="fa-regular fa-pen-to-square"></i>Assignments
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-rocket"></i>Quizzes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Kanbas/Courses/Grades/grades.html">
                    <i className="fa-solid fa-book"></i>Grades
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-user-group"></i>People
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-plug"></i>Panopto Video
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-regular fa-comments"></i>Discussions
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-bullhorn"></i>Annoucements
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-file-lines"></i>Pages
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-regular fa-folder"></i>Files
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-clipboard-list"></i>Rubrics
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-bullseye"></i>Outcomes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-regular fa-circle"></i>Collaborations
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-book-bookmark"></i>Syllabus
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Kanbas/Courses/Settings/courseDetails.html">
                    <i className="fa-solid fa-gear"></i>Settings
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
        {children}
      </div>
    </>
  )
}

export default KanbasNavigation
