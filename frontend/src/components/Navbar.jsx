import React from "react";

import {Link} from 'react-router-dom'
export default function Navbar(){
    return(
      <div id="navdiv" >
      
<button className="newcontact">Add New Contact +</button>

        <form>
<input type="string" placeholder="Search For Contact"></input>
</form>
        </div>
            
            
        
    )
}