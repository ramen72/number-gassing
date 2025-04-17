import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { inputValue, playerFour, playerOne, playerThree, playerTwo, showResult, showResultInDetails } from '../features/numberGassing/counterSlice';

const HomeComponent = () => {
    
    const userInputValue = useSelector((state) => state.numberGassing.value)
    const player = useSelector((state) => state.numberGassing.player)
    const inValue = useSelector((state) => state.numberGassing.inValue)
    const chance = useSelector((state) => state.numberGassing.chance)
    const chanceStatus = useSelector((state) => state.numberGassing.chanceStatus)
    const isPlayerName = useSelector((state) => state.numberGassing.isPlayerName)
    const inputFieldStatus = useSelector((state) => state.numberGassing.inputFieldStatus)

    const startBtnStatus = useSelector((state) => state.numberGassing.startBtnStatus)
    const playerTwoStatus = useSelector((state) => state.numberGassing.playerTwoStatus)
    const playerThreeStatus = useSelector((state) => state.numberGassing.playerThreeStatus)
    const playerFourStatus = useSelector((state) => state.numberGassing.playerFourStatus)
    const isShowResultBtn = useSelector((state) => state.numberGassing.isShowResultBtn)
    const isShowResultSummary = useSelector((state) => state.numberGassing.isShowResultSummary)
    const isShowResultInDetails = useSelector((state) => state.numberGassing.isShowResultInDetails)
    
    const playerOneEnteredNumber = useSelector((state) => state.numberGassing.playerOneEnteredNumber);
    const playerTwoEnteredNumber = useSelector((state) => state.numberGassing.playerTwoEnteredNumber);
    const playerThreeEnteredNumber = useSelector((state) => state.numberGassing.playerThreeEnteredNumber);
    const playerFourEnteredNumber = useSelector((state) => state.numberGassing.playerFourEnteredNumber);
    const playerFiveEnteredNumber = useSelector((state) => state.numberGassing.playerFiveEnteredNumber);
    const result = useSelector((state) => state.numberGassing.result);


    const dispatch = useDispatch()

    console.log(`playerOneEnteredNumber: ${playerOneEnteredNumber}`)
    console.log(`playerTwoEnteredNumber: ${playerTwoEnteredNumber}`)
    console.log(`playerThreeEnteredNumber: ${playerThreeEnteredNumber}`)
    console.log(`playerFourEnteredNumber: ${playerFourEnteredNumber}`)
    console.log(`playerFiveEnteredNumber: ${playerFiveEnteredNumber}`)
    console.log(`result: ${result}`)

    
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="w-[500px] h-96 bg-slate-400 border rounded-xl p-4 text-center relative">
                    <h1 className='font-bold text-4xl mb-6 text-white'>Number Gassing Game</h1>
                    {
                        isPlayerName && 
                        <h3 className='mb-4 text-xl capitalize font-bold text-indigo-700'>{player}</h3>
                    }
                    {
                        chanceStatus && 
                        <p className='mb-1 text-xl text-left capitalize text-indigo-700'>Chance : {chance}</p>
                    }
                    <div className="flex justify-start items-center gap-x-1">
                        {
                            inputFieldStatus && 
                            <input type='password' value={inValue} onChange={(e) => dispatch(inputValue(e.target.value))} placeholder='Enter your number' className='p-2 w-[370px] border'/>
                        }
                        {
                            startBtnStatus ? (
                                <button onClick={(e)=>dispatch(playerOne())} className='w-24 py-2 px-3 border text-center bg-slate-400 transition-all duration-300 hover:bg-slate-500 hover:border-slate-400 capitalize font-bold hover:text-white'>Start</button>
                            ) : playerTwoStatus ? (
                                <button onClick={(e)=>dispatch(playerTwo())} className='w-24 py-2 px-3 border text-center bg-slate-400 transition-all duration-300 hover:bg-slate-500 hover:border-slate-400 capitalize font-bold hover:text-white'>guess-2</button>
                            ) : playerThreeStatus ? (
                                <button onClick={(e)=>dispatch(playerThree())} className='w-24 py-2 px-3 border text-center bg-slate-400 transition-all duration-300 hover:bg-slate-500 hover:border-slate-400 capitalize font-bold hover:text-white'>guess-3</button>
                            ) : playerFourStatus ? (
                                <button onClick={()=>dispatch(playerFour())} className='w-24 py-2 px-3 border text-center bg-slate-400 transition-all duration-300 hover:bg-slate-500 hover:border-slate-400 capitalize font-bold hover:text-white'>guess-4</button>
                            ) : isShowResultBtn ? (
                                <button onClick={(e)=>dispatch(showResult())} className='py-2 px-3 border text-center bg-slate-400 transition-all duration-300 hover:bg-slate-500 hover:border-slate-400 capitalize font-bold hover:text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>Show Result</button>
                            )  : null
                        }
                        {
                            isShowResultSummary
                            &&
                            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <ul>
                                    {
                                        result.map((item, index) => (
                                            <li key={index} className='capitalize'>{item}</li>
                                        ))
                                    }
                                </ul>

                                <button onClick={(e)=>dispatch(showResultInDetails())} className='mt-5 py-2 px-3 border text-center bg-slate-400 transition-all duration-300 hover:bg-slate-500 hover:border-slate-400 capitalize font-bold hover:text-white'>Show Result Details</button>
                            </div>
                        }
                        {
                            isShowResultInDetails
                            &&
                            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                                <h3>Player-1 entered number : {playerOneEnteredNumber}</h3>
                                <h3>Player-2 entered number : {playerTwoEnteredNumber.map((item,index)=>`${item}, `)}</h3>
                                <h3>Player-3 entered number : {playerThreeEnteredNumber.map((item,index)=>`${item}, `)}</h3>
                                <h3>Player-4 entered number : {playerFourEnteredNumber.map((item,index)=>`${item}, `)}</h3>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeComponent;