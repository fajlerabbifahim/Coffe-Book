import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar  ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-purple-300 rounded-box z-[1] mt-3 w-52  p-2 shadow"
          >
            <NavLink
              className="hover:text-red-500 "
              style={({ isActive }) => ({
                color: isActive ? "red" : "",
              })}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="hover:text-red-500 "
              style={({ isActive }) => ({
                color: isActive ? "red" : "",
              })}
              to="/coffee"
            >
              Coffee
            </NavLink>
            <NavLink
              className="hover:text-red-500 "
              style={({ isActive }) => ({
                hover: "red",
                color: isActive ? "red" : "",
              })}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Coffee_Book
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-5 text-lg gap-5 font-semibold">
          <NavLink
            className="hover:text-red-500 "
            style={({ isActive }) => ({
              color: isActive ? "red" : "",
            })}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:text-red-500 "
            style={({ isActive }) => ({
              color: isActive ? "red" : "",
            })}
            to="/coffee"
          >
            Coffee
          </NavLink>
          <NavLink
            className="hover:text-red-500 "
            style={({ isActive }) => ({
              hover: "red",
              color: isActive ? "red" : "",
            })}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
