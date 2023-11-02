'use client';
import React, { useRef, useState } from 'react';
import { AnimatePresence, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  Answer,
  Inner,
  Question,
  Wrapper,
} from './styles';
import Image from 'next/image';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  animate,
  desktopHeaderPhrase,
  faqData,
  mobileHeaderPhrase,
} from './constants';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const accordionRef = useRef(null);
  const isInView = useInView(accordionRef, {
    once: true,
    margin: '-10%',
    amount: 0.4,
  });

  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        {isMobile ? (
          <MaskText phrases={mobileHeaderPhrase} tag="h1" />
        ) : (
          <MaskText phrases={desktopHeaderPhrase} tag="h1" />
        )}
        <Accordion ref={accordionRef}>
          {faqData.map((item, index) => (
            <AccordionItem
              variants={animate}
              initial="initial"
              animate={isInView ? 'open' : ''}
              custom={index}
              key={index}
            >
              <Question onClick={() => toggleItem(index)}>
                {item.question}
                <Image src={ic_chevron_down} alt="cheveron down" />
              </Question>
              <AnimatePresence>
                {openItem === index && (
                  <Answer
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {item.answer}
                  </Answer>
                )}
              </AnimatePresence>
            </AccordionItem>
          ))}
        </Accordion>
      </Inner>
    </Wrapper>
  );
};

export default FAQ;
