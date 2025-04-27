"use client";
import { usePathname } from "@/i18n/navigation";
import FeatherIcon from "feather-icons-react";
import { AnimatePresence, motion } from "motion/react";
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
  const [width, setWidth] = useLocalStorage("width", 480);
  const isBacklogRoot = typeof segment === "string" || pathname === "/backlog";

  useEffect(() => {
    if (isBacklogRoot || width <= bounds.width) {
      return;
    }

    setWidth(bounds.width);
  }, [bounds.width, isBacklogRoot, setWidth, width]);

  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.inner}>{children}</div>
      <AnimatePresence>
        {!isBacklogRoot ? (
          <motion.div
            animate={{ x: 0 }}
            className={styles.resizableBoxContainer}
            exit={{ x: width }}
            initial={{ x: width }}
            transition={{ type: "tween" }}
          >
            <ResizableBox
              handle={
                <div className={styles.handle}>
                  <FeatherIcon
                    className={styles.icon}
                    color="#fff"
                    icon="more-vertical"
                    size={16}
                  />
                </div>
              }
              onResizeStop={(_, data) => {
                setWidth(data.size.width);
              }}
              axis="x"
              className={styles.resizableBox}
              maxConstraints={[bounds.width, 0]}
              minConstraints={[10, 0]}
              resizeHandles={["w"]}
              width={width}
            >
              <div className={styles.detailContainer}>{detail}</div>
            </ResizableBox>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
