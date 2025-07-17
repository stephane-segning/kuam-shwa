import { Hero } from "@/components/hero/hero";
import { ImageCardGrid } from "@/components/image-card-grid";

export default function Home() {
  return (
    <div className="">
      <Hero buttonPrimaryText="Explore Services" imageUrl="/img.png" />
      <div className="mt-12">
        <ImageCardGrid
          labels={[
            "Garlic",
            "Ginger",
            "Cabbage",
            "Lettuce",
            "Potatoes",
            "Carrots",
            "Tomatoes",
            "Onion",
          ]}
        />
      </div>
    </div>
  );
}
