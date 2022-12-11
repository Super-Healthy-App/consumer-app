import React, { useContext, useState, useEffect } from 'react'
import './index.css'
import { DataContext } from '../../context/DataContext'
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import useLanguage from '../../hook/useLanguage';



function BreakForm() {
    const text = useLanguage()
    let totalSecond1
    let totalSecond2
    const { timeValue1, setTimeValue1 } = useContext(DataContext);
    const { timeValue2, setTimeValue2 } = useContext(DataContext);
    const { totalSecond, setTotalSecond } = useContext(DataContext);
    const { isCheckedManual, setisCheckedManual } = useContext(DataContext);
    const { manualTimer, setManualTimer } = useContext(DataContext);
    const [isChecked, setIsChecked] = useState(false);


    if (timeValue1 !== null) {
        let [, hour1] = Object.entries(timeValue1).find(([key]) => key === '$H')
        let [, minute1] = Object.entries(timeValue1).find(([key]) => key === '$m')
        hour1 = hour1 * 3600
        minute1 = minute1 * 60
        totalSecond1 = hour1 + minute1
    }

    if (timeValue2 !== null) {
        let [, hour2] = Object.entries(timeValue2).find(([key]) => key === '$H')
        let [, minute2] = Object.entries(timeValue2).find(([key]) => key === '$m')
        hour2 = hour2 * 3600
        minute2 = minute2 * 60
        totalSecond2 = hour2 + minute2

    }

    useEffect(() => {
        let totalSecond = totalSecond2 - totalSecond1
        setTotalSecond(totalSecond)
    }, [setTotalSecond, totalSecond, totalSecond1, totalSecond2])

    console.log('total second form : ' + totalSecond)



    const handleChange = (event) => {
        setIsChecked(event.target.checked)
        setisCheckedManual(event.target.checked)
    };

    console.log(manualTimer)
    return (
        <form className='form-time'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <h2>{text.break.formTitle}</h2>
                <div className='timePicker'>
                    <TimePicker
                        label={text.break.startLabel}
                        ampm={false}
                        value={timeValue1}
                        inputFormat="HH:mm"
                        onChange={(timeValue1) => {
                            setTimeValue1(timeValue1);
                        }}
                        views={['hours', 'minutes']}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                        label={text.break.endLabel}
                        inputFormat='HH:mm'
                        ampm={false}
                        value={timeValue2}
                        onChange={(timeValue2) => {
                            setTimeValue2(timeValue2);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </div>
                <label>
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleChange}
                    />
                    {text.break.checkBoxLabel}
                </label>
                {isCheckedManual && <div>
                    <span>masukkan menit pengingat :</span><br></br>
                    <input
                        value={manualTimer}
                        onChange={(e) => setManualTimer(e.target.value)}
                        placeholder=' menit'
                        style={{ width: '100px' }}
                        type='number'
                        max='60'
                    />
                </div>
                }

            </LocalizationProvider>
        </form>

    )
}

export default BreakForm