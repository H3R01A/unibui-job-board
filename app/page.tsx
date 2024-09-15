//import styles from "./page.module.css";
import NavLink from '@/components/nav-link';

export default function Home() {
  return (
    <div className="min-h-screen bg-#0a0a0a py-8 px-4 flex flex-col gap-5 items-center">
      <h1 className="text-3xl font-bold underline">Welcome to Job Board 2.0</h1>
      <NavLink href={'/jobs'}>
        Click to Find Where Your Next Journey Begins
      </NavLink>
    </div>
  );
}
