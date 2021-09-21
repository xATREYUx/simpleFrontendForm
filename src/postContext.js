import React, { createContext, useState } from "react";

const PostContext = createContext();

const PostContextProvider = (props) => {
  const [posts, setPosts] = useState([]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContext;
export { PostContextProvider };
