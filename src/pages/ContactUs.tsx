// src/pages/ContactUs.tsx
import { useState } from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
    // complain: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Message sent! 🎯 We'll get back to you.");
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
      //   complain: "",
    });
  };

  return (
    <div className="min-h-screen bg-[var(--brand-bg)] px-6 py-12 text-zinc-800 dark:text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-orange-500">
            Contact MEDTECH INSTITUTE & TRAINING CENTER
          </h2>
          <p className="text-md">
            Whether you're a student, mentor, or confused parent—we're here to
            help! Reach out via the form, or visit us in person (chai on us 🍵).
          </p>
          <div>
            <h4 className="font-semibold">📍 Institute Location:</h4>
            <p> DEORIA - 274001</p>
          </div>
          <div>
            <h4 className="font-semibold">📞 Mobile:</h4>
            <p>+91 9260931655</p>
          </div>
          <div>
            <h4 className="font-semibold">✉️ Email:</h4>
            <p>medtechinstitutedeoria@gmail.com</p>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.9722519159076!2d83.7857175746384!3d26.497957776908925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39916fdb331693f9%3A0xe6e5cb99f38c67c8!2sReliance%20Smart%20Point%2C%20CC%20Rd%2C%20Deoria%2C%20Uttar%20Pradesh%20274001!5e0!3m2!1sen!2sin!4v1721659430359!5m2!1sen!2sin
"
              width="100%"
              height="250"
              className="rounded-xl border-0 shadow-md"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg space-y-4"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <h3 className="text-2xl font-semibold text-orange-500 mb-4">
            Send Us a Message 💬
          </h3>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border dark:bg-zinc-800 dark:border-zinc-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border dark:bg-zinc-800 dark:border-zinc-600"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border dark:bg-zinc-800 dark:border-zinc-600"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border dark:bg-zinc-800 dark:border-zinc-600"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border dark:bg-zinc-800 dark:border-zinc-600"
            required
          />
          {/* <textarea
            name="complain"
            rows={3}
            placeholder="Any Complaints?"
            value={formData.complain}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border dark:bg-zinc-800 dark:border-zinc-600"
          /> */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactUs;
