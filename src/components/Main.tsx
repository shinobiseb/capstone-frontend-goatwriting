import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Show from "../pages/Show";
import Index from "../pages/Index";
import { useNavigate } from "react-router-dom";

export const Main = (props: any) => {
  const [note, setNote] = useState(null);

  const nav = useNavigate()

  const URL = "https://capstone-backend-ss-penguin-se.herokuapp.com/notes/";

  const getNote = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setNote(data);
  };

  const createNote = async (note: any) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });

    getNote();
  };

    const updateNote = async (note: any, id: string) => {
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    getNote();
  };

    const deleteNote = async (id: Record<string, any>) => {
    await fetch(URL + id._id, {
      method: "delete",
    });
    nav("/notes")
    getNote();
  };


    useEffect(() => {getNote()},[]);
    
    return (
        <main>
            <Routes>
                <Route path="/notes/" element={<Index notes={note} createNote={createNote}/>}/>
                <Route path="/notes/:id" element={<Show 
          notes={note} 
          updateNote={updateNote} 
          deleteNote={deleteNote}
          />}/>
            </Routes>
        </main>
    )
};

