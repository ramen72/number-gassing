import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:"",
  inValue: "",
  player:"player-1",
 

  chanceCount: 3,
  chance: null,
  chanceStatus:false,
  
  isPlayerName: true,
  inputFieldStatus: true,

  startBtnStatus: true,
  playerTwoStatus: false,
  playerThreeStatus: false,
  playerFourStatus: false,
  playerFiveStatus: false,

  playerOneEnteredNumber:"",
  playerTwoEnteredNumber:[],
  playerThreeEnteredNumber:[],
  playerFourEnteredNumber:[],
  playerFiveEnteredNumber:[],

  result: [],
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
        state.chance = state.chanceCount;
      }
    },
    playerTwo:(state, action)=>{
      if( state.inValue <= 0){
        alert("Input Number can not be zero or negative value")
        state.inValue = ""
      }else{
        if( state.inValue === state.playerOneEnteredNumber){
          state.playerTwoEnteredNumber.push(state.inValue)
          state.player = "player-3";
          state.playerTwoStatus = false;
          state.playerThreeStatus = true;
          state.chanceStatus = true;
          state.chance = state.chanceCount;
          state.inValue = "";
        } else if( state.chance <= 5 && state.chance > 1){
          state.chance--
          state.playerTwoEnteredNumber.push(state.inValue)
          state.inValue = "";          
        }else {
          state.playerTwoEnteredNumber.push(state.inValue)
          state.player = "player-3";
          state.playerTwoStatus = false;
          state.playerThreeStatus = true;
          state.chanceStatus = true;
          state.chance = state.chanceCount;
          state.inValue = "";
        }
      }
    },
    playerThree:(state, action)=>{
      if( state.inValue <= 0){
        alert("Input Number can not be zero or negative value")
        state.inValue = ""
      }else{
        if( state.inValue === state.playerOneEnteredNumber){
          state.playerThreeEnteredNumber.push(state.inValue)
          state.player = "player-4";
          state.playerThreeStatus = false;
          state.playerFourStatus = true;
          state.chanceStatus = true;
          state.chance = state.chanceCount;
          state.inValue = "";
        } else if( state.chance <= 5 && state.chance > 1){
          state.chance--
          state.playerThreeEnteredNumber.push(state.inValue)
          state.inValue = "";          
        }else {
          state.playerThreeEnteredNumber.push(state.inValue)
          state.player = "player-4";
          state.playerThreeStatus = false;
          state.playerFourStatus = true;
          state.chanceStatus = true;
          state.chance = state.chanceCount;
          state.inValue = "";  
        }
      }
    },
    playerFour:(state, action)=>{
      if( state.inValue <= 0){
        alert("Input Number can not be zero or negative value")
        state.inValue = ""
      }else{
        if( state.inValue === state.playerOneEnteredNumber){
          state.playerFourEnteredNumber.push(state.inValue)
          state.playerFourStatus = false;
          state.chanceStatus = false;
          state.inputFieldStatus = false;
          state.isPlayerName = false;
          state.inValue = "";
        } else if( state.chance <= 5 && state.chance > 1){
          state.chance--
          state.playerFourEnteredNumber.push(state.inValue)
          state.inValue = "";          
        }else {
          state.playerFourEnteredNumber.push(state.inValue)
          state.playerFourStatus = false;
          state.chanceStatus = false;
          state.inputFieldStatus = false;
          state.isPlayerName = false;
          state.inValue = "";  
        }
      }
    },
    showResult: (state, action) => {
      let pOneWind = state.playerTwoEnteredNumber.indexOf(state.playerOneEnteredNumber)
      if( pOneWind = -1 ){
        state.result.push("player-1 is win.")
      }else{
        state.result.push("player-2 is win.")
      }
      console.log("first", pOneWind)
    }
  },
})

// Action creators are generated for each case reducer function
export const { inputValue, playerOne, playerTwo, playerThree, playerFour, showResult} = numberGassingSlice.actions

export default numberGassingSlice.reducer