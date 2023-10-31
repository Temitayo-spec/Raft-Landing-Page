'use client';
import Image from 'next/image';
import ic_import from '../../../../public/svgs/ic_import.svg';

import { Wrapper, Inner, SecondOverlay } from './styles';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = ({
  setComplete,
}: {
  setComplete: Dispatch<SetStateAction<boolean>>;
}) => {
  const word = ['R', 'a', 'f', 't'];

  const spans = useRef<any>([]); // Create a ref to store the span elements
  const imageRef = useRef(null);
  const secondOverlayRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(imageRef.current, {
      rotate: '360deg',
      ease: 'back.out(1.7)', // Easing function
      duration: 1.4,
    });
    tl.to(imageRef.current, {
      y: '-100%', // Move the spans up
      ease: 'back.out(1.7)', // Easing function
    });
    // Iterate through the span elements and animate them
    tl.to(spans.current, {
      y: '-100%', // Move the spans up
      ease: 'back.out(1.7)', // Easing function
      duration: 1.4, // Animation duration
      stagger: 0.05, // Stagger duration (0.2 seconds delay between each span)
    });
    // Animate both the wrapper and the second overlay almost at the same time
    tl.to([wrapperRef.current, secondOverlayRef.current], {
      scaleY: 0,
      transformOrigin: 'top',
      ease: 'back.out(1.7)',
      duration: 1,
      stagger: 0.2,
      onComplete: () => {
        setComplete(true);
      },
    });

    // Apply a small delay to one of the elements (adjust as needed)
    tl.to(secondOverlayRef.current, {
      scaleY: 0,
      transformOrigin: 'top',
      ease: [0.83, 0, 0.17, 1] as any,
      duration: 1,
      delay: -0.9, // Adjust this delay as needed to fine-tune the timing
    });
  }, [setComplete]);

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Inner>
          <Image ref={imageRef} src={ic_import} alt="import icon" />
          <div>
            {word.map((t, i) => (
              <div
                key={i}
                ref={(element) => (spans.current[i] = element)} // Assign ref to each span
              >
                {t}
              </div>
            ))}
          </div>
        </Inner>
      </Wrapper>
      <SecondOverlay ref={secondOverlayRef}></SecondOverlay>
    </>
  );
};

export default Preloader;
