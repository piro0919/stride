"use client";
import { Link, usePathname } from "@/i18n/navigation";
import clsx from "clsx";
import FeatherIcon from "feather-icons-react";
import styles from "./style.module.css";

export type NavProps = {
  isShrink: boolean;
};

export default function Nav({ isShrink }: NavProps): React.JSX.Element {
  const pathname = usePathname();

  return (
    <div className={clsx(styles.container, { [styles.shrink]: isShrink })}>
      <div className={styles.inner}>
        <nav className={styles.nav}>
          <Link
            className={clsx(styles.link, {
              [styles.active]: pathname === "/" || pathname === "/backlog",
            })}
            href="/backlog"
          >
            <FeatherIcon color="#fff" icon="list" size={18} />
            {/* <span>Product Backlog</span> */}
            <span>プロダクトバックログ</span>
          </Link>
          <Link
            className={clsx(styles.link, {
              [styles.active]: pathname === "/sprints",
            })}
            href="/sprints"
          >
            <FeatherIcon color="#fff" icon="activity" size={18} />
            {/* <span>Sprints</span> */}
            <span>スプリント</span>
          </Link>
          <Link
            className={clsx(styles.link, {
              [styles.active]: pathname === "/epics",
            })}
            href="/epics"
          >
            <FeatherIcon color="#fff" icon="layers" size={18} />
            {/* <span>Epics</span> */}
            <span>エピック</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
