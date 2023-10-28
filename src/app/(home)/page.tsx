import {
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  HeroSection,
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
    </main>
  );
}
