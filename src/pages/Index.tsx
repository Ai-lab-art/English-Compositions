
import { GraduationCap, BookOpen, PenTool, Play, Facebook, Instagram, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import homepageHero from "@/assets/homepage-hero.jpg";

const Index = () => {

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${homepageHero})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-8 text-center">
        {/* Main Hero Section */}
        <div className="max-w-4xl mx-auto">
          {/* Developer Credit */}
          <p className="text-sm text-white/80 mb-4">App developed by: Hom Bahadur Thapa</p>
          
          {/* Main Title */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <GraduationCap className="h-16 w-16 text-education-yellow animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold colorful-heading">
              English Composition Helper
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md playful-text">
            Master the art of English writing with comprehensive examples and tips designed specifically for secondary level students
          </p>
          
          
          {/* Start Button */}
          <Link to="/table-of-contents">
            <Button 
              size="lg" 
              className="twinkling-button hover-scale group text-lg font-bold px-8 py-4 h-auto bg-gradient-to-r from-education-pink to-education-blue text-white border-2 border-education-pink/30 hover:from-education-pink hover:to-education-cyan"
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Start Learning
            </Button>
          </Link>
          
          {/* Motivational Quote */}
          <div className="mt-12 p-6 bg-gradient-card rounded-lg shadow-rainbow max-w-2xl mx-auto">
            <blockquote className="text-lg italic colorful-heading">
              "Good writing is clear thinking made visible. Start your journey to better English composition today!"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
      
      {/* Social Media Icons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-education-blue hover:bg-education-cyan text-white p-3 rounded-full shadow-blue transition-all hover:scale-110"
        >
          <Facebook className="h-5 w-5" />
        </a>
        
        <a
          href={`https://wa.me/?text=${encodeURIComponent(`Check out this English Composition Helper: ${window.location.href}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-education-green hover:bg-education-yellow text-white p-3 rounded-full shadow-green transition-all hover:scale-110"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        
        <a
          href={`https://www.instagram.com/`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-education-purple to-education-pink hover:from-education-pink hover:to-education-orange text-white p-3 rounded-full shadow-pink transition-all hover:scale-110"
        >
          <Instagram className="h-5 w-5" />
        </a>
        
        <a
          href={`https://m.me/?text=${encodeURIComponent(`Check out this English Composition Helper: ${window.location.href}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-education-blue hover:bg-education-purple text-white p-3 rounded-full shadow-blue transition-all hover:scale-110"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default Index;
