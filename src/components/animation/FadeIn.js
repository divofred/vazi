// components/FadeIn.js

import { motion } from "framer-motion";

const FadeIn = ({ children, direction = "right", duration = 1 }) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const transition = {
    duration,
    ease: [0.4, 0, 0.2, 1], // cubic bezier values for a smoother ease-in-out
  };

  // Set initial and animate properties based on the specified direction
  if (direction === "right") {
    initial.x = "100%";
    animate.x = 0;
  } else if (direction === "left") {
    initial.x = "-100%";
    animate.x = 0;
  } else if (direction === "up") {
    initial.y = "100%";
    animate.y = 0;
  } else if (direction === "down") {
    initial.y = "-100%";
    animate.y = 0;
  }

  return (
    <motion.div initial={initial} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
};

export default FadeIn;
