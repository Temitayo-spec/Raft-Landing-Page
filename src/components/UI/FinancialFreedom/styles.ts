'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 11.25rem;
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto 8.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 56rem;
  margin: 0 auto 7.75rem;
  text-align: center;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }
`;

export const BannerCtn = styled.div`
  margin-bottom: 5rem;
  width: 100%;
  position: relative;
  width: 100%;
  height: 38.4375rem;

  img {
    border-radius: 0.75rem;
    object-fit: cover;
  }
`;

export const Edges = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

export const Edge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;

  p {
    max-width: 26rem;
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const BriefNote = styled.div`
  height: 54.75rem;
  padding: 8.25rem 4.5rem;
  background: var(--green);

  p {
    color: var(--Background, #070606);
    font-size: 8rem;
    font-weight: 400;
    max-width: 1440px;
  }
`;
