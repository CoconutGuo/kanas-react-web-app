import React from 'react'
import Add from './Add'
import ClickEvent from './ClickEvent'
import PassingDataOnEvent from './PassingDataOnEvent'
import EventObject from './EventObject'
import Counter from './Counter'
import BooleanStateVariables from './BooleanStateVariables'
import StringStateVariables from './StringStateVariables'
import DateStateVariable from './DateStateVariable'
import ObjectStateVariable from './ObjectStateVariable'
import ArrayStateVariable from './ArrayStateVariable'
import ParentStateComponent from './ParentStateComponent'
import ReduxExamples from './ReduxExamples'

import 'bootstrap/dist/css/bootstrap.min.css'

const Assignment4 = () => {
  return (
    <>
      <h1>Assignment 4</h1>
      <ReduxExamples />
      <ParentStateComponent />
      <ArrayStateVariable />
      <ObjectStateVariable />
      <DateStateVariable />
      <StringStateVariables />
      <BooleanStateVariables />
      <Counter />
      <EventObject />
      <PassingDataOnEvent />
      <ClickEvent />
      <Add a={1} b={2} />
    </>
  )
}
export default Assignment4
