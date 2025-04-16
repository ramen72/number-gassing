import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:"",
  inValue: "",
  player:"player-1",
  playerOneNumber:"",
  playerTwoNumberArray:[],
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
        state.playerOneNumber = state.inValue
        state.inValue = "";
        state.player = "player-2";
        state.startBtnStatus = false;
        state.playerTwoStatus = true;
        state.chanceStatus = true;
      }
      console.log(state.playerOneNumber, state.playerOneStatus)
    },
    playerTwo:(state, action)=>{
      if( state.inValue <= 0){
        alert("Input Number can not be zero or negative value")
        state.inValue = ""
      }else{

        if( state.chance <= 1){
          state.player = "player-3";
          state.playerTwoStatus = false;
          state.playerThreeStatus = true;
          state.chanceStatus = true;
          state.chance = 3;
        }
        if( state.chance <= 5 && state.chance > 1){
          state.chance--
          state.playerTwoNumberArray.push(state.inValue)
          state.inValue = "";
          
        }
        // state.player = "player-3";
        // state.playerTwoStatus = false;
        // state.playerThreeStatus = true;
        // state.chanceStatus = true;
      }
      console.log(state.playerOneNumber, state.playerOneStatus)
    },
    // playerThree:(state, action)=>{
    //   if( state.inValue <= 0){
    //     alert("Input Number can not be zero or negative value")
    //     state.inValue = ""
    //   }else{
    //     state.playerOneNumber = state.inValue
    //     state.inValue = "";
    //     state.player = "player-4";
    //     state.playerThreeStatus = false;
    //     state.playerFourStatus = true;
    //     state.chanceStatus = true;
    //   }
    //   console.log(state.playerOneNumber, state.playerOneStatus)
    // },
  },
})

// Action creators are generated for each case reducer function
export const { inputValue, playerOne, playerTwo, playerThree} = numberGassingSlice.actions

export default numberGassingSlice.reducer