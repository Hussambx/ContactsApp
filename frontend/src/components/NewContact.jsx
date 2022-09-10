import React from "react";
import { useState } from "react";
import profilepic from "../assets/Circle-icons-profile.svg.png";
//This component will act as the create new contact/edit an existing contact screen  
export default function NewContact(props){
    
        const [firstname,SetFirstname] = useState(props.firstname);
        const [lastname, SetLastname] = useState(props.lastname);
        const [phonenumber,SetNumber]=useState(props.phonenumber);
        const[idofdata,SetDataId]=useState(props.idofdata)
        const[email,SetEmail] = useState(props.email); 
        const[notes,SetNotes]=useState(props.notes);
        const[errormsg,SetError]=useState();
        const[requiredfilled,SetRequirements]=useState(false);  //Tracks if required elements are filled if they are done text is blue rather then grey

        //The Main Function called on decides if it will then use the POST method (Create New Contact) or PATCH method (Update excisting contact) based on if idofdata is null 
        function mainsubmit(){
            if(firstname&&lastname&&phonenumber!=""){
                idofdata==null?submit():updatedata();
            }else{
                SetError("Please Fill All Required Elements")
            }
           
        }
        //Tracks if all required elements are filled or empty/null
        if(firstname==null || lastname==null|| phonenumber ==null || firstname=='' || lastname==''|| phonenumber ==''){
            if(requiredfilled!=false){
                SetRequirements(false)
            }
        }else if(requiredfilled!=true){
            SetRequirements(true);
        }


        //This function will use the PATCH method to update the already existing data with the newly created changes 
        async function updatedata(){
            const contactinfo = {firstname, lastname,email,notes,phonenumber}
            const response = await fetch('https://contacts-tracker.herokuapp.com/api/contacts/'+idofdata, {
              method: 'PATCH',
              body: JSON.stringify(contactinfo),
              headers: {
                'Content-Type': 'application/json'
              }
            })
            const json = await response.json()
            if(!response.ok){
                SetError("An Error Occured Please Try Again Later")
            }
            if(response.ok){
                //Resets state values as data was sent to db
                props.goback("");
                SetFirstname('');
                SetLastname('');
                SetNumber('');
                SetEmail('');
                SetNotes('')
                SetDataId('')
            }
        }

        //This function submits the form data to the api using the POST Method, to store the new entry into the database once complete will then re-direct to main contacts list page with updated contact
        async function submit(){
            const contactinfo = {firstname, lastname,email,notes,phonenumber}
            const response = await fetch('https://contacts-tracker.herokuapp.com/api/contacts/', {
              method: 'POST',
              body: JSON.stringify(contactinfo),
              headers: {
                'Content-Type': 'application/json'
              }
            })
            const json = await response.json()
            if(!response.ok){
                SetError("An Error Occured Please Try Again Later")
            }
            if(response.ok){
                //Resets state values as data was sent to db
                props.goback("");
                SetFirstname('');
                SetLastname('');
                SetNumber('');
                SetEmail('');
                SetNotes('')
                SetDataId('')
            }
        }


    return(
        <>
        
        <div className="menuoptions">
                <button onClick={props.cancelcreation}>Cancel</button> 
                <button onClick={mainsubmit} style={{color:requiredfilled==true?"blue":"grey"}}>Done</button> 
            </div>
         <img src={profilepic}/>
            
            <input placeholder="First Name" required className="b" value={firstname} onChange={(e)=>SetFirstname(e.target.value)} maxLength="20"></input>
            <input placeholder="Last Name" required  value={lastname} onChange={(e)=>SetLastname(e.target.value)} maxlength="20"></input>
            <input placeholder="  Phone Number" required  className="a" value={phonenumber} onChange={(e)=>SetNumber(e.target.value)} type="tel" maxlength="20" ></input>
            <input placeholder="Email" required  value={email} onChange={(e)=>SetEmail(e.target.value)} maxlength="40"></input>
            <input placeholder="Notes" required  className="a" value={notes} onChange={(e)=>SetNotes(e.target.value)} maxlength="80"></input>
            <h2>{errormsg} </h2>
        </>


    )
}