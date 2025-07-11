import { ScrollText, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SummaryWriting = () => {
  const summaryExamples = [
    {
      title: "Summary of Article on Education in Nepal",
      description: "Summarizing an article about Nepal's education system",
      content: `Original Article Summary:
"Challenges in Nepal's Education System"

The article discusses major problems in Nepal's education system and suggests solutions for improvement. The main points are:

Problems Identified:
- Many children in rural areas cannot attend school due to poverty and distance
- Government schools lack proper buildings, toilets, and drinking water facilities
- There is a shortage of qualified teachers, especially in remote areas
- Students have to study outdated curricula that don't match modern job requirements
- Private schools are expensive and create inequality between rich and poor students

Suggested Solutions:
- The government should increase education budget and build more schools
- Teacher training programs should be improved and teachers should get better salaries
- Technology should be used to provide quality education in remote areas
- The curriculum should include practical skills and modern subjects
- Free education and scholarships should be provided to poor students

Conclusion:
The article concludes that Nepal's education system needs urgent reform. Only with quality education can Nepal achieve development and reduce poverty. Both government and communities must work together to solve these problems.

Word Count: Original article (500 words) → Summary (150 words)`
    },
    {
      title: "Summary of News Report on Climate Change",
      description: "Summarizing a news report about climate change effects in Nepal",
      content: `Original News Report Summary:
"Climate Change Threatens Nepal's Mountains"

A recent news report from The Himalayan Times discusses how climate change is affecting Nepal's mountain regions. Key points include:

Main Findings:
- Glaciers in the Himalayas are melting faster than ever before
- Average temperature in Nepal has increased by 1.8°C in the last 30 years
- Irregular rainfall patterns are affecting agriculture and water supply
- Natural disasters like floods and landslides are increasing
- Many species of plants and animals are at risk of extinction

Impact on People:
- Farmers are struggling with unpredictable weather for crop production
- Water shortage is becoming common in many areas
- Mountain communities face threats from glacial lake flooding
- Tourism industry may suffer if mountain environments are damaged

Recommended Actions:
- Reduce carbon emissions and use renewable energy
- Plant more trees to prevent soil erosion
- Build climate-resilient infrastructure
- Educate people about environmental protection
- Support international climate agreements

The report emphasizes that immediate action is needed to protect Nepal's environment for future generations.

Word Count: Original report (800 words) → Summary (180 words)`
    },
    {
      title: "Summary of Story About Friendship",
      description: "Summarizing a short story with moral lessons",
      content: `Story Summary:
"The Two Friends and the Bear"

This is a summary of a famous moral story about true friendship:

Plot:
Two friends, Ram and Shyam, were walking through a forest when they suddenly saw a dangerous bear coming toward them. Ram quickly climbed a tree to save himself, leaving Shyam alone on the ground. Since Shyam couldn't climb trees, he remembered that bears don't attack dead bodies, so he lay down and pretended to be dead.

The bear came close to Shyam, smelled him all over, and then left thinking he was dead. After the bear was gone, Ram came down from the tree and asked Shyam what the bear whispered in his ear.

Shyam replied, "The bear told me to never trust a friend who abandons you in times of danger."

Moral Lesson:
The story teaches us that true friends stand by each other during difficult times. A real friend will help you when you are in trouble, not run away to save themselves. We should choose our friends carefully and be loyal to those who are loyal to us.

Application:
This story is relevant in modern life where people often forget friendships for personal gain. True friendship is about sacrifice, trust, and support during both good and bad times.

Word Count: Original story (300 words) → Summary (180 words)`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-education-light">
      <div className="container mx-auto px-4 py-6">
        {/* Back to Home Button */}
        <div className="mb-6">
          <Link to="/table-of-contents">
            <Button 
              variant="outline" 
              size="lg"
              className="twinkling-button hover-scale group border-2"
            >
              <Home className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              Back to Contents
            </Button>
          </Link>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <ScrollText className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Summary Writing</h1>
          </div>
          <p className="text-muted-foreground">
            Learn how to write clear and concise summaries of articles, stories, and reports
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {summaryExamples.map((example, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-education-text">{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-education-light p-4 rounded-lg border">
                  <pre className="whitespace-pre-wrap text-sm text-education-text font-mono leading-relaxed">
                    {example.content}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-card rounded-lg shadow-card">
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for Summary Writing</h2>
          <ul className="space-y-2 text-education-text">
            <li>• Read the original text carefully 2-3 times before writing</li>
            <li>• Identify the main ideas and key points</li>
            <li>• Ignore minor details and examples</li>
            <li>• Write in your own words, don't copy sentences</li>
            <li>• Keep the summary much shorter than the original (usually 1/3 length)</li>
            <li>• Maintain the logical order of ideas from the original</li>
            <li>• Don't add your own opinions or interpretations</li>
            <li>• Check that your summary covers all main points</li>
            <li>• Count words to ensure appropriate length</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SummaryWriting;