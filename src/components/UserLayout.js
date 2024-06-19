import React from "react";
import { Link, Outlet } from "react-router-dom";

export function UserLayout() {
  return (
    <div>
      <nav>
        <Link to="/user">Profile</Link>
        <Link to="/user/all">Users</Link>
        <Link to="/user/logout">Logout</Link>
      </nav>
      <Outlet />
    </div>
  );
}
