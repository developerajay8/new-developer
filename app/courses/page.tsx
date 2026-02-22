
import { ServicesHero, ServicesGrid, ServicesBenefits } from '../components/courses/coursessection';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesGrid />
      <ServicesBenefits />
    </div>
  );
}