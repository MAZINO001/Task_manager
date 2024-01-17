import { useEffect } from "react";

export default function Center({ boardModalOpen, setboardModalOpen }) {
  const [isSideBarOpen, setisSideBarOpen] = useState(true);
  const [WindowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const HnadleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", HnadleWindowResize);

    return () => {
      window.removeEventListener("resize", HnadleWindowResize);
    };
  });

  return (
    <div
      className={
        WindowSize[0] >= 768 && isSideBarOpen
          ? "bg-[#f4f7fd] scrollbar-hide h-screen flex dark:bg-[#20212c] overflow-x-scroll gap-6 ml-[261px]"
          : "bg-[#f4f7fd] scrollbar-hide h-screen flex dark:bg-[#20212c] overflow-x-scroll gap-6 "
      }
    >
      {WindowSize[0] >= 768 && (<SideBar/>)}
    </div>
  );
}
