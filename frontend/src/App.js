import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react'    // do I need these?
import CreateSource from "./components/CreateSource"

// TODO: make components for listing all sources, modifying existing sources, and deleting sources

function App(props) {
  return (
    <div>
      <CreateSource/>
    </div>
  );
}

export default App;
