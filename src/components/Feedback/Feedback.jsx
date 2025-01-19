import styles from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.container}>
      <p className={styles.stat}>Good: {good}</p>
      <p className={styles.stat}>Neutral: {neutral}</p>
      <p className={styles.stat}>Bad: {bad}</p>
      <p className={`${styles.stat} ${styles.statTotal}`}>Total: {total}</p>
      <p className={`${styles.stat} ${styles.positive}`}>
        Positive Feedback: {positivePercentage}%
      </p>
    </div>
  );
};

export default Feedback;
