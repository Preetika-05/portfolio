import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const technicalSkills = [
    "Java", "Python", "C", "HTML, CSS, JavaScript", "Firebase", 
    "MySQL", "Android Studio", "GitHub", "VS Code", "Figma", "Canva"
  ];

  const softSkills = [
    "Communication", "Problem Solving", "Teamwork", "Time Management"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <img
              src={aboutImage}
              alt="About Me"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>

          <div className="animate-slide-in-right space-y-6">
            <h3 className="text-3xl font-bold mb-4">Hi, I'm Preetika Nadar</h3>
            <p className="text-foreground/80 leading-relaxed">
              I'm Preetika Nadar, a Computer Science graduate passionate about developing creative 
              and efficient digital solutions. I specialize in Android app development and web 
              technologies, with a strong foundation in Java, Firebase, and front-end design. 
              I love solving real-world problems through technology and continuously improving 
              my coding and design skills.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="animate-fade-up">
          <h3 className="text-3xl font-bold text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-fade-up card-glow"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <p className="font-semibold text-center text-foreground">{skill}</p>
              </div>
            ))}
          </div>
          
          <h4 className="text-2xl font-bold text-center mb-8">
            Soft <span className="gradient-text">Skills</span>
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-fade-up card-glow"
                style={{ animationDelay: `${(technicalSkills.length + index) * 0.05}s` }}
              >
                <p className="font-semibold text-center text-foreground">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
