"use client";
import { useCallback, useState } from "react";
import VirtualPbiList from "../VirtualPbiList";
import styles from "./style.module.css";

export default function Backlog(): React.JSX.Element {
  const [items, setItems] = useState(
    Array(1000)
      .fill(undefined)
      .map((_, index) => ({
        id: index.toString(),
        title: `${index + 1}: プロジェクトの一覧を見ることができる`,
      })),
  );
  const handleReorder = useCallback(
    (newOrder: string[]) => {
      const reorderedItems = newOrder.map(
        (id) => items.find((item) => item.id === id)!,
      );

      setItems(reorderedItems);
    },
    [items],
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>aaa</div>
      <div className={styles.listContainer}>
        <VirtualPbiList items={items} onReorder={handleReorder} />
      </div>
    </div>
  );
}
