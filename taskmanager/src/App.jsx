import "./app.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import { useState } from "react";
import { TaskContext } from "./context/TaskContext";
function App() {
  const [subtasks, setSubtasks] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        subtasks,
        setSubtasks,
        description,
        setDescription,
        title,
        setTitle,
      }}
    >
      <div className="App">
        <Header />
        <Wrapper>
          <SideBar />
          <Container />
        </Wrapper>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
