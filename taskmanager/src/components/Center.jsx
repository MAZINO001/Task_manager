import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Column from "./Column";
import SideBar from "./SideBar"; t

export default function Center({ boardModalOpen, setboardModalOpen }) {
  const [isSideBarOpen, setisSideBarOpen] = useState(true);
  const [WindowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive === true);
  const columns = board.columns;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div
      className={
        WindowSize[0] >= 768 && isSideBarOpen
          ? "bg-[#f4f7fd] scrollbar-hide h-screen flex dark:bg-[#20212c] overflow-x-scroll gap-6 ml-[261px]"
          : "bg-[#f4f7fd] scrollbar-hide h-screen flex dark:bg-[#20212c] overflow-x-scroll gap-6 "
      }
    >
      {WindowSize[0] >= 768 && <SideBar />}
      {/* columns Section */}
      {columns.map((col, index) => (
        <Column key={index} colIndex={index} />
      ))}
    </div>
  );
}
