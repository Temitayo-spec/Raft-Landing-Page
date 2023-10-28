'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 1rem 0;
  border-bottom: 0.5px solid #3d3d3d;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div``;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 3.75rem;
  position: relative;

  a {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const AbsoluteLinks = styled(Link)`
  position: absolute;
  top: 40px;
  color: var(--link-color);
  font-size: 1rem;
  font-weight: 400;
`;

export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    span {
      color: var(--white);
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;
