import React, { useState } from "react";
import image1 from "../assets/project-1.png";
import image2 from "../assets/project-2.png";
import image3 from "../assets/project-3.png";
import { Link } from "react-router-dom";

const projectData = [
  {
    id: 1,
    title: "Nexcent Page",
    type: "Web Application",
    imageUrl: image1,
  },
  {
    id: 2,
    title: "E-Commerce Website",
    type: "Web Application",
    imageUrl: image2,
  },
  {
    id: 3,
    title: "Audi Clone Page",
    type: "Web Application",
    imageUrl: image3,
  },
];

const categories = ["All Projects", "Web Application", "Mobile Application"];

const Projects = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All Projects");

  const filteredProjects = projectData.filter((project) => {
    const matchTitle = project.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchType = filter === "All Projects" || project.type === filter;
    return matchTitle && matchType;
  });

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-2 text-center">
        Projects portfolio
      </h2>
      {/* <p className="text-center text-muted-foreground mb-8">Search projects by title or filter by category</p> */}
      {/* <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="🔍 Search Projects"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border border-border rounded-md px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
        />
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="border border-border rounded-md px-3 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div> */}
      <div className="grid grid-cols-1 mt-18  md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-card text-card-foreground rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover bg-background"
            />
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <span className="text-sm text-muted-foreground mb-2">
                {project.type}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/contact">
        <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200">Contact Us</button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
