import { closestCenter, DndContext, DragOverlay } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef, useState } from "react";
import PbiItem from "../PbiItem";
import styles from "./style.module.css";

export type VirtualPbiListProps = {
  items: { id: string; title: string }[];
  onReorder: (newOrder: string[]) => void;
};

export default function VirtualPbiList({
  items,
  onReorder,
}: VirtualPbiListProps): React.JSX.Element {
  const [activeId, setActiveId] = useState<null | string>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtualizer({
    count: items.length,
    // アイテムの高さ（padding + margin込み）
    estimateSize: () => 29,
    getScrollElement: () => parentRef.current,
    overscan: 5,
  });

  return (
    <DndContext
      onDragEnd={({ active, over }) => {
        setActiveId(null);

        if (over && active.id !== over.id) {
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          const newOrder = arrayMove(
            items.map((i) => i.id),
            oldIndex,
            newIndex,
          );

          onReorder(newOrder);
        }
      }}
      onDragStart={({ active }) => {
        setActiveId(active.id as string);
      }}
      collisionDetection={closestCenter}
    >
      <div className={styles.wrapper} ref={parentRef}>
        <SortableContext
          items={items.map((i) => i.id)}
          strategy={verticalListSortingStrategy}
        >
          <div
            className={styles.scroller}
            style={{ height: `${rowVirtualizer.getTotalSize()}px` }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const item = items[virtualRow.index];

              return (
                <div
                  className={styles.item}
                  key={item.id}
                  style={{ transform: `translateY(${virtualRow.start}px)` }}
                >
                  <PbiItem id={item.id} title={item.title} />
                </div>
              );
            })}
          </div>
        </SortableContext>
        {/* ドラッグ中のオーバーレイ表示 */}
        <DragOverlay>
          {activeId ? (
            <PbiItem
              id={activeId}
              isDragging={true}
              title={items.find((item) => item.id === activeId)?.title || ""}
            />
          ) : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
}
