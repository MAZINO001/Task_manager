import Header from "./components/Header";
import Center from "./components/Center";
import EmptyBoard from "./components/EmptyBoard";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import boardsSlice from "./Redux/boardsSlice";
function App() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const ActiveBoard = boards.find((board) => board.isActive);

  if (!ActiveBoard && boards.length > 0) {
    dispatch(boardsSlice.actions.setBoardActive({ index: 0 }));
  }
  const [boardModalOpen, setboardModalOpen] = useState(false);
  return (
    <div className="App overflow-hidden overflow-x-scroll">
      <>
      {boards.length > 0 ? 
      <>
        {/* header  section */}
        <Header
          boardModalOpen={boardModalOpen}
          setboardModalOpen={setboardModalOpen}
        />
        {/* center section */}
        <Center        boardModalOpen={boardModalOpen}
          setboardModalOpen={setboardModalOpen}/>  
      </>  :
      <>
      <EmptyBoard type="add"/>
      </>
    }
      </>
    </div>
  );
}

export default App;
