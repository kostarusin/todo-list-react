import "./App.css";
import Header from "../Header/Header";
import Homepage from "../pages/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      {<Header />}
      {<Homepage />}
    </div>
  );
}

export default App;
