"use client";
import clsx from "clsx";
import { type ReactNode, useState } from "react";
import { useBoolean } from "usehooks-ts";
import Header from "../Header";
import Nav from "../Nav";
import ProductBacklogModal from "../ProductBacklogModal";
import styles from "./style.module.css";

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  const [modalContent, setModalContent] = useState<"" | "productBacklog">("");
  const { toggle: toggleIsShrink, value: isShrink } = useBoolean(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <Header
            disabledNew={!!modalContent}
            setModalContent={setModalContent}
            toggleIsShrink={toggleIsShrink}
          />
        </div>
        <aside className={styles.aside}>
          <Nav isShrink={isShrink} />
        </aside>
        <main
          className={clsx(styles.main, {
            [styles.shrink]: isShrink,
          })}
        >
          {children}
        </main>
      </div>
      <ProductBacklogModal
        handleClose={() => setModalContent("")}
        isOpen={modalContent === "productBacklog"}
      />
    </>
  );
}
