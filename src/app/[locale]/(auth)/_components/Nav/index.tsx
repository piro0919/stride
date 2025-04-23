"use client";
import { Link, usePathname } from "@/i18n/navigation";
import FeatherIcon from "feather-icons-react";
import styles from "./style.module.css";

export default function Nav(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link
          className={`${styles.link} ${pathname === "/" || pathname === "/backlog" ? styles.active : ""}`}
          href="/backlog"
        >
          <FeatherIcon color="#fff" icon="list" size={18} />
          <span>Product Backlog</span>
        </Link>
        <Link
          className={`${styles.link} ${pathname === "/sprints" ? styles.active : ""}`}
          href="/sprints"
        >
          <FeatherIcon color="#fff" icon="activity" size={18} />
          <span>Sprints</span>
        </Link>
        <Link
          className={`${styles.link} ${pathname === "/epics" ? styles.active : ""}`}
          href="/epics"
        >
          <FeatherIcon color="#fff" icon="layers" size={18} />
          <span>Epics</span>
        </Link>
      </nav>
    </div>
  );
}
