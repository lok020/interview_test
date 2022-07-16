import React from 'react';

import TitleNInputText from '../COMPONENT/TitleNInputText';

function Step1({is_expand, expand, content, update, warning, check}) {    
    const updateFirstName = (e) => {
        let new_content = JSON.parse(JSON.stringify(content));
        new_content[0] = e.target.value;
        update(new_content);
    }
    
    const updateSurname = (e) => {
        let new_content = JSON.parse(JSON.stringify(content));
        new_content[1] = e.target.value;
        update(new_content);
    }
    
    const updateEmail = (e) => {
        let new_content = JSON.parse(JSON.stringify(content));
        new_content[2] = e.target.value;
        update(new_content);
    }

    return (
        <div className='step-area' data-testid="step1">
            <div className='title' onClick={() => expand()}><label className='text'>{"Step 1: Your details"}</label></div>
            {is_expand ?
            <div className='expand'>
                <div className='expand-row'>
                    <TitleNInputText title={"First Name"} type={"text"} input={content[0]} updateInput={updateFirstName} warning={warning[0]}/>
                    <TitleNInputText title={"Surname"} type={"text"} input={content[1]} updateInput={updateSurname} warning={warning[1]}/>
                    <TitleNInputText title={"Email Address:"} type={"text"} input={content[2]} updateInput={updateEmail} warning={warning[2]}/>
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

export default Step1