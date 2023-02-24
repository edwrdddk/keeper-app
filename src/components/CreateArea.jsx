import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

  const [noteText, setNoteText] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteText((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    props.onAdd(noteText);
    setNoteText({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  
  const [roll, setRoll] = useState(false)
  
  function rollyRoll() {
    setRoll(true);
  }

  return (
    <div>
      <form className="create-note">
        {roll && <input onChange={handleChange} value={noteText.title} name="title" placeholder="Title" />}
        <textarea onChange={handleChange} onClick={rollyRoll} value={noteText.content} name="content" placeholder="Take a note..." rows={roll ? "3" : "1"} />
        <Zoom in={roll && true}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;