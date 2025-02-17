import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";



function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
    <Topbar />
    <Routes>
    <Route path="/" element={<Home />}> </Route>
    <Route path="/posts" element={<Home />}> </Route>
    <Route path="/register" element={user ? <Home /> : <Register />}> </Route>
    <Route path="/login" element={user ? <Home /> : <Login />}> </Route>
    <Route path="/post/:id" element={<Single />}> </Route>
    <Route path="/write" element={user ? <Write /> : <Login />}> </Route>
    <Route path="/settings" element={user ? <Settings /> : <Login />}> </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
