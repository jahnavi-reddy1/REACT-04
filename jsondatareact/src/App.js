import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.users)) {
          setUsers(data.users);
        } else {
          console.error("Data format is not as expected.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>User Table</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>SNo</th>
              <th>Profile Pic</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Username</th>
              <th>Domain</th>
              <th>IP</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td data-label="SNo.">{index + 1}</td>
                <td data-label="Profile Pic">
                  <img
                    src={user.image}
                    alt="Profile Pic"
                    width="50"
                    height="50"
                  />
                </td>
                <td data-label="First Name">{user.firstName}</td>
                <td data-label="Last Name">{user.lastName}</td>
                <td data-label="Gender">{user.gender}</td>
                <td data-label="Email">{user.email}</td>
                <td data-label="Username">{user.username}</td>
                <td data-label="Domain">{user.domain}</td>
                <td data-label="IP">{user.ip}</td>
                <td data-label="University">{user.university}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;