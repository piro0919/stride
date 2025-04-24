import { Link } from "@/i18n/navigation";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import Spacer from "react-spacer";
import styles from "./style.module.css";

export default function Header(): React.JSX.Element {
  return (
    <header className={styles.container}>
      <div className={styles.logoWrapper}>
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
      <Menu
        menuButton={
          <MenuButton className={styles.menuButton}>
            <FeatherIcon color="#fff" icon="plus" size={18} />
            <span>作成</span>
          </MenuButton>
        }
        align="end"
        direction="bottom"
        gap={4}
        theming="dark"
        transition={true}
      >
        <MenuItem>プロダクトバックログアイテムを作成</MenuItem>
        <MenuItem>スプリントを作成</MenuItem>
        <MenuItem>エピックを作成</MenuItem>
      </Menu>
      <div className={styles.userIconContainer}>
        <Image alt="" height={32} src="/sample-user-icon.jpg" width={32} />
      </div>
    </header>
  );
}
