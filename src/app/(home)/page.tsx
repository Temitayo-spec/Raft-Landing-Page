import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  Footer,
  HeroSection,
  IntroSection,
  JoinSection,
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
      <JoinSection />
      <FAQ />
      <Footer />
    </main>
  );
}
