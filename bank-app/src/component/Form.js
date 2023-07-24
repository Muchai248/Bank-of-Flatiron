import React from "react";

function Form(){

    function handleSearch(event){
       
        console.log(event)
    }
    return(
        <>
        <form>
            <tr><td>
                <input type="date"></input>
                <input ></input>
                <input></input>
                <input></input>
                </td>
            </tr>

            <button style={{margin:"4px 109px 13px 531px", boxSizing:"border-box"}} onSubmit={handleSearch}></button>
        </form>
        
        </>
        
    )
        
}

export default Form;