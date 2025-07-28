'use client';

import { useState, FormEvent } from 'react';

export default function WaitlistForm () {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setMessage('');

    const res = await fetch('/api/grocery_app_waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage('Thanks for joining the waitlist!');
      setEmail('');
    } else {
      setMessage(data.error || 'Something went wrong.');
    }
  }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-20 p-4 relative z-10">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Join the Waitlist</h1>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Join
          </button>
        </div>
        {message && (
          <p className="mt-4 text-green-600 font-medium bg-green-50 p-3 rounded-lg">
            {message}
          </p>
        )}
      </form>
    )
}