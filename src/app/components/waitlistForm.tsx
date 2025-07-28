'use client';

import { useState, FormEvent, useEffect } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setMessage('');

    const res = await fetch('/api/waitlist', {
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
    <form onSubmit={handleSubmit} className="flex flex-col items-center text-center min-w-sm pt-15 p-4 relative z-10">
      <p className="text-2xl font-bold text-gray-900 text-center">
        Join the Waitlist
      </p>

      <div className="flex flex-col gap-4 w-full items-center">
        <input
          type="email"
          placeholder="Your email"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a9ea3] focus:border-transparent bg-white/90 backdrop-blur-sm text-gray-700 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-[#66afb5] text-white text-xl py-3 px-6 w-1/3 rounded-lg hover:bg-[#5a9ea3] transition-colors duration-200"
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
  );
}