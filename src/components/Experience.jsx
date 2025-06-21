import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    title: "Data Analyst Intern - APSSDC",
    subtitle: "May 2023 - July 2023",
    description: [
      "Created an online platform for mechanic services that allows customers to book services at their convenience,while helping service providers connect with a broader audience.",
      "Developed a web application where users can request services, which are visible to all available mechanics,enabling them to schedule appointments based on their availability",
      "Customers can view service details, track their status, and manage their profiles, while only the admin hasaccess to all mechanic and customer profiles.",
    ],
    link: "https://github.com/LAKSHMIPATHI-PATHAGUNTA/Data-analysis-on-consumer-e-commerce",  
  },
  {
    title: "Undergraduate Researcher - UROP",
    subtitle: "Jan 2023 - Apr 2023",
    description: [
      " Developed a deep learning model utilizing a pretrained architecture from the TensorFlow library (Python) to accurately classify and identify Indian cuisine dishes from a image dataset containing over 25,000 images.",
      "Performed extensive data preprocessing to enhance the dataset quality by applying techniques such as imageaugmentation, normalization, and noise reduction, thereby ensuring better model performance.",
      "Upon training our model rigorously on collected data, an accuracy rate of 88% is achieved.",
    ],
    link: "https://github.com/LAKSHMIPATHI-PATHAGUNTA/Food-Recognition-using-Deep-Learning", 
  }
];

const ExperienceCard = ({ experience }) => (
  <a href={experience.link} target="_blank" rel="noopener noreferrer" className="block">
    <div className="bg-gradient-to-tl from-indigo-500 via-purple-600 to-pink-500 rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 group">
      <div className="flex flex-col md:flex-row items-start">
        <div className="flex-1 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-3xl font-bold">{experience.title}</h3>
            <ArrowUpRight className="text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
          </div>
          <p className="text-lg font-semibold mb-4">{experience.subtitle}</p>
          <ul className="list-disc list-inside space-y-2">
            {experience.description.map((point, index) => (
              <li key={index} className="text-gray-200 text-sm">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </a>
);

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextExperience = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length);
  };

  useEffect(() => {
    const timer = setInterval(nextExperience, 5000);  // Auto-scroll every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="experience" className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-indigo-600 text-center mb-12">
          Experience
        </h2>
        <div className="relative">
          <ExperienceCard experience={experiences[currentIndex]} />
          <button
            onClick={prevExperience}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 bg-indigo-700 rounded-full p-3 shadow-lg hover:bg-indigo-600 transition-colors duration-200"
            aria-label="Previous experience"
          >
            <ChevronLeft className="text-white" size={28} />
          </button>
          <button
            onClick={nextExperience}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 bg-indigo-700 rounded-full p-3 shadow-lg hover:bg-indigo-600 transition-colors duration-200"
            aria-label="Next experience"
          >
            <ChevronRight className="text-white" size={28} />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-2 focus:outline-none transition-all duration-200 ${
                index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-indigo-400'
              }`}
              aria-label={`Go to experience ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
