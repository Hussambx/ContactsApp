import React from 'react'
import { useState,useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContactList from './components/ContactList.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [apidata, SetData] = useState([])
  const[viewmore,SetView] = useState([]);//Use State Used For Fetching Single Contact 
  
  
  React.useEffect(() => {
    
    async function getContacts() {
        const res = await fetch("http://localhost:4000/api/contacts/")
        const data = await res.json()
        console.log(data);
        SetData(data);
    }
    getContacts()
}, [])


  //Fetchs A Single Contact 
  function viewcontact(val){
    async function getContact() {
      const res = await fetch("http://localhost:4000/api/contacts/"+val)
      const data = await res.json()
      if(res.ok){
        SetView(data)
      }else{
        console.log("Contact Doesn't Exist")
      }
  }
  getContact()
  }



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
      <Navbar/>
      <Routes>
       
        <Route
        path='/'
        element={
          <div id="LIST">{ContactsData}</div>
          }>


        </Route>
      </Routes>
      
      
      </BrowserRouter>
    
    </div>
  )
}

export default App
