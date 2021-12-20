import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddCinema from "./components/AddCinema";
import CinemaList from "./components/CinemaList";
import Dashboard from "./components/Dashboard";
import Details from "./components/Details";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="details/:id" element={<Details />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<AddCinema />} />
          <Route path="list" element={<CinemaList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
