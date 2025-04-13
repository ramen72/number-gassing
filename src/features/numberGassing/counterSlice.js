import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:"",
  inValue: "",
  player:"player-1",
  playerOneNumber:"",
  chance:5,
  chanceStatus:false,
  playerOneStatus: true
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
        alert("Input Number can not be zero or negative value")
        state.inValue = ""
      }else{
        state.playerOneNumber = state.inValue
        state.inValue = "";
        state.player = "player-2";
        state.playerOneStatus = false;
        state.chanceStatus = true;
      }
      console.log(state.playerOneNumber)
    },
    playerTwo:(state, action)=>{

    }
  },
})

// Action creators are generated for each case reducer function
export const { inputValue, playerOne, playerTwo, } = numberGassingSlice.actions

export default numberGassingSlice.reducer