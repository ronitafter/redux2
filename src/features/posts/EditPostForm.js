import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPostById, updatePost } from "./postsSlice";
import { useParams, useNavigate } from "react-router-dom";
import { selectAllUsers } from "../users/usersSlice";

const EditPostForm = () => {
  return (
    <div>
      <h1>EditPostForm</h1>
    </div>
  );
};

export default EditPostForm;
