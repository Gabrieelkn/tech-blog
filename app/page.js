import Image from "next/image";
import styles from "./styles.module.css";
import LastPosts from "@/components/LastPosts";

export default function Home() {
  return (
    <div>
      <LastPosts />
    </div>
  );
}
