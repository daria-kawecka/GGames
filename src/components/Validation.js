export default function validate(values) {
	console.log("walidacja");
	let email, name, subject, content;
	let filled = false;
	if (values.email && values.name && values.subject && values.content) {
		filled = true;
		if (!/\S+@\S+\.\S+/.test(values.email)) {
			email = "Email address is invalid...";
			filled = false;
		}
		if (values.content.split(" ").length < 5) {
			content = "Message should be longer than 5 words...";
			filled = false;
		}
	} else {
		if (!values.email) {
			email = "Email is required!";
			filled = false;
		} else if (!/\S+@\S+\.\S+/.test(values.email)) {
			email = "Email address is invalid...";
			filled = false;
		}
		if (!values.name) {
			name = "Name is required!";
			filled = false;
		}
		if (!values.subject) {
			subject = "Subject is required!";
			filled = false;
		}
		if (!values.content) {
			content = "Please write a message...";
			filled = false;
		} else if (values.content.split(" ").length < 5) {
			content = "Message should be longer than 5 words...";
			filled = false;
		}
	}
	return { filled, email, name, subject, content };
}
