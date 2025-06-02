import Note from "./Note";

function NotesList(props) {
  return (
    <div>
      {props.notes.map((note, index) => (
        <Note
          key={index}
          title={note.title}
          content={note.content}
          index={index}
          onDelete={props.onDelete}
        />
      ))}
    </div>
  );
}

export default NotesList;
