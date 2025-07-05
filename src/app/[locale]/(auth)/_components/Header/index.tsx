"use client";
import { useClerk, useUser } from "@clerk/nextjs";
import { Menu, MenuButton, MenuDivider, MenuItem } from "@szhsin/react-menu";
import Image from "next/image";
import Spacer from "react-spacer";
import { Link } from "@/i18n/navigation";
import styles from "./style.module.css";

export default function Header(): React.JSX.Element {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logoImageContainer}>
          <Image alt="Stride" fill={true} quality={100} src="/logo.png" />
        </div>
      </Link>
      <Spacer grow={1} />
      {user ? (
        <Menu
          menuButton={
            <MenuButton className={styles.userImageButton}>
              <Image
                alt={user.username ?? ""}
                fill={true}
                src={user.imageUrl}
              />
            </MenuButton>
          }
          align="end"
          className={styles.menu}
          gap={6}
          transition={true}
        >
          <MenuItem>Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => void signOut()}>サインアウト</MenuItem>
        </Menu>
      ) : null}
    </header>
  );
}
