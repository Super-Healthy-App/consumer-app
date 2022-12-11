import React, {useContext} from 'react';
import useLanguage from '../../hook/useLanguage';
import { DataContext } from '../../context/DataContext';
import { render } from '@testing-library/react';
import './index.css'

let calorie = 0;
let activity = '';



function CalorieResult() {
    const { calorieHeight, calorieWeight, calorieAge, calorieGender, calorieActivity } = useContext(DataContext);
    const text = useLanguage()
    let calorie = 0;
    let activity = '';
    function calorieNeed(calorieHeight, calorieWeight, calorieAge, calorieGender, calorieActivity) {
        if (calorieGender === undefined) {
            return undefined
        }  else if (calorieGender === 'male') {
            calorie = 66 + (13.7 * calorieWeight) + (5 * calorieHeight) - (6.8 * calorieAge);
            calorie = calorie * calorieActivity;
            return text.calorie.line1 + calorie
        } else {
            calorie = 655 + (9.6 * calorieWeight) + (1.8 * calorieHeight) - (4.7 * calorieAge);
            calorie = calorie * calorieActivity;
            return text.calorie.line1 + calorie
        }

       
        
    }

    
    
    console.log(calorieActivity);

    return(
        <div className='calorie-result'>
            <h1>{text.calorie.calorieResult}</h1>
            <span>{calorieNeed(calorieHeight, calorieWeight, calorieAge, calorieGender, calorieActivity)}</span>
        </div>
    )
   
        
}

export default CalorieResult

    