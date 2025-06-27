import { useParams, Link } from "react-router-dom";
import s from "./PostDetails.module.css";
const PostDetails = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) return <p className={s.notFound}>Пост не знайдено</p>;

  return (
    <div className={s.container}>
      <h1 className={s.title}>{post.title}</h1>
      <p className={s.date}>{post.date}</p>
      <p className={s.text}>{post.text}</p>
      <Link to="/" className={s.back}>
        ← Назад
      </Link>
    </div>
  );
};

export default PostDetails;
