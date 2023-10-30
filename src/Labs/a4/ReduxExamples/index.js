import React from 'react'
import CounterRedux from './CounterRedux'
import AddRedux from './AddRedux'
import HelloRedux from './HelloRedux'
import TodoList from './todos/TodoList'
import Todos from './todos-component'

const ReduxExamples = () => {
  return (
    <div className="mb-5">
      <h2>Redux Examples</h2>
      <Todos />
      <TodoList />
      <AddRedux />
      <CounterRedux />
      <HelloRedux />
    </div>
  )
}

export default ReduxExamples
