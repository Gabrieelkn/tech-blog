import SearchBar from "./SearchBar";
import styles from "./styles.module.css";
import Image from "next/image";
import Logo from "@/public/logo.webp";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Link href="/">
          <Image src={Logo} alt="logo" width={60} height={60} />
        </Link>
        <SearchBar />
      </div>
    </header>
  );
}
