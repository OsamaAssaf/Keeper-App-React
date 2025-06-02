import { useState } from "react";

function CreateArea(props) {
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
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={noteData.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteData.content}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
