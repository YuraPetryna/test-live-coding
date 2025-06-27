import { Link } from "react-router-dom";
import s from "./PostCard.module.css";
const PostCard = ({ post, onDelete }) => {
  const { id, title, text, date } = post;

  return (
    <div className={s.card}>
      <Link to={`/post/${id}`} className={s.fullCardLink}>
        <h2>{title}</h2>
        <p>{text.slice(0, 200)}...</p>
        <small>{date}</small>
      </Link>
      <div className={s.actions}>
        <button onClick={() => onDelete(id)} className={s.deleteBtn}>
          Видалити
        </button>
      </div>
    </div>
  );
};

export default PostCard;
