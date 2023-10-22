import ModuleList from './ModuleList'
function Modules() {
  return (
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
    </div>
  )
}
export default Modules
