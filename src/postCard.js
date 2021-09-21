import { useContext, useState } from "react";
import PostContext from "./postContext";

const PostCard = ({ data, index }) => {
  const { posts, setPosts } = useContext(PostContext);

  const [editMode, setEditMode] = useState(false);
  const [input, setInput] = useState("");

  const handleEdit = () => {
    setEditMode(true);
    setInput(data.title);
  };
  const handleUpdatePost = () => {
    let allPosts = posts;
    let postToUpdate = allPosts[index];
    postToUpdate.title = input;
    allPosts[index] = postToUpdate;
    setPosts(allPosts);
    setInput("");
    setEditMode(false);
  };

  return (
    <>
      <div style={{ visibility: editMode ? "hidden" : "visible" }}>
        {data.title}
      </div>
      <button
        style={{ visibility: editMode ? "hidden" : "visible" }}
        onClick={handleEdit}
      >
        Edit
      </button>
      <input
        name="title"
        style={{ visibility: editMode ? "visible" : "hidden" }}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        style={{ visibility: editMode ? "visible" : "hidden" }}
        onClick={handleUpdatePost}
      >
        Update
      </button>
    </>
  );
};
export default PostCard;
