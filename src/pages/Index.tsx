import { useState } from "react";
import {Link} from "react-router-dom"


function Index(props:any) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    title: "",
    lyrics: "",
    chords: "",
  });
  
// handleChange function for form
  const handleChange = (event: any) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.createNote(newForm);
    setNewForm({
      title: "",
      lyrics: "",
      chords: "",
    });
  };



  // loaded function
  const loaded = () => {

    {console.log(props.notes)}
      
    return <div className="songs">
        {props.notes.map((note: any) => {
        {if(note.title) {
        return <div className="indexContainer">
        <div key={note.id} className="note card-panel">
        <Link to={`/notes/${note._id}`} className="noteTitle"><h3>{note.title}</h3>
        </Link>
        </div>
        </div>}}
        
        })}
    </div>
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    
    <section>
      <div className="songCard">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.chords}
          name="chords"
          placeholder="Chords"
          onChange={handleChange}
        />
        <textarea
          value={newForm.lyrics}
          name="lyrics"
          placeholder="Lyrics"
          onChange={handleChange}
        />
        <button className="buttonBlue" type="submit" value="Create Note">Create New Song</button>
      </form>
      </div>
      {props.notes ? loaded() : loading()}
    </section>
  
  );
}


export default Index;