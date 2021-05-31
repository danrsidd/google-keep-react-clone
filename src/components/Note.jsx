import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Note = (props) => {
	const deleteClick = () => props.onDelete(props.id);

	return (
		<div className="note">
			<p>{props.content}</p>
			<button onClick={deleteClick}>
				<HighlightOffIcon />
			</button>
		</div>
	);
};

export default Note;
