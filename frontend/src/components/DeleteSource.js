import axios from 'axios';
import React, {useState} from 'react'    

// class Source(models.Model):       
//     name = models.TextField()
//     organization = models.TextField()
//     phoneNumbers = models.TextField()       
//     emails = models.TextField()
//     notes = models.TextField()

function DeleteSource(props) {
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

    function remove() {
        axios.delete(`http://localhost:5000/sources/delete/${id}`)
        .then(
            (response) => {
                console.log(id)
        }).catch(
            err => {
            console.log(err)
        })
    }

    return(
    <div>
        <label><strong>ID of Source to Delete: </strong></label><input onChange={(e) => setID(e.target.value)}/>
        <button onClick={retrieve}>Retrieve Source</button>

        <p><strong>Name: </strong> {name} </p>
        <p><strong>Organization: </strong> {organization} </p>
        <p><strong>Phone Number(s): </strong> {phoneNumbers} </p>
        <p><strong>Email(s): </strong> {emails} </p>
        <p><strong>Notes: </strong> {notes} </p>
        
        <p><strong>Are you sure?</strong></p>
        <button onClick={remove}>Delete</button>
        {/* <button>Cancel</button> */}
    </div>
    )
}

export default DeleteSource;