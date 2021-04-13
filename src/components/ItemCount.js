import React, { useEffect, useState } from "react";
import './ItemCount.css'

export function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));

  const addHandle = () => {
    if(count < stock)
    setCount(count + 1);
  };

  const removeHandle = () => {
    if(count > 0)
    setCount(count - 1);
  };

  return (
    <div>
      <div className="buttons">
        <button
          className="row"
          type="button"
          onClick={removeHandle}
        >
          -
        </button>
        <div className="row">{count}</div>
        <button
          className="row"
          type="button"
          onClick={addHandle}
        >
          +
        </button>
      </div>
      <button
        className="carrito"
        disabled={count <= 0}
        type="button"
        onClick={onAdd}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;