import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed() {
  return (
    <div className="feed">
    {/* Render the Share components */}
      <div className="feedWrapper">
        <Share />
    {/* Fetch the data from Posts to render the posts  */}
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}