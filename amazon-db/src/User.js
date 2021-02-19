import axios from "./axios";
import React, { useEffect, useState } from "react";

import "./User.css";
function User() {
  const [user, setUsers] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/users/data");
      setUsers(data);
    };
    fetchdata();
  }, [user]);
  return (
    <div className="user_components">
      <h1>Users</h1>
      <div className="users_info_heading">
        <p className="email_title">Name</p>
        <p className="verified_title">Email</p>
      </div>

      {user.data?.map((user) => (
        <div className="users_info">
          <p className="user_email">{user.name}</p>
          <p className="user_uid">{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default User;
