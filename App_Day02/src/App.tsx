import "./styles.css";
import React, { useState } from "react";

const defaultGifts = [{ name: "A computer" }, { name: "A iPhone" }, { name: "Food" }, { name: "A SkateBoard" }]
export default function App() {
  const [gifts, setGifts] = useState(defaultGifts)
  return (
    <div className="container">
      <h1>Regalos:</h1>
      <ul>
        {gifts.map((gift, id) => (
          <li key={id}>{gift.name}</li>
        ))
        }
      </ul>
    </div>
  );
}
