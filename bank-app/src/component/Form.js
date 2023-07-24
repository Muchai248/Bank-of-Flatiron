import React from "react";

function Form(){

    const handleClick = () => {
        const newData = {  };
    
        fetch('http://localhost:8001/transactions', {
          method: 'POST',
          headers: {
            'Content-Type': 'Transactions/json',
          },
          body: JSON.stringify(newData),
        })
          .then((response) => response.json())
          .then((data) => {

          })
          .catch((error) => {
            console.error('Error:', error);
    })}
    return(
        <>
       <div>
            
            <label>Date:</label>
            <input type="date" style={{marginTop:"50px"}}></input>
            <input type="text" placeholder="Description" ></input>
            <input type="text" placeholder="Category"></input>
            <input type="text" placeholder="Amount"></input>
        </div>
            <button onClick={handleClick}>Transaction</button>
        
        
        </>
        
    )
        
}

export default Form;




