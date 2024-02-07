import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

// Creation of the Topbar Components 

export default function Topbar() {
  return (
    <div className="topbarContainer">
     {/* Left section of the Topbar Component */}
      <div className="topbarLeft">
        <span className="logo">Dalmasocial</span>
      </div>

      {/* Center section of the Topbar Component */}
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>

      {/* Right section of the Topbar Component */}
      <div className="topbarRight">

      {/* First part of the right section */}
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>

        {/* Middle part of the right section */}
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

        {/* Last part of the right section */}
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}