import React, { useState, useEffect } from "react";
// 9b1015ef-1aac-48a2-855d-61e89b65e303 <--- token
const Contact = () => {
  const [data, setData] = useState([]);

  const formRefill = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  console.log(data.subject);
  const sendEmail = (e) => {
    e.preventDefault();

    window.Email.send({
      SecureToken: "9b1015ef-1aac-48a2-855d-61e89b65e303",
      To: data.email,
      From: "tutajtestuje@gmail.com",
      Subject: data.subject,
      Body: `<h1>Cześć</h1> ${data.name}!`,
    }).then(alert("wysłano email"));
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Contact page</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name..."
          onChange={formRefill}
          required
        />
        <input
          type="email"
          placeholder="Your email..."
          name="email"
          onChange={formRefill}
          required
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          onChange={formRefill}
          required
        />
        <input
          type="text"
          placeholder="Your Phone Number (optional)"
          name="number"
        />
        <input type="text" placeholder="Your Web Site (optional)" name="web" />
        <textarea
          name="content"
          cols="30"
          rows="10"
          placeholder="Your message..."
          required
        ></textarea>

        <button onClick={sendEmail}>Send</button>
      </form>
    </>
  );
};

export default Contact;
