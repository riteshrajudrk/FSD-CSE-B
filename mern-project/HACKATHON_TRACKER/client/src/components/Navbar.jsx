import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(){
  const navigate = useNavigate();
  const handleCreate = ()=> navigate("/dashboard");
  return (
    <header className="nav">
      <div className="nav-inner container">
        <Link to="/" className="brand">HackTrack</Link>
        <div className="nav-actions">
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link outline">Sign up</Link>
          <button className="btn small-btn" onClick={handleCreate}>Organizer</button>
        </div>
      </div>
    </header>
  );
}
