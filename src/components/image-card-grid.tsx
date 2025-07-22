import React from "react";
import Image from "next/image";

export interface ImageCardGridProps {
  labels: string[];
}

export function ImageCardGrid({ labels }: ImageCardGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {labels.map((label, idx) => (
        <div
          key={label}
          tabIndex={0}
          className="card bg-base-100 shadow-md focus:outline-none focus:ring-2 focus:ring-primary transition"
          aria-label={label}
        >
          <figure className="aspect-[4/3] w-full overflow-hidden">
            <Image
              src={`https://via.placeholder.com/400x300?text=${encodeURIComponent(label)}`}
              alt={label}
              width={400}
              height={300}
              className="object-cover w-full h-full"
              placeholder="empty"
              priority={idx < 4}
              unoptimized
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-base md:text-lg">{label}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
