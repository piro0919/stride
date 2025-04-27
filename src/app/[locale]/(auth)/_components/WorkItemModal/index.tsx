import DraggableModal, {
  type DraggableModalProps,
} from "@/components/DraggableModal";
import React from "react";

export type WorkItemModalProps = Pick<
  DraggableModalProps,
  "handleClose" | "isOpen"
>;

export default function WorkItemModal({
  handleClose,
  isOpen,
}: WorkItemModalProps): React.JSX.Element {
  return (
    <DraggableModal
      handleClose={handleClose}
      heading="作業タスク"
      isOpen={isOpen}
    >
      <form>
        <input placeholder="タイトルを追加" />
      </form>
    </DraggableModal>
  );
}
