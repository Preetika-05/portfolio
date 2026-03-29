import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Handwriting Recognition App",
      description: "Developed an Android app that recognizes and converts handwritten characters into digital text using image processing and ML Kit's Text Recognition API.",
      image: project1,
      tools: ["Java", "XML", "Android Studio", "Firebase", "ML Kit"],
      duration: "Jan 2025 – Mar 2025",
      githubLink: "https://github.com/PreetikaPreethi/Handwriting_recognition",
    },
    {
      title: "Events Hub",
      description: "A real-time Android application that helps users discover and register for nearby sports events. Includes Firebase integration, location-based updates, event registration, and a navigation drawer UI.",
      image: project2,
      tools: ["Java", "XML", "Firebase Realtime Database", "Firebase Authentication", "Google Maps API"],
      duration: "Jul 2024 – Dec 2024",
      githubLink: "https://github.com/PreetikaPreethi/sports-/tree/main/Backup_sports",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Innovative Android applications solving real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 card-glow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs text-foreground/60 whitespace-nowrap ml-2">
                    {project.duration}
                  </span>
                </div>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground/80 mb-2">Tools & Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => window.open(project.githubLink, "_blank")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
