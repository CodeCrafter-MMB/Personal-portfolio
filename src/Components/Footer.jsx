import React from "react";
import { Globe, Github, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-border pt-12 pb-6 bg-background text-muted-foreground">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-3xl font-medium text-card-foreground">Follow me</h2>
        <div className="flex gap-6">
          <a
            href="#"
            className="bg-primary/5 p-4 rounded-lg hover:bg-primary/20 transition-all duration-200 hover:rotate-6 hover:scale-110"
            aria-label="Website"
          >
            <Globe size={28} className="text-muted-foreground" />
          </a>
          <a
            href="https://github.com/CodeCrafter-MMB"
            target="_blank"
            className="bg-primary/5 p-4 rounded-lg hover:bg-primary/20 transition-all duration-200 hover:rotate-6 hover:scale-110"
            aria-label="Github"
          >
            <Github size={28} className="text-muted-foreground" />
          </a>
          
          <a
            href="https://www.linkedin.com/in/muhammad-mubashir-60a90430a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"
            className="bg-primary/5 p-4 rounded-lg hover:bg-primary/20 transition-all duration-200 hover:rotate-6 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} className="text-muted-foreground" />
          </a>
          
        </div>
        <p className="text-center text-muted-foreground mt-8 text-base">
          © 2025 React & Tailwind CSS Portfolio. Mubashir
        </p>
      </div>
    </footer>
  );
};

export default Footer;
