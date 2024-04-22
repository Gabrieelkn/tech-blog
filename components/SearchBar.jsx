import styles from "./styles.module.css";
import { useEffect, useState } from "react";

export default function SearchBar({ articles, setFilteredArticles }) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    const filtered = articles.filter((article) => {
      const articleTags = article.tags.map((tag) => tag.toLowerCase());
      const hasMatchingTitle =
        !query || article.title.toLowerCase().includes(query.toLowerCase());
      const hasMatchingTag = articleTags.some((tag) =>
        tag.includes(query.toLowerCase())
      );
      return hasMatchingTitle || hasMatchingTag;
    });
    setFilteredArticles(filtered);
  }, [articles, query, setFilteredArticles]);

  return (
    <div className={styles.search}>
      <input
        placeholder="Quick search by title or post tags..."
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
