import React, { useState } from "react";

const Todo = () => {
  const [items, setItems] = useState([
    { id: 1, title: "banana", price:100, completed: false, quantity: 1 },
    { id: 2, title: "kiwi", price:250, completed: false, quantity: 1 },
    { id: 3, title: "strawberry", price:300, completed: false, quantity: 1 },
    { id: 4, title: "orange", price:200, completed: false, quantity: 1 },
  ]);


// const addItem = () => {
//     const res = {id: items.length+1,quantity:1}
//     setItems(items => [...items, res])
//   };

  const onCheckBox = (e, id) => {
    const { checked } = e.target;
    const res = items.map( item => (item.id === id ? {...item, completed: checked} : item))
    setItems(res)
  };

    const increment = (id) => {
        const res = items.map( item => (item.id === id ? {...item, quantity: item.quantity + 1} : item))
        setItems(res)
      };
    
    const decrement = (id) => {
        const res = items.map( item => (item.id === id ? {...item, quantity: item.quantity - 1} : item))
        setItems(res)
      };
    


  return (
    <div>
      <table border={"1"} style={{ background: "violet" }}>
        <thead>
            <tr>
                <th>
                {/* <input placeholder="Add a fruit..." type='text' onChange={e => setItems(e.target.value)}/> */}
                {/* <button onClick={()=> addItem(items.id, items.title)}>Add</button> */}
                </th>
            </tr>
          <tr>
            <th>Chosen</th>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type={"checkbox"}
                  onChange={(e) => onCheckBox(e, item.id)}
                />
              </td>
              <td>{item.id}</td>
              <td style={{textDecoration: item.completed && 'line-through'}}>{item.title}</td>
              <td style={{textDecoration: item.completed && 'line-through'}}>{item.price}.00 sum</td>
              <td>
                <button onClick={()=> decrement(item.id)}>{"<"}</button>
                {item.quantity}
                <button onClick={()=> increment(item.id)}>{">"}</button>
              </td>
            </tr>
          ))}
          <h2>
            Total: {items.reduce((sum, current) => sum + current.quantity * current.price, 0)}
          </h2>
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
