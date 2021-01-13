import React, { useState, useEffect } from "react";
import validate from "../components/Validation";
// 9b1015ef-1aac-48a2-855d-61e89b65e303 <--- token
const Contact = () => {
	const [data, setData] = useState([]);
	const [shouldShow, setShouldShow] = useState(false);
	const [errors, setErrors] = useState("");

	const formRefill = (e) => {
		const { name, value } = e.target;
		setData((prevData) => ({ ...prevData, [name]: value }));
	};
	useEffect(() => {
		setErrors(validate(data));
	}, [data]);

	const sendEmail = (e) => {
		e.preventDefault();
		setShouldShow(true);
		if (errors.filled) {
			//send confirmation email
			window.Email.send({
				SecureToken: "9b1015ef-1aac-48a2-855d-61e89b65e303",
				To: data.email,
				From: "tutajtestuje@gmail.com",
				Subject: "Dzięki za podesłanie emaila!!!",
				Body: `<h1>Cześć</h1> ${data.name}!`,
			}); //send email
			window.Email.send({
				SecureToken: "9b1015ef-1aac-48a2-855d-61e89b65e303",
				To: "tutajtestuje@gmail.com",
				From: "tutajtestuje@gmail.com",
				Subject: data.subject,
				Body: `<h1>Cześć</h1> Nadawca:${data.name} Email:${data.email} Treść: ${data.content} Numer tel: ${data.number}!`,
			});
			alert("Email został wysłany!!!");
		}
	};

	return (
		<>
			<h1>Contact page</h1>
			<form>
				<input type="text" name="name" placeholder="Your name..." onChange={formRefill} required />
				{shouldShow && errors && <p>{errors.name}</p>}
				<input type="email" placeholder="Your email..." name="email" onChange={formRefill} required />
				{shouldShow && <p>{errors.email}</p>}
				<input type="text" placeholder="Subject" name="subject" onChange={formRefill} required />
				{shouldShow && <p>{errors.subject}</p>}
				<input type="text" placeholder="Your Phone Number (optional)" name="number" onChange={formRefill} />
				<input type="text" placeholder="Your Web Site (optional)" name="web" onChange={formRefill} />
				<textarea name="content" cols="30" rows="10" placeholder="Your message..." onChange={formRefill} required></textarea>
				{shouldShow && <p>{errors.content}</p>}

				<button type="submit" onClick={sendEmail}>
					Send
				</button>
			</form>
		</>
	);
};

export default Contact;
