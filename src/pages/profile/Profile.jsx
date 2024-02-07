import './profile.css';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

// Structure of the Profile page
export default function Profile() {
  return (
          <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        {/* Creation of the profile page */}
        <div className="profileRight">
        <div className="profileRightTop">
        {/* Insertion of the Cover and Profile Image */}
          <div className="profileCover"> 
          <img 
          className="profileCoverImg" 
          src="assets/post/3.jpeg" 
          alt="" />
          <img 
          className="profileUserImg" 
          src="assets/person/1.jpeg" 
          alt="" />
          </div>
        {/* Name and desc of the profile page */}
          <div className="profileInfo">
            <h4 className='ProfileInfoName'>Axel Dalmazir</h4>
            <span className='ProfileInfoDesc'>Hello World !</span>
          </div>
        </div>
      {/* Render the Feed and The Rightbar profile Component */}
        <div className="profileRightBottom">
          <Feed/>
          <Rightbar profile/>
        </div>
      </div>
      </div>
    </>
  )
}
