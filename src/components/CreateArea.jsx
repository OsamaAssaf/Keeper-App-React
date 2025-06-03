import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  function expand() {
    setIsExpanded(true);
  }
  const [noteData, setNoteData] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function clearInput() {
    setNoteData({
      title: "",
      content: "",
    });
  }

  function handleAdd(event) {
    props.onAdd(noteData);
    clearInput();
    setIsWriting(false);
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            value={noteData.title}
            onChange={handleChange}
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={noteData.content}
          onChange={handleChange}
          onClick={expand}
        />
        <Zoom in={isExpanded ? true : false}>
          <Fab color="primary" aria-label="add" onClick={handleAdd}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
