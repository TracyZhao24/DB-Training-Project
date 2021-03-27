import axios from 'axios';
import React, {useEffect, useState} from 'react' 
import '../index.css'   

function ListAll(props) {
    const [sources, setSources] = useState([])

    // want this to run after every update, so don't pass an empty array as a second argument
    useEffect(() => {
        axios.get('http://localhost:5000/sources/read/all').then(
            (response) => {
                setSources(response.data)
        }).catch(
            err => {
            console.log(err)
        })
    })

    return (
    <div>
        {sources.map(source => {
            return (
            <div key = {source.id}>
                <p><strong>Name: </strong> {source.name} </p>
                <p><strong>Organization: </strong> {source.organization} </p>
                <p><strong>Phone Number(s): </strong> {source.phoneNumbers} </p>
                <p><strong>Email(s): </strong> {source.emails} </p>
                <p><strong>Notes: </strong> {source.notes} </p>
                <br/>
            </div>
            )
        })}
    </div>
    )
}

export default ListAll;