import React from 'react'

function TitleNInput({title, input, updateInput, warning}) {
    return (
        <form className='input-area expand-col'>
            <label data-testid={`${title}-title`} className='label'>{title}</label>
            <input data-testid={`${title}-input`} className='input text' type={"text"} value={input} onChange={updateInput}/>
            {warning && <label className='warning'>{"invalid input"}</label>}
        </form>
    )
}

export default TitleNInput
