import { useContext, useState } from "react";
import PostContext from "./postContext";
import { appendErrors, useForm } from "react-hook-form";

const PostForm = () => {
  const { setPosts } = useContext(PostContext);
  const [inputValues, setInputValues] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm("");

  const submitPost = async (data) => {
    // setInputValues(data.title);
    var formData = new FormData();
    const dataFunction = async () => {
      formData.append("title", data.title);
      formData.append("caption", data.title);
    };
    await dataFunction();
    setPosts((currentValues) => [...currentValues, data]);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitPost)}>
        <label>Post Form</label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          {...register("title", { required: true })}
        />
        {errors.title && errors.title.type === "required" && (
          <span>This is required</span>
        )}

        <input
          type="caption"
          placeholder="Caption"
          name="caption"
          {...register("caption")}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostForm;
