import "./app.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <SideBar />
        <Container />
      </Wrapper>
    </div>
  );
}

export default App;
