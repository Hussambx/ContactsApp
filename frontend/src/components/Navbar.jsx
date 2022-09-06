import React from "react";

import {Link} from 'react-router-dom'
export default function Navbar(){
    return(
      <div id="navdiv" >
      <nav>
<h1>Contacts</h1>
<button className="newcontact">+</button>
        </nav>

        <form>
<input type="string" placeholder="Search For Contact"></input>
</form>
        </div>
            
            
        
    )
}