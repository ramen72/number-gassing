import { configureStore } from '@reduxjs/toolkit'
import numberGassing from '../features/numberGassing/counterSlice'

export const store = configureStore({
  reducer: {
    numberGassing: numberGassing
  },
})