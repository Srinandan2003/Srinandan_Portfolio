import React from 'react';
import typingVideo from '../assets/typing.mp4';

const About = () => {
  return (
    <section className="min-h-screen w-full  py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section: Video */}
        <div
          data-aos="fade-right"
          className="w-full lg:w-1/2 flex justify-center"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg shadow-lg w-full max-w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
          >
            <source src={typingVideo} type="video/mp4" />
          </video>
        </div>

        {/* Right Section: Content */}
        <div
          data-aos="fade-left"
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
            About Me
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hi, I'm Srinandan, a passionate web developer eager to build
            innovative and user-friendly web applications. I'm currently
            pursuing a Full-Stack Web Development course at Masai School,
            sharpening my skills in JavaScript, HTML, CSS, and modern frameworks
            like React and Node.js.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            My interests lie in creating interactive, responsive web solutions
            while embracing UI/UX principles. With a curiosity for design
            psychology and a drive for innovative technology, I'm constantly
            learning and growing.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Beyond coding, I love watching movies, exploring new destinations,
            and diving into thought-provoking books. My creativity and
            commitment to learning fuel my ambition to make meaningful
            contributions to the tech world.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
