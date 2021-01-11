import React, { useState, useEffect } from "react";
// 9b1015ef-1aac-48a2-855d-61e89b65e303 <--- token
const Contact = () => {
	const [data, setData] = useState([]);
	const [isFilled, setIsFilled] = useState(false);

	const formRefill = (e) => {
		const { name, value } = e.target;
		setData((prevData) => ({ ...prevData, [name]: value }));
	};
	const validation = () => {
		const { name, email, subject, content } = data;
		if (name && email && subject && content) {
			let syntax = /\S+@\S+\.\S+/;
			if (syntax.test(email)) console.log("git");
		}
	};
	useEffect(() => {
		validation();
	}, [data]);

	const sendEmail = (e) => {
		validation();
		e.preventDefault();
		if (isFilled) {
			window.Email.send({
				SecureToken: "9b1015ef-1aac-48a2-855d-61e89b65e303",
				To: data.email,
				From: "tutajtestuje@gmail.com",
				Subject: data.subject,
				Body: `<h1>Cześć</h1> ${data.name}!`,
			});
			alert("Email został wysłany!!!");
		}
	};

	const handleOnSubmit = (e) => {
		// e.preventDefault();
	};

	return (
		<>
			<h1>Contact page</h1>
			<form onSubmit={handleOnSubmit}>
				<input type="text" name="name" placeholder="Your name..." onChange={formRefill} required />
				<input type="email" placeholder="Your email..." name="email" onChange={formRefill} required />
				<input type="text" placeholder="Subject" name="subject" onChange={formRefill} required />
				<input type="text" placeholder="Your Phone Number (optional)" name="number" onChange={formRefill} />
				<input type="text" placeholder="Your Web Site (optional)" name="web" onChange={formRefill} />
				<textarea name="content" cols="30" rows="10" placeholder="Your message..." onChange={formRefill} required></textarea>

				<button type="submit" onClick={sendEmail}>
					Send
				</button>
			</form>
		</>
	);
};

export default Contact;
