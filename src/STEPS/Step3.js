import React from 'react'

import TitleNInputTextarea from '../COMPONENT/TitleNInputTextarea';

function Step3({is_expand, expand, content, update, warning, check }) {
    const updateComments = (e) => {
        let new_content = JSON.parse(JSON.stringify(content));
        new_content[0] = e.target.value;
        update(new_content);
    }

    return (
        <div className='step-area' data-testid="step3">
            <div className='title' onClick={() => expand()}><label className='text'>{"Step 3: Final comments"}</label></div>
            {is_expand ?
            <div className='expand'>
                <div className='expand-row-for-2-column'>
                    <TitleNInputTextarea title={"Comments"} input={content[0]} updateInput={updateComments} warning={warning[0]}/>
                    <div className='col-2 btn-area'>
                        <button className='action-btn' onClick={() => check()}>
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