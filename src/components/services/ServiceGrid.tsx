import React from "react";
import ServiceCard, { ServiceCardProps } from "./ServiceCard";

export interface ServiceGridProps {
  options: ServiceCardProps[];
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ options }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {options.map((option, index) => (
      <ServiceCard
        key={index}
        title={option.title}
        description={option.description}
        price={option.price}
      />
    ))}
  </div>
);

export default ServiceGrid;