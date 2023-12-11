import React, { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "../styles/styles.css";


const Allgroups = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [groupVisibility, setGroupVisibility] = useState({});


  const groupsData = [
    { id: "Group1", name: "Group 1" },
    { id: "Group2", name: "Group 2" },
    { id: "Group3", name: "Group 3" },
    // Add more groups as needed
  ];


  const handleToggleDropdown = () => {
    setDropdownOpen((prevOpen) => !prevOpen);
  };


  const handleGroupClick = (groupId) => {
    // Toggle the visibility of the group
    setGroupVisibility((prevVisibility) => ({
      ...prevVisibility,
      [groupId]: !prevVisibility[groupId],
    }));
  };


  return (
    <>
      <div>
        <h1>MyExpense Tracker</h1>
        <div className={`group-details ${dropdownOpen ? "open" : ""}`}>
          <header onClick={handleToggleDropdown}>
            <h1>My Groups</h1>
          </header>
          <ul className="group-list">
            <h2 id="groupName"></h2>
            <h2>Group Transactions </h2>


            {groupsData.map((group) => (
              <li key={group.id}>
                <Link
                  to={`/${group.id}`}
                  onClick={() => handleGroupClick(group.id)}
                >
                  {group.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>


      {/* Routes for dynamic group components */}
      <Routes>
        {groupsData.map((group) => (
          <Route
            key={group.id}
            path={`/${group.id}`}
            element={<Group groupId={group.id} isVisible={groupVisibility[group.id]} />}
          />
        ))}
      </Routes>
    </>
  );
};


// Dynamic group component
const Group = ({ groupId, isVisible }) => {
  return (
    <div>
     
      {!isVisible && (
        // Render your transaction content here
        <div>
          <div className="group-details">
          <h2 id="groupName"></h2>
          <h2>{`${groupId} Transactions`}</h2>


          <ul className="group-list">
          <li>
            {/* <Link to="">Expense 1</Link> */}
            <h3>Expense: </h3>  
            <p>Description: </p>
          </li>
          <li>
            {/* <Link to="">Expense 2 </Link> */}
            <h3>Expense: </h3>  
            <p>Description: </p>
          </li>
          <li>
            {/* <Link to="">Expense 3</Link> */}
            <h3>Expense: </h3>  
            <p>Description: </p>
          </li>
        </ul>
        </div>
        </div>
      )}
    </div>
  );
};


export default Allgroups;