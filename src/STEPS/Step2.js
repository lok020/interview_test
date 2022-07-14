import React from 'react'

import TitleNInputText from '../COMPONENT/TitleNInputText';
import TitleNInputSelect from '../COMPONENT/TitleNInputSelect';
import TitleNListOfInputText from '../COMPONENT/TitleNListOfInputText';

function Step2({is_expand, expand, content, update, warning, check}) {    
    const updateTelephone = (e) => {
        let new_content = JSON.parse(JSON.stringify(content));
        new_content[0] = e.target.value;
        update(new_content);
    }
    
    const updateGender = (e) => {
        let new_content = JSON.parse(JSON.stringify(content));
        new_content[1] = e.target.value;
        update(new_content);
    }

    const updateDateOfBirth = (e) => {
        // e.target.id would return as an string
        // e.target.id == 0, year
        // e.target.id == 1, month
        // e.target.id == 2, day
        let new_content = JSON.parse(JSON.stringify(content));
        if (e.target.id === "0")
            new_content[2] = e.target.value;
        else if (e.target.id === "1")
            new_content[3] = e.target.value;
        else if (e.target.id === "2")
            new_content[4] = e.target.value;
        update(new_content);
    }

    return (
        <div className='step-area' data-testid="step2">
            <div className='title' onClick={expand}><label className='text'>{"Step 2: More comments"}</label></div>
            {is_expand ?
            <div className='expand'>
                <div className='expand-row'>
                    <TitleNInputText title={"Telephone number"} input={content[0]} updateInput={updateTelephone} warning={warning[0]}/>
                    <TitleNInputSelect title={"Gender"} input={content[1]} updateInput={updateGender} list={["Male", "Female"]} warning={warning[1]}/>
                    <TitleNListOfInputText title={"Date of birth"} input={[content[2], content[3], content[4]]} updateInput={updateDateOfBirth} warning={[warning[2], warning[3], warning[4]]} warning_key={["year", "month", "day"]}/>
                </div>
                <div className='btn-area'>
                    <button className='action-btn' onClick={() => check()}>
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