import React from "react";
import CalorieForm from "../../component/CalorieForm";
import CalorieResult from "../../component/CalorieResult";
import './index.css'

const Calorie = () => {
    return (
        <div className="calorieContainer">
            <CalorieForm />
            <CalorieResult />
        </div>
    );
}

export default Calorie;