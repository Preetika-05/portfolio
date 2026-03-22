import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profile from "@/assets/photo.jpeg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 15, 0.8), rgba(10, 10, 15, 0.9)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Profile Image */}
          <div className="flex justify-center mb-8 animate-fade-up">
            <div className="relative">
              <img
                src={profile}
                alt="Preetika"
                className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-primary shadow-[0_0_40px_rgba(249,115,22,0.7)] animate-[float_4s_ease-in-out_infinite]"
              />
            </div>
          </div>

          <div className="animate-fade-up">
            <p className="text-primary text-2xl md:text-3xl mb-4 font-semibold tracking-wide">
               Hi, I'm
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="gradient-text">Preetika</span>
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl text-foreground/80 mb-8 font-light">
              Computer Science <span className="text-primary font-semibold">Graduate</span>
            </p>

            <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Seeking new opportunities to create innovative solutions and contribute to exciting projects
            </p>
          </div>

          {/* Buttons */}
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center">

            {/* View Projects */}
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>

            {/* Contact */}
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>

            {/* Download Resume */}
            <a href="/Resume.pdf" download>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </Button>
            </a>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      
    </section>
  );
};

export default Hero;