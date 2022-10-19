import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Details = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    document.title = "Details";
    loadUsers();
  }, []);

  const [filteredUsers, setFilteredUsers] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  const [query, setquery] = useState("");

  return (
    <div className="container">
      <div className="py-4">
        <div className="flex align-center">
          <h1>Details</h1>
          <div className="grow"></div>
          <div>
            <div
              style={{
                position: "relative",
              }}
            >
              <div className="input-group rounded">
                <input
                  type="search"
                  className="form-control"
                  placeholder=" Search..."
                  value={query}
                  onChange={(e) => {
                    const query = e.target.value;
                    setquery(query);
                    const result = users.filter((user, index) =>
                      user.name.toLowerCase().includes(query)
                    );
                    setFilteredUsers(result);
                  }}
                  id="inp"
                />
              </div>
              <div
                style={{
                  bottom: "0",
                  right: "0",
                  left: "0",
                  transform: "translateY(calc(100% + 3px))",
                  position: "absolute",
                }}
              >
                <ul id="ul" className="list searchList">
                  {filteredUsers.length > 0 && query.length > 0 ? (
                    filteredUsers.map((user) => (
                      <Link to={`/users/${user.id}`} key={user.id}>
                        <li className="listItem">{user.name}</li>
                      </Link>
                    ))
                  ) : query != null && query.length > 0 ? (
                    <li className="listItem">Nothing found </li>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>
          </div>
          <Link className="btn btn-primary" to="/users/add">
            Add User
          </Link>
        </div>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mr-2"
                    to={`/users/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
