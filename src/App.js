import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import "./sass/global.scss";
import { Routes, Route } from "react-router-dom";
import SingleRoute from "./singleRoute/SingleRoute";
import Register from "./register/Register";
import Adming from "./components/adming/Adming";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleRoute />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Adming />} />
      </Routes>
    </div>
  );
}

export default App;
