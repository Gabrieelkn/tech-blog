import styles from "./styles.module.css";

export default function Tags({ article }) {
  return (
    <div className={styles.tags}>
      {article.tags.map((tag, index) => {
        return (
          <p className={styles.tag} key={index}>
            {tag}
          </p>
        );
      })}
    </div>
  );
}
