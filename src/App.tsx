import Header from './components/Header';
import Hero from './components/Hero';
import WaterLossBigNumber from './components/WaterLossBigNumber';
import ProblemSection from './components/ProblemSection';
import AudienceSection from './components/AudienceSection';
import SolutionSection from './components/SolutionSection';
import PipelineSection from './components/PipelineSection';
import DashboardDemo from './components/DashboardDemo';
import PrototypeShowcaseSection from './components/PrototypeShowcaseSection';
import ExplainabilitySection from './components/ExplainabilitySection';
import ScopeSection from './components/ScopeSection';
import NonScopeSection from './components/NonScopeSection';
import ActorsSection from './components/ActorsSection';
import ValidationSection from './components/ValidationSection';
import BusinessModelSection from './components/BusinessModelSection';
import ImpactSection from './components/ImpactSection';
import RoadmapSection from './components/RoadmapSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-mist">
      <a
        href="#topo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand-deep"
      >
        Pular para o conteúdo principal
      </a>
      <Header />
      <main>
        <Hero />
        <WaterLossBigNumber />
        <ProblemSection />
        <AudienceSection />
        <SolutionSection />
        <PipelineSection />
        <DashboardDemo />
        <PrototypeShowcaseSection />
        <ExplainabilitySection />
        <ScopeSection />
        <NonScopeSection />
        <ActorsSection />
        <ValidationSection />
        <BusinessModelSection />
        <ImpactSection />
        <RoadmapSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
