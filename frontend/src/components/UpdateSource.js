import axios from 'axios';
import React, {useState} from 'react'
import '../index.css'

// TODO: figure out how to create pop-up window and implement "cancel" button


function UpdateSource(props) {
    const [name, setName] = useState("")
    const [organization, setOrganization] = useState("")
    const [phoneNumbers, setPhoneNums] = useState("")
    const [emails, setEmails] = useState("")
    const [notes, setNotes] = useState("")
    const [id, setID] = useState("")

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

    function updateSubmit() {
        axios.put(`http://localhost:5000/sources/update/${id}`, {
            name: name,
            organization: organization, 
            phoneNumbers: phoneNumbers,
            emails: emails,
            notes : notes
        }).then(
            (response) => {
                console.log(id)
        }).catch(
            err => {
            console.log(err);
            }
        )
    }

    return(
    <div>
        <label><strong>ID of Source to Update: </strong></label><input onChange={(e) => setID(e.target.value)}/>
        <button onClick={retrieve}>Retrieve Source</button>

        <p>
            <label><strong>Name: </strong> </label><input placeholder = {name} onChange={(e) => setName(e.target.value)}/>
            <label><strong>Organization: </strong> </label><input placeholder = {organization} onChange={(e) => setOrganization(e.target.value)}/>
            <label><strong>Phone Number(s): </strong></label><input placeholder = {phoneNumbers} onChange={(e) => setPhoneNums(e.target.value)}/>
            <label><strong>Email(s): </strong> </label><input placeholder = {emails} onChange={(e) => setEmails(e.target.value)}/>
            <label><strong>Notes: </strong></label><input placeholder = {notes} onChange={(e) => setNotes(e.target.value)}/>
            <p>
                <button onClick={updateSubmit}>Update</button>
                {/* <button>Cancel</button> */} 
            </p>
        </p>
    </div>
    )
}

export default UpdateSource;