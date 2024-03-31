import Home from "./home/Home";
import Header from "./home/header/Header";
import Navbar from "./navbar/Navbar";
import "./sass/global.scss";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
