import React, { useState } from 'react';
import './Allgroups.css';

function Allgroups() {
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [expenseInput, setExpenseInput] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addGroup = () => {
    if (!groupName.trim()) {
      alert('Please enter a valid group name.');
      return;
    }

    const newGroup = {
      id: Date.now(),
      name: groupName.trim(),
      expenses: [],
    };

    setGroups([...groups, newGroup]);
    setGroupName('');
  };

  const urlll = async () => {
    try {
      console.log("Attempting login with email:", email);
      console.log("Sending request to /api/auth/login");
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log("Login successful");
        alert("Login successful"); // Alert for successful login

        // Store user information in sessionStorage
      sessionStorage.setItem("user", JSON.stringify({  }));
      const serviceValue = localStorage.getItem("serviceValue");
      const response = await fetch("http://localhost:8080/api/addExpense", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
       
        if (serviceValue) {
          switch (parseInt(serviceValue)) {
            case 1:
              window.location.href = "/Services/addExpense";
              break;
            case 2:
              window.location.href = "/Services/deleteExpense";
              break;
            case 3:
              window.location.href = "/Services/updateExpense";
              break;
          }

          const response = await fetch("http://localhost:8080/api/member", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
        }
      } else {
        console.error("Update failed");
        alert("Login failed. Please check your email and password."); // Alert for failed login
      }
    } catch (error) {
      console.error(" error:", error);
      alert("An error occurred during login. Please try again later."); // Alert for login error
    }
  }
    

  const deleteExpense = (groupId, expenseIndex) => {
    const updatedGroups = groups.map((group) => {
      if (group.id === groupId) {
        const updatedExpenses = [...group.expenses];
        updatedExpenses.splice(expenseIndex, 1);
        return { ...group, expenses: updatedExpenses };
      }
      return group;
    });

    setGroups(updatedGroups);
  };

  const addExpense = () => {
    const amount = parseFloat(expenseInput);

    if (isNaN(amount) || amount <= 0 || !expenseName.trim()) {
      alert('Please enter a valid expense name and amount.');
      return;
    }

    const updatedGroups = groups.map((group) => {
      if (group.id === selectedGroupId) {
        return {
          ...group,
          expenses: [...group.expenses, { name: expenseName.trim(), amount }],
        };
      }
      return group;
    });

    setGroups(updatedGroups);
    setExpenseInput('');
    setExpenseName('');
  };

  const getTotalExpenses = (group) => {
    return group.expenses.reduce((total, expense) => total + expense.amount, 0);
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <div>
        <label htmlFor="groupName">Enter Group Name:</label>
        <input
          type="text"
          id="groupName"
          placeholder="Enter group name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <button onClick={addGroup}>Create Group</button>
      </div>
      <div id="groupsList">
        <h2>All Groups:</h2>
        <ul>
          {groups.map((group) => (
            <li key={group.id} onClick={() => setSelectedGroupId(group.id)}>
              {group.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedGroupId && (
        <div>
          <h2>{groups.find((group) => group.id === selectedGroupId).name} Expenses:</h2>
          <div>
            <label htmlFor="expenseName">Enter Expense Name:</label>
            <input
              type="text"
              id="expenseName"
              placeholder="Enter expense name"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
            />
            <label htmlFor="expenseInput">Enter Expense Amount:</label>
            <input
              type="text"
              id="expenseInput"
              placeholder="Enter expense amount"
              value={expenseInput}
              onChange={(e) => setExpenseInput(e.target.value)}
            />
            <button onClick={addExpense}>Add Expense</button>
          </div>
          <ul>
            {groups
              .find((group) => group.id === selectedGroupId)
              .expenses.map((expense, index) => (
                <li key={index}>
                  Expense {index + 1}: {expense.name} - ${expense.amount.toFixed(2)}
                  <button onClick={() => deleteExpense(selectedGroupId, index)}>
                    Delete Expense
                  </button>
                </li>
              ))}
          </ul>
          <p>Total Expenses: ${getTotalExpenses(groups.find((group) => group.id === selectedGroupId)).toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default Allgroups;