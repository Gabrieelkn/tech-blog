import styles from "./styles.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">Gabriel blog</Link>
    </header>
  );
}
