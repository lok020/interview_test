import React, { useState } from 'react';

import TitleNInputText from '../COMPONENT/TitleNInputText';

function Step1({is_expand, expand, nextStep}) {
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [Email, setEmail] = useState("");

    
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
        if (firstName !== "" && surname !== "" && Email !== "") nextStep();
    }

    return (
        <div className='step-area'>
            <div className='title' onClick={() => expand()}><label className='text'>{"Step 1: Your details"}</label></div>
            {is_expand ?
            <div className='expand'>
                <div className='expand-row'>
                    <TitleNInputText title={"First Name"} input={firstName} updateInput={updateFirstName}/>
                    <TitleNInputText title={"Surname"} input={surname} updateInput={updateSurname}/>
                    <TitleNInputText title={"Email Address:"} input={Email} updateInput={updateEmail}/>
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