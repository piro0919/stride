import ReactSelectSearch, {
  type SelectSearchProps as ReactSelectSearchProps,
} from "react-select-search";
import styles from "./style.module.css";

export type SelectSearchProps = Pick<ReactSelectSearchProps, "options">;

export default function SelectSearch({
  options,
}: SelectSearchProps): React.JSX.Element {
  return (
    <div className={styles.container}>
      <ReactSelectSearch
        onBlur={() => {}}
        onFocus={() => {}}
        options={options}
        value=""
      />
    </div>
  );
}
