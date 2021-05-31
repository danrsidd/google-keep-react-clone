import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer>
			<p>
				© {currentYear} | <em>Inspired by Google</em>
			</p>
		</footer>
	);
};

export default Footer;
