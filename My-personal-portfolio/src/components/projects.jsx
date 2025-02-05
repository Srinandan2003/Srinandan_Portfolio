import React from 'react';
import taskManagementImage from '../assets/projectImages/Task_Management.png'
const ProjectCard = ({ title, description, image, techStack, liveLink, githubLink }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
    <div className="aspect-video overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {techStack.map((tech, index) => (
          <span 
            key={index}
            className="px-2 py-1 text-sm bg-slate-100 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="text-sm text-gray-600 my-4">
        {description}
      </p>
      <div className="flex gap-4">
        {liveLink && (
          <a 
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-slate-50 transition-colors"
          >
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Live Demo
          </a>
        )}
        {githubLink && (
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-slate-50 transition-colors"
          >
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            Source Code
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectSection = () => {
  const projects = [
    {
      title: "Time Buddy",
      description: "It is a versatile time management web application designed to enhance productivity and organization. It offers features such as a Pomodoro timer, task prioritization, link organization, goal tracking, calendar functionalities, and voice command support.",
      image: taskManagementImage,
      techStack: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://fanciful-elf-ed4c09.netlify.app",
      githubLink: "https://github.com/Dheerajmlk/Frontend-fanatics"
    }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;