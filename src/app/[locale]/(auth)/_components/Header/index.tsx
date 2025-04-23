import { Link } from "@/i18n/navigation";
import Image from "next/image";
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
    </header>
  );
}
