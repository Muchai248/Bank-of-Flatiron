import React,{useState} from "react";



function SearchBar(){
const [hint, setHint]= useState("")



// const results=transaction.filter(tran=> {
//     return tran.description.toLowerCase().includes(hint.toLowerCase())
// })

    function handleSearch(event){
    const hint=event.target.value
        setHint(hint)
       
    }
    return(
        <>
        <div className="Search">
        <input 
        className="form-control" 
        id="exampleFormControlInput1"
        type="search" 
        placeholder="search here"
        onChange={handleSearch}
        value={hint}
        // style={{
        // boxSizing:"56px",
        // borderRadius:"46px",
        // margin:"44px 109px 113px 51px",
        // width:"1789px",
        // height:"56px",
        // boxShadow:"0 3px 6px 0 rgba(36, 198, 220, 0.15)",
        // position:"absolute"}}
        // type="Search" 
        // placeholder="Search transaction"
        />
        </div>
        </>
    )
}

export default SearchBar;