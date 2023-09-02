import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useGetPost = (postId) => {
  const { posts } = useSelector((state) => state.post);
  const [post, setPost] = useState({});
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const filteredPost = posts?.find((post) => post._id === postId);
    console.log("first", filteredPost);
    setComments([filteredPost?.comments]);
    setLikes([filteredPost?.likes]);
    setPost({ filteredPost });
  }, []);

  return { post, likes, comments };
};
