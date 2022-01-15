import './App.css';
import { useEffect, useState } from 'react';
// to access our database, we must import the corresponding firebase modules
import { getDatabase, ref, onValue } from 'firebase/database';
import firebase from './firebase'

function App() {
  const [guests, newGuest] = useState([]);
  useEffect(() => {
    // create a variable that holds our database details
    const database = getDatabase(firebase)
    
    // we then create a variable that makes reference to our database
    const dbRef = ref(database)
    
    // add an event listener to that variable that will fire
    // from the database, and call that data 'response'.
    onValue(dbRef, (response) => {
       // here we use Firebase's .val() method to parse our database info the way we want it
      console.log(response.val());
    })
  }, [])
  return (
    <div className="App">
       <header>
          <nav>
            <ul>
              <li>Who's Here</li>
              <li>Where Are We</li>
              <li>What To Do</li>
              <li>What to Eat</li>
              <li>What To Drink</li>
            </ul>
          </nav>
          <h1>Welcome to the Cottage</h1>
          <p>Weather in Odessa is currently:</p>
          <p>Who's Coming to the Cottage</p>
         <ul> {guests.map((guest) => {
           return (
             <li>
              <p>{guest}</p>
            </li>
           ) 
          })}</ul>
        </header>
    </div>
  );
}

export default App;
