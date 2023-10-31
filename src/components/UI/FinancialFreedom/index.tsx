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
import MaskText from '@/components/Common/MaskText';
import RevealCover from '@/components/Common/RevealCover';
import { Div } from '../Featured/styles';
import { imageVariants } from '../Featured';

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
  const desktopHeaderPhrase = ['Your Financial Freedom,', 'Your Way'];
  const desktopParagraphPhrase = [
    'We believe that managing your finances should be effortless and cost-effective.',
    "That's why we offer you the freedom you deserve.",
  ];
  const desktopBriefNotePhrase = [
    'Smart investments,',
    'secure payments, and',
    'expert guidance, all in',
    'one place.',
  ];
  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrase} tag="h1" />
          <MaskText phrases={desktopParagraphPhrase} tag="p" />
        </Header>
        <BannerCtn>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            <Image src={financial_freedom_banner} alt="banner_img" fill />
          </Div>
        </BannerCtn>
        <Edges>
          {edges.map((edge, i) => (
            <Edge key={i}>
              <Title>
                <Image src={edge.icon} alt="icon" />
                <MaskText phrases={new Array(edge.point)} tag="h3" />
              </Title>
              <MaskText phrases={new Array(edge.details)} tag="p" />
            </Edge>
          ))}
        </Edges>
      </Inner>
      <BriefNote>
        <MaskText phrases={desktopBriefNotePhrase} tag="p" />
      </BriefNote>
    </Wrapper>
  );
};

export default FinancialFreedom;
