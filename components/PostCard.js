import styles from "./styles.module.css";
import Link from "next/link";

export default function PostCard({ article, key }) {
  return (
    <div className={styles.post_card} key={key}>
      <div>
        <h3>{article.title}</h3>
        <p>{article.date}</p>
      </div>
      <p className={styles.post_subtitle}>{article.subtitle}</p>
      <Link className={styles.post_button} href={`posts/${article.id}`}>
        Read more
      </Link>
    </div>
  );
}
