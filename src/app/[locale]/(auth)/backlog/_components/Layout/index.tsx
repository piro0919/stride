"use client";
import { usePathname } from "@/i18n/navigation";
import FeatherIcon from "feather-icons-react";
import { useSelectedLayoutSegment } from "next/navigation";
import { type ReactNode, useEffect } from "react";
import { ResizableBox } from "react-resizable";
import useMeasure from "react-use-measure";
import { useLocalStorage } from "usehooks-ts";
import styles from "./style.module.css";

export type LayoutProps = {
  children: ReactNode;
  detail: ReactNode;
};

export default function Layout({
  children,
  detail,
}: LayoutProps): React.JSX.Element {
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();
  const [ref, bounds] = useMeasure();
  const [width, setWidth] = useLocalStorage("width", bounds.width);

  useEffect(() => {
    if (width <= bounds.width) {
      return;
    }

    setWidth(bounds.width / 2);
  }, [bounds.width, setWidth, width]);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.inner}>{children}</div>
      {
        // TODO: 実装悪い！！
        typeof segment !== "string" && pathname !== "/backlog" ? (
          <ResizableBox
            handle={
              <div className={styles.handle}>
                <FeatherIcon color="#fff" icon="code" size={15} />
              </div>
            }
            onResizeStop={(_, data) => {
              setWidth(data.size.width);
            }}
            axis="x"
            className={styles.detailContainer}
            maxConstraints={[bounds.width, 0]}
            minConstraints={[15, 0]}
            resizeHandles={["w"]}
            width={width}
          >
            {detail}
          </ResizableBox>
        ) : null
      }
    </div>
  );
}
