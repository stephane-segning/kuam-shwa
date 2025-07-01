import { Hero } from '@/components/hero/hero';

export default function Home() {
  return (
    <div className=''>
        <Hero
            buttonPrimaryText="Explore Services"
            imageUrl="/img.png"
        />
    </div>
  );
}
