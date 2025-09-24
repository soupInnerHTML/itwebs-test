import React from 'react'
import {motion} from 'framer-motion'
import {IAnimationProps} from "./types";

export const Animation: React.FC<IAnimationProps> = ({index, children, className}) => {
  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: index * 0.1, duration: 0.5}}
      className={className}
    >
      {children}
    </motion.div>
  );
};