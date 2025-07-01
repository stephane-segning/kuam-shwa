import React from "react";

export interface ServiceCardProps {
  title: string;
  description: string;
  price: string | number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{title}</h2>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <span className="text-blue-600 dark:text-blue-400 font-semibold">
      Starting from ${typeof price === "number" ? price.toFixed(2) : price}
    </span>
  </div>
);
