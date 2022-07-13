import React from 'react'

function TitleNInput({title, input, updateInput, warning}) {
    return (
        <form className='input-area expand-col'>
            <label className='label'>{title}</label>
            <input className='input text' type={"text"} value={input} onChange={updateInput}/>
            {warning && <label className='warning'>{`Fill in the missing ${title}`}</label>}
        </form>
    )
}

export default TitleNInput
