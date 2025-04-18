import { configureStore } from '@reduxjs/toolkit'
import numberGassing from '../features/numberGuessing/numberGuessingSlice.js'

export const store = configureStore({
  reducer: {
    numberGassing: numberGassing
  },
})