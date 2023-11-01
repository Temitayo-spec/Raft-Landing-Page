import Image from 'next/image';
import { Wrapper, Inner, Pill, HeroTextContainer } from './styles';
import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import { GetStartedButton } from '@/components';
import MaskText from '@/components/Common/MaskText';

const HeroSection = () => {
  const phrases = ['Building the future of', 'banking.'];
  const paragraphPhrases = [
    "Experience the future of banking with RAFT. We're here to",
    'empower your financial journey.',
  ];
  return (
    <Wrapper>
      <Inner>
        <Pill>
          <span>Introducing Raft cards</span>
          <Image src={ic_chevron_right} alt="chevron-right" />
        </Pill>
        <HeroTextContainer>
          <MaskText phrases={phrases} tag="h1" />
          <MaskText phrases={paragraphPhrases} tag="p" />
        </HeroTextContainer>
        <GetStartedButton padding="1rem 2rem" />
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
