import React from 'react'

function TitleNInput({title, input, updateInput, warning}) {
    return (
        <form className='input-area expand-col'>
            <label className='label'>{title}</label>
            <input className='input text' type={"text"} value={input} onChange={updateInput}/>
            {warning && <label className='warning'>{"invalid input"}</label>}
        </form>
    )
}

export default TitleNInput
