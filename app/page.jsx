import styles from "./styles.module.css";
import Posts from "@/components/Posts";
import { createClient } from "@/utils/supabaseServer";

export default async function Home() {
  const supabase = createClient();
  let { data: articles, error } = await supabase.from("articles").select("*");

  return (
    <div className={styles.home}>
      <Posts articles={articles} />
    </div>
  );
}
