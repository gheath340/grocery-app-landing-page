'use client';

import { useState, FormEvent } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setMessage('');

    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage('Thanks for joining the waitlist!');
      setEmail('');
      setName('');
    } else {
      setMessage(data.error || 'Something went wrong.');
    }
  }

  return (
    <main className="max-w-md mx-auto mt-20 p-4">
      <h1 className="text-3xl font-bold mb-4">Join the Waitlist</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Your email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Your name (optional)"
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Join
        </button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </main>
  );
}
