import React from "react";

function SearchBar(){
    return(
        <>
        <div className="Search">
        <input  style={{
        boxSizing:"56px",
        borderRadius:"46px",
        margin:"44px 109px 113px 51px",
        width:"1789px",
        height:"56px",
        boxShadow:"0 3px 6px 0 rgba(36, 198, 220, 0.15)",
        position:"absolute"}}
        type="Search" 
        placeholder="Search transaction"/>
        </div>
        </>
    )
}

export default SearchBar;