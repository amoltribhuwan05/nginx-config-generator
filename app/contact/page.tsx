"use client"; // Mark this as a client-side component

import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send the form data to an API or service
    console.log("Form submitted with data:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    // Reset form data
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="container max-w-3xl mx-auto py-12">
      <h1 className="text-3xl font-semibold text-center mb-8 text-[#f39c12]">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-[#1f77b4]">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md mt-2 bg-white text-[#333] shadow-sm"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-medium text-[#1f77b4]">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md mt-2 bg-white text-[#333] shadow-sm"
            placeholder="Your email"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-lg font-medium text-[#1f77b4]">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md mt-2 bg-white text-[#333] shadow-sm"
            placeholder="Subject"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-medium text-[#1f77b4]">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md mt-2 bg-white text-[#333] shadow-sm"
            placeholder="Your message"
            rows={6}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 bg-[#f39c12] text-white rounded-lg hover:bg-[#e67e22]"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="mt-12 text-center text-[#bfbfbf]">
        <p>If you'd prefer to email us directly, feel free to reach out at:</p>
        <p>
          <a href="mailto:contact@yourdomain.com" className="text-[#2980b9]">
            contact@yourdomain.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
