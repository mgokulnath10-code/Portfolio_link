import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setLoading(false);
      })
      .catch(() => {
        alert("Something went wrong.");

        setLoading(false);
      });
  };

  return (
    <motion.form
      className="contact-form"
      onSubmit={handleSubmit}
      initial={{
        opacity: 0,
        x: 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={form.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        value={form.subject}
        onChange={handleChange}
      />

      <textarea
        rows="7"
        name="message"
        placeholder="Write your message..."
        required
        value={form.message}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="send-btn"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </motion.form>
  );
}

export default ContactForm;