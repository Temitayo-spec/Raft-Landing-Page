'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  padding: 8.25rem 0 10rem;
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6.25rem;
`;

export const HeaderText = styled.h2`
  max-width: 56rem;
  font-size: 6rem;
  font-weight: 400;
`;

export const Accordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid #3d3d3d;
`;

export const Question = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

export const Answer = styled(motion.div)`
  color: var(--link-color);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
`;
