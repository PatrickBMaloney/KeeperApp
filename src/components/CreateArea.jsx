import React, { useState } from "react";

const CreateArea = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    const submitNote = (event) => {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-area-form">
                <input
                    name="title"
                    placeholder="Title"
                    value={note.title}
                    onChange={handleChange} />
                <textarea 
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                    value={note.content}
                    onChange={handleChange} />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;