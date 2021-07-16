export const addNote=(note)=>{
    return(dispatch,getState,{getFirestore})=>{
        const firestore=getFirestore()
        //this make a notes collection in firestore in which data add
        firestore.collection('notes')
          .add({
            //  the thing which retrun is return like this note.title and note.content 
            //spread operator which spread the elements
              ...note,
              favorite:false,
              createdAt:new Date()
          })
          .then(()=>{
              console.log('add the note successfully')
          })
          .catch(err=>{
              console.log(err)
          })
    }
}
export const deleteNote=(note)=>{
    return(dispatch,getState,{getFirestore})=>{
        const firestore=getFirestore()
        //this make a notes collection in firestore in which data add
        firestore.collection('notes').doc(note.id).delete()
          .then(()=>{
              console.log('delete the note successfully')
          })
          .catch(err=>{
              console.log(err)
          })
    }

}
export const toggleFav=(note)=>{
    return(dispatch,getState,{getFirestore})=>{
        const firestore=getFirestore()
        const favstatus=!note.favorite
        //this make a notes collection in firestore in which data add
        firestore.collection('notes').doc(note.id).update({
            favorite:favstatus
        })
          .then(()=>{
              console.log('toggle the note successfully')
          })
          .catch(err=>{
              console.log(err)
          })
    }

}
export const updateNote=(note)=>{
    return(dispatch,getState,{getFirestore})=>{
        const firestore=getFirestore()
        //this make a notes collection in firestore in which data add
        firestore.collection('notes').doc(note.id).update({
            title:note.title,
            content:note.content
        })
          .then(()=>{
              console.log('toggle the note successfully')
          })
          .catch(err=>{
              console.log(err)
          })
    }

}

