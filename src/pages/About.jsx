import React from "react";
import profileImg from "../assets/profile.jpg";

const About = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center gap-12 px-8 py-16 max-w-6xl mx-auto animate-fadeIn">
        {/* Left: Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profileImg}
            alt="Profile"
            className="w-70 h-74 object-cover rounded-xl shadow-md"
          />
        </div>
        {/* Right: About Text */}
        <div className="flex-1 text-lg text-left text-foreground space-y-6">
          <p>
            Hi, I'm a passionate Front-End Developer dedicated to crafting
            responsive and user-friendly web interfaces. With a strong
            foundation in HTML, CSS, JavaScript, and modern frameworks like
            React, I bring creative ideas to life through clean, efficient code.
          </p>
          <p>
            I focus on delivering seamless user experiences and take pride in
            writing code that's not only functional but also visually engaging.
            Whether it's building landing pages, single-page applications, or
            personal projects, I enjoy solving real-world problems through
            design and development.
          </p>
          <p>
            Currently, I'm expanding my skills in Tailwind CSS, Shadcn/UI, and
            integrating back-end services like Firebase. I'm always eager to
            learn, collaborate, and take on exciting challenges in the world of
            web development.
          </p>
        </div>
      </section>
      {/* Skills Section */}
      <section className="max-w-6xl mx-auto mt-10 px-4 md:px-8">
        <h2 className="text-2xl font-bold mb-6 text-card-foreground">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            { name: "HTML", icon: "🌐" },
            { name: "CSS", icon: "🎨" },
            { name: "JavaScript", icon: "⚡" },
            { name: "React", icon: "⚛️" },
            { name: "Tailwind CSS", icon: "💨" },
            { name: "Bootstrap 5", icon: "🅱️" },
            { name: "Git", icon: "🔧" },
            { name: "Figma", icon: "🎴" },
          ].map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur-md shadow-md border border-primary/10 hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <span className="text-3xl">{skill.icon}</span>
              <span className="font-semibold text-primary text-base text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
