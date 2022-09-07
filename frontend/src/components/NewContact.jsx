import React from "react";
import { useState } from "react";

//This component will act as the create new contact/edit an existing contact screen  
export default function NewContact(props){
    
        const [firstname,SetFirstname] = useState(props.firstname);
        const [lastname, SetLastname] = useState(props.lastname);
        const [phonenumber,SetNumber]=useState(props.phonenumber);
        const[idofdata,SetDataId]=useState(props.id)
        const[email,SetEmail] = useState(); //Will add email functionality at a later time 

        //This function submits the form data to the api, to store the new entry into the database once complete will then re-direct to main contacts list page with updated contact
        async function submit(){
            const contactinfo = {firstname, lastname, phonenumber}
            const response = await fetch('http://localhost:4000/api/contacts/', {
              method: 'POST',
              body: JSON.stringify(contactinfo),
              headers: {
                'Content-Type': 'application/json'
              }
            })
            const json = await response.json()
            if(!response.ok){
                console.log("Error happened bro")
            }
            if(response.ok){
                //Resets state values as data was sent to db
                props.goback("");
                console.log("MINT");
                SetFirstname('');
                SetLastname('');
                SetNumber('');
            }
        }


    return(
        <>
        
        <div className="menuoptions">
                <button onClick={props.cancelcreation}>Cancel</button> 
                <button onClick={submit}>Done</button> 
            </div>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"/>
            
            <input placeholder="First Name" required className="b" value={firstname} onChange={(e)=>SetFirstname(e.target.value)}></input>
            <input placeholder="Last Name" required  value={lastname} onChange={(e)=>SetLastname(e.target.value)}></input>
            <input placeholder="Phone Number (Numbers Only)" required  className="a" value={phonenumber} onChange={(e)=>SetNumber(e.target.value)}></input>
            <input placeholder="Email" required  value={email}></input>
            <input placeholder="Notes" required  className="a"></input>
            <h1>NOTE: </h1>
        </>


    )
}