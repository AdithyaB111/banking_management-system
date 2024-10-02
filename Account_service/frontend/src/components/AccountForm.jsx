// src/components/AccountForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AccountForm = () => {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios.get(`/api/accounts/${id}`)
        .then(response => {
          setName(response.data.name);
          setBalance(response.data.balance);
        })
        .catch(error => console.error("Error fetching account:", error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = { name, balance };

    if (id) {
      axios.put(`/api/accounts/${id}`, account)
        .then(() => navigate("/"))
        .catch(error => console.error("Error updating account:", error));
    } else {
      axios.post("/api/accounts", account)
        .then(() => navigate("/"))
        .catch(error => console.error("Error creating account:", error));
    }
  };

  return (
    <div>
      <h2>{id ? "Edit Account" : "Create Account"}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Balance</label>
          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            required
          />
        </div>
        <button type="submit">{id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default AccountForm;
