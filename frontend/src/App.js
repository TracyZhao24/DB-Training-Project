import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'    // do I need these?
import CreateSource from "./components/CreateSource"
import ReadSource from "./components/ReadSource"


// TODO: make components for listing all sources, modifying existing sources, and deleting sources

function App(props) {
  return (
    <div>
      <ReadSource/>
      <CreateSource/>
    </div>
  );
}

export default App;
