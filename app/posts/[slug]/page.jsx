import styles from "@/app/styles.module.css";
import { createClient } from "@/utils/supabaseServer";
import { MDXRemote } from "next-mdx-remote/rsc";
import { HighlightCode } from "@/utils/highlightCode";
import BackToHomeButton from "@/components/BackToHomeButton";
import Tags from "@/components/Tags";

export async function generateMetadata({ params }) {
  const supabase = createClient();
  let { data: article, error } = await supabase
    .from("articles")
    .select("*")
    .eq("id", params.slug);

  return {
    title: article[0].title,
    description: article[0].subtitle,
    keywords: article[0].tags,
  };
}

export default async function Page({ params }) {
  const supabase = createClient();
  let { data: article, error } = await supabase
    .from("articles")
    .select("*")
    .eq("id", params.slug);

  return article.map((a) => {
    return (
      <div className={styles.single_post} key={a.id}>
        <BackToHomeButton />
        <h2>{a.title}</h2>
        <h5>{a.date}</h5>
        <Tags article={a} />
        {<HighlightCode content={<MDXRemote source={a.content} />} />}
      </div>
    );
  });
}
