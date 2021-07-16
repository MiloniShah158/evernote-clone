import React from 'react'
import {deleteNote,toggleFav} from '../../store/actions/noteAction'
import {useDispatch} from 'react-redux'
import moment from 'moment'
import {Link} from 'react-router-dom'

const Note = ({note}) => {
    const dispatch=useDispatch()
    const deleteNoteHandler=()=>{
        dispatch(deleteNote(note))
    }
    const toggleHandler=()=>{
        dispatch(toggleFav(note))
    }
    const editNoteHandler=()=>{
        dispatch({type:'EDIT_NOTE',payload:note})
    }
    const heartmarkup=note.favorite?'favorite':'favorite_border'
    return (
        <div className="note white">
            <div className="right-align">
    <i className="material-icons red-text" style={{cursor:'pointer'}} onClick={toggleHandler}>{heartmarkup}</i>
                <i className="material-icons" style={{cursor:'pointer'}} onClick={deleteNoteHandler}>delete</i>
            </div>
            <Link to={"/note/"+note.id}>
                <h5 className="black-text">{note.title}</h5>
            </Link>
                <p className="truncate">{note.content}</p>
                <p className="grey-text"> {moment(note.createdAt.toDate()).fromNow()}</p>
                <Link to={`/editform/${note.id}`}>
                <div className="right-align"><i className="material-icons black-text"
                onClick={editNoteHandler}>edit</i></div>
                </Link>
        </div>
    )
}

export default Note
