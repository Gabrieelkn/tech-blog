import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export default function SearchBar({ articles, setFilteredArticles }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const filtered = articles.filter((article) => {
      if (!query || article.title.toLowerCase().includes(query.toLowerCase())) {
        return true;
      }
      return;
    });
    setFilteredArticles(filtered);
  }, [articles, query, setFilteredArticles]);

  return (
    <div className={styles.search}>
      <input
        placeholder="Quick search..."
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
