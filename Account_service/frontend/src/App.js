// src/App.js
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AccountForm from "./components/AccountForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-account" element={<AccountForm />} />
        <Route path="/edit-account/:id" element={<AccountForm />} />
      </Routes>
    </Router>
  );
}

export default App;
