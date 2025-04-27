import { Link } from "@/i18n/navigation";
import { useSortable } from "@dnd-kit/sortable";
import clsx from "clsx";
import FeatherIcon from "feather-icons-react";
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
    <div
      className={clsx(styles.container, {
        [styles.dragging]: isDragging,
      })}
      style={{
        transform: transform ? `translateY(${transform.y}px)` : undefined,
      }}
      ref={setNodeRef}
    >
      <div {...attributes} {...listeners} className={styles.iconContainer}>
        <FeatherIcon color="#fff" icon="align-justify" size={18} />
      </div>
      <Link className={styles.link} href={`/backlog/${id}`}>
        {title}
      </Link>
    </div>
  );
}
