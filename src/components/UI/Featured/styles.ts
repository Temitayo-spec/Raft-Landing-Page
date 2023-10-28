'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.main``;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6.25rem auto 0;
  max-width: 1440px;
  width: 90%;

  h2 {
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 6.5rem;
  }
`;

export const ImageContainer = styled.div`
  max-width: 85rem;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 35rem;

  img {
    object-fit: cover;
    border-radius: 0.75rem;
  }
`;

export const ParallaxImages = styled.div`
  position: relative;
  max-width: 53.7rem;
  margin: 3rem auto 0;
`;
