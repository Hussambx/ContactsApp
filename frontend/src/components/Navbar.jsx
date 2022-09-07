import React from "react";
import { useState } from "react";

import {Link} from 'react-router-dom'
export default function Navbar(props){
    const [searchx,SetSearch]=useState(''); //Tracks Search Bar Value 


    return(
      <div id="navdiv" >
      
<button className="newcontact" onClick={props.makenew}>Add New Contact +</button>

        <form>
<input type="string" placeholder="Search For Contact" value={searchx} onChange={(e)=>SetSearch(e.target.value)}></input>
</form>
        </div>
            
    )
}