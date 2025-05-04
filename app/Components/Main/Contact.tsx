"use client";
import React, { useState } from "react";
import Header from "@/app/Utils/Header";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
  const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

  // console.log("Service ID:", serviceID);
  // console.log("Template ID:", templateID);
  // console.log("User ID:", userID);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    setError(""); // Reset error message
    e.preventDefault(); // Prevent default form submission behavior
    // console.log(serviceID, templateID, formData, userID);

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        // Check if the response status is 'OK'
        if (response.status === 200) {
          setIsLoading(false);
          setIsSent(true);
          setError(""); // Reset error message
          setFormData({ name: "", email: "", message: "" }); // Clear form
          setTimeout(() => {
            setIsSent(false);
          }, 5000);
        } else {
          setIsLoading(false);
          setError("Failed to send the message. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setIsLoading(false);
        setError("Failed to send the message. Please try again later.");
      });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center justify-center gap-6 mb-10">
        <Header tag="Contact Me" bgColor="bg-indigo-100" />
      </div>

      {/* Main Contact Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            100% Satisfaction Guaranteed
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Feel free to reach out for collaboration, opportunities, or just a
            tech chat — I&apos;m always open to connecting!
          </p>

          <h3 className="text-xl font-semibold text-gray-900">
            What will be the next step?
          </h3>
          <ul className="space-y-3 text-lg text-gray-800">
            <li className="flex items-center gap-2">
              <VscDebugBreakpointLogUnverified className="text-indigo-600" />{" "}
              We&apos;ll prepare the proposal.
            </li>
            <li className="flex items-center gap-2">
              <VscDebugBreakpointLogUnverified className="text-indigo-600" />{" "}
              We&apos;ll discuss it together.
            </li>
            <li className="flex items-center gap-2">
              <VscDebugBreakpointLogUnverified className="text-indigo-600" />{" "}
              Let&apos;s start the discussion.
            </li>
          </ul>
        </div>

        {/* Right Side Contact Form */}
        <div className="md:w-1/2 bg-white p-6 md:p-10 rounded-lg w-full">
          <h3 className="text-2xl font-bold mb-6 text-indigo-700 text-center md:text-left">
            Turn Your Vision into Reality
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {isSent && (
              <p className="text-green-500 text-sm">
                Message sent successfully!
              </p>
            )}
            <button
              type="submit"
              aria-label="Send Message"
              className="w-full bg-indigo-700 text-white px-3 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-800 transition"
            >
              {isLoading ? "Loading..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
