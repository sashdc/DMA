"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
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
      <div className="body-content d-flex intro-section">
        <div id="intro-blurb">
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
        <div className="btn-box d-flex justify-content-around">
        <Link href="/schedule"><button className="btn btn-primary">Learn More</button></Link>
        <Link href="/contact"> <button className="btn btn-secondary">Contact Us</button></Link>
        </div>
        </div>
        <div id="facebook-feed">
        <FacebookFeed/>
        </div>
      </div>
      <div className="body-content d-flex flex-column ">
        <h2>Follow us on Instagram <a href='https://www.instagram.com/determinationmartialarts/?hl=en'>@determinationmartialarts
        </a></h2>
      <InstagramFeed />
      </div>
      <div className="body-content d-flex flex-column">
        <h2>Why Determination Martial Arts?</h2>
        <p>
          At Determination Martial Arts, we believe that everyone has the
          potential to achieve greatness. Our mission is to provide a safe,
          inclusive space where individuals of all abilities can learn and grow
          through martial arts. Here are a few reasons to choose our studio:
        </p>
        <ul>
          <li>
            <strong>Inclusive Community:</strong> We welcome students of all
            abilities, backgrounds, and ages to join our martial arts family.
          </li>
          <li>
            <strong>Accessible Programs:</strong> Our classes are designed to be
            accessible to everyone, regardless of physical or cognitive
            challenges.
          </li>
          <li>
            <strong>Experienced Instructors:</strong> Our team of experienced
            instructors is dedicated to helping you reach your full potential.
          </li>
          <li>
            <strong>Personalized Training:</strong> We offer personalized
            training plans to help you achieve your goals and improve your
            skills.
          </li>
          <li>
            <strong>Positive Environment:</strong> Our studio is a positive and
            supportive space where you can build confidence, strength, and
            resilience.
          </li>
        </ul>

      </div>
    </div>
  );
}
