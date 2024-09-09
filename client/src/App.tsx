import { Button } from "./components/ui/button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="flex flex-col min-h-screen font-mono">
      <Navbar />
      <Button className="">TEST</Button>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
