
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import './App.css';
import Header from "./header"; 
import Addcontact from "./addcontact"
import Contactlist from "./contactlist"


function App() {
 
  const [contacts,setContact] = useState([]);
  const addcontacthandler = (contact) => {
    console.log(contact);
    setContact([...contacts,{id: uuid(),...contact}])
  };

  const removeContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContact(newContactList);
  };
  return (
    <div>
      <Header />
      <Addcontact addcontacthandler={addcontacthandler} />
      <Contactlist contacts={contacts} getContactId={removeContact}/>
    </div>
  );  
}

export default App;





   
