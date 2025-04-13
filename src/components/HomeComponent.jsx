import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { inputValue, playerOne } from '../features/numberGassing/counterSlice';

const HomeComponent = () => {
    
    const userInputValue = useSelector((state) => state.numberGassing.value)
    const player = useSelector((state) => state.numberGassing.player)
    const inValue = useSelector((state) => state.numberGassing.inValue)
    const playerOneStatus = useSelector((state) => state.numberGassing.playerOneStatus)
    const chance = useSelector((state) => state.numberGassing.chance)
    const chanceStatus = useSelector((state) => state.numberGassing.chanceStatus)

    const dispatch = useDispatch()

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
                            playerOneStatus
                            ?
                            <button onClick={(e)=>dispatch(playerOne())} className='w-24 py-2 px-3 border text-center bg-slate-400 transition-all duration-300 hover:bg-slate-500 hover:border-slate-400 capitalize font-bold hover:text-white'>Start</button>
                            :
                            <button onClick={(e)=>dispatch(playerOne())} className='w-24 py-2 px-3 border text-center bg-slate-400 transition-all duration-300 hover:bg-slate-500 hover:border-slate-400 capitalize font-bold hover:text-white'>guess</button>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeComponent;