import { Link } from "react-router-dom";
import PostList from "../../components/PostList/PostList.jsx";
import s from "./Home.module.css";
const Home = ({ posts, onDelete }) => {
  return (
    <div className={s.container}>
      <h1>Блог</h1>
      <Link to="/add-post" className={s.addPostLink}>
        + Новий пост
      </Link>
      <PostList posts={posts} onDelete={onDelete} />
    </div>
  );
};

export default Home;
