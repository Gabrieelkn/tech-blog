import styles from "./styles.module.css";

export default function SearchBar() {
  return (
    <div className={styles.search}>
      <input placeholder="Quick search..." type="text" />
      <button type="submit">Go</button>
    </div>
  );
}
