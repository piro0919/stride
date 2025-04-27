import { Link } from "@/i18n/navigation";
import {
  ControlledMenu,
  MenuButton,
  MenuItem,
  useHover,
  useMenuState,
} from "@szhsin/react-menu";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import { type RefObject, useRef } from "react";
import Spacer from "react-spacer";
import styles from "./style.module.css";

export type HeaderProps = {
  disabledNew: boolean;
  setModalContent: (modalContent: "productBacklogItem" | "workItem") => void;
  toggleIsShrink: () => void;
};

export default function Header({
  disabledNew,
  setModalContent,
  toggleIsShrink,
}: HeaderProps): React.JSX.Element {
  const ref = useRef<Element>(null);
  const [menuState, toggle] = useMenuState({ transition: true });
  const { anchorProps, hoverProps } = useHover(menuState.state, toggle);

  return (
    <>
      <header className={styles.container}>
        <div className={styles.logoWrapper}>
          <button onClick={() => toggleIsShrink()}>
            <FeatherIcon color="#fff" icon="menu" size={18} />
          </button>
          <Link href="/">
            <Image
              alt="Stride"
              height={220 / 9}
              quality={100}
              src="/brand-logo.webp"
              width={884 / 9}
            />
          </Link>
        </div>
        <Spacer grow={1} />
        <MenuButton
          {...anchorProps}
          className={styles.menuButton}
          disabled={disabledNew}
          ref={ref}
        >
          <FeatherIcon color="#fff" icon="plus" size={18} />
          <span>作成</span>
        </MenuButton>
        <div className={styles.userIconContainer}>
          <Image alt="" height={32} src="/sample-user-icon.jpg" width={32} />
        </div>
      </header>
      <ControlledMenu
        {...hoverProps}
        {...menuState}
        onItemClick={(e) => {
          setModalContent(e.value);
          toggle(false);
        }}
        align="end"
        anchorRef={ref as RefObject<Element>}
        direction="bottom"
        gap={4}
        menuClassName={styles.menu}
        theming="dark"
        transition={true}
      >
        <MenuItem className={styles.menuItem} value="productBacklogItem">
          プロダクトバックログアイテム
        </MenuItem>
        <MenuItem className={styles.menuItem} value="workItem">
          作業タスク
        </MenuItem>
        <MenuItem className={styles.menuItem} value="epic">
          エピック
        </MenuItem>
      </ControlledMenu>
    </>
  );
}
