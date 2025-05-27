'use client'

import { useState } from 'react'

export default function TicketForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState('Support')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New ${category} Ticket from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCategory: ${category}\n\n${description}`
    )
    window.location.href = `mailto:teamrjec@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 p-4">
      <input
        className="w-full rounded border p-2"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        className="w-full rounded border p-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <select
        className="w-full rounded border p-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Refund</option>
        <option>Order Status</option>
        <option>Admin Support</option>
        <option>Support</option>
      </select>
      <textarea
        className="w-full rounded border p-2"
        rows={4}
        placeholder="Describe your issue..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full rounded bg-blue-600 p-2 text-white"
      >
        Submit Ticket
      </button>
    </form>
  )
}
