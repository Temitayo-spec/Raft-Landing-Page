import Image from 'next/image';
import { Wrapper, Inner, Pill, HeroTextContainer } from './styles';
import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import { GetStartedButton } from '@/components';

const HeroSection = () => {
  return (
    <Wrapper>
      <Inner>
        <Pill>
          <span>Introducing Raft cards</span>
          <Image src={ic_chevron_right} alt="chevron-right" />
        </Pill>
        <HeroTextContainer>
          <h1>Building the future of banking.</h1>
          <p>
            Experience the future of banking with RAFT. We&apos;re here to
            empower your financial journey.
          </p>
        </HeroTextContainer>
        <GetStartedButton padding="1rem 2rem" />
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
