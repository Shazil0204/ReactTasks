import { Route, useLocation, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  const location = useLocation();

  let navlinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="text-white bg-black h-screen">
      <Navbar links={navlinks} />
      <Routes location={location} key={location.pathname}>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
