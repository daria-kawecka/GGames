import React, { useState, useEffect } from "react";
// 9b1015ef-1aac-48a2-855d-61e89b65e303 <--- token
const Contact = () => {
  const sendEmail = () => {
    window.Email.send({
      SecureToken: "9b1015ef-1aac-48a2-855d-61e89b65e303",
      To: "tutajtestuje@gmail.com",
      From: "tutajtestuje@gmail.com",
      Subject: "This is the subject",
      Body: "And this is the body",
    }).then((message) => alert("wysłano email"));
  };
  return (
    <>
      <h1>Contact page</h1>
      <button onClick={sendEmail}>Send</button>
    </>
  );
};

export default Contact;
