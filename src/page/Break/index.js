import React, { useState, useEffect, useRef , useContext} from 'react'
import './index.css'
import useLanguage from '../../hook/useLanguage'



const STATUS = {
    STARTED: 'Start',
    STOPPED: 'Stop',
}

let INITIAL_COUNT = 1800

export default function CountdownApp() {
    const text = useLanguage()

    const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT)
    const [status, setStatus] = useState(STATUS.STOPPED)
    const originalTitle = document.title
    const audioElement = document.getElementById('notif')
    const myAudio = require('./notif-sound.wav')
    const secondsToDisplay = secondsRemaining % 60
    const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
    const minutesToDisplay = minutesRemaining % 60
    const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60

    const handleStart = () => {
        setStatus(STATUS.STARTED)
    }
    const handleStop = () => {
        setStatus(STATUS.STOPPED)
    }
    const handleReset = () => {
        setStatus(STATUS.STOPPED)
        setSecondsRemaining(INITIAL_COUNT)
    }
    useInterval(
        () => {
            if (secondsRemaining > 0) {
                setSecondsRemaining(secondsRemaining - 1)
            } else {
                document.title = 'Time is up!'
                audioElement.play()
                setStatus(STATUS.STOPPED)
            }
        },
        status === STATUS.STARTED ? 1000 : null,

    )




    return (
        <div className="breakPage">
            <audio id='notif' src={myAudio} />
            <div className='breakTitle'>
                <h1>{text.break.title}</h1>
            </div>
            <div className='breakDesc'>
                <p>{text.break.desc}</p>
            </div>
            <div className='timer'>
                {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
                {twoDigits(secondsToDisplay)}
            </div>
            <div className='status'>{status}</div>
            <div className='buttonList'>
                <button className='button1' onClick={handleStart} type="button">
                    Start
                </button>
                <button className='button2' onClick={handleStop} type="button">
                    Stop
                </button>
                <button className='button3' onClick={handleReset} type="button">
                    Reset
                </button>
            </div>
        </div>
    )
}


function useInterval(callback, delay) {
    const savedCallback = useRef()


    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        function tick() {
            savedCallback.current()
        }
        if (delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}

const twoDigits = (num) => String(num).padStart(2, '0')
