'use client';
import { useState } from 'react';
import { Div, Word, Span, AbsoluteContainer } from './styles';

type AnimationProps = {
  rest: {
    y: number;
  };
  hover: {
    y: number;
    transition: {
      duration: number;
      ease: number[];
      type: string;
    };
  };
};

const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.005,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.005,
    },
  },
};

const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -25,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
  },
};

const letterAnimationTwo = {
  rest: {
    y: 25,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
  },
};

const AnimatedLink = ({ title }: { title: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatedWord
        title={title}
        animations={letterAnimation}
        isHovered={isHovered}
      />
      <AbsoluteContainer>
        <AnimatedWord
          title={title}
          animations={letterAnimationTwo}
          isHovered={isHovered}
        />
      </AbsoluteContainer>
    </Div>
  );
};

export default AnimatedLink;

const AnimatedWord = ({
  title,
  animations,
  isHovered,
}: {
  title: string;
  animations: AnimationProps;
  isHovered: boolean;
}) => (
  <Word
    variants={titleAnimation}
    initial="rest"
    animate={isHovered ? 'hover' : 'rest'}
  >
    {title.split('').map((char, i) =>
      char === ' ' ? (
        <Span key={i}>&nbsp;</Span>
      ) : (
        <Span variants={animations} key={i}>
          {char}
        </Span>
      )
    )}
  </Word>
);
