import React, { useState } from 'react'
import useInput from '../hook/useInput'


const DataContext = React.createContext()

function ContextProvider(props) {

    const [height, setHeight] = useInput('')
    const [weight, setWeight] = useInput('')
    const [calorieHeight, setCalorieHeight] = useInput('')
    const [calorieWeight, setCalorieWeight] = useInput('')
    const [calorieAge, setCalorieAge] = useInput('')
    const [calorieGender, setCalorieGender] = useState('male')
    const [calorieActivity, setCalorieActivity] = useInput('')
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [timeValue1, setTimeValue1] = useState(null)
    const [timeValue2, setTimeValue2] = useState(null)
    const [totalSecond, setTotalSecond] = useState(0)
    const [isCheckedManual, setisCheckedManual] = useState(false)
    const [manualTimer, setManualTimer] = useState()

    


    return (
        <DataContext.Provider value={{
            height,
            setHeight,
            weight,
            setWeight,
            calorieHeight,
            setCalorieHeight,
            calorieWeight,
            setCalorieWeight,
            calorieAge,
            setCalorieAge,
            calorieGender,
            setCalorieGender,
            calorieActivity,
            setCalorieActivity,
            modalIsOpen,
            setModalIsOpen,
            timeValue1,
            setTimeValue1,
            timeValue2,
            setTimeValue2,
            totalSecond,
            setTotalSecond,
            isCheckedManual,
            setisCheckedManual,
            manualTimer,
            setManualTimer
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

export { ContextProvider, DataContext } 