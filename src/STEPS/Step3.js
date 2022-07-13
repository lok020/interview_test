import React, { useState } from 'react'

import TitleNInputTextarea from '../COMPONENT/TitleNInputTextarea';

function Step3({is_expand, expand, nextStep}) {
    const [comments, setComments] = useState("");
    // warning index representaion -> [comments]
    const [warning, setWarning] = useState([false]);

    
    const updateComments = (e) => {
        setComments(e.target.value);
    }

    const validation = () => {
        // deep copy for edit
        let new_warning = JSON.parse(JSON.stringify(warning));
        // comments checking
        if (comments !== "")
            new_warning[0] = false;
        else
            new_warning[0] = true;

        setWarning(new_warning);

        if (!new_warning.includes(true)) nextStep();
    }

    return (
        <div className='step-area'>
            <div className='title' onClick={() => expand()}><label className='text'>{"Step 3: Final comments"}</label></div>
            {is_expand ?
            <div className='expand'>
                <div className='expand-row-for-2-column'>
                    <TitleNInputTextarea title={"Comments"} input={comments} updateInput={updateComments} warning={warning[0]}/>
                    <div className='col-2 btn-area'>
                        <button className='action-btn' onClick={validation}>
                            {"Next >"}
                        </button>
                    </div>
                </div>
            </div>
            :
            <></>
            }
        </div>
    )
}

export default Step3