"use client";
import "./TestDemo.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Page() {
  const count = useSelector((state) => state.HabitsAddModal.count);
  const dispatch = useDispatch();
  return (
    <main style={{ backgroundColor: "white" }}>
      <button onClick={() => dispatch({ type: "add" })}>+</button>
      {count}
      <button>-</button>
    </main>
  );
}
