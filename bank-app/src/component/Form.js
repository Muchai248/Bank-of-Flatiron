import React, { useState } from "react";

function Form({transaction, setTransactions}){

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
    

    const handleClick = (event) => {
        event.preventDefault()

        const newData = {};
        console.log(formData)
        fetch('http://localhost:8001/transactions', {
          method: 'POST',
          headers: {
            'Content-Type': 'Application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            setTransactions([...transaction,formData])

          })
          .catch((error) => {
            console.error('Error:', error);

    })

    setFormData({
    "date":"",
    "description":"",
    "amount":"",
    "category":"",})
}
    return(
        <>
       <div>
            <label>Date:</label>
            <input onChange={handleChange} name="date" type="date" value={formData.date} style={{marginTop:"50px"}}></input>
            <input onChange={handleChange} name="description"type="text" value={formData.description}placeholder="Description" ></input>
            <input onChange={handleChange} name="category"type="text" value={formData.category}placeholder="Category"></input>
            <input onChange={handleChange} name="amount"type="text" value={formData.amount}placeholder="Amount"></input>
        </div>
            <button onClick={handleClick}>Add Transaction</button>
        
        
        </>
        
    )
        
}

export default Form;




