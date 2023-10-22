import db from '../../Database'
import { useParams } from 'react-router-dom'
function Grades() {
  const { courseId } = useParams()
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId)
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId)
  return (
    <div className="flex-column justify-content-center p-3 pt-0 flex-fill">
      <div className="flex-column justify-content-center p-3 pt-0 flex-fill">
        <div className="flex-row d-flex justify-content-end flex-nowrap w-100">
          <button type="button" className="btn btn-secondary btn-sm ms-1 no-wrap-btn">
            <i className="fa-solid fa-file-import"></i>
            Import
          </button>

          <span className="dropdown">
            <button
              className="btn dropdown-toggle btn-sm ms-1 no-wrap-btn btn-secondary"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-solid fa-file-import fa-flip-horizontal"></i>
              Export
            </button>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  pdf
                </a>
              </li>
            </ul>
          </span>

          <button className="btn btn-sm ms-1 no-wrap-btn btn-secondary" type="button">
            <i className="fa-solid fa-gear p-0"></i>
          </button>
        </div>

        <div className="flex-row d-flex w-100 my-2">
          <div className="flex-column w-50 fw-bold me-1">
            <label htmlhtmlFor="student-names" className="form-label">
              Student Names
            </label>
          </div>
          <div className="flex-column w-50 fw-bold ms-1">
            <label htmlhtmlFor="assignment-names" className="form-label">
              Assignment Names
            </label>
          </div>
        </div>

        <div className="flex-row d-flex w-100 mb-2">
          <div className="fw-bold me-1 input-group">
            <span className="input-group-text bg-white border-end-0" id="basic-addon1">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              id="student-names"
              className="form-control border-start-0 border-end-0"
              placeholder="Search Students"
              aria-describedby="basic-addon1"
            />
            <span className="input-group-text bg-white border-start-0" id="basic-addon3">
              <i className="fa-solid fa-chevron-up"></i>
            </span>
          </div>
          <div className="fw-bold ms-1 input-group">
            <span className="input-group-text bg-white border-end-0" id="basic-addon2">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              id="assignment-names"
              className="form-control border-start-0 border-end-0"
              placeholder="Search Assignments"
              aria-describedby="basic-addon1"
            />
            <span className="input-group-text bg-white border-start-0" id="basic-addon4">
              <i className="fa-solid fa-chevron-up"></i>
            </span>
          </div>
        </div>

        <div className="flex-row d-flex w-100 mb-2">
          <button className="btn btn-secondary no-wrap-btn">
            <i className="fa-solid fa-filter"></i>
            Apply Filters
          </button>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr className="table-secondary">
              <th className="text-left text-align-middle">Student Name</th>
              {assignments.map((assignment) => (
                <th key={assignment._id} className="text-center text-align-middle">
                  {assignment.title} <div className="fw-light grade-sm-ft">Out of 100</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user)
              return (
                <tr key={enrollment._id} className="table-light">
                  <td className="icon_red fw-bold text-align-middle">
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find((grade) => grade.student === enrollment.user && grade.assignment === assignment._id)
                    return (
                      <td key={assignment._id} className="text-center text-align-middle">
                        {grade?.grade || (
                          <input
                            className="form-control text-center form-control-sm"
                            id="score"
                            placeholder="Please enter the score"
                            value="91.5%"
                            size="6"
                          />
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Grades
