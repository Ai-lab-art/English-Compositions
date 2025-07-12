import { GraduationCap, BookOpen, PenTool, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-education-light flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 text-center">
        {/* Main Hero Section */}
        <div className="max-w-4xl mx-auto">
          {/* Developer Credit */}
          <p className="text-sm text-muted-foreground mb-4">App developed by: Hom Bahadur Thapa</p>
          
          {/* Main Title */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <GraduationCap className="h-16 w-16 text-primary animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                English Composition Helper
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-education-text mb-8 max-w-3xl mx-auto leading-relaxed">
            Master the art of English writing with comprehensive examples and tips designed specifically for Nepali secondary level students
          </p>
          
          
          {/* Start Button */}
          <Link to="/table-of-contents">
            <Button 
              size="lg" 
              className="twinkling-button hover-scale group text-lg font-bold px-8 py-4 h-auto bg-gradient-to-r from-pink-500 to-blue-600 text-white border-2 border-pink-400/30 hover:from-pink-600 hover:to-blue-700"
            >
              <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              Start Learning
            </Button>
          </Link>
          
          {/* Motivational Quote */}
          <div className="mt-12 p-6 bg-gradient-card rounded-lg shadow-card max-w-2xl mx-auto">
            <blockquote className="text-lg text-education-text italic">
              "Good writing is clear thinking made visible. Start your journey to better English composition today!"
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
