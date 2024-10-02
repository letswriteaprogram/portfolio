// src/ContactForm.jsx
import React, { useState } from "react";
import axios from "axios";
import Wrapper from "../Wrapper";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    fetch("/.netlify/functions/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section id="Contact" className="mb-20">
      <Wrapper className="w-full m-10">
        <div className="w-full flex justify-center items-center mb-20">
          <span className="w-40 border-2 border-black"></span>
          <button className="border-2 border-black px-4 py-2 rounded-lg font-semibold text-xl mx-4 hover:bg-black hover:text-white">
            Contact
          </button>
          <span className="w-40 border-2 border-black"></span>
        </div>
        <div className="m-auto max-w-screen-sm">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="text-lg border border-black p-2 rounded placeholder:text-black/80"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-lg border border-black p-2 rounded placeholder:text-black/80"
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="text-lg border border-black p-2 rounded placeholder:text-black/80"
          />
          <button type="submit" className="bg-black  text-white p-2 rounded">
            Send Message
          </button>
          {status && <p>{status}</p>}
        </form>
        </div>
      </Wrapper>
    </section>
  );
}

export default Contact;
