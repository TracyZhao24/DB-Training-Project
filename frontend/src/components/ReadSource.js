import axios from 'axios';
import React, {useState} from 'react'    

function ReadSource(props) {
    const [id, setID] = useState("")

    const [name, setName] = useState("")
    const [organization, setOrganization] = useState("")
    const [phoneNumbers, setPhoneNums] = useState("")
    const [emails, setEmails] = useState("")
    const [notes, setNotes] = useState("")

    function retrieve() {
        axios.get(`http://localhost:5000/sources/read/${id}`)
        .then(
            (response) => {
                setName(response.data.name)
                setOrganization(response.data.organization)
                setPhoneNums(response.data.phoneNumbers)
                setEmails(response.data.emails)
                setNotes(response.data.notes)
        }).catch(
            err => {
            console.log(err)
        })
    }

    return(
    <div>
        <label><strong>Source ID: </strong></label><input onChange={(e) => setID(e.target.value)}/>
        <button onClick={retrieve}>Retrieve Source</button>

        <p><strong>Name: </strong> {name} </p>
        <p><strong>Organization: </strong> {organization} </p>
        <p><strong>Phone Number(s): </strong> {phoneNumbers} </p>
        <p><strong>Email(s): </strong> {emails} </p>
        <p><strong>Notes: </strong> {notes} </p>
    </div>
    )
}

export default ReadSource;