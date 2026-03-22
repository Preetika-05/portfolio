import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/70 text-center md:text-left">
            © {currentYear} <span className="font-semibold gradient-text">Preetika</span>. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-foreground/70">
            Made with <Heart className="h-4 w-4 text-primary fill-primary" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
