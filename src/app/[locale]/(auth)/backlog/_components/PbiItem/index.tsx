import { Link } from "@/i18n/navigation";
import { useSortable } from "@dnd-kit/sortable";
import clsx from "clsx";
import styles from "./style.module.css";

export type PbiItemProps = {
  id: string;
  isDragging?: boolean;
  title: string;
};

export default function PbiItem({
  id,
  isDragging,
  title,
}: PbiItemProps): React.JSX.Element {
  const { attributes, listeners, setNodeRef, transform } = useSortable({ id });

  return (
    <Link href={`/backlog/${id}`} shallow={true}>
      <div
        className={clsx(styles.pbiItem, {
          [styles.dragging]: isDragging,
        })}
        style={{
          transform: transform ? `translateY(${transform.y}px)` : undefined,
        }}
        ref={setNodeRef}
        // {...attributes}
        // {...listeners}
      >
        {title}
      </div>
    </Link>
  );
}
