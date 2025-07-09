import React, { useState } from 'react';

const ContactUs = () => {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/contact-us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ fullname: '', email: '', message: '' });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message.");
    }
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg-contact.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side: Info */}
        <div className="text-white space-y-6 px-2 md:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center md:text-left">Contact Us</h2>
          <p className="text-gray-300 max-w-md">
            Feel free to contact us for any service or help. We are happy to assist you.
          </p>

          <div className="flex items-start space-x-4">
            <div className="bg-white text-black p-3 rounded-full text-xl">🏠</div>
            <div>
              <h4 className="text-cyan-400 font-semibold">Address</h4>
              <p className="text-gray-300 text-sm">302020 Mansarovar, Jaipur, Rajasthan, India</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-white text-black p-3 rounded-full text-xl">📞</div>
            <div>
              <h4 className="text-cyan-400 font-semibold">Phone</h4>
              <p className="text-gray-300 text-sm">+91 7673-7236</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-white text-black p-3 rounded-full text-xl">📧</div>
            <div>
              <h4 className="text-cyan-400 font-semibold">Email</h4>
              <p className="text-gray-300 text-sm">subhyamakeovvers@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Send Message</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full border-b-2 border-gray-300 py-3 px-1 outline-none focus:border-cyan-400 transition"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border-b-2 border-gray-300 py-3 px-1 outline-none focus:border-cyan-400 transition"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message..."
              rows="4"
              className="w-full border-b-2 border-gray-300 py-3 px-1 outline-none resize-none focus:border-cyan-400 transition"
              required
            />

            <button
              type="submit"
              className="w-full bg-cyan-400 hover:bg-cyan-500 text-white py-3 font-semibold transition-colors duration-300 rounded-lg shadow-md hover:shadow-lg"
            >
              Send Message
            </button>

            {status && (
              <p className={`text-sm pt-2 ${status.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
