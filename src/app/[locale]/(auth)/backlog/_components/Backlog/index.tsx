"use client";
import { useState } from "react";
import VirtualPbiList from "../VirtualPbiList";
import styles from "./style.module.css";

export default function Backlog(): React.JSX.Element {
  const [items, setItems] = useState(
    Array(1000)
      .fill(undefined)
      .map((_, index) => ({
        id: index.toString(),
        title: "The State of Web Dev AI 2025 survey results are here",
      })),
  );
  const handleReorder = (newOrder: string[]): void => {
    const reorderedItems = newOrder.map(
      (id) => items.find((item) => item.id === id)!,
    );

    setItems(reorderedItems);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>aaa</div>
      <div className={styles.listContainer}>
        <VirtualPbiList items={items} onReorder={handleReorder} />
      </div>
    </div>
  );
}
