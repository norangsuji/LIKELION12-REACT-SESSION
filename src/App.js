// App.js여긴가,,,,,,,,,여기서오류가나나,,,,,,
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        {/* pages에 대한 라우트 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
