import Image from 'next/image';
import ic_money_send from '../../../../public/svgs/ic_money_send.svg';
import ic_wallet_minus from '../../../../public/svgs/ic_wallet_minus.svg';
import future_banner from '../../../../public/images/future_banner.png';
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
    number: '5',
    subtitle: 'user ratings',
  },
];

const FinancialFuture = () => {
  return (
    <Wrapper>
      <Inner>
        <Header>
          <h1>Confidently Shape Your Financial Future</h1>
          <p>
            At RAFT, we empower you to confidently shape your financial
            future.Our modern approach simplifies saving and investing, making
            it easier than ever.
          </p>
        </Header>
        <CardContainer>
          {cardsInfo.map((info, i) => (
            <Card key={i}>
              <TextCtn>
                <h3>{info.title}</h3>
                <p>{info.details}</p>
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
              <Number>{stat.number}</Number>
              <SubTitle>{stat.subtitle}</SubTitle>
            </Stat>
          ))}
        </Stats>
      </Inner>
      <Banner>
        <Image src={future_banner} alt="future_banner" fill />
      </Banner>
    </Wrapper>
  );
};

export default FinancialFuture;
