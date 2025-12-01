import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaMicrophone, FaBell, FaPlusCircle, FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?search=${query}`);
  };

  return (
    <nav className="yt-navbar">
      {/* Left - Logo */}
      <div className="yt-logo">
        <img
          src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
          alt="YouTube"
          className="yt-logo-img"
        />
        <span className="yt-country">IN</span>
      </div>

      {/* Middle - Search Bar */}
      <form className="yt-search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
        <div className="yt-mic">
          <FaMicrophone />
        </div>
      </form>

      {/* Right - Icons */}
      <div className="yt-actions">
        <button className="yt-create">
          <FaPlusCircle /> <span>Create</span>
        </button>
        <div className="yt-icon">
          <FaBell />
          <span className="yt-notif">9+</span>
        </div>
        <FaUserCircle className="yt-profile" />
      </div>
    </nav>
  );
}

export default Navbar;
