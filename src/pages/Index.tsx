import { Mail, Film, AtSign, BookOpen, PenTool, Newspaper, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const topics = [
    {
      title: "Letter Writing",
      description: "Learn to write formal and informal letters for different occasions",
      icon: Mail,
      path: "/letter-writing",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Movie Reviews",
      description: "Write thoughtful reviews that share your opinions about films",
      icon: Film,
      path: "/movie-review",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Email Writing",
      description: "Master professional and personal email communication",
      icon: AtSign,
      path: "/email-writing",
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Story Writing",
      description: "Create engaging stories with important moral lessons",
      icon: BookOpen,
      path: "/story-writing",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Essays",
      description: "Write clear, organized essays that express your ideas effectively",
      icon: PenTool,
      path: "/essays",
      gradient: "from-red-500 to-red-600"
    },
    {
      title: "News Stories",
      description: "Report facts clearly and objectively in news format",
      icon: Newspaper,
      path: "/news-story",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-education-light">
      <div className="container mx-auto px-4 py-8">
        {/* Header with developer credit */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground mb-2">App developed by: Hom Bahadur Thapa</p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="h-12 w-12 text-primary" />
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              English Composition Helper
            </h1>
          </div>
          <p className="text-xl text-education-text max-w-2xl mx-auto">
            Master the art of English writing with helpful examples and tips for secondary level students
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-center mb-6 text-education-text">
            Choose Your Writing Topic
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => (
              <Link key={index} to={topic.path} className="group">
                <Card className="h-full shadow-card hover:shadow-hover transition-all duration-300 group-hover:scale-105 bg-gradient-card border-0">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${topic.gradient} flex items-center justify-center shadow-lg`}>
                      <topic.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-education-text group-hover:text-primary transition-colors">
                      {topic.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-education-text">
                      {topic.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Features section */}
        <div className="bg-gradient-card rounded-lg shadow-card p-8 mb-8">
          <h2 className="text-2xl font-semibold text-center mb-6 text-education-text">
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-education-blue rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-education-text mb-2">Clear Examples</h3>
              <p className="text-sm text-muted-foreground">
                5+ examples for each topic with detailed explanations
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-education-green rounded-full flex items-center justify-center mx-auto mb-3">
                <PenTool className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-education-text mb-2">Writing Tips</h3>
              <p className="text-sm text-muted-foreground">
                Practical advice to improve your writing skills
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-education-text mb-2">Student-Friendly</h3>
              <p className="text-sm text-muted-foreground">
                Simple language perfect for secondary level students
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-muted-foreground">
          <p className="text-sm">
            Practice regularly and improve your English composition skills step by step
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
