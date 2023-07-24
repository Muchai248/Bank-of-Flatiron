import React, { useState } from "react";

function Form({transaction}){

    const[formData, setFormData]= useState({
      "date":"",
       "description":"",
       "amount":"",
       "category":"",
    })

    function handleChange(event){
        console.log(event.target.name)
        setFormData({ 
            ...formData,
            [event.target.name]: event.target.value

    })
      console.log(formData)  
    }
    

    const handleClick = () => {
        
        const newData = {};
    
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
            <input onChange={handleChange} name="date" type="date" value={formData.date} style={{marginTop:"50px"}}></input>
            <input onChange={handleChange} name="description"type="text" value={formData.description}placeholder="Description" ></input>
            <input onChange={handleChange} name="category"type="text" value={formData.category}placeholder="Category"></input>
            <input onChange={handleChange} name="amount"type="text" value={formData.amount}placeholder="Amount"></input>
        </div>
            <button onClick={handleClick}>Transact</button>
        
        
        </>
        
    )
        
}

export default Form;




