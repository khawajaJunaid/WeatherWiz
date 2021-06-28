import { configureStore } from '@reduxjs/toolkit'
import Daystatereducer from '../features/counter/DaystateSlice' 

export default configureStore({
  reducer: {
    Daystate: Daystatereducer,
  },
})