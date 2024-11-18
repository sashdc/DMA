'use client';

import dynamic from 'next/dynamic';
import FacebookFeed from '../components/FacebookFeed';
import InstagramFeed from '@/components/InstagramFeed';

// Dynamically import Carousel with SSR disabled
const Carousel = dynamic(() => import('@/components/carousel/carousel'), { ssr: false });

export default function Home() {
  return (
    <div>
      <hero>
        <Carousel />
      </hero>
      <FacebookFeed />
      <InstagramFeed />
    </div>
  );
}
