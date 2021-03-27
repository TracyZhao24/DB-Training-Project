import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'    // do I need these?
import ListAllSources from "./components/ListAllSources"
import CreateSource from "./components/CreateSource"
import UpdateSource from "./components/UpdateSource"
import DeleteSource from "./components/DeleteSource"
import ReadSource from "./components/ReadSource"

// make separate pages

function App(props) {
  return(
    <div>
      <h1>Daily Bruin Sources</h1>
      <h2>All Sources: </h2>
        <p><ListAllSources/></p>
      <hr/>
      <h2>Create a New Source: </h2>
        <p><CreateSource/></p>
      <hr/>
      <h2>Update an Existing Source: </h2>
        <p><UpdateSource/></p>
      <hr/>
      <h2>Delete a Source (by ID): </h2>
        <p><DeleteSource/></p>
    
      {/* <h2>Find a Source (by ID): </h2>
        <p><ReadSource/></p>
      <hr/> */}

    </div>
  )
}

export default App;
