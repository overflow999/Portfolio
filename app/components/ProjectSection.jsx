"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Overflow-Estate",
    description: "List an estate to sell or rent,or search one to buy or rent",
    image: "/images/projects/estate.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/overflow999/mern",
    previewUrl: "https://overflow-estate-qstl.onrender.com/",
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/overflow999/portfolio",
    previewUrl: "https://portfolio-zeta-eight-90.vercel.app/",
  },
  {
    id: 3,
    title: "Overflow-Film",
    description: "An App with sources provided dynamically by studio Ghibli API ",
    image: "/images/projects/ghibli.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/overflow999/Film_App",
    previewUrl: "https://overflow-film.netlify.app/",
  },
  {
    id: 4,
    title: "Game of Pig",
    description: "A fun game you can play with your friend ",
    image: "/images/projects/game.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/overflow999/Game_of_Pig",
    previewUrl: "https://overflow-game.netlify.app/",
  },
  {
    id: 5,
    title: " Overflow-Enterprise",
    description: "A UI with a lot of Jquery functionalities like image sliders,tabbed-interface... ",
    image: "/images/enterprise.JPG",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/overflow999/Film_App",
    previewUrl: "https://overflow-enterprise.netlify.app/",
  },
  {
    id: 6,
    title: "Seat-Reservation",
    description: "Let you reserve  seats in advance",
    image: "/images/projects/seat.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/overflow999/Seat_reservation_app",
    previewUrl: "https://overflow-reservation.netlify.app/",
  },
  
 
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;