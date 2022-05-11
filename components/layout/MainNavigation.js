import Link from "next/link";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Travel Journal</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Posts</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add New Travel Journal</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
