import React, { useState } from 'react';

import TitleNInputText from '../COMPONENT/TitleNInputText';

function Step1({is_expand, expand, nextStep}) {
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    // warning index representaion -> [firstName, surname, email]
    const [warning, setWarning] = useState([false, false, false]);
    
    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    }
    
    const updateSurname = (e) => {
        setSurname(e.target.value);
    }
    
    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const validation = () => {
        // deep copy for edit
        let new_warning = JSON.parse(JSON.stringify(warning));
        // first name checking
        if (firstName !== "")
            new_warning[0] = false;
        else
            new_warning[0] = true;
            
        // surname checking
        if (surname !== "")
            new_warning[1] = false;
        else
            new_warning[1] = true;

        // email checking
        if (email !== "" && email.includes("@") &&
            email.slice(-1) !== "@" && email.includes(".") &&
            email.slice(-1) !== ".")
            new_warning[2] = false;
        else
            new_warning[2] = true;
        setWarning(new_warning);

        if (!new_warning.includes(true)) nextStep();
    }

    return (
        <div className='step-area'>
            <div className='title' onClick={() => expand()}><label className='text'>{"Step 1: Your details"}</label></div>
            {is_expand ?
            <div className='expand'>
                <div className='expand-row'>
                    <TitleNInputText title={"First Name"} input={firstName} updateInput={updateFirstName} warning={warning[0]}/>
                    <TitleNInputText title={"Surname"} input={surname} updateInput={updateSurname} warning={warning[1]}/>
                    <TitleNInputText title={"Email Address:"} input={email} updateInput={updateEmail} warning={warning[2]}/>
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

export default Step1