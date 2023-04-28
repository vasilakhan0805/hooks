import React, { useReducer } from "react";
import { INITIAL_STATE, reducer, ACTION_TYPES } from "./reducer";

// UseReducer => murakkab statelar bn ishlashda yordam beradi.
// UseReducer — o'ziga 2ta qiymat oladi:
// useReducer(* 1. Ixtiyoriy bitta funksiya () => {}, (=> bu funksiya ham o'z ichiga 2ta qiymat qabul qiladi: 1.state, 1 action(ya'ni qanday vazifa bajarishi))
//* 2. initial state ya'ni dastlabki qiymati any typeda bo'lishi mumkin. Odatda {} tipida bo'ladi )

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <h4>
        UseReducer {state.counter} {state.name}
      </h4>

      <button onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT_QUANTITY })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: ACTION_TYPES.DECREMENT_QUANTITY })}>
        decrement
      </button>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) =>
          dispatch({ type: ACTION_TYPES.GET_NAME, payload: e.target.value })
        }
      />
    </div>
  );
};

export default UseReducer;
