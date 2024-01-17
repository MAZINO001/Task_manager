import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Column({ colIndex }) {
  const Colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-green-500",
    "bg-indigo-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-sky-500",
  ];

  const [color, setColor] = useState(null);
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive);
  const col = board.columns.find((col, i) => i === colIndex);

  useEffect(() => {
    setColor(Colors[Math.floor(Math.random() * Colors.length)]);
  }, [board]);
  return <div className={color}></div>;
}
