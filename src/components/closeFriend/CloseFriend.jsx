import "./closeFriend.css";

//Create the CloseFriend Component used in the sideBar Component
export default function CloseFriend({ user }) {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}