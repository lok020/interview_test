import React, { useState } from 'react'

import TitleNInputText from '../COMPONENT/TitleNInputText';
import TitleNInputSelect from '../COMPONENT/TitleNInputSelect';
import TitleNListOfInputText from '../COMPONENT/TitleNListOfInputText';

function Step2({is_expand, expand, nextStep}) {
    const [telephone, setTelephone] = useState("");
    const [gender, setGender] = useState("");
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    // warning index representaion -> [telephone, gender, year, month, day]
    const [warning, setWarning] = useState([false, false, false, false, false]);

    
    const updateTelephone = (e) => {
        setTelephone(e.target.value);
    }
    
    const updateGender = (e) => {
        setGender(e.target.value);
    }

    const updateDateOfBirth = (e) => {
        // e.target.id would return as an string
        // e.target.id == 0, year
        // e.target.id == 1, month
        // e.target.id == 2, day
        if (e.target.id === "0")
            setYear(e.target.value);
        else if (e.target.id === "1")
            setMonth(e.target.value);
        else if (e.target.id === "2")
            setDay(e.target.value);
    }

    const validation = () => {
        // deep copy for edit
        let new_warning = JSON.parse(JSON.stringify(warning));
        // telephone checking
        if (telephone !== "")
            new_warning[0] = false;
        else
            new_warning[0] = true;
            
        // gender checking
        if (gender !== "")
            new_warning[1] = false;
        else
            new_warning[1] = true;

        // year checking
        if (year !== "")
            new_warning[2] = false;
        else
            new_warning[2] = true;
            
        // month checking
        if (month !== "")
            new_warning[3] = false;
        else
            new_warning[3] = true;
            
        // day checking
        if (day !== "")
            new_warning[4] = false;
        else
            new_warning[4] = true;

        setWarning(new_warning);

        if (!new_warning.includes(true)) nextStep();
    }

    return (
        <div className='step-area'>
            <div className='title' onClick={expand}><label className='text'>{"Step 2: More comments"}</label></div>
            {is_expand ?
            <div className='expand'>
                <div className='expand-row'>
                    <TitleNInputText title={"Telephone number"} input={telephone} updateInput={updateTelephone} warning={warning[0]}/>
                    <TitleNInputSelect title={"Gender"} input={gender} updateInput={updateGender} list={["Male", "Female"]} warning={warning[1]}/>
                    <TitleNListOfInputText title={"Date of birth"} input={[year, month, day]} updateInput={updateDateOfBirth} warning={[warning[2], warning[3], warning[4]]} warning_key={["year", "month", "day"]}/>
                </div>
                <div className='btn-area'>
                    <button className='action-btn' onClick={validation}>
                        {"Next >"}
                    </button>
                </div>
            </div>
            :
            <></>
            }
        </div>
    )
}

export default Step2