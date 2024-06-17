import style from "./App.module.css";
import Header from "../Header/Header";
import Homepage from "../pages/HomePage/HomePage";

function App() {
  return (
    <div className={style.App}>
      {<Header />}
      {<Homepage />}
    </div>
  );
}

export default App;
