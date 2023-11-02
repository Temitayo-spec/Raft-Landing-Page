'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  background: var(--Background);
  color: var(--white);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Inner = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
  padding: 0 2em;
  overflow: hidden;
  height: 20em;

  img {
    width: 25em;
    height: 25em;
  }

  div {
    overflow: hidden;
    display: flex;
    align-items: center;

    div {
      font-weight: 600;
      font-size: 25em;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    height: 13rem;
    img {
      width: 7rem;
      height: 100%;
    }

    div {
      div {
        font-size: 6rem;
      }
    }
  }
`;

export const SecondOverlay = styled.div`
  background: var(--emerald);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9990;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
