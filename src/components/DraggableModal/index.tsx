import NoSSR from "@mpth/react-no-ssr";
import clsx from "clsx";
import FeatherIcon from "feather-icons-react";
import { motion } from "motion/react";
import React, { type ReactNode, useRef } from "react";
import Draggable from "react-draggable";
import Spacer from "react-spacer";
import useMeasure from "react-use-measure";
import { useBoolean, useWindowSize } from "usehooks-ts";
import styles from "./style.module.css";

export type DraggableModalProps = {
  children: ReactNode;
  handleClose: () => void;
  heading: string;
  isOpen: boolean;
};

export default function DraggableModal({
  children,
  handleClose,
  heading,
  isOpen,
}: DraggableModalProps): React.JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nodeRef = useRef<any>(null);
  const { height, width } = useWindowSize();
  const [ref, bounds] = useMeasure();
  const { toggle: toggleIsShrink, value: isShrink } = useBoolean(false);

  return (
    <motion.div
      animate={
        isOpen
          ? {
              display: "block",
              opacity: 1,
            }
          : {
              opacity: 0,
              transitionEnd: {
                display: "none",
              },
            }
      }
      className={styles.overlray}
      initial={{ opacity: 0 }}
    >
      <NoSSR>
        <Draggable
          bounds={{
            bottom: height - bounds.height,
            left: 0,
            right: width - bounds.width,
            top: 0,
          }}
          defaultClassName={styles.inner}
          defaultPosition={{ x: 0, y: height - bounds.height }}
          handle={`.${styles.header}`}
          key={String(!bounds.height)}
          nodeRef={nodeRef}
        >
          <div className={styles.inner} ref={nodeRef}>
            <div ref={ref}>
              <header className={styles.header}>
                <h1 className={styles.h1}>{heading}</h1>
                <Spacer grow={1} />
                <button onClick={() => toggleIsShrink()}>
                  <FeatherIcon
                    color="#fff"
                    icon={isShrink ? "square" : "minus"}
                    size={18}
                  />
                </button>
                <button onClick={() => handleClose()}>
                  <FeatherIcon color="#fff" icon="x" size={18} />
                </button>
              </header>
              <div
                className={clsx(styles.content, {
                  [styles.shrink]: isShrink,
                })}
              >
                {children}
              </div>
            </div>
          </div>
        </Draggable>
      </NoSSR>
    </motion.div>
  );
}
