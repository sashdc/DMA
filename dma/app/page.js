"use client";

import dynamic from "next/dynamic";
import FacebookFeed from "../components/FacebookFeed";
import InstagramFeed from "@/components/InstagramFeed";

// Dynamically import Carousel with SSR disabled
const Carousel = dynamic(() => import("@/components/carousel/carousel"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <hero>
        <Carousel />
      </hero>
      <div className="body-content d-flex">
        <div>
        <h1>Inclusive and Accessible Martial Arts in Hamilton, Ontario</h1>
        <p>
          Welcome to Determination Martial Arts—Hamilton’s community-centered,
          accessible martial arts studio where everyone is encouraged to find
          their strength and confidence. Our inclusive space is designed for all
          abilities and backgrounds, offering a supportive environment to learn,
          grow, and connect. Whether you’re new to martial arts or looking to
          advance your skills, our team is dedicated to helping you achieve your
          goals. Discover the power of martial arts within a welcoming community
          that values determination, resilience, and respect for every
          individual.
        </p>
        </div>
        <FacebookFeed />

      </div>
      <div className="body-content d-flex flex-column ">
        <h2>Follow us on Instagram <a href='https://www.instagram.com/determinationmartialarts/?hl=en'>@determinationmartialarts
        </a></h2>
      <InstagramFeed />
      </div>
    </div>
  );
}
