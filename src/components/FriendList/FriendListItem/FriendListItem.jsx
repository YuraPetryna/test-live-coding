import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.item}>
    <span
      className={`${styles.status} ${
        isOnline ? styles.online : styles.offline
      }`}
    ></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </div>
);
export default FriendListItem;
