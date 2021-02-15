export default function validate(values) {
  let email, name, subject, content, phone;
  let filled = false;
  if (values.email && values.name && values.subject && values.content) {
    filled = true;
    if (!/\S+@\S+\.\S+/.test(values.email)) {
      email = "Email address is invalid...";
      filled = false;
    }
    if (
      values.content.split(" ").length < 5 &&
      values.content.split(" ").length > 255
    ) {
      content = "Message should be longer than 5 words and shorter than 255...";
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
    } else if (
      values.content.split(" ").length <= 5 &&
      values.content.split(" ").length > 255
    ) {
      content = "Message should be longer than 5 words and shorter than 255...";
      filled = false;
    }
  }
  let phoneNum_1 = /^\d{9}$/;
  let phoneNum_2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
  if (values.number) {
    if (!(values.number.match(phoneNum_1) || values.number.match(phoneNum_2))) {
      filled = false;
      phone = "Phone number is invalid...";
    }
  }

  return { filled, email, name, subject, phone, content };
}
