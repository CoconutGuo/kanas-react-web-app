import { createSlice } from '@reduxjs/toolkit'
import db from '../../Database'

const initialState = {
  assignments: db.assignments,
  assignment: {
    title: 'New Assignment',
    description: 'New Assignment Description',
    dueDate: '',
    availableFromDate: '',
    availableUntilDate: '',
    course: 'RS101',
  },
}

const modulesSlice = createSlice({
  name: 'assignments',
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [{ ...action.payload, _id: new Date().getTime().toString() }, ...state.assignments]
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter((module) => module._id !== action.payload)
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((module) => {
        if (module._id === action.payload._id) {
          return action.payload
        } else {
          return module
        }
      })
    },
    selectAssignment: (state, action) => {
      state.assignment = action.payload
    },
  },
})

export const { addAssignment, deleteAssignment, updateAssignment, selectAssignment } = modulesSlice.actions
export default modulesSlice.reducer