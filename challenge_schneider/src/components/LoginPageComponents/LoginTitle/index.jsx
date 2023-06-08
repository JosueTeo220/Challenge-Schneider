import React from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "./LoginTitle.module.css";

export default function LoginTitle() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 },
  });

  const slideIn = useSpring({
    from: { transform: "translateX(-100px)", opacity: 0 },
    to: { transform: "translateX(0)", opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn}>
      <p className={styles.title}>
        <span>Schneider</span>EcoConnect
      </p>
    </animated.div>
  );
}
