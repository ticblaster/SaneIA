import Header from './components/Header';
import Hero from './components/Hero';
import WaterLossBigNumber from './components/WaterLossBigNumber';
import ProblemSection from './components/ProblemSection';
import SectorValidationSection from './components/SectorValidationSection';
import AudienceSection from './components/AudienceSection';
import SolutionSection from './components/SolutionSection';
import UseCasesSection from './components/UseCasesSection';
import IntegrationArchitectureSection from './components/IntegrationArchitectureSection';
import PipelineSection from './components/PipelineSection';
import SecurityDeploymentSection from './components/SecurityDeploymentSection';
import FirstMvpSection from './components/FirstMvpSection';
import DataQualitySection from './components/DataQualitySection';
import ExplainabilitySection from './components/ExplainabilitySection';
import ConsumptionModesSection from './components/ConsumptionModesSection';
import DashboardDemo from './components/DashboardDemo';
import PrototypeShowcaseSection from './components/PrototypeShowcaseSection';
import ProductLogicSection from './components/ProductLogicSection';
import ActorsSection from './components/ActorsSection';
import ScopeSection from './components/ScopeSection';
import NonScopeSection from './components/NonScopeSection';
import ValidationSection from './components/ValidationSection';
import BusinessModelSection from './components/BusinessModelSection';
import ImpactSection from './components/ImpactSection';
import StageSection from './components/StageSection';
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
        <SectorValidationSection />
        <AudienceSection />
        <SolutionSection />
        <UseCasesSection />
        <IntegrationArchitectureSection />
        <PipelineSection />
        <SecurityDeploymentSection />
        <FirstMvpSection />
        <DataQualitySection />
        <ExplainabilitySection />
        <ConsumptionModesSection />
        <DashboardDemo />
        <PrototypeShowcaseSection />
        <ProductLogicSection />
        <ActorsSection />
        <ScopeSection />
        <NonScopeSection />
        <ValidationSection />
        <BusinessModelSection />
        <ImpactSection />
        <StageSection />
        <RoadmapSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
