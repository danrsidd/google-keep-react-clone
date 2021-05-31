import React, { useState } from "react";
import { v4 as uuidv4 } from uuid
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

const Form = (props) => {
	const [note, setNote] = useState({
		id: "",
		content: "",
	});

	const noteInputChange = (e) => {
		const {value} = e.target;
		setNote((prevNote) => {
			return {
				...prevNote,
				// random id generator
				id: uuidv4(),
				content: value
			};
		});
	}

	const addNote = (e) => {
		// prevent form auto-refresh
		e.preventDefault();
		props.onAdd(note);
		// Clear input after submission
		setNote({
			id:"",
			content:""
		})
	}

	return <div>
		<form className="create-note">

        <textarea
          name="content"
          onChange={noteInputChange}
          value={note.content}
          placeholder="Type your note here..."
          rows="3"
        />

		<Fab onClick={submitNote}>
			<AddIcon />
		</Fab>

      </form>
	</div>;
};

export default Form;
