import React from "react";


export default function NewContact(){






    return(
        <>
        
        <div className="menuoptions">
                <button>Cancel</button> 
                <button>Done</button> 
            </div>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"/>
            <input placeholder="First Name" required className="b"></input>
            <input placeholder="Last Name" required ></input>
            <input placeholder="Phone Number (Numbers Only)" required  className="a"></input>
            <input placeholder="Email" required ></input>
            <input placeholder="Notes" required  className="a"></input>
            <h1>NOTE: </h1>
        </>


    )
}