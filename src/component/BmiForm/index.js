import React, { useContext } from 'react'
import useLanguage from '../../hook/useLanguage'
import useInput from '../../hook/useInput'
import './index.css'
import { DataContext, ContextProvider } from '../../context/DataContext'

function handleSubmit(event) {
    event.preventDefault()
}


function BmiForm() {
    const text = useLanguage()
    const { height, setHeight, weight, setWeight, setBmi } = useContext(DataContext)


    return (
        <div className='formContainer'>
            <div className='titleForm'>
                <h1>{text.bmi.title}</h1>
            </div>
            <div className='bmiDescription'>
                <p>{text.bmi.desc}</p>
            </div>
            <div className='bmi-form'>
                <h2>{text.bmi.height}</h2>
                <input
                    type='number'
                    value={height}
                    onChange={setHeight}
                />
                <h2>{text.bmi.weight}</h2>
                <input
                    type='number'
                    value={weight}
                    onChange={setWeight}
                />
                <br></br>
                

            </div>
        </div>



    )
}

export default BmiForm