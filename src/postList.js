import { useContext } from "react";
import PostCard from "./postCard";
import PostContext from "./postContext";

const PostList = () => {
  const { posts } = useContext(PostContext);

  return (
    <>
      <h1>Post List</h1>
      {posts.map((post, index) => (
        <PostCard data={post} index={index} key={index} />
      ))}
    </>
  );
};

export default PostList;
