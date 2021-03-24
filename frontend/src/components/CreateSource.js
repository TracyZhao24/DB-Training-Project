import axios from 'axios';
import React, {useState} from 'react'    

// TODO: fix the styling on this, ask Neil where styling belongs
// TODO: add styling? padding and margins are needed

// class Source(models.Model):       
//     name = models.TextField()
//     organization = models.TextField()
//     phoneNumbers = models.TextField()       
//     emails = models.TextField()
//     notes = models.TextField()

function CreateSource(props) {
    const [name, setName] = useState("")
    const [organization, setOrganization] = useState("")
    const [phoneNumbers, setPhoneNums] = useState("")
    const [emails, setEmails] = useState("")
    const [notes, setNotes] = useState("")

    function submitForm() {
        axios.post('http://localhost:5000/sources/create', {
            name: name,
            organization: organization, 
            phoneNumbers: phoneNumbers,
            emails: emails,
            notes : notes
        }).then(
            (response) => {
                console.log(response)
        }).catch(
            err => {
            console.log(err);
            }
        )
    }

    return(
    <div>
        <label><strong>Name: </strong> </label><input onChange={(e) => setName(e.target.value)}/>
        <label><strong>Organization: </strong> </label><input onChange={(e) => setOrganization(e.target.value)}/>
        <label><strong>Phone Number(s): </strong></label><input onChange={(e) => setPhoneNums(e.target.value)}/>
        <label><strong>Email(s): </strong> </label><input onChange={(e) => setEmails(e.target.value)}/>
        <label><strong>Notes: </strong></label><input onChange={(e) => setNotes(e.target.value)}/>
        <button onClick={submitForm}>Create Source</button>
    </div>)
}

export default CreateSource;