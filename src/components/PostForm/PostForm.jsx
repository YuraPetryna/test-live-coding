import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import s from "./PostForm.module.css";
import toast from "react-hot-toast";
const PostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !text) {
      setError("Всі поля обов’язкові");
      toast.error("Заповніть всі поля");
      return;
    }

    const newPost = {
      id: Date.now().toString(),
      title,
      text,
      date: new Date().toLocaleString("uk-UA"),
    };

    onAddPost(newPost);
    toast.success("Пост створено успішно!");
    navigate("/");
  };

  return (
    <div className={s.container}>
      {" "}
      <form onSubmit={handleSubmit} className={s.form}>
        <h2>Новий пост</h2>
        {error && <p className={s.error}>{error}</p>}
        <input
          className={s.input}
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className={s.input}
          placeholder="Текст поста"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={s.btn} type="submit">
          Створити
        </button>
      </form>
      <Link to="/" className={s.back}>
        ← Назад
      </Link>
    </div>
  );
};

export default PostForm;
