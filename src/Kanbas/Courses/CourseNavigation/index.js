import { Link, useParams, useLocation } from 'react-router-dom'

function CourseNavigation() {
  const links = ['Home', 'Modules', 'Assignments', 'Grades']
  const { courseId } = useParams()
  const { pathname } = useLocation()
  return (
    <div className="flex-column home-nav d-none d-lg-block">
      <ul className="nav flex-column">
        <li className="nav-item red-link">
          {links.map((link, index) => (
            <Link
              key={index}
              to={`/Kanbas/Courses/${courseId}/${link}`}
              className={`nav-link justify-content-left profile-links ${pathname.includes(link) && 'active active-left'}`}
            >
              <span className="flex-wrap">{link}</span>
            </Link>
          ))}
        </li>
      </ul>
    </div>
  )
}

export default CourseNavigation
