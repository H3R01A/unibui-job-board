//import styles from "./page.module.css";
import NavLink from '@/components/nav-link';

export default function Home() {
  return (
    <div className="flex flex-col flex-wrap content-center">
      <div>
        <h1 className="text-3xl font-bold underline">
          Welcome to Job Board 2.0
        </h1>
      </div>
      <div>
        <NavLink href={'/jobs'}>
          Click to Find Where Your Next Journey Begins
        </NavLink>
      </div>
    </div>
  );
}
