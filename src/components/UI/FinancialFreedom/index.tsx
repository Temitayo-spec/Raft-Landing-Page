import Image from 'next/image';
import financial_freedom_banner from '../../../../public/images/financial_freedom_banner.png';
import ic_banknotes from '../../../../public/svgs/ic_banknotes.svg';
import ic_circle_stack from '../../../../public/svgs/ic_circle_stack.svg';
import ic_arrows_left_right from '../../../../public/svgs/ic_arrows_right_left.svg';
import {
  Wrapper,
  Inner,
  Header,
  BannerCtn,
  Edges,
  Edge,
  Title,
  BriefNote,
} from './styles';

const edges = [
  {
    point: 'No minimum balance fees',
    details:
      'Say goodbye to minimum balance fees. Your account, your balance—no hidden charges',
    icon: ic_banknotes,
  },
  {
    point: 'No monthly fees',
    details:
      'Bank with us without worrying about monthly fees. Keep more of your money where it belongs—in your account',
    icon: ic_circle_stack,
  },
  {
    point: 'No bank transfer fees',
    details:
      'Seamlessly transfer funds without the extra cost. Send and receive money with zero bank transfer fees.',
    icon: ic_arrows_left_right,
  },
];

const FinancialFreedom = () => {
  return (
    <Wrapper>
      <Inner>
        <Header>
          <h1>Your Financial Freedom, Your Way</h1>
          <p>
            We believe that managing your finances should be effortless and
            cost-effective. That&apos;s why we offer you the freedom you deserve
          </p>
        </Header>
        <BannerCtn>
          <Image src={financial_freedom_banner} alt="banner_img" fill />
        </BannerCtn>
        <Edges>
          {edges.map((edge, i) => (
            <Edge key={i}>
              <Title>
                <Image src={edge.icon} alt="icon" />
                {edge.point}
              </Title>
              <p>{edge.details}</p>
            </Edge>
          ))}
        </Edges>
      </Inner>
      <BriefNote>
        <p>
          Smart investments, secure payments, and expert guidance, all in one
          place.
        </p>
      </BriefNote>
    </Wrapper>
  );
};

export default FinancialFreedom;
