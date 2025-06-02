import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NotesList from "./components/NotesList";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(noteData) {
    setNotes((prevNotes) => {
      return [...prevNotes, noteData];
    });
  }

  function deleteNote(index) {
    setNotes((prevNotes) => {
      return prevNotes.filter((_, i) => i !== index);
    });
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      <NotesList notes={notes} onDelete={deleteNote} />
      <Footer />
    </>
  );
}

export default App;
