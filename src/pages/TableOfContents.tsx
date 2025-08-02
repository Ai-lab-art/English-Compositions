import { 
  Mail, Film, AtSign, BookOpen, PenTool, Newspaper, Edit, BarChart3,
  FileText, BookOpenCheck, MessageSquare, Megaphone,
  ScrollText, Plane, Home, Shield, ChefHat, Calendar, Heart
} from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Import images
import letterWritingImg from "@/assets/letter-writing.jpg";
import paragraphWritingImg from "@/assets/paragraph-writing.jpg";
import storyWritingImg from "@/assets/story-writing.jpg";
import essaysImg from "@/assets/essays.jpg";
import newsStoryImg from "@/assets/news-story.jpg";
import editorLetterImg from "@/assets/editor-letter.jpg";
import movieReviewImg from "@/assets/movie-review.jpg";
import bookReviewImg from "@/assets/book-review.jpg";
import emailWritingImg from "@/assets/email-writing.jpg";
import speechWritingImg from "@/assets/speech-writing.jpg";
import summaryWritingImg from "@/assets/summary-writing.jpg";
import travelogueWritingImg from "@/assets/travelogue-writing.jpg";
import graphicalInterpretationImg from "@/assets/graphical-interpretation.jpg";
import recipeWritingImg from "@/assets/recipe-writing.jpg";
import rulesRegulationsImg from "@/assets/rules-regulations.jpg";
import newsArticlesImg from "@/assets/news-articles.jpg";
import diaryEntryImg from "@/assets/diary-entry.jpg";
import tableOfContentsHero from "@/assets/table-of-contents-hero.jpg";

const TableOfContents = () => {
  const topics = [
    {
      title: "Letter Writing",
      description: "Formal and informal letters for Nepali context and occasions",
      icon: Mail,
      path: "/letter-writing",
      gradient: "from-blue-500 to-blue-600",
      image: letterWritingImg
    },
    {
      title: "Paragraph Writing",
      description: "Well-structured paragraphs on Nepal's culture, festivals, and daily life",
      icon: FileText,
      path: "/paragraph-writing",
      gradient: "from-amber-500 to-amber-600"
    },
    {
      title: "Story Writing",
      description: "Creative stories with Nepali characters, settings, and moral lessons",
      icon: BookOpen,
      path: "/story-writing",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Essays",
      description: "Essays on Nepal's environment, culture, technology, and modern issues",
      icon: PenTool,
      path: "/essays",
      gradient: "from-red-500 to-red-600"
    },
    {
      title: "News Stories",
      description: "News reporting about events in Nepal and around the world",
      icon: Newspaper,
      path: "/news-story",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Editor Letters",
      description: "Letters to editors about Nepal's social, environmental issues",
      icon: Edit,
      path: "/editor-letter",
      gradient: "from-teal-500 to-teal-600"
    },
    {
      title: "Movie Reviews",
      description: "Reviews of Nepali and international films",
      icon: Film,
      path: "/movie-review",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Book Reviews",
      description: "Reviews of Nepali literature and international books",
      icon: BookOpenCheck,
      path: "/book-review",
      gradient: "from-violet-500 to-violet-600"
    },
    {
      title: "Email Writing",
      description: "Professional and personal emails in Nepali business context",
      icon: AtSign,
      path: "/email-writing",
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Speech Writing",
      description: "Speeches for Nepal's national days, school events, and ceremonies",
      icon: Megaphone,
      path: "/speech-writing",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      title: "Summary Writing",
      description: "Summarizing articles about Nepal's development and progress",
      icon: ScrollText,
      path: "/summary-writing",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      title: "Travelogue Writing",
      description: "Travel experiences in Nepal's beautiful places and heritage sites",
      icon: Plane,
      path: "/travelogue-writing",
      gradient: "from-sky-500 to-sky-600"
    },
    {
      title: "Graphical Interpretation",
      description: "Reading charts and graphs with Nepal's statistics and data",
      icon: BarChart3,
      path: "/graphical-interpretation",
      gradient: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Recipe Writing",
      description: "Traditional Nepali recipes and cooking instructions",
      icon: ChefHat,
      path: "/recipe-writing",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Rules and Regulations",
      description: "Guidelines for different places like schools, hospitals, and parks",
      icon: Shield,
      path: "/rules-regulations",
      gradient: "from-slate-500 to-slate-600",
      image: rulesRegulationsImg
    },
    {
      title: "News Articles",
      description: "Current events and news stories from Nepal with detailed reporting",
      icon: Calendar,
      path: "/news-articles",
      gradient: "from-blue-500 to-cyan-500",
      image: newsArticlesImg
    },
    {
      title: "Diary Entry",
      description: "Personal experiences and reflections through heartfelt diary writing",
      icon: Heart,
      path: "/diary-entry",
      gradient: "from-pink-500 to-rose-500",
      image: diaryEntryImg
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${tableOfContentsHero})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 py-8">
        {/* Back to Home Button */}
        <div className="mb-6">
          <Link to="/">
            <Button 
              variant="outline" 
              size="lg"
              className="twinkling-button hover-scale group border-2"
            >
              <Home className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-4">
            Table of Contents
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Choose any writing topic to practice and improve your English composition skills
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {topics.map((topic, index) => (
            <Link key={index} to={topic.path} className="group">
              <Card className="h-full shadow-card hover:shadow-hover transition-all duration-300 group-hover:scale-105 bg-gradient-card border-0 overflow-hidden">
                {topic.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={topic.image} 
                      alt={topic.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${topic.gradient} flex items-center justify-center shadow-lg`}>
                    <topic.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-education-text group-hover:text-primary transition-colors">
                    {topic.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-education-text text-sm">
                    {topic.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-muted-foreground mt-12">
          <p className="text-sm">
            Practice regularly and improve your English composition skills step by step
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default TableOfContents;