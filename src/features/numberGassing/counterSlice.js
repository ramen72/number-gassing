import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:"",
  inValue: "",
  player:"player-1",
  playerOneEnteredNumber:"",
  playerTwoEnteredNumber:[],
  playerThreeEnteredNumber:[],
  playerFourEnteredNumber:[],
  playerFiveEnteredNumber:[],
  chanceCount: 3,
  chance: 3,
  chanceStatus:false,
  startBtnStatus: true,
  playerTwoStatus: false,
  playerThreeStatus: false,
  playerFourStatus: false,
  playerFiveStatus: false,
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
        state.playerOneEnteredNumber = state.inValue
        state.inValue = "";
        state.player = "player-2";
        state.startBtnStatus = false;
        state.playerTwoStatus = true;
        state.chanceStatus = true;
      }
      console.log(state.playerOneEnteredNumber)
    },
    playerTwo:(state, action)=>{
      console.log(state.chance)
      if( state.inValue <= 0){
        alert("Input Number can not be zero or negative value")
        state.inValue = ""
      }else{
        if( state.inValue === state.playerOneEnteredNumber){
          state.player = "player-3";
          state.playerTwoStatus = false;
          state.playerThreeStatus = true;
          state.chanceStatus = true;
          state.chance = 3;
        } else if( state.chance <= 5 && state.chance > 1){
          state.chance--
          state.playerTwoEnteredNumber.push(state.inValue)
          state.inValue = "";          
        }else {
          state.player = "player-3";
          state.playerTwoStatus = false;
          state.playerThreeStatus = true;
          state.chanceStatus = true;
          state.chance = 3;
        }
      }
      console.log(state.chance)
    },
  },
})

// Action creators are generated for each case reducer function
export const { inputValue, playerOne, playerTwo, playerThree} = numberGassingSlice.actions

export default numberGassingSlice.reducer