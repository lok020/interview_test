import React from 'react'

function TitleNInput({title, input, updateInput}) {

    return (
        <form className='input-area expand-col'>
            <label className='label'>{title}</label>
            <input className='input text' type={"text"} value={input} onChange={updateInput}/>
        </form>
    )
}

export default TitleNInput
