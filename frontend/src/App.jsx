import React from 'react'
import { useState,useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContactList from './components/ContactList.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const [apidata, SetData] = useState([])
  
  
  
  React.useEffect(() => {
    
    async function getContacts() {
        const res = await fetch("http://localhost:4000/api/contacts/")
        const data = await res.text()
        console.log(data);
        SetData(data);
    }
    getContacts()
}, [])


  const ContactsData=apidata.map(contact=>{
    return(
<ContactList
  key={contact._id}
  firstname={contact.firstname}
  lastname={contact.lastname}
  phonenumber={contact.phonenumber}

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
        element={ContactsData}>


        </Route>
      </Routes>
      
      
      </BrowserRouter>
    
    </div>
  )
}

export default App
