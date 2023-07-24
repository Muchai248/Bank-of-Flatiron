import React from "react";
import AccountContainer from "./AccountContainer";

function Header(){
    return(
        <>
        <div>
            <nav style={{textAlign:"center", 
            height:"74px",
            bottom:"9px",
            color:"white",
             backgroundColor:"purple", 
             fontSize:"44px"}}>The Royal Bank of Flatiron</nav>
             <AccountContainer/>
             </div>
        </>
    )
}

export default Header;