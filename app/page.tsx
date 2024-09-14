import styles from "./page.module.css";
import NavLink from "@/components/nav-link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Welcome to Job Board 2.0</h1>
      <div>
          <NavLink href={'/jobs'}>Click to Find Where Your Next Journey Begins</NavLink>
        </div>
    </div>
  );
}
