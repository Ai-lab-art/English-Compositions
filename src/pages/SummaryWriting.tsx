import { ScrollText, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SummaryWriting = () => {
  const summaryExamples = [
    {
      title: "Summary of Article on Education in Nepal",
      description: "Summarizing an article about Nepal's education system",
      originalText: `Original Article: "Challenges in Nepal's Education System"

Nepal's education system faces numerous challenges that hinder the country's development and progress. Despite improvements in recent years, many obstacles remain that prevent children from receiving quality education.

Rural areas suffer the most from educational problems. Many children cannot attend school because their families are poor and need them to work for survival. Schools in remote villages are often far from students' homes, making daily attendance difficult, especially during monsoon season when roads become impassable.

Government schools lack basic infrastructure and facilities. Many classrooms have no proper roof, windows, or furniture. Students sit on the floor and write on broken desks. Most schools don't have clean toilets or safe drinking water, which affects students' health and attendance, particularly among girls.

The shortage of qualified teachers is another major issue. Many remote schools have only one or two teachers for all grades. Some teachers are not properly trained and lack modern teaching methods. Low salaries and difficult working conditions discourage qualified teachers from working in rural areas.

The curriculum is outdated and doesn't prepare students for modern jobs. Students memorize information without understanding concepts. There's little focus on practical skills, creativity, or critical thinking. This creates a gap between what students learn and what employers need.

Private schools create inequality in education. Rich families send their children to expensive private schools with good facilities and qualified teachers. Poor families can only afford government schools with limited resources. This creates two different education systems in the same country.`,
      content: `Article Summary:
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
      originalText: `Original News Report: "Climate Change Threatens Nepal's Mountains"

KATHMANDU - A comprehensive study by Nepal's Department of Hydrology and Meteorology reveals alarming evidence of climate change's devastating impact on the country's Himalayan region, raising urgent concerns about the future of the world's highest mountain range.

The research, conducted over the past decade, shows that glaciers in the Everest region are retreating at an unprecedented rate of 30-60 meters per year. Scientists report that average temperatures in Nepal have increased by 1.8 degrees Celsius over the last three decades, nearly double the global average warming rate.

Dr. Rijan Bhakta Kayastha, a leading glaciologist, warns that this rapid warming is causing irregular rainfall patterns across the country. "Traditional monsoon cycles that farmers have relied on for centuries are becoming unpredictable," he explains. "Some areas receive excessive rainfall causing floods, while others face severe droughts."

The changing climate is triggering more frequent natural disasters. Landslides and flash floods have increased by 40% in the past decade, destroying homes, agricultural land, and infrastructure. Mountain communities report that springs and traditional water sources are drying up, forcing villagers to walk longer distances for clean water.

Wildlife is also suffering as changing temperatures force animals and plants to migrate to higher altitudes. The report documents that several endemic species, including the snow leopard and red panda, face habitat loss and potential extinction.

Tourism, Nepal's major source of foreign currency, is already feeling the impact. Unpredictable weather conditions and increased avalanche risks are affecting trekking routes and mountaineering expeditions.`,
      content: `News Report Summary:
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
      originalText: `Original Story: "The Two Friends and the Bear"

Ram and Shyam had been best friends since childhood. They lived in neighboring houses and did everything together. They went to school together, played together, and shared all their secrets. Everyone in the village knew them as inseparable companions who would do anything for each other.

One sunny morning, the two friends decided to visit a nearby town to buy some books for their studies. The shortest route was through a dense forest, but they were confident and fearless. "We'll be fine," said Ram. "We're together, and together we can face anything."

As they walked deeper into the forest, they chatted and laughed, enjoying the cool shade of the tall trees. Birds chirped overhead, and a gentle breeze made the journey pleasant. They felt happy and carefree.

Suddenly, they heard a loud growling sound behind them. They turned around and saw a huge brown bear emerging from behind the trees. The bear looked hungry and angry, and it was walking directly toward them.

Ram, who was taller and a good climber, immediately looked around and spotted a sturdy tree nearby. Without saying a word to his friend, he quickly ran to the tree and climbed up as high as he could. He sat on a thick branch, safely out of the bear's reach.

Shyam, who was shorter and had never learned to climb trees well, was left alone on the ground. He called out to Ram, "Help me up! Pull me up!" But Ram was too scared and only thought about his own safety.

The bear was getting closer. Shyam remembered something his grandfather had told him: "Bears don't attack dead bodies." So he quickly lay down on the ground, held his breath, and pretended to be dead.

The big bear came closer and sniffed around Shyam's body. It smelled his face, ears, and hands carefully. Shyam remained perfectly still, even though he was terrified. After a few long minutes, the bear decided that Shyam was dead and wandered away into the forest.

When the bear was completely gone, Ram climbed down from the tree. He approached Shyam with a smile, as if nothing had happened. "That was close!" he said cheerfully. "I saw the bear leaning close to your ear. What did it whisper to you?"

Shyam stood up, brushed the dirt off his clothes, and looked at Ram with disappointment in his eyes. "The bear told me something very important," he said quietly. "It said that I should never trust a friend who runs away and leaves me in danger."

Ram realized his mistake, but it was too late. Their friendship was never the same again.`,
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
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-education-text mb-2">Original Text:</h4>
                  <div className="bg-muted p-3 rounded-lg border max-h-60 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-xs text-education-text">
                      {example.originalText}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-education-text mb-2">Summary:</h4>
                  <div className="bg-gray-200 p-4 rounded-lg border border-gray-300">
                    <pre className="whitespace-pre-wrap text-sm text-black font-mono leading-relaxed select-all cursor-text">
                      {example.content}
                    </pre>
                  </div>
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