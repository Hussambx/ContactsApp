import React from 'react'
import { useState,useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContactList from './components/ContactList.jsx'
import Navbar from './components/Navbar.jsx'
import OneContact from './components/OneContact.jsx'
import NewContact from './components/NewContact.jsx'
function App() {
  const [apidata, SetData] = useState([]) //Data that is fetched with api is first called 
  const[viewmore,SetView] = useState([]);//Use State Used For Fetching Single Contact 
  const[displayed,SetDisplay]=useState(true);
  const[newcontact,SetContact]=useState(true);
  const[refreshdata,SetRefresh] = useState(false); //Stated used to refresh data 
  const[editcontact,SetEdit] = useState([]);//This array will hold the contacts existing values and pass them in as props to the Newcontact.jsx screen 

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

  //This function is triggered when the user hits on Contact when on the (Onecontact.jsx) screen it returns them back to the main contact list page 
  function back(){
    SetDisplay(true);
    SetRefresh(!refreshdata);
    SetContact(true)
  }
  //This function is triggered when the user hits on done on the new contact screen (NewContact.jsx), it returns them back to the main contact list page 
  function creation(val){
    SetDisplay(true)
    SetContact(!newcontact)
    SetRefresh(!refreshdata);
  }

  //This function is called within OneContact.jsx. It sets the edit contact state using the passed on value and pass's it as a prop to NewContact.jsx 
  //This way the already fetched data is fetched twice
  function editcontactf(val){
    SetEdit(val);
    SetDisplay(true)
    SetContact(!newcontact)

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
            {displayed && newcontact&&ContactsData}
            {displayed&& !newcontact && <NewContact
              goback={creation}
              cancelcreation={back}
              firstname={editcontact[0]}
              lastname={editcontact[1]}
              phonenumber={editcontact[2]}
              idofdata={editcontact[3]}
            />}
            {!displayed && <OneContact
            goback={back}
            gocreation={editcontactf}
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
