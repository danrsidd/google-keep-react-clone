import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

const Form = (props) => {
	const [note, setNote] = useState({
		id: "",
		content: "",
	});

	const [expandedStatus, setExpandedStatus] = useState(false);

	const expand = () => setExpandedStatus(true);

	const noteInputChange = (e) => {
		const { name, value } = e.target;
		setNote((prevNote) => {
			return {
				...prevNote,
				// random id generator
				id: uuidv4(),
				[name]: value,
			};
		});
	};

	const addNote = (e) => {
		// prevent form auto-refresh
		e.preventDefault();
		props.onAdd(note);
		// Clear input after submission
		setNote({
			id: "",
			title: "",
			content: "",
		});
	};

	return (
		<div>
			<form className="create-note">
				{expandedStatus && (
					<input
						name="title"
						onChange={noteInputChange}
						value={note.title}
						placeholder="Note Title"
					/>
				)}
				<textarea
					name="content"
					onChange={noteInputChange}
					onClick={expand}
					value={note.content}
					placeholder="Type your note here..."
					rows={expandedStatus ? 3 : 1}
				/>

				<Fab onClick={addNote}>
					<AddIcon />
				</Fab>
			</form>
		</div>
	);
};

export default Form;
