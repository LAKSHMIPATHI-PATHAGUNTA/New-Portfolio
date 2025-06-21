import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "E-Mechanic Services",
    tech: "NodeJs,ExpressJs,ReactJs,MongoDBMHTML,CSS",
    description: "Created an online platform for mechanic services that allows customers to book services at their convenience,while helping service providers connect with a broader audience.Developed a web application where users can request services, which are visible to all available mechanics,enabling to schedule appointments based on availability.Customers can view service details,track its status,and manage profile,while only the admin has access to all mechanic and customer profiles.",
    github: "https://github.com/LAKSHMIPATHI-PATHAGUNTA/E-Mechanic-Services"
  },
  {
    title: "House Price Prediction",
    tech: "Python,Pandas,Scikit-Learn",
    description: "Pre-processed the housing dataset by removing null values and detecting outliers using the K-means algorithm to enhance the accuracy of price prediction in Bengaluru.Applied multiple machine learning models and experimented with different train-test splits (80-20, 70-30)to assess model performance. Evaluated models based on R-squared scores and selected the most effective one to ensure accurate and reliable house price predictions.",
    github: "https://github.com/LAKSHMIPATHI-PATHAGUNTA/House-price-prediction"  // Add the link to the repository if available
  },
  {
    title: "Task Manager",
    tech: "Expressjs, Node Js, MongODB",
    description: "Built a simple and efficient backend application that allows users to add, edit, update, and delete tasks using Node.js and Express .Implemented user authentication and task management features including marking tasks as complete, organizing by priority, and removing unnecessary items. Gained hands-on experience with the Express framework in JavaScript and used asynchronous functions to ensure smooth and non-blocking program execution.",
    github: "https://github.com/LAKSHMIPATHI-PATHAGUNTA/Task-manager"  // Add the link to the repository if available
  }
];

const skills = [
  "C++",
  "Python",
  "ReactJS",
  "NodeJS",
  "MongoDB",
  "ExpressJS",
  "HTML",
  "CSS",
  "JavaScript",
  "Machine Learning",
];

const ProjectCard = ({ project }) => (
  <div className="bg-gradient-to-br from-blue-100 via-gray-100 to-blue-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 group">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
      <Code className="text-blue-600" size={28} />
    </div>
    <p className="text-md font-medium text-blue-500 mb-4">{project.tech}</p>
    <p className="text-gray-600 text-base mb-6 leading-relaxed">{project.description}</p>
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white text-base rounded-md hover:bg-blue-700 transition-colors duration-200 group"
    >
      <ExternalLink size={20} className="mr-2" />
      View on GitHub
      <ArrowUpRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
    </a>
  </div>
);

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(nextProject, 5000);  // Auto-scroll every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="projects" className="bg-gradient-to-br from-blue-50 to-gray-200 min-h-screen flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">
          <br></br>
          Projects
        </h2>
        <div className="relative">
          <ProjectCard project={projects[currentIndex]} />
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 bg-white rounded-full p-3 shadow-md hover:bg-blue-100 transition-colors duration-200"
            aria-label="Previous project"
          >
            <ChevronLeft className="text-blue-600" size={28} />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 bg-white rounded-full p-3 shadow-md hover:bg-blue-100 transition-colors duration-200"
            aria-label="Next project"
          >
            <ChevronRight className="text-blue-600" size={28} />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-2 focus:outline-none ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-400'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
        <section id="skills" className="bg-gradient-to-br from-gray-100 to-blue-50 min-h-screen flex flex-col justify-center py-16 px-4">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-blue-600 text-center mb-12">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-lg"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
