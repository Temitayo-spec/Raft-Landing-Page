'use client';
import Image from 'next/image';
import ic_money_send from '../../../../public/svgs/ic_money_send.svg';
import ic_wallet_minus from '../../../../public/svgs/ic_wallet_minus.svg';
import future_banner from '../../../../public/images/future_banner.png';
import future_mobile_banner from '../../../../public/images/future_mobile_banner.png';
import {
  Wrapper,
  Inner,
  Header,
  CardContainer,
  Card,
  TextCtn,
  SVGCtn,
  Stats,
  Stat,
  Number,
  SubTitle,
  Banner,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';

const cardsInfo = [
  {
    title: 'Spend Better',
    details:
      'Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress.',
    icon: ic_money_send,
  },
  {
    title: 'Invest Better',
    details:
      'Set and achieve financial goals with ease, automate your savings, and watch your money grow without the stress.',
    icon: ic_wallet_minus,
  },
];

const stats = [
  {
    number: '50+',
    subtitle: 'cities',
  },
  {
    number: '50,000+',
    subtitle: 'transactions',
  },
  {
    number: '3M+',
    subtitle: 'users',
  },
  {
    number: '5+',
    subtitle: 'user ratings',
  },
];

const FinancialFuture = () => {
  const isMobile = useIsMobile();
  const desktopHeaderPhrase = ['Confidently Shape Your', 'Financial Future'];
  const desktopParagraphPhrase = [
    'At RAFT, we empower you to confidently shape your financial future. Our modern',
    'approach simplifies saving and investing, making it easier than ever.',
  ];

  // For mobile
  const mobileHeaderPhrase = ['Confidently Shape', ' Your Financial Future'];
  const mobileParagraphPhrase = [
    'At RAFT, we empower you to confidently shape',
    'your financial future. Our modern approach',
    'simplifies saving and investing, making it easier',
    'than ever.',
  ];
  return (
    <Wrapper>
      <Inner>
        <Header>
          {isMobile ? (
            <>
              <MaskText phrases={mobileHeaderPhrase} tag="h1" />
              <MaskText phrases={mobileParagraphPhrase} tag="p" />
            </>
          ) : (
            <>
              <MaskText phrases={desktopHeaderPhrase} tag="h1" />
              <MaskText phrases={desktopParagraphPhrase} tag="p" />
            </>
          )}
        </Header>
        <CardContainer>
          {cardsInfo.map((info, i) => (
            <Card key={i}>
              <TextCtn>
                <MaskText phrases={new Array(info.title)} tag="h3" />
                <MaskText phrases={new Array(info.details)} tag="p" />
              </TextCtn>
              <SVGCtn>
                <Image src={info.icon} alt="icon" />
              </SVGCtn>
            </Card>
          ))}
        </CardContainer>
        <Stats>
          {stats.map((stat, i) => (
            <Stat key={i}>
              <MaskText phrases={new Array(stat.number)} tag="h1" />
              <MaskText phrases={new Array(stat.subtitle)} tag="p" />
            </Stat>
          ))}
        </Stats>
      </Inner>
      <Banner>
        {isMobile ? (
          <Image src={future_mobile_banner} alt="future_banner" fill />
        ) : (
          <Image src={future_banner} alt="future_banner" fill />
        )}
      </Banner>
    </Wrapper>
  );
};

export default FinancialFuture;
