import "./App.css";
import Home from "./components/pages/Home";
import NavBar from "./components/shared/NavBar";

function App() {
  return (
    <div className="px-10 mx-auto">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
