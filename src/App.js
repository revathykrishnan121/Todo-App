import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoManager from "./components/Todo/TodoManager";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="view" element={<TodoManager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
