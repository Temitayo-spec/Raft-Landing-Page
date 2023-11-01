'use client';
import Image from 'next/image';
import seamless_payments from '../../../../public/images/seamless_payments.png';
import smart_investing from '../../../../public/images/smart_investing.png';
import wealth_management from '../../../../public/images/wealth_management.png';
import financial_planning from '../../../../public/images/financial_planning.png';

import {
  Wrapper,
  Inner,
  Header,
  Offers,
  OfferCard,
  ImageCtn,
  TextCtn,
} from './styles';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';

const offers = [
  {
    illustration: seamless_payments,
    title: 'Seamless Payments',
    details:
      'Enjoy secure, seamless transactions that make managing your money a breeze.',
  },
  {
    illustration: smart_investing,
    title: 'Smart Investing',
    details:
      'Grow your wealth confidently with our personalized investment solutions, tailored to your financial goals.',
  },
  {
    illustration: wealth_management,
    title: 'Wealth Management',
    details:
      'Make informed decisions for your financial future with our wealth management expertise.',
  },
  {
    illustration: financial_planning,
    title: 'Financial Planning',
    details:
      'Achieve your financial dreams with our comprehensive financial planning services, guiding you toward a secure future.',
  },
];

const OffersSection = () => {
  const desktopHeaderPhrases = ['Elevate Your Financial', 'Journey with RAFT'];
  const desktopParagraphPhrase = [
    'RAFT offers a world of financial possibilities. From investments to payments,',
    "we've got you covered. Join us and unlock your potential today.",
  ];

  const mobileParagraphPhrase = [
    'RAFT offers a world of financial possibilities. From',
    "investments to payments, we've got you covered.",
    'Join us and unlock your potential today.',
  ];
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrases} tag="h1" />

          {isMobile ? (
            <MaskText phrases={mobileParagraphPhrase} tag="p" />
          ) : (
            <MaskText phrases={desktopParagraphPhrase} tag="p" />
          )}
        </Header>
        <Offers>
          {offers.slice(0, 2).map((offer, i) => (
            <OfferCard key={i}>
              <ImageCtn>
                <Image src={offer.illustration} alt="illustration" />
              </ImageCtn>
              <TextCtn>
                <MaskText phrases={new Array(offer.title)} tag="h2" />
                <p>{offer.details}</p>
              </TextCtn>
            </OfferCard>
          ))}
        </Offers>
        <Offers>
          {offers.slice(2, 4).map((offer, i) => (
            <OfferCard key={i}>
              <ImageCtn>
                <Image src={offer.illustration} alt="illustration" />
              </ImageCtn>
              <TextCtn>
                <MaskText phrases={new Array(offer.title)} tag="h2" />
                <p>{offer.details}</p>
              </TextCtn>
            </OfferCard>
          ))}
        </Offers>
      </Inner>
    </Wrapper>
  );
};

export default OffersSection;
