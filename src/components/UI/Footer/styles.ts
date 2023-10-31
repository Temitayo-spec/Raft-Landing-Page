'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.footer`
  padding-bottom: 3.5rem;
`;

export const Inner = styled.main`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
`;

export const FooterLogo = styled.div``;

export const FooterMainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.75rem 0 3.25rem;
  border-top: 0.0625rem solid #3d3d3d;
  gap: 3.25rem;
`;

export const FooterMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const QRContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  padding: 1.25rem 1rem;
  gap: 0.75rem;
  border-radius: 0.5rem;
  border: 1px dashed var(--White, #fff);
`;

export const QRImageCtn = styled.div``;

export const TextCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    max-width: 19.5625rem;
    font-size: 1.25rem;
    font-weight: 400;
  }
`;

export const IconCtn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const FooterNavigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const GridColumn = styled.div`
  display: flex;
  min-width: 12.5rem;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  li {
    color: #efefef;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      background-color: #efefef;
      left: 0;
      bottom: -5px;
      transform: scaleX(0);
      transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
      transform-origin: center;
    }

    &:hover {
      &::after {
        width: 100%;
        transform: scaleX(1);
      }
    }
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Translator = styled.div`
  display: flex;
  align-items: center;
  gap: 1.12rem;
  cursor: pointer;
`;

export const CopyRight = styled.div`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
`;
