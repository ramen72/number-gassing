import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:"",
  inValue: "",
  player:"player-1",
  playerOneNumber:"",
}

export const numberGassingSlice = createSlice({
  name: 'numberGassing',
  initialState,
  reducers: {
    inputValue: (state, action) => {
      state.inValue = action.payload
    },
    playerOne: (state, action) => {
      if( state.inValue <= 0){
        alert("t")
        state.inValue = ""
      }else{
        state.playerOneNumber = state.inValue
      }
      console.log(state.playerOneNumber)
    }
  },
})

// Action creators are generated for each case reducer function
export const { inputValue, playerOne, } = numberGassingSlice.actions

export default numberGassingSlice.reducer