import PostCard from "../PostCard/PostCard.jsx";
import s from "./PostList.module.css";
export const PostList = ({ posts, onDelete }) => {
  if (!posts.length) return <p>Поки що немає постів.</p>;

  return (
    <div className={s.postList}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default PostList;
