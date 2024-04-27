import styles from "./styles.module.css";
import Posts from "@/components/Posts";
import { createClient } from "@/utils/supabaseServer";

export default async function Home() {
  const supabase = createClient();
  let { data: articlesData, error } = await supabase
    .from("articles")
    .select("*");
  const articles = articlesData.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB - dateA;
  });

  return (
    <div className={styles.home}>
      <Posts articles={articles} />
    </div>
  );
}
