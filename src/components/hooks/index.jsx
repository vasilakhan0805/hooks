import React, { useState } from "react";

function Hooks() {
  const [user, setUser] = useState({
    firstName: "Jack",
    lastName: "Smith",
    age: 30,
    completed: false,
  });

  const increment = () => {
    setUser({ ...user, age: user.age + 1 });
  };
  const decrement = () => {
    setUser({ ...user, age: user.age - 1 });
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onChecked = (e) => {
    const { checked } = e.target;
    setUser({ ...user, completed: checked });
  };

  return (
    <div>
      Hooks
      <p style={{textDecoration: user.completed && 'line-through'}}>FirstName: {user.firstName}</p>
      <p>LastName: {user.lastName}</p>
      <p>Age: {user.age}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br />
      <br />
      <br />
      <input
        type="text"
        placeholder="Change FirstName"
        onChange={onChange}
        name="firstName"
      />
      <input
        type="text"
        placeholder="Change LastName"
        onChange={onChange}
        name="lastName"
      />
      <br />
      <input type="checkbox" onChange={onChecked} name="completed" />
    </div>
  );
}

export default Hooks;
