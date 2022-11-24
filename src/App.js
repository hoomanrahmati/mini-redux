import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const person = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {person.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <input
        onChange={(event) => {
          setName(event.target.value);
        }}
        placeholder="name"
        value={name}
      />

      <button
        onClick={() => {
          dispatch({
            type: "addPerson",
            payload: { name, id: Math.random() * 10000 },
          });
          setName("");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
