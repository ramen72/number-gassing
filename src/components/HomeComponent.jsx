import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { inputValue, playerOne, playerThree, playerTwo } from '../features/numberGassing/counterSlice';

const HomeComponent = () => {
    
    const userInputValue = useSelector((state) => state.numberGassing.value)
    const player = useSelector((state) => state.numberGassing.player)
    const inValue = useSelector((state) => state.numberGassing.inValue)
    const chance = useSelector((state) => state.numberGassing.chance)
    const chanceStatus = useSelector((state) => state.numberGassing.chanceStatus)

    const startBtnStatus = useSelector((state) => state.numberGassing.startBtnStatus)
    const playerTwoStatus = useSelector((state) => state.numberGassing.playerTwoStatus)
    const playerThreeStatus = useSelector((state) => state.numberGassing.playerThreeStatus)
    const playerFourStatus = useSelector((state) => state.numberGassing.playerFourStatus)
    const playerFiveStatus = useSelector((state) => state.numberGassing.playerFiveStatus)
    
    const playerOneEnteredNumber = useSelector((state) => state.numberGassing.playerOneEnteredNumber);
    const playerTwoEnteredNumber = useSelector((state) => state.numberGassing.playerTwoEnteredNumber);
    const playerThreeEnteredNumber = useSelector((state) => state.numberGassing.playerThreeEnteredNumber);
    const playerFourEnteredNumber = useSelector((state) => state.numberGassing.playerFourEnteredNumber);
    const playerFiveEnteredNumber = useSelector((state) => state.numberGassing.playerFiveEnteredNumber);
    const result = useSelector((state) => state.numberGassing.result);


    const dispatch = useDispatch()

    console.log(`"playerOneEnteredNumber: " ${playerOneEnteredNumber}`)
    console.log(`"playerTwoEnteredNumber: " ${playerTwoEnteredNumber}`)
    console.log(`"playerThreeEnteredNumber: " ${playerThreeEnteredNumber}`)
    console.log(`"playerFourEnteredNumber: " ${playerFourEnteredNumber}`)
    console.log(`"playerFiveEnteredNumber: " ${playerFiveEnteredNumber}`)
    console.log(`"result: " ${result}`)

    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="w-[500px] h-96 bg-slate-400 border rounded-xl p-4 text-center">
                    <h1 className='font-bold text-4xl mb-6 text-white'>Number Gassing Game</h1>
                    <h3 className='mb-4 text-xl capitalize font-bold text-indigo-700'>{player}</h3>
                    {
                        chanceStatus && 
                        <p className='mb-1 text-xl text-left capitalize text-indigo-700'>Chance : {chance}</p>
                    }
                    <div className="flex justify-start items-center gap-x-1">
                        <input type='password' value={inValue} onChange={(e) => dispatch(inputValue(e.target.value))} placeholder='Enter your number' className='p-2 w-[370px] border'/>
                        {
                            startBtnStatus ? (
                                <button onClick={(e)=>dispatch(playerOne())} className='w-24 py-2 px-3 border text-center bg-slate-400 transition-all duration-300 hover:bg-slate-500 hover:border-slate-400 capitalize font-bold hover:text-white'>Start</button>
                            ) : playerTwoStatus ? (
                                <button onClick={(e)=>dispatch(playerTwo())} className='w-24 py-2 px-3 border text-center bg-slate-400 transition-all duration-300 hover:bg-slate-500 hover:border-slate-400 capitalize font-bold hover:text-white'>guess-2</button>
                            ) : playerThreeStatus ? (
                                <button onClick={(e)=>dispatch(playerThree())} className='w-24 py-2 px-3 border text-center bg-slate-400 transition-all duration-300 hover:bg-slate-500 hover:border-slate-400 capitalize font-bold hover:text-white'>guess-3</button>
                            ) : playerFourStatus ? (
                                <button onClick={(e)=>dispatch(player())} className='w-24 py-2 px-3 border text-center bg-slate-400 transition-all duration-300 hover:bg-slate-500 hover:border-slate-400 capitalize font-bold hover:text-white'>guess-4</button>
                            ) : playerFiveStatus ? (
                                <button onClick={(e)=>dispatch(player())} className='w-24 py-2 px-3 border text-center bg-slate-400 transition-all duration-300 hover:bg-slate-500 hover:border-slate-400 capitalize font-bold hover:text-white'>guess-5</button>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeComponent;