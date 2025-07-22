import { ServiceGrid } from "@/components/services/service-grid";

export default function Logistics() {
  return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Logistics & Transportation Services
          </h1>
          
          {/* Service Grid */}
          <ServiceGrid options={logisticsOptions} />
          
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

const logisticsOptions = [
  {
    title: "Supply Chain Management",
    description: "End-to-end supply chain optimization and management solutions.",
    price: "200.00"
  },
  {
    title: "Freight Transportation",
    description: "Reliable freight transportation and delivery services across regions.",
    price: "150.00"
  },
  {
    title: "Warehouse Solutions",
    description: "Comprehensive warehousing and inventory management services.",
    price: "180.00"
  },
  {
    title: "Last Mile Delivery",
    description: "Efficient last-mile delivery solutions for urban and rural areas.",
    price: "75.00"
  },
  {
    title: "City Bus Service",
    description: "Regular bus service covering major city routes with frequent stops.",
    price: "2.50"
  },
  {
    title: "Express Train",
    description: "High-speed train service connecting major stations with minimal stops.",
    price: "5.00"
  },
  {
    title: "Taxi Service",
    description: "24/7 on-demand taxi service for door-to-door transportation.",
    price: "10.00"
  }
];
