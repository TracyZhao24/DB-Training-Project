import axios from 'axios';
import React, {useState} from 'react' 
import '../index.css'   

// TODO: fix the styling on this, ask Neil where styling belongs
// TODO: add styling? need padding and margins 

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
        <p><label><strong>Name: </strong> </label><input onChange={(e) => setName(e.target.value)}/></p>
        <p><label><strong>Organization: </strong> </label><input onChange={(e) => setOrganization(e.target.value)}/></p>
        <p><label><strong>Phone Number(s): </strong></label><input onChange={(e) => setPhoneNums(e.target.value)}/></p>
        <p><label><strong>Email(s): </strong> </label><input onChange={(e) => setEmails(e.target.value)}/></p>
        <p><label><strong>Notes: </strong></label><input className = "notes" onChange={(e) => setNotes(e.target.value)}/></p>
        <p><button onClick={submitForm}>Create Source</button></p>
    </div>)
}

export default CreateSource;