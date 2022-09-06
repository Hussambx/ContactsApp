import React from "react";


export default function ContactList(props){
    //Sends the _id to app.jsx to reference 
    function send(){
        props.expandview(props.id);
    }

    return(
            <button className="contactbox"  onClick={send}>{props.firstname} {props.lastname}</button>

       
    )
}