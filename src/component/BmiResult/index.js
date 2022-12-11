import React, {useContext} from 'react'
import useLanguage from '../../hook/useLanguage'
import './index.css'
import { DataContext } from '../../context/DataContext'


let bmi= 0;
let category = '';
function setCategoryBmi(bmi) {
    if (bmi < 18.5) {
        category = 'underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'overweight';
    } else if (bmi >= 30) {
        category = 'obese';
    }

    return category
}

function setAttributeBmi(height, weight) {
    if(height === undefined || weight === undefined){
        bmi = 0;
    } else if (height === '' || weight === '') {
        bmi = 0;
    } else {
        height = height / 100;
        bmi = weight / (height * height);
        category = setCategoryBmi(bmi);
    }
    return category
}

function SetCategory(category) {
    const text = useLanguage()
    if (category === 'underweight') {
        return text.bmi.kategori1
    } else if (category === 'normal') {
        return text.bmi.kategori2
    } else if (category === 'overweight') {
        return text.bmi.kategori3
    } else if (category === 'obese') {
        return text.bmi.kategori4
    }
}


function BmiResult(){
    let category = '';  
    const {height, weight} = useContext(DataContext)
    const text = useLanguage()
    category = setAttributeBmi(height, weight)
    
    
    return (

        <div className='bmi-result'>
            <h1>{text.bmi.result}</h1>
            <div className='result'>
                <span className='line1'>
                    {text.bmi.line1} {height} cm
                </span> <br />
                <span className='line2'>
                    {text.bmi.line2} {weight} kg
                </span> <br />
                <span className='line3'>
                    {text.bmi.line3} {bmi}
                </span> <br />
                <span className='line4'>
                    {SetCategory(category)}
                </span>
            </div>
                

        </div>
        
    )
}

export default BmiResult