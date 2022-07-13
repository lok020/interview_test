import React from 'react'

function TitleNInputTextarea({title, input, updateInput, warning}) {

    return (
        <form className='input-area col-1'>
            <label className='label'>{title}</label>
            <textarea className='input textarea' value={input} onChange={updateInput}/>
            {warning && <label className='warning'>{`Fill in the missing ${title}`}</label>}
        </form>
    )
}

export default TitleNInputTextarea
