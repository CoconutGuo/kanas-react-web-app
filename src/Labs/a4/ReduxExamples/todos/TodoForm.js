import { useSelector, useDispatch } from 'react-redux'
import { addTodo, updateTodo, setTodo } from './todosReducer'

function TodoForm() {
  const { todo } = useSelector((state) => state.todosReducer)
  const dispatch = useDispatch()

  return (
    <li className="list-group-item d-flex">
      <button className="btn btn-success me-3" onClick={() => dispatch(addTodo(todo))}>
        Add
      </button>
      <button className="btn btn-warning me-3" onClick={() => dispatch(updateTodo(todo))}>
        Update
      </button>
      <input className="form-control" value={todo.title} onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />
    </li>
  )
}
export default TodoForm
