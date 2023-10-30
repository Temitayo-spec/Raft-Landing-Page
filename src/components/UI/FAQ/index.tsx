'use client';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  Answer,
  HeaderText,
  Inner,
  Question,
  Wrapper,
} from './styles';
import Image from 'next/image';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const faqData: FAQItem[] = [
    {
      question: 'How do I create an account with RAFT?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      question: 'How does RAFT ensure the security of my financial data?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      question: 'What types of transactions can I perform with RAFT?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      question: 'What benefits does RAFT offer for wealth management?',
      answer:
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
  ];

  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <Wrapper>
      <Inner>
        <HeaderText>Frequently asked questions</HeaderText>
        <Accordion>
          {faqData.map((item, index) => (
            <AccordionItem key={index}>
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
