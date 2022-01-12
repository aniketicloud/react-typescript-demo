import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    if (name) {
      setGuests([...guests, name]);
      setName("");
    }
  };

  return (
    <div>
      <h3>Guest List</h3>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <ul>
        {guests.map((guest, index) => (
          <li key={index}>
            {index + 1} - {guest}
          </li>
        ))}
      </ul>
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
