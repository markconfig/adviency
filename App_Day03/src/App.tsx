import "./styles.css";
import React, { useState } from "react";

interface Gift {
  name: string
}
const defaultGifts: Gift[] = []
const defaultNewGift: Gift = { name: "" }
export default function App() {
  const [gifts, setGifts] = useState(defaultGifts)
  const [newGift, setNewGift] = useState(defaultNewGift)

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewGift({ name: e.target.value })
  }
  function handleSaveGift() {
    setGifts([...gifts, newGift])
    setNewGift({ name: "" })
  }

  return (
    <div className="container">
      <h1>Regalos:</h1>
      <form onSubmit={
        (e) => {
          e.preventDefault();
          handleSaveGift();
        }
      }>
        <input
          placeholder="¡Agrega Un Realo!"
          required
          key="name"
          name="name"
          onChange={handleInputChange}
          value={newGift.name}
          ref={(input) => input && input.focus()}
        ></input>
        <button type="submit" className="button-add">+ Agregar</button>
      </form>

      <ul>
        {gifts.map((gift, id) => (
          <li key={id}>🎀{gift.name}</li>
        ))}
      </ul>
    </div>
  );
}