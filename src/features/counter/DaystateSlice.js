import { createSlice } from '@reduxjs/toolkit'

export const DaystateSlice = createSlice({
  name: 'daystate',
  initialState: {
    Daystate: {},
  },
  reducers: {
    setDaystate: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    
      state.Daystate = action.payload
    },
  },
    
})

// Action creators are generated for each case reducer function
export const { setDaystate } = DaystateSlice.actions

export default DaystateSlice.reducer