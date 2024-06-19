import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UsersData from "./components/UsersData";
import { UserLayout } from "./components/UserLayout";
import "./App.css";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/user" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="all" element={<UsersData />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
