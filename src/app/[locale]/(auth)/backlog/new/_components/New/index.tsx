import NewProductBacklogItemForm from "@/components/NewProductBacklogItemForm";
import styles from "./style.module.css";

export default function New(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <NewProductBacklogItemForm />
    </div>
  );
}
