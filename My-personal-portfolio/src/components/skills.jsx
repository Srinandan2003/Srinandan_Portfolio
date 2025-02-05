import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Image imports remain the same
import htmlImage from "../assets/skillsImages/html-5.png";
import reactImage from "../assets/skillsImages/react.png";
import cssImage from "../assets/skillsImages/css-3.png";
import jsImage from "../assets/skillsImages/js.png";
import tailwindCss from "../assets/skillsImages/Tailwind CSS.png";
import bootstrapImage from "../assets/skillsImages/Bootstrap New.png";
import netlifyImage from "../assets/skillsImages/netlify.1023x1024.png"
import vercelImage from "../assets/skillsImages/vercel-icon-dark.png"
import githubImage from "../assets/skillsImages/github-mark.png"
import chakraImage from "../assets/skillsImages/Chakra UI.png"

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  const skills = [
    { image: htmlImage, bgColor: "bg-orange-50", name: "HTML" },
    { image: cssImage, bgColor: "bg-blue-50", name: "CSS" },
    { image: jsImage, bgColor: "bg-yellow-50", name: "JavaScript" },
    { image: reactImage, bgColor: "bg-cyan-50", name: "React" },
    { image: tailwindCss, bgColor: "bg-teal-50", name: "Tailwind CSS" },
    { image: bootstrapImage, bgColor: "bg-purple-50", name: "Bootstrap" },
    { image: netlifyImage, bgColor: "bg-green-50", name: "Netlify" },
    { image: vercelImage, bgColor: "bg-gray-50", name: "Vercel" },
    { image: githubImage, bgColor: "bg-black-50", name: "GitHub" },
    { image: chakraImage, bgColor: "bg-indigo-50", name: "Chakra UI" },
  ];

  return (
    <section
      data-aos="fade-up"
      className="w-full max-w-6xl mx-auto px-4 py-16 space-y-12 overflow-x-hidden"
    >
      <header 
        data-aos="fade-down"
        className="text-center space-y-4"
      >
        <h2 className="text-5xl font-bold text-gray-900">
          Technical Skills
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Expertise in modern web technologies and frameworks
        </p>
      </header>

      <div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className={`rounded-lg p-6 transition-all duration-300 
              shadow-md hover:bg-opacity-90 group relative ${skill.bgColor} border border-gray-200`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 
              group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            
            <div className="relative z-10 flex flex-col items-center space-y-4">
              <div className="p-4 rounded-lg bg-white shadow-sm">
                <img
                  src={skill.image}
                  alt={`${skill.name} logo`}
                  className="w-16 h-16 object-contain transition-transform duration-500 
                    group-hover:scale-110"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {skill.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;