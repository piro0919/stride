import DraggableModal, {
  type DraggableModalProps,
} from "@/components/DraggableModal";
import NewProductBacklogItemForm from "@/components/NewProductBacklogItemForm";
import React from "react";
import styles from "./style.module.css";

export type ProductBacklogModalProps = Pick<
  DraggableModalProps,
  "handleClose" | "isOpen"
>;

export default function ProductBacklogModal({
  handleClose,
  isOpen,
}: ProductBacklogModalProps): React.JSX.Element {
  return (
    <DraggableModal
      handleClose={handleClose}
      heading="プロダクトバックログアイテム"
      isOpen={isOpen}
    >
      <div className={styles.container}>
        <NewProductBacklogItemForm />
      </div>
    </DraggableModal>
  );
}
