// src/components/AccountList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AccountList = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios.get("/api/accounts")
      .then(response => setAccounts(response.data))
      .catch(error => console.error("Error fetching accounts:", error));
  }, []);

  return (
    <div>
      <h2>Accounts List</h2>
      <Link to="/create-account">Create New Account</Link>
      <ul>
        {accounts.map(account => (
          <li key={account.id}>
            {account.name} - {account.balance}
            <Link to={`/edit-account/${account.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
