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
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:3001/app', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log('✅ Response:', response.data);
      setSuccess('✅ Appointment booked successfully!');
      setFormData({ name: '', phone: '', message: '' });
      
    } catch (err) {
      console.error('❌ Error:', err.response?.data || err.message);
      setError(err.response?.data?.error || '❌ Failed to book appointment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="w-full min-h-screen flex items-center justify-center px-4 py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
       <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-white space-y-6 px-2 md:px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Book Your Appointment Today
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-lg">
            Choose a time that suits you and confirm your appointment in just a few clicks. It's fast, easy, and stress-free.
          </p>
        </div>

         <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Book An Appointment</h2>

          {success && <p className="text-green-600 text-center mb-3">{success}</p>}
          {error && <p className="text-red-600 text-center mb-3">{error}</p>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                disabled={loading}
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
                className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                disabled={loading}
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
                className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                required
                disabled={loading}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full font-semibold transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;