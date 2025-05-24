import '../styles/rsvpForm.css';

import { useState } from "react";

export const RsvpForm = () => {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [message, setMessage] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

if (!name && attending === null) {
  setMessage("Du har inte fyllt i något");
  return;
}

if (!name) {
  setMessage("Du glömde skriva ditt namn");
  return;
}

if (attending === null) {
  setMessage("Du måste välja om du kommer eller inte");
  return;
}

    try {
const response = await fetch(`${API_URL}/rsvp`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, attending }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setName("");
        setAttending(null);

          setTimeout(() => {
            setMessage("");
            }, 2000);
      } else {
        setMessage(data.error || "Något gick fel");
      }
    } catch (error) {
      console.error("RSVP error:", error);
      setMessage("Fel vid anslutning till servern");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rsvp-form">
      <h2>R S V P</h2>
      <label htmlFor="name">
        Namn:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <div>
        <label htmlFor="attending">
          <input
            type="radio"
            name="attending"
            checked={attending === true}
            onChange={() => setAttending(true)}
          />
          Jag kommer!
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="attending"
            checked={attending === false}
            onChange={() => setAttending(false)}
          />
          Jag kommer inte.
        </label>
      </div>
      <button type="submit">Skicka</button>
      {message && <p>{message}</p>}
    </form>
  );
};
