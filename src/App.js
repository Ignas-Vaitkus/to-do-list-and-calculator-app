import "./App.css";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import ToDoList from "./Components/ToDoList/ToDoList";
import Calculator from "./Components/Calculator/Calculator";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Routes>
          <Route path="" element={<Navigate to="/to-do-list" />} />
          <Route path="/" element={<Navigate to="/to-do-list" />} />
          <Route path="/to-do-list" element={<ToDoList />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="*" element={<h2>No app here</h2>} />
        </Routes>
        <Navigation />
      </HashRouter>
    </div>
  );
}

export default App;
