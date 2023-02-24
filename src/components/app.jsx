import React, { useState } from "react";
import Header from "./header";
import Note from "./note";
import Footer from "./footer";
import CreateArea from "./CreateArea";


function App() {

	const [notes, setNotes] = useState([]);

	function addNote(noteText) {
		setNotes((prevNotes) => {
			return [...prevNotes, noteText];
		});
	}

	function deleteNote(id) {
		setNotes((prevNotes) => {
			return prevNotes.filter((note, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div>
			<Header />
			<CreateArea onAdd={addNote} />
				{notes.map((newNote, index) => {
					return <Note
						key={index}
						id={index}
						title={newNote.title}
						content={newNote.content}
						onDelete={deleteNote}
					/>
				})}
			<Footer />
		</div>
	);
}

export default App;



