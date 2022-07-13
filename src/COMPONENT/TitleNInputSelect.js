import React from 'react'

function TitleNInputSelect({title, input, updateInput, list}) {

    return (
        <form className='input-area expand-col'>
            <label className='label'>{title}</label>
            <select className='input select' onChange={updateInput} value={input}>
                <option value={""} disabled>{"Select Gender"}</option>
                {list.map(option => 
                    <option key={option}>
                        {option}
                    </option>
                )}
            </select>
        </form>
    )
}

export default TitleNInputSelect
