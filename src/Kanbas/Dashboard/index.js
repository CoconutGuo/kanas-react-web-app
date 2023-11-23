import { Link } from 'react-router-dom'
function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {
  // const courses = db.courses
  return (
    <div>
      <h1>Dashboard</h1>
      <input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value })} />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <div className="mt-3">
        <button className="btn btn-success" onClick={addNewCourse}>
          Add
        </button>
        <button className="btn btn-warning ms-3" onClick={updateCourse}>
          Update
        </button>
      </div>

      <hr className="my-3" />
      <div className="d-flex flex-column" style={{ paddingLeft: '10px' }}>
        <h3>Published Courses(24)</h3>
        <hr className="mt-0 mb-4" />
        <div id="cards" className="flex-row d-flex flex-wrap">
          {courses.map((course) => (
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
              <div key={course._id} className="col-12 col-sm-6 col-md-4 col-lg-3 justify-content-center course-card">
                <div className="card course-card-style">
                  <img src="/images/course-blue.png" className="card-img-top" alt="..." />
                  <div className="card-body p-2">
                    <h5 className="card-title card-title-style mb-0">
                      {/* CS4550 12631 Web development SEC 01 Fall 2023 [BOS-1-TR] */}
                      {course.name}
                    </h5>
                    <p className="card-text card-text-1 mb-0">
                      {/* CS4550.12631.202410 */}
                      {course.number}
                    </p>
                    <p className="card-text card-text-2 mb-0">
                      {/* 202410_1 Fall 2023 Semester Full Term */}
                      {course.startDate} {course.endDate}
                    </p>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={(event) => {
                        event.preventDefault()
                        setCourse(course)
                      }}
                    >
                      <i className="fa-regular fa-pen-to-square" />
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm ms-3"
                      onClick={(event) => {
                        event.preventDefault()
                        deleteCourse(course._id)
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Dashboard
