import React from 'react'
import { useState,useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContactList from './components/ContactList.jsx'
import Navbar from './components/Navbar.jsx'
import OneContact from './components/OneContact.jsx'

function App() {
  const [apidata, SetData] = useState([]) //Data that is fetched with api is first called 
  const[viewmore,SetView] = useState([]);//Use State Used For Fetching Single Contact 
  const[displayed,SetDisplay]=useState(true);
  const[refreshdata,SetRefresh] = useState(true); //Stated used to refresh data 
  
  //Initally fetchs all the data 
  React.useEffect(() => {
    async function getContacts() {
        const res = await fetch("http://localhost:4000/api/contacts/")
        const data = await res.json()
        console.log(data);
        SetData(data);
       
    }
    getContacts()
}, [refreshdata])


  //Fetchs A Single Contact 
  function viewcontact(val){
    async function getContact() {
      const res = await fetch("http://localhost:4000/api/contacts/"+val)
      const data = await res.json()
      if(res.ok){
        SetView(data)
        SetDisplay(false);
        console.log(data);
      }else{
        console.log("Contact Doesn't Exist")
      }
  }
  getContact()
  }

  //Changes View
  function back(){
    SetDisplay(true);
    SetRefresh(!refreshdata);
  }

    //Maps the apidata first fetched with application is opened and pass's it as a prop 
  const ContactsData=apidata.map(contact=>{
    return(
<ContactList
  key={contact._id}
  id={contact._id}
  firstname={contact.firstname}
  lastname={contact.lastname}
  phonenumber={contact.phonenumber}
      expandview ={viewcontact}
/>
    )
  })

  return (
    <div className="App">
      <BrowserRouter>
       {displayed && <Navbar/>}
      <Routes>
       
        <Route
        path='/'
        element={
          
          <div id="LIST">
            {displayed && ContactsData}
            {!displayed && <OneContact
            goback={back}
            key={viewmore._id}
            id={viewmore._id}
            firstname={viewmore.firstname}
            lastname={viewmore.lastname}
            phonenumber={viewmore.phonenumber}
            />}
            </div>
          }>


        </Route>
      </Routes>
      
      
      </BrowserRouter>
    
    </div>
  )
}

export default App
