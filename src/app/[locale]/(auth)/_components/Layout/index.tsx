import { type ReactNode } from "react";
import Header from "../Header";
import Nav from "../Nav";
import styles from "./style.module.css";

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <aside className={styles.aside}>
        <Nav />
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
