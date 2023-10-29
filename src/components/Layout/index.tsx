'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import StyledComponentsRegistry from '../../../libs/registry';
import { GlobalStyles } from './GlobalStyles';
import { Header } from '..';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis
      root
      easing={(t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
    >
      <StyledComponentsRegistry>
        <GlobalStyles />
        <Header />
        {children}
      </StyledComponentsRegistry>
    </ReactLenis>
  );
};

export default Layout;
