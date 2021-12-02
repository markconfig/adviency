import "./styles.css";
import { useState } from "react";


const initialGifts = [
  { name: "Mouse" },
  { name: "Smarthphone" },
  { name: "A hug" },
  {name: "A Tatoo"}
];

export default function App() {
  const [gifts, setGifts] = useState(initialGifts);

  return (
    <div className="App">
      <h1>Regalos:</h1>
      <ul >
        {gifts.map((gift, id) => (
          <li key={id}>{gift.name}</li>
        ))}
      </ul>
    </div>
  );
}
