// app/poultry-infra/page.tsx
import { ServiceGrid } from "@/components/services/service-grid";

export default function PoultryInfra() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Poultry Infrastructure Services
        </h1>

        {/* Service Grid */}
        <ServiceGrid options={poultryInfraOptions} />

        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

const poultryInfraOptions = [
  {
    title: "Poultry Farm Setup",
    description:
      "Complete design and construction of modern poultry farming facilities.",
    price: "5000.00",
  },
  {
    title: "Ventilation Systems",
    description:
      "Advanced climate control and ventilation systems for optimal bird health.",
    price: "1200.00",
  },
  {
    title: "Feeding Equipment",
    description:
      "Automated feeding systems and equipment installation for efficiency.",
    price: "800.00",
  },
  {
    title: "Biosecurity Solutions",
    description:
      "Comprehensive biosecurity infrastructure and protocols implementation.",
    price: "600.00",
  },
  {
    title: "Waste Management Systems",
    description:
      "Sustainable waste management and processing solutions for poultry farms.",
    price: "950.00",
  },
];
