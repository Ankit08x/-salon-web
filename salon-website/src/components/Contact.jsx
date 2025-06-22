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
      // Replace with your actual API endpoint
      const response = await fetch('http://localhost:3001/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ fullname: '', email: '', message: '' });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      setStatus("❌ Failed to send message.");
      console.error(error);
    }
  };

  return (
    <div className="relative w-full h-[700px] flex items-center justify-center px-4 py-12 bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: "url('/images/bg-contact.jpg')" }}
    >
     
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

    
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
      
        <div className="text-white space-y-8">
          <h2 className="text-4xl text-center font-bold">Contact Us</h2>
          <p className="text-gray-300">Feel free to contact us for any service or help. We are happy to assist you.</p>

          <div className="flex items-start space-x-4">
            <div className="bg-white text-black p-3 rounded-full">
              🏠
            </div>
            <div>
              <h4 className="text-cyan-400 font-semibold">Address</h4>
              <p className="text-gray-300 text-sm">302020 Mansarovar Jaipur, Rajasthan India</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-white text-black p-3 rounded-full">
              📞
            </div>
            <div>
              <h4 className="text-cyan-400 font-semibold">Phone</h4>
              <p className="text-gray-300 text-sm">+91 7673-7236</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-white text-black p-3 rounded-full">
              📧
            </div>
            <div>
              <h4 className="text-cyan-400 font-semibold">Email</h4>
              <p className="text-gray-300 text-sm">subhyamakeovvers@gmail.com</p>
            </div>
          </div>
        </div>

    
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Message</h3>
          <div className="space-y-6">
            <div>
              <input
                type="text"
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border-b-2 border-gray-300 py-3 px-1 outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border-b-2 border-gray-300 py-3 px-1 outline-none focus:border-cyan-400 transition-colors"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your Message..."
                className="w-full border-b-2 border-gray-300 py-3 px-1 outline-none resize-none h-24 focus:border-cyan-400 transition-colors"
                required
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-cyan-400 text-white py-3 font-semibold hover:bg-cyan-500 transition-colors duration-300 rounded-lg shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
            {status && (
              <p className={`text-sm pt-2 ${status.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;