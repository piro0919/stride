"use client";
import { ProgressProvider } from "@bprogress/next/app";
import clsx from "clsx";
import { type ReactNode, useState } from "react";
import { useBoolean } from "usehooks-ts";
import Header from "../Header";
import Nav from "../Nav";
import ProductBacklogModal from "../ProductBacklogModal";
import WorkItemModal from "../WorkItemModal";
import styles from "./style.module.css";

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  const [modalContent, setModalContent] = useState<
    "" | "epic" | "productBacklogItem" | "workItem"
  >("");
  const { toggle: toggleIsShrink, value: isShrink } = useBoolean(false);

  return (
    <ProgressProvider color="#4493f8" height="1px" shallowRouting={true}>
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
        isOpen={modalContent === "productBacklogItem"}
      />
      <WorkItemModal
        handleClose={() => setModalContent("")}
        isOpen={modalContent === "workItem"}
      />
    </ProgressProvider>
  );
}
