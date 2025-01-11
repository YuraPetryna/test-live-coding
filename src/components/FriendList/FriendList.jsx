import FriendListItem from "./FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </ul>
);
export default FriendList;
