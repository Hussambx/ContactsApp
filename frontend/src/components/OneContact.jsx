import React from "react";


export default function OneContact(props){
    return(
        <div className="onecontact">

            <div className="menuoptions">
                <button onClick={props.goback}>Contacts</button> 
                <button>Edit</button> 
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
            <h4>sampleemail@yahoo.com</h4>
        </div>
        <div className="phonearea">
            <h4>notes</h4>
            <h4></h4>
        </div>

         <div className="fillerinfo">
            <h4>Send Message</h4>
            <hr></hr>
            <h4>Share Contact</h4>
            <hr></hr>
            <h4>Add to Favorites</h4>
        </div>
        
        <button>Delete Contact</button>
        </div>

    )
    
}