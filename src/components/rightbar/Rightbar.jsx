import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online";

export default function Rightbar({ profile }) {
// Component for the Homepage Right Bar 
  const HomeRightBar = () => {
  return(
    <>
      <div className="birtdayContainer">
      <img className="birthdayImg" src="assets/gift.png" alt="" />
      <span className="birthdayText">
        <b>Shaya Moza</b> and <b>3 other friends</b> have a birthday today
      </span>
    </div>
    <img className="rightbarAd" src="assets/ad.png" alt="" />
    <h4 className="rightbarTitle">Online Friends</h4>
    <ul className="rightbarFriendList">
      {Users.map((u)=>(
        <Online key={u.id} user={u} />
      ))}
    </ul> 
    </>
  );
};

// Component for the Profile page right bar
  const ProfileRightBar = () => {
    return (
    <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Toronto</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Paris</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Married</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img 
          src="assets/person/2.jpeg" 
          alt="" 
          className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Shaya Moza</span>
        </div>
        <div className="rightbarFollowing">
          <img 
          src="assets/person/3.jpeg" 
          alt="" 
          className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Shaya Moza</span>
        </div>
        <div className="rightbarFollowing">
          <img 
          src="assets/person/4.jpeg" 
          alt="" 
          className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Shaya Moza</span>
        </div>
        <div className="rightbarFollowing">
          <img 
          src="assets/person/5.jpeg" 
          alt="" 
          className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Shaya Moza</span>
        </div>
      </div>
    </>
    )
  }
  // Return the right Right bar depending on the page 
  return (
    <div className="rightbar">
    <div className="rightbarWrapper">
    {profile ? <ProfileRightBar /> : <HomeRightBar />}
    </div>
    </div>
  )
}
