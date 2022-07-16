import React from 'react'

function TitleNListOfInputText({type, title, input, updateInput, warning, warning_key}) {
    const checkWarning = () => {
        let result = "";
        for (let i in warning){
            if (warning[i] === true)
                result += `${warning_key[i]}, `;
        }
        return result.substring(0, result.length-2);
    }

    return (
        <form className='input-area expand-col'>
            <label className='label'>{title}</label>
            <div className='list-of-text'>
                {input.map((date, index) => 
                    <input className='input special-text' key={index} type={type} id={index} value={date} onChange={updateInput}/>
                )}
            </div>
            {warning.includes(true) && <label className='warning'>
                {"Fill in the missing: " + checkWarning()}
            </label>}
        </form>
    )
}

export default TitleNListOfInputText
