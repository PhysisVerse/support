// components/TicketForm.tsx

import { useState, FormEvent } from 'react';

interface TicketData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  description: string;
}

const TicketForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event: FormEvent) => {
	event.preventDefault();
	const ticket: TicketData = { name, email, phone, subject, description };

	try {
	  const response = await fetch('/api/ticket', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(ticket),
	  });
	  if (!response.ok) {
		throw new Error(response.statusText);
	  }
	  const data = await response.json();
	  console.log(data); // Do something with the result
	} catch (error) {
	  console.error(error); // Handle error
	}
  };

  return (
	<form onSubmit={handleSubmit}>
	  <label>
		Name:
		<input
		  type="text"
		  value={name}
		  onChange={(e) => setName(e.target.value)}
		  required
		/>
	  </label>
	  <label>
		Email:
		<input
		  type="email"
		  value={email}
		  onChange={(e) => setEmail(e.target.value)}
		  required
		/>
	  </label>
	  <label>
		Phone:
		<input
		  type="tel"
		  value={phone}
		  onChange={(e) => setPhone(e.target.value)}
		/>
	  </label>
	  <label>
		Subject:
		<input
		  type="text"
		  value={subject}
		  onChange={(e) => setSubject(e.target.value)}
		  required
		/>
	  </label>
	  <label>
		Description:
		<textarea
		  value={description}
		  onChange={(e) => setDescription(e.target.value)}
		  required
		/>
	  </label>
	  <button type="submit">Submit Ticket</button>
	</form>
  );
};

export default TicketForm;