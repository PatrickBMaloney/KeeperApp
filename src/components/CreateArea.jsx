import React, { useState } from "react";
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const CreateArea = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

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
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            console.log('do validate')
            submitNote(event);
        }
    };

    const submitNote = (event) => {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    };

    const expand = () => {
        setIsExpanded(true);
    };

    const collapse=(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          // Not triggered when swapping focus between children
          setIsExpanded(false);
        }
    };

    return (
        <div>
            <form className="create-note" onBlur={collapse}>
                <input
                    name="title"
                    placeholder={isExpanded ? "Title" : "Take a note..."}
                    value={note.title}
                    autoComplete="off"
                    onChange={handleChange}
                    onClick={expand}
                    onKeyDown={handleKeyDown} />
                {isExpanded && <textarea 
                    name="content"
                    placeholder="Take a note..."
                    rows={3}
                    value={note.content}
                    onChange={handleChange}
                    onke />}
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;