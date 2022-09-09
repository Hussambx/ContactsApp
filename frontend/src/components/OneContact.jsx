import React from "react";
import { useState } from "react";


export default function OneContact(props){

    const[deleteit,SetDelete]=useState(true); //This state tracks of the confirm delete menu should be rendered or not 
  
    //This function will trigger the editcontactf () in app.jx. it will then update the edit contact state. Which will basically pass the aleady excisting fetched data to the
    //newcontact.jsx field instead of having to fetch the data again 
    function existingvalues(){
        props.gocreation([props.firstname,props.lastname,props.phonenumber,props.id,props.email,props.notes]);
    }

    //This function is triggered once the user hits on yes to confirm the delete request 
    async function removecontact(){
        const response = await fetch('http://localhost:4000/api/contacts/'+props.id, {
            method: 'DELETE',
          })
          const json = await response.json()

          if(response.ok){
            SetDelete(true);
            props.goback();
          }
        }

        //This function is triggered to either get the confirm delete menu to appear or to get rid of it 
        function changedmind(){
            SetDelete(!deleteit)
        }

    return(
        <div className="onecontact">

            <div className="menuoptions">
                <button onClick={props.goback}>Contacts</button> 
                <button onClick={existingvalues}>Edit</button> 
            </div>

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"/>
<h1>{props.firstname} {props.lastname}</h1>

            
        <div className="contactoptions">
            <div className="contactoption">
                <img src="https://iconarchive.com/download/i76672/xenatt/the-circle/App-Messages.ico"/>
                <h6>message</h6>
            </div>
            <div className="contactoption">
                <img src="https://iconarchive.com/download/i76672/xenatt/the-circle/App-Messages.ico"/>
                <h6>call</h6>
            </div>
            <div className="contactoption">
                <img src="https://iconarchive.com/download/i76672/xenatt/the-circle/App-Messages.ico"/>
                <h6>video</h6>
            </div>
            <div className="contactoption">
                <img src="https://iconarchive.com/download/i76672/xenatt/the-circle/App-Messages.ico"/>
                <h6>mail</h6>
            </div>
            <div className="contactoption">
                <img src="https://iconarchive.com/download/i76672/xenatt/the-circle/App-Messages.ico"/>
                <h6>pay</h6>
            </div>
        </div>

        <div className="phonearea">
            <h4>phone</h4>
            <h4>{props.phonenumber}</h4>
        </div>
        <div className="phonearea">
            <h4>email</h4>
            <h4>{props.email}</h4>
        </div>
        <div className="phonearea">
            <h4>notes</h4>
            <h4>{props.notes}</h4>
        </div>

         <div className="fillerinfo">
            <h4>Send Message</h4>
            <hr></hr>
            <h4>Share Contact</h4>
            <hr></hr>
            <h4>Add to Favorites</h4>
        </div>
        
        {deleteit &&<button onClick={changedmind}>Delete Contact</button>}
        {!deleteit && <h2>Are you sure you want to delete?</h2> }
        {!deleteit && <button onClick={removecontact}>Yes</button> }
        {!deleteit && <button onClick={changedmind}>No</button> }


        </div>

    )
    
}