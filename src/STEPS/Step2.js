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
        if (telephone !== "" && gender !== "" && year !== "" && month !== "" && day !== "") {nextStep()};
    }

    return (
        <div className='step-area'>
            <div className='title' onClick={expand}><label className='text'>{"Step 2: More comments"}</label></div>
            {is_expand ?
            <div className='expand'>
                <div className='expand-row'>
                    <TitleNInputText title={"Telephone number"} input={telephone} updateInput={updateTelephone}/>
                    <TitleNInputSelect title={"Gender"} input={gender} updateInput={updateGender} list={["Male", "Female"]}/>
                    <TitleNListOfInputText title={"Date of birth"} input={[year, month, day]} updateInput={updateDateOfBirth}/>
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