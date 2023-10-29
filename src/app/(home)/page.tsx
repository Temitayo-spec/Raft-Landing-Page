import {
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  HeroSection,
  IntroSection,
  OffersSection,
} from '@/components';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      <OffersSection />
      <FinancilaFreedom />
      <FinancialFuture />
      <IntroSection />
    </main>
  );
}
