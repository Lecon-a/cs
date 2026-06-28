import react, { useEffect, useState } from 'react';

// functional component that returns a div with a heading and a paragraph
const App = () => {

  const [contacts, setContacts] = useState([]);

  // we use the useEffect hook to fetch the contacts from the backend when the component mounts/starts
  useEffect(() => {
    // fetch is a javascript API that allows us to make HTTP requests to a server
    fetch(`${import.meta.env.VITE_API_URL}/contacts`)
    .then(res => res.json())
    .then(data => setContacts(data))
    .catch(err => console.log(err));
  }, []);

  return (<div>
    {/* heading */}
    <h1>Contact List</h1>
    {/* welcome message */}
    <p>Welcome to the Contact List app!</p>
    {/* give a description */}
    <p>This is a simple contact list app built with React to help keep your loved ones contacts such as their names, phonenumber, physical address, email and occupation</p>
    {/* contact list */}
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <div>
            <h2>{contact.name}</h2>
            <p>{contact.phone}</p>
            <p>{contact.address}</p>
            <p>{contact.email}</p>
            <p>{contact.occupation}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>)
}

// export for its use inside the main.jsx file
export default App;