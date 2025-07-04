import React, { useState } from 'react';
import axios from 'axios';
import bgImg from './appo.jpg';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/app', formData);
      setSuccess("Appointment booked successfully! ✅");
      setError('');
      setFormData({ name: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      setError("❌ Failed to book appointment");
      setSuccess('');
    }
  };

  return (
    <div
      className="w-full h-[700px] relative flex items-center justify-center px-4"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center px-4">
        <div className="text-white space-y-4">
          <h1 className="text-4xl font-bold"> Book Your Appointment Today – It’s Quick and Easy</h1>
          <p className="text-lg leading-relaxed">
           Take the first step towards getting the care or service you need. Choose a time that suits you and confirm your appointment in just a few clicks.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Book An Appointment</h2>

          {success && <p className="text-green-600 text-center mb-2">{success}</p>}
          {error && <p className="text-red-600 text-center mb-2">{error}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter your Name"
                className="w-full px-4 py-2 rounded-full bg-gray-200 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Enter your phone"
                className="w-full px-4 py-2 rounded-full bg-gray-200 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="3"
                className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-semibold transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
