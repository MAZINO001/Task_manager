import Header from "./components/Header";
import Center from "./components/Center";
import { useState } from "react";
function App() {
  const [boardModalOpen, setboardModalOpen] = useState(false);
  return (
    <div className="App">
      {/* header  section */}
      <Header boardModalOpen={boardModalOpen}  setboardModalOpen={setboardModalOpen}/>
      {/* center section */}
      <Center />
    </div>
  );
}

export default App;
