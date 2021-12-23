import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Show } from "../pages/Show";
import Index from "../pages/Index";

export const Main = (props: any) => {
  const [note, setNote] = useState(null);

  const URL = "https://capstone-backend-ss-penguin-se.herokuapp.com/notes/";

  const getNote = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setNote(data);
  };

  const createNote = async (note: any) => {
    // make post request to create Note
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    // update list of Note
    getNote();
  };

    useEffect(() => {getNote()},[]);
    
    return (
        <main>
            <Routes>
                <Route path="/" element={<Index notes={note} createnote={createNote}/>}/>
                <Route path="/notes/:id" element={<Show/>}/>
            </Routes>
        </main>
    )
};

