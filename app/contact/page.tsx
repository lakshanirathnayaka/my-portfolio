"use client";

import React, { useState, FormEvent } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/send/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const errorData = await res.json();
        setStatus(`error: ${errorData.error}`);
      }
    } catch (error) {
      setStatus('error: Something went wrong.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24">
      <h1 className="text-4xl font-bold mb-12">Contact Me</h1>
      <div className="w-full max-w-2xl">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-purple-300 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {status.startsWith('success') && <p className="text-green-500 mt-4 text-center">Message sent successfully!</p>}
          {status.startsWith('error') && <p className="text-red-500 mt-4 text-center">{status.split(': ')[1]}</p>}
        </form>
      </div>
    </main>
  );
};

export default ContactPage;