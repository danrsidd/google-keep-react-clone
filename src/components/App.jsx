import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Form from "./Form";

const App = () => {
	const [notesCollection, setNotesCollection] = useState([]);

	const addNote = (noteObj) => {
		setNotesCollection((prevNotesCollection) => {
			return [...prevNotesCollection, noteObj];
		});
	};

	const deleteNote = (id) => {
		setNotesCollection((prevNotesCollection) => {
			return prevNotesCollection.filter((prevNoteObj) => {
				return prevNoteObj.id != id;
			});
		});
	};

	return (
		<div>
			<Header />
			<Form onAdd={addNote} />
			{notesCollection.map((noteObj) => {
				return (
					<Note
						key={noteObj.id}
						id={noteObj.id}
						title={noteObj.title}
						content={noteObj.content}
						onDelete={deleteNote}
					/>
				);
			})}
			<Footer />
		</div>
	);
};

export default App;
