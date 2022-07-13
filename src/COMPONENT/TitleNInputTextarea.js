import React from 'react'

function TitleNInputTextarea({title, input, updateInput}) {

    return (
        <form className='input-area col-1'>
            <label className='label'>{title}</label>
            <textarea className='input textarea' value={input} onChange={updateInput}/>
        </form>
    )
}

export default TitleNInputTextarea
