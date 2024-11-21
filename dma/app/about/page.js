const About = () => {
  return (
    <div className="page-body d-flex flex-column">
      <h1>About Us</h1>
      <img src="/about.webp" alt="Martial arts class" className="mb-4"/>
      <p>
        At Determination Martial Arts, we believe martial arts should be
        accessible and empowering for everyone. Our studio is built on the
        principles of inclusivity, respect, and personal growth, providing a
        safe and welcoming environment for all ages and skill levels. We’re more
        than a place to train—our community is a family that celebrates every
        member’s journey, from beginners taking their first steps to experienced
        practitioners pushing their limits. Discover a supportive space where
        you can grow in confidence, connect with others, and build resilience.
        Join us, and see why Determination Martial Arts is Hamilton’s home for
        martial arts and community spirit.
      </p>
      <h2>Our Instructors</h2>
      <p>
        Our team of experienced instructors is dedicated to helping you reach
        your goals. We offer a variety of classes led by knowledgeable and
        passionate teachers who are committed to your success. Whether you’re
        interested in self-defense, fitness, or competition, our instructors
        will guide you through every step of your journey. Meet our instructors
        and discover how they can help you achieve your full potential.
      </p>
      <div className="instructor-list d-flex align-items-center text-center">
        <div className="d-flex flex-column">
        <img
          src="/emily.webp"
          alt="Martial arts instructors"
          className="instructor-image"
        />
        <h3 className="instructor-name">Emily</h3>
        </div>
        <p>
          Emily is a 3rd-degree black belt in taekwondo and has over 10 years of
          teaching experience. She is passionate about helping students build
          confidence and reach their full potential.
        </p>
      </div>
    </div>
  );
};

export default About;
