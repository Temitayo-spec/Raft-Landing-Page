'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 8.56rem;
  background: var(--emerald);
`;

export const Inner = styled.div`
  display: flex;
  padding: 6.25rem 4.5rem;
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
`;

export const TestimonialWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

export const Testimonial = styled.div`
  display: flex;
  max-width: 26rem;
  padding: 1.5rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  border-left: 2px solid var(--Background, #070606);
`;

export const Testimony = styled.p`
  color: #292929;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
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
`;

export const Avatar = styled.div`
  margin-left: auto;
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
`;

export const Next = styled.div`
  img {
    object-fit: contain;
    cursor: pointer;
  }
`;
