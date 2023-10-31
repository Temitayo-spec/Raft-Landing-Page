'use client';
import { motion } from 'framer-motion';
import styled from 'styled-components';
const variant = {
  hidden: {
    width: '100%',
  },
  visible: {
    width: '0%',
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const RevealCover = () => {
  return (
    <Reveal
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.6, once: true }}
    ></Reveal>
  );
};

export default RevealCover;

const Reveal = styled(motion.div)`
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--Background);
  z-index: 10;

  @media (max-width: 599px) {
    border-radius: 0;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    border-radius: 0;
  }
`;
