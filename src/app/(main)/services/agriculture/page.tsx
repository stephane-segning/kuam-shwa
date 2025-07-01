import ServiceGrid from "@/components/services/ServiceGrid";

export default function Agriculture() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Agriculture Services
        </h1>

        <ServiceGrid options={agricultureOptions} />

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

const agricultureOptions = [
  {
    title: "Crop Consultation",
    description: "Expert advice on crop selection, pest management, and yield optimization.",
    price: "50.00"
  },
  {
    title: "Farm Equipment Rental",
    description: "Affordable rental of tractors, plows, and other essential farming equipment.",
    price: "120.00"
  },
  {
    title: "Soil Testing",
    description: "Comprehensive soil analysis to determine nutrient levels and improve crop productivity.",
    price: "30.00"
  }
];