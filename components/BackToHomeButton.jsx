import Link from "next/link";
import styles from "./styles.module.css";
import { IoChevronBackOutline } from "react-icons/io5";

export default function BackToHomeButton() {
  return (
    <Link className={styles.back_to_home_button} href="/">
      <IoChevronBackOutline className={styles.back_arrow} />{" "}
      <span>Back home</span>
    </Link>
  );
}
