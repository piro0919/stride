import DraggableModal, {
  type DraggableModalProps,
} from "@/components/DraggableModal";
import React from "react";

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
      <form>
        <input placeholder="タイトルを追加" />
        <div>
          <label>ペルソナ</label>
          <select>
            <option>aaa</option>
          </select>
        </div>
        <div>
          <label>I want do</label>
          <input />
        </div>
        <div>
          <label>So that</label>
          <input />
        </div>
      </form>
    </DraggableModal>
  );
}
