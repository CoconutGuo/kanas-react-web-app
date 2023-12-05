import { ListGroup } from 'react-bootstrap'
import { useLocation, Link } from 'react-router-dom'

function StackedExample() {
  let location = useLocation()

  const links = [
    { name: 'Home', path: '/project/home' },
    { name: 'Search', path: '/project/search' },
    { name: 'Signin', path: '/project/signin' },
    { name: 'Signup', path: '/project/signup' },
    { name: 'Account', path: '/project/account' },
  ]

  return (
    <ListGroup as="ul">
      {links.map((it) => (
        <Link key={it.name} className="text-reset text-decoration-none text-center" to={it.path}>
          <ListGroup.Item as="li" active={location.pathname.includes(it.path)}>
            {it.name}
          </ListGroup.Item>
        </Link>
      ))}
    </ListGroup>
  )
}

export default StackedExample
