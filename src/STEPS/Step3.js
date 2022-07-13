import React, { useState } from 'react'

import TitleNInputTextarea from '../COMPONENT/TitleNInputTextarea';

function Step3({is_expand, expand, nextStep}) {
    const [comments, setComments] = useState("");

    
    const updateComments = (e) => {
        setComments(e.target.value);
    }

    const validation = () => {
        if (comments !== "") nextStep();
    }

    return (
        <div className='step-area'>
            <div className='title' onClick={() => expand()}><label className='text'>{"Step 3: Final comments"}</label></div>
            {is_expand ?
            <div className='expand'>
                <div className='expand-row-for-2-column'>
                    <TitleNInputTextarea title={"Comments"} input={comments} updateInput={updateComments}/>
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