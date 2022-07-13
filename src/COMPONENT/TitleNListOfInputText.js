import React from 'react'

function TitleNListOfInputText({title, input, updateInput}) {

    return (
        <form className='input-area expand-col'>
            <label className='label'>{title}</label>
            <div className='list-of-text'>
                {input.map((date, index) => 
                    <input className='input special-text' key={index} type={"text"} id={index} value={date} onChange={updateInput}/>
                )}
            </div>
        </form>
    )
}

export default TitleNListOfInputText
