// Wrapper.js
import Container from "./Container";
import SideBar from "./SideBar";
import styles from "../styles/Wrapper.module.css";
import { useState } from "react";
import { WrapperContext } from "../context/WrapperContext";

export default function Wrapper() {
  const [isopen, setIsopen] = useState(true);

  function toggleSideBra() {
    setIsopen(!isopen);
  }

  return (
    <div className={styles.container}>
      <WrapperContext.Provider value={{ toggleSideBra, isopen }}>
        <SideBar />
        <Container />
      </WrapperContext.Provider>
    </div>
  );
}
