import React from 'react'

function TestBtn() {
    const handleGetBtn = () => {
        fetch("/get")
        .then( res => {
            if (res.ok){
                console.log("GET DATA SUCCESS");
                return res.json();
            }
            else {
                console.log("GET DATA FAILED");
            }
        })
        .then( data => console.log(data) )
        .catch( error => console.log("ERROR", error) )
    }

    const handleClearBtn = () => {
        fetch("/clear")
        .then( res => {
            if (res.ok){
                console.log("Remove DATA SUCCESS");
                return res.json();
            }
            else {
                console.log("Remove DATA FAILED");
            }
        })
        .catch( error => console.log("ERROR", error) )
    }
    
    return (
        <div>
            <button onClick={handleGetBtn}>{"get"}</button>
            <button onClick={handleClearBtn}>{"clear"}</button>
        </div>
    )
}

export default TestBtn
