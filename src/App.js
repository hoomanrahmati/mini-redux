import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addPerson, removePerson, fetchList } from "./store/actions";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const person = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  return (
    <div className="App">
      {person.map((item) => (
        <div>
          <div key={item.id}>{item.name}</div>
          <button
            onClick={() => {
              dispatch(removePerson(item.id));
            }}
          >
            remove person
          </button>
        </div>
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
          dispatch(addPerson(name));
          setName("");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
