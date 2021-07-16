import React from 'react'
//import the form that I make(Form.js) to show on home page 
import Form from './Form'
import Notelist from '../notes/NoteList'
import {useSelector} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase'


const Home = () => {
    //take notes collection data by using use selector  and store it in notes and below send this notes data to notelist.js
    useFirestoreConnect([{collection:'notes',orderBy:['createdAt','desc']}])
    const notes=useSelector((state)=>state.firestore.ordered.notes)
    console.log(notes)
    return (
        <div className="container">
            <div className="row center-align" >
                <div className="col s7"><Form/></div>
                <div className="col s5"><Notelist notes={notes}/></div>
            </div>
            
        </div>
    )
}

export default Home
