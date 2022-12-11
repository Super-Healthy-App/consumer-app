import React, { useContext } from 'react'
import useLanguage from '../../hook/useLanguage'
import './index.css'
import { DataContext } from '../../context/DataContext'




const CalorieForm = () => {

    const text = useLanguage()
    const {
        calorieHeight,
        setCalorieHeight,
        calorieWeight,
        setCalorieWeight,
        calorieAge,
        setCalorieAge,
        calorieGender,
        setCalorieGender,
        calorieActivity,
        setCalorieActivity
    } = useContext(DataContext)
    console.log(calorieGender)
    return (
        <div className='calorie-form'>
            <div className='title'>
                <h1>{text.calorie.title}</h1>
            </div>

            <span className='description'>{text.calorie.desc}{text.calorie.desc2}</span>
            <div className='calorieFormContainer'>
                <h2>{text.calorie.gender}</h2>
                <div className="gender">
                    <label>
                        <input
                            type='radio'
                            value='male'
                            checked={calorieGender === 'male'}
                            onChange={() => setCalorieGender('male')}

                        />Male
                    </label>
                    <label>
                        <input
                            type='radio'
                            value='female'
                            checked={calorieGender === 'female'}
                            onChange={() => setCalorieGender('female')}
                        />Female
                    </label>

                </div>
                <h2>{text.calorie.height}</h2>
                <input
                    type='number'
                    value={calorieHeight}
                    placeholder='0 cm'
                    onChange={setCalorieHeight}
                />
                <h2>{text.calorie.weight}</h2>
                <input
                    type='number'
                    value={calorieWeight}
                    placeholder='0 kg'
                    onChange={setCalorieWeight}
                />
                <h2>{text.calorie.age}</h2>
                <input
                    type='number'
                    value={calorieAge}
                    placeholder='0'
                    onChange={setCalorieAge}
                />
                <h2>{text.calorie.activity}</h2>
                <select
                    value={calorieActivity}
                    onChange={setCalorieActivity}
                >
                    <option value='1.2'>{text.calorie.activity1}</option>
                    <option value='1.375'>{text.calorie.activity2}</option>
                    <option value='1.55'>{text.calorie.activity3}</option>
                    <option value='1.725'>{text.calorie.activity4}</option>
                    <option value='1.9'>{text.calorie.activity5}</option>
                </select>

            </div>

        </div>
    )
}

export default CalorieForm