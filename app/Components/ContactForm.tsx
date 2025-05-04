"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  hiringModel: "Full Time" | "Part Time" | "Hourly Hire" | ""; // Union type
}

export default function HireForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    hiringModel: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleModelChange = (model: FormData["hiringModel"]) => {
    setFormData((prev) => ({ ...prev, hiringModel: model }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    setError(""); // Reset error message
    e.preventDefault();
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
    // Create a combined message
    const message = `Phone Number: ${formData.phone}\nHiring Model: ${formData.hiringModel}`;

    // Prepare data for EmailJS or API
    const payload = {
      name: formData.fullName,
      email: formData.email,
      message, // this now includes phone + hiring model
    };

    console.log("Form Payload:", payload); // test output
    emailjs.send(serviceID, templateID, payload, userID).then((response) => {
      // Check if the response status is 'OK'
      if (response.status === 200) {
        setIsLoading(false);
        setIsSent(true);
        setError(""); // Reset error message
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          hiringModel: "",
        });
        setTimeout(() => {
          setIsSent(false);
        }, 5000);
      } else {
        setIsLoading(false);
        setError("Failed to send the message. Please try again later.");
      }
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Get Free Consultation</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border-b border-gray-300 focus:border-black outline-none p-2"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 focus:border-black outline-none p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 focus:border-black outline-none p-2"
            />
          </div>
        </div>

        {/* Hiring Model Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Choose one hiring model <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-3">
            {["Full Time", "Part Time", "Hourly Hire"].map((model) => (
              <button
                key={model}
                type="button"
                aria-label="Hiring Model"
                className={`px-4 py-2 border rounded-lg 
                 ${
                   formData.hiringModel === model
                     ? "bg-indigo-500 text-white"
                     : "border-gray-300"
                 }
                `}
                onClick={() =>
                  handleModelChange(model as FormData["hiringModel"])
                }
              >
                {model}
              </button>
            ))}
          </div>
        </div>

        {isSent && (
          <p className="text-green-500 text-center font-bold">SENT !!</p>
        )}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          aria-label="Submit"
          className="w-full bg-indigo-500 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold text-lg mt-4"
        >
          {isLoading ? "Loading..." : "Hire Me"}
        </button>
      </form>
    </div>
  );
}
