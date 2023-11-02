'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 8.56rem;
  background: var(--emerald);
`;

export const Inner = styled.div`
  display: flex;
  padding: 6.25rem 0;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  text-align: center;
  max-width: 48.5rem;
  margin: 0 auto 6.5rem;
  h1 {
    color: var(--Background, #070606);
    font-size: 4.75rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
    h1 {
      font-size: 2rem;
    }
  }
`;

export const TestimonialWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Testimonial = styled.div`
  display: flex;
  max-width: 26rem;
  padding: 1.5rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  border-left: 2px solid var(--Background, #070606);

  @media (max-width: 768px) {
    border-left: none;
  }
`;

export const Testimony = styled.p`
  color: #292929;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  width: 100%;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  gap: 0.5rem;
  width: 100%;

  h3 {
    color: var(--Background, #070606);
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5rem;
  }

  p {
    color: #292929;
    font-size: 0.875rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    gap: 0.25rem;

    h3 {
      font-size: 1.25rem;
      line-height: normal;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

export const Avatar = styled.div`
  margin-left: auto;

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const PaginationButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
  margin-top: 2.5rem;
`;

export const Previous = styled.div`
  img {
    object-fit: contain;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Next = styled.div`
  img {
    object-fit: contain;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
