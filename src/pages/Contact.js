import React, { useState, useEffect } from "react";

import Form from "../components/Form";

import "../styles/Contact.scss";

const Contact = () => {
	return (
		<main className="contact">
			<h1 className="contact__header">
				<span className="contact__header--span">Feel free</span> to contact us
			</h1>
			<Form></Form>
		</main>
	);
};

export default Contact;
