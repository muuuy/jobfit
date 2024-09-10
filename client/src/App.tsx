import { Button } from "./components/ui/button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-mono">
        <Navbar />
        <Button className="">TEST</Button>

        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
