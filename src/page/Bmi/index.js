import React from 'react'
import BmiForm from '../../component/BmiForm'
import BmiResult from '../../component/BmiResult'


const Bmi = () => {
    
    return (
        <div className='bmiContainer'>
        <BmiForm />
        <BmiResult />
        </div>
        
    )
}

export default Bmi