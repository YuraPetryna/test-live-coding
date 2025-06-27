import { Link } from "react-router-dom";
import s from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>404</h1>
      <p className={s.message}>На жаль, сторінку не знайдено.</p>
      <Link to="/" className={s.link}>
        Повернутися на головну
      </Link>
    </div>
  );
};

export default NotFound;
