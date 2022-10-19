import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: "",
  });

  const { id } = useParams();
  useEffect(() => {
    document.title = "User Details";
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3003/users/${id}`)
      .then((result) => setUser(result.data))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div className="container">
      <br />
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">website: {user.website}</li>
      </ul>
      <br />
      <Link className="btn btn-primary" to="/details">
        Back to Details
      </Link>
    </div>
  );
};

export default User;
