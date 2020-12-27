import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note  from "./Note";
import Login from "./Login";
import Register from "./Register";
import CreateArea from "./CreateArea";
import initialNotes from "../notes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true);
  const [notes, setNotes] = useState(initialNotes);

  const loginUser = () => {
    setIsLoggedIn(true);
    console.log("user logged in");
  };

  const toggleRegister = () => {
    setIsRegistered((prevStatus) => {
        console.log("Regs set to " + !prevStatus);
        setIsLoggedIn(!prevStatus);
        return !prevStatus;
    });
  };

  const addNote = (newNote) => {
    setNotes(prevNotes => {
        return [...prevNotes, newNote];
    })
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
            return index !== id;
        })
    })
  }

  return (
    <div>
        <Header />
        {isLoggedIn && 
            <div>
                <CreateArea onAdd={addNote}/>
                {notes.map((note, index) => (
                    <Note 
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNote} />
                ))}
            </div>}
        {!isLoggedIn && isRegistered && <Login onLogin={loginUser} onToggleReg={toggleRegister} />}
        {!isLoggedIn && !isRegistered && <Register onRegistered={toggleRegister}/>}
        <Footer />
    </div>
  );
}

export default App;
