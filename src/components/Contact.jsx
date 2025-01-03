import React, { useState } from "react";
import mail from "../Media/mail.png";
import github from "../Media/github.png";
import linkedin from "../Media/linkedin.png";
import twitter from "../Media/twitter.png";
import paperplane from "../Media/paperplane.png";
import location from "../Media/location.png";
import { motion } from "framer-motion";
import useWeb3Forms from "@web3forms/react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    const formData = new FormData(event.target);

    formData.append("access_key", "f1f9e5a6-7aa7-47c6-a70d-5ec13d50b402");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: -30,
    },
  };

  return (
    <section className="bg-radial-gradient dark:bg-gradient-to-r dark:from-black dark:via-gray-950 dark:to-gray-900 dark:text-white text-black w-full h-full px-10 py-10">
      <h1 className="dark:drop-shadow-[0_0_5px_rgba(0,0,225,1)] -ml-4 md:px-10 text-2xl md:text-3xl  lg:text-5xl mb-7 font-bold text-blue-600 dark:text-blue-400">
        # Contact Me
      </h1>
      <div className="md:flex justify-around items-center">
        <div className="flex flex-col gap-1 md:gap-3 mt-10">
          <h2 className="text-xl md:text-3xl font-bold ">
            Let's <span className="text-blue-600 dark:text-blue-500">Chat</span>
            .
          </h2>
          <h2 className="text-xl md:text-3xl font-bold mb-5">
            Tell me about your project.
          </h2>
          <div className="border-b-2 border-l-2 border-blue-600 dark:border-blue-400 flex">
            <img className="dark:invert w-8 m-4" src={mail} alt="" />
            <div className="mt-2">
              <p className="font-semibold">Mail me at</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=razvizaid259@example.com"
                target="_blank"
              >
                <p className="font-bold text-blue-600 dark:text-blue-400">
                  Abhaywadkar2004@gmail.com
                </p>
              </a>
            </div>
          </div>
          <div className="flex ml-5 mb-10 gap-5">
            <a
              href="https://www.linkedin.com/in/abhay-wadkar-078b25283/"
              target="_blank"
            >
              <motion.img
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="dark:invert w-7 my-2 hover:bg-blue-500 p-1 rounded"
                src={linkedin}
                alt=""
              />
            </a>
            <a href="https://github.com/Abhaywadkar04" target="_blank">
              <motion.img
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="dark:invert w-7 my-2 hover:bg-blue-500 p-1 rounded"
                src={github}
                alt=""
              />
            </a>
            <a
              href="https://www.google.com/maps/@19.41504,72.8203264,14z?entry=ttu"
              target="_blank"
            >
              <motion.img
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="dark:invert w-7 my-2 hover:bg-blue-500 p-1 rounded"
                src={location}
                alt=""
              />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=razvizaid259@example.com"
              target="_blank"
            >
              <motion.img
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="dark:invert w-7 my-2 hover:bg-blue-500 p-1 rounded"
                src={paperplane}
                alt=""
              />
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex w-full flex-col border-2 border-black dark:border-white -mt-5 md:w-2/6 backdrop-blur-3xl rounded-lg p-4"
        >
          <h2 className="text-lg md:text-3xl mb-3">Send us a message</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2"
            action=""
          >
            <input
              className="dark:bg-gray-950 p-1 px-2 text-base md:text-lg rounded-md"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name*"
            />
            <input
              className="dark:bg-gray-950 p-1 px-2 text-base md:text-lg rounded-md"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address*"
            />
            <input
              className="dark:bg-gray-950 p-1 px-2 text-base md:text-lg rounded-md"
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
            />
            <textarea
              className="dark:bg-gray-950 p-1 px-2 text-base md:text-lg rounded-md"
              name="message"
              id=""
              cols="20"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
            />
            <button
              type="submit"
              className="bg-blue-600 dark:bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-700 text-white mt-2 p-2 font-bold rounded-lg text-base md:text-xl"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
