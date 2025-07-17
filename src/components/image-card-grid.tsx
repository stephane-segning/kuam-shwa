import React from "react";
import Image from "next/image";

export interface ImageCardGridProps {
  labels: string[];
}

const imageMap: Record<string, string> = {
  Garlic: "/garlic.jpg",
  Ginger: "/Ginger.jpg",
  Cabbage: "/cabbage.jpg",
  Beans: "/beans.jpg",
  Potatoes: "/potato.jpg",
  Carrots: "/carrots.jpg",
  Tomatoes: "/tomato.jpg",

  Onion: "/onion.jpg",
  Cucumber: "/cucumber.jpg",
  Okra: "/okra.jpg",
  "Green Bell": "/green-ball.jpg",
};

export function ImageCardGrid({ labels }: ImageCardGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {labels.map((label, idx) => {
        const src =
          imageMap[label] ||
          "https://via.placeholder.com/400x300?text=" +
            encodeURIComponent(label);
        return (
          <div
            key={label}
            tabIndex={0}
            className="card bg-base-100 shadow-md focus:outline-none focus:ring-2 focus:ring-primary transition"
            aria-label={label}
          >
            <figure className="aspect-[4/3] w-full overflow-hidden p-4">
              <Image
                src={src}
                alt={label}
                width={400}
                height={300}
                className="object-cover w-full h-full rounded-lg"
                placeholder="empty"
                priority={idx < 4}
                unoptimized={src.startsWith("http")}
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-base md:text-lg">{label}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
