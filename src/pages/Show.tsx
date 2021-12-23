import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import Modal from "../components/Modal";






function Show(props: any, deleteNote: any) {
  const params = useParams()
  const id = params.id;
  const notes = props.notes;
  console.log(props)
  const note = notes.find((p: any) => p._id === id);
  const navigate = useNavigate();


    const [show, setShow] = useState(false)

    const deleteButton = () => <button className="buttonShow" onClick={(event)=> props.deleteNote(note)}>Yes</button>

      // state for form
  const [editForm, setEditForm] = useState(note);

    // handleChange function for form
  const handleChange = (event: any) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

    // handlesubmit for form
  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.updateNote(editForm);
    // redirect people back to index
    navigate("/notes");
  };

//   const removeNote = () => {
//     props.deleteNote(note._id);
//     navigate("/notes");
//   };

  
  


  return (
    <div className="notes">
      <h1>{note.title}</h1>
      <h2>{note.lyrics}</h2>
      <h3>{note.chords}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.chords}
          name="chords"
          placeholder="title"
          onChange={handleChange}
        />
        <textarea
          value={editForm.lyrics}
          name="lyrics"
          placeholder="Lyrics"
          onChange={handleChange}
        />
        <div className="buttons">
        <button className="showButton "type="submit" value="Update Notes">Update</button>

        <button className="showButton" onClick = {()=> {setShow(true)}}>Delete</button>
        <Modal onClose={()=> setShow(false)} show={show} delButton={deleteButton()}/>
        </div>
      </form>
        
    </div>
  );
}



export default Show;