import Tags from "./Tags";
import styles from "./styles.module.css";
import Link from "next/link";

export default function PostCard({ article }) {
  return (
    <div className={styles.post_card} key={article.id}>
      <div>
        <h3>{article.title}</h3>
        <p>{article.date}</p>
        <Tags article={article} />
      </div>
      <p>{article.subtitle}</p>
      <Link className={styles.post_button} href={`posts/${article.id}`}>
        Read more
      </Link>
    </div>
  );
}
