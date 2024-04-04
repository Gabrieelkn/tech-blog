"use client";
import styles from "./styles.module.scss";
import PostCard from "./PostCard";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function Posts({ articles }) {
  const [filteredArticles, setFilteredArticles] = useState(null);
  const articlesToRender = filteredArticles ? filteredArticles : articles;

  return (
    <>
      <SearchBar
        articles={articles}
        setFilteredArticles={setFilteredArticles}
      />
      <div className={styles.posts_wrapper}>
        {articlesToRender.map((article) => {
          return <PostCard article={article} key={article.id} />;
        })}
      </div>
    </>
  );
}
