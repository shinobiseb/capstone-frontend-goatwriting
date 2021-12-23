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
    props.createPeople(newForm);
    setNewForm({
      title: "",
      lyrics: "",
      chords: "",
    });
  };


  // loaded function
  const loaded = () => {

    {console.log(props.notes)}
      
    return <div>
        {props.notes.map((note: any) => {
        // <div>
        return <div key={note.id} className="note">
        <Link to={`/notes/${note._id}`}><h1>{note.chords}</h1></Link>
        </div>
        })};
    </div>
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.title}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.lyrics}
          name="lyrics"
          placeholder="lyrics URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.chords}
          name="chords"
          placeholder="chords"
          onChange={handleChange}
        />
        <input type="submit" value="Create Person" />
      </form>
      {props.people ? loaded() : loading()}
    </section>
  );
}


export default Index;