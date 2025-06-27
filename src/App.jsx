import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home/Home.jsx";
import PostDetails from "./pages/PostDetails/PostDetails.jsx";
import AddPost from "./pages/AddPost/AddPost.jsx";
import { Toaster, toast } from "react-hot-toast";
import NotFound from "./pages/NotFound/NotFound.jsx";
function App() {
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("posts");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  const deletePost = (id) => {
    setPosts((prev) => {
      const postToDelete = prev.find((p) => p.id === id);
      if (postToDelete) {
        toast.success(`Пост "${postToDelete.title}" видалено`);
      }
      return prev.filter((post) => post.id !== id);
    });
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home posts={posts} onDelete={deletePost} />}
        />
        <Route path="/post/:id" element={<PostDetails posts={posts} />} />
        <Route path="/add-post" element={<AddPost onAddPost={addPost} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
