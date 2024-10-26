import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

export const Email = () => {
  const [verified, setVerified] = useState(false);
  const recaptchaRef = useRef(null);
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6bbgb5r", // Replace with your EmailJS service ID
        "template_pkkwfya", // Replace with your EmailJS template ID
        form.current,
        "tP3Nr8hIyvoRKikBq" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
          toast.success("Message sent successfully!");
          form.current.reset(); // Reset form after successful send
          recaptchaRef.current.reset(); // Reset the ReCAPTCHA
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
          toast.error("Something went wrong! Please try again.");
        }
      );
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center text-gray-100"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-[rgba(255,255,255,0)] shadow-xl rounded-lg p-8 w-full max-w-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="user_name"
            className="block text-gray-300 text-start font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            required
            className="w-full px-4 py-2 bg-[rgba(255,255,255,0)] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-100"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="user_email"
            className="block text-gray-300 text-start font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            required
            className="w-full px-4 py-2 bg-[rgba(255,255,255,0)] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-100"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-300 text-start font-medium mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className="w-full px-4 py-2 bg-[rgba(255,255,255,0)] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-100"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-300 text-start font-medium mb-2"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows="5"
            className="w-full mb-5 px-4 py-2 bg-[rgba(255,255,255,0)] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-100"
          ></textarea>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LeQ0WwqAAAAABdq8f0e76c_qBz36U2l5crQmdYd"
            onChange={() => {
              setVerified(true);
            }}
          />
        </div>

        <motion.button
          disabled={!verified}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className={`w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300 ${
            !verified && "opacity-50 cursor-not-allowed"
          }`}
        >
          Send Message
        </motion.button>
      </form>
      <style jsx>{`
        input:-webkit-autofill,
        textarea:-webkit-autofill {
          background-color: transparent !important;
          -webkit-box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0) inset !important;
          box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0) inset !important;
        }
      `}</style>
    </motion.div>
  );
};
