import styles from "./styles.module.scss";
import { createClient } from "@/utils/supabaseServer";
import PostCard from "./PostCard";

export default async function LastPosts() {
  const supabase = createClient();
  let { data: articles, error } = await supabase.from("articles").select("*");

  return (
    <div>
      <h1>Last posts</h1>
      <div className={styles.posts_wrapper}>
        {articles.map((article) => {
          return <PostCard article={article} key={article.id} />;
        })}
      </div>
    </div>
  );
}
