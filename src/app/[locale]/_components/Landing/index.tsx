import Image from "next/image";
import styles from "./style.module.css";

export default function Landing(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.logoImageContainer}>
        <Image alt="Stride" fill={true} quality={100} src="/logo.png" />
      </div>
    </div>
  );
}
