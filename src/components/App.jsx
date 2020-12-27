import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note  from "./Note";
import Login from "./Login";
import Register from "./Register";
import notes from "../notes";

let isLoggedIn = false;
let isRegistered = true;

const loginUser = () => {
    isLoggedIn = true;
};

// const toggleRegister = () => {
//     isRegistered = !isRegistered;
// };

function App() {
  return (
    <div>
        <Header />
        {isLoggedIn ? 
            <div>
                {notes.map(note => (<Note key={note.key} title={note.title} content={note.content} />))}
            </div> : 
            isRegistered ? <Login onLogin={loginUser} /> : <Register onRegistered={loginUser}/>
        }
        <Footer />
    </div>
  );
}

export default App;
