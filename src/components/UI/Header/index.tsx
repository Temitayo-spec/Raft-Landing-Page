import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
} from './styles';
import raft_logo from '../../../../public/svgs/raft_logo.svg';
import Link from 'next/link';
import { GetStartedButton } from '@/components';
import AnimatedLink from '@/components/Common/AnimatedLink';

const Header = () => {
  const links = [
    {
      url: '/',
      linkTo: 'Solutions',
    },
    {
      url: '/',
      linkTo: 'Learn',
    },
    {
      url: '/',
      linkTo: 'About',
    },
  ];
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image src={raft_logo} alt="raft_logo" priority />
        </LogoContainer>
        <Nav>
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} />
          ))}
        </Nav>
        <CallToActions>
          <AnimatedLink title="Login" />
          <GetStartedButton padding="0.5rem 0.75rem" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
