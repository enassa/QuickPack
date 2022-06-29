import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Documentation from "./main/documentation";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Documentation />} />
      </Routes>
    </div>
  );
}
