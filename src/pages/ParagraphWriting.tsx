import { ArrowLeft, FileText, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ParagraphWriting = () => {
  const paragraphExamples = [
    {
      title: "Benefits of Reading Books",
      description: "A paragraph about why reading is valuable",
      content: `Reading books is one of the best habits a person can develop. It increases our knowledge and helps us learn new things every day. When we read stories, our imagination grows stronger and we can picture different worlds in our minds. Reading also improves our language skills because we learn new words and better ways to express ourselves. After a tiring day, sitting with a good book can reduce stress and make us feel calm. Books teach us that learning never stops, no matter how old we become. That is why reading is truly a wonderful hobby that enriches our lives.`
    },
    {
      title: "Importance of Saving Water",
      description: "A paragraph about water conservation",
      content: `Water is one of the most precious resources on our planet, and saving it is our duty. Many places around the world face water scarcity, making life very difficult for people there. Water is essential for drinking, farming, and daily activities, so we cannot survive without it. By using water wisely, we can prevent drought and ensure there is enough for everyone. Simple actions like fixing leaky taps and collecting rainwater through harvesting systems can make a big difference. We must practice conservation today so that future generations can also enjoy clean and safe water. Every drop we save truly matters.`
    },
    {
      title: "Advantages of Playing Sports",
      description: "A paragraph about benefits of sports activities",
      content: `Playing sports is very beneficial for both our body and mind. Regular physical activity keeps us fit and improves our stamina, making us stronger and more energetic. Sports teach us important values like teamwork, discipline, and leadership, which help us in all areas of life. When we play with others, we learn to work together and respect our teammates. Physical exercise also reduces stress and helps us feel happier after a busy day of studying. By making sports a part of our daily routine, we develop a healthy lifestyle that stays with us forever. Everyone should try to play at least one sport regularly.`
    },
    {
      title: "Value of Time Management",
      description: "A paragraph about managing time wisely",
      content: `Time is one of the most precious things we have, and once it passes, we can never get it back. Good time management starts with proper planning and making a schedule for our daily tasks. Being punctual shows that we respect other people's time as well as our own. When we manage our time well, we avoid unnecessary stress because we complete our work on time without rushing. This also increases our productivity, allowing us to achieve more each day. Students who practice time management often find success in their studies and future careers. A balanced routine with time for work, play, and rest makes life much happier.`
    },
    {
      title: "Importance of Healthy Eating Habits",
      description: "A paragraph about nutritious food choices",
      content: `Eating healthy food is one of the best things we can do for our body and mind. A balanced diet that includes proteins, carbohydrates, and vitamins keeps us strong and active throughout the day. Fresh fruits and vegetables boost our immunity and help us fight against common illnesses. When we eat nutritious meals, we have more energy to study, play, and do our daily activities. Healthy food also keeps our brain sharp and improves our mental alertness in class. By avoiding junk food and choosing wholesome meals, we can prevent many diseases and maintain a healthy body. Good eating habits formed in childhood last a lifetime.`
    },
    {
      title: "My Favorite Festival - Dashain",
      description: "A paragraph about Nepal's biggest festival",
      content: `Dashain is the biggest and most important festival in Nepal. It lasts for fifteen days and usually falls in September or October. During Dashain, all family members come together to celebrate. We worship Goddess Durga and ask for her blessings. On the tenth day, called Vijaya Dashami, elders put tika and jamara on our foreheads and give us blessings. We also receive money and gifts from relatives. The whole atmosphere is filled with joy, love, and unity. Houses are cleaned and decorated, and everyone wears new clothes. Dashain teaches us the importance of family bonds and our cultural traditions.`
    },
    {
      title: "Beautiful Nepal",
      description: "A paragraph describing Nepal's natural beauty",
      content: `Nepal is a beautiful country located between India and China. It is famous for having the world's highest mountain, Mount Everest. Nepal has many different landscapes including high mountains, green hills, rivers, and forests. The weather varies from hot in the Terai region to very cold in the mountain areas. Nepal is home to many rare animals like the one-horned rhinoceros, tigers, and snow leopards. The country has many rivers including the Ganges, which is considered holy by Hindus. Nepal's natural beauty attracts tourists from all over the world who come to see the mountains, go trekking, and experience our rich culture.`
    },
    {
      title: "My School Life",
      description: "A paragraph about daily school experiences",
      content: `My school life is very interesting and full of learning. I wake up early every morning and get ready for school. Our school starts at 10 AM and ends at 4 PM. We have different subjects like English, Nepali, Mathematics, Science, and Social Studies. My favorite subject is English because I want to improve my speaking skills. During lunch break, I play with my friends in the playground. Our teachers are very kind and helpful. They explain difficult topics until we understand them properly. School is not just about studying; we also learn about teamwork, friendship, and discipline. I enjoy participating in programs during festivals and competitions. School is preparing me for my future career and making me a better person.`
    },
    {
      title: "The Importance of Education",
      description: "A paragraph about why education matters in Nepal",
      content: `Education is very important for the development of Nepal and its people. It helps us learn new things and understand the world around us. With good education, people can get better jobs and improve their living conditions. Education teaches us to think logically and solve problems in our daily life. In Nepal, many children in rural areas still do not have access to quality education. The government should build more schools and hire qualified teachers. Parents should also understand that education is more important than immediate income from child labor. Educated people can contribute to the country's progress and help reduce poverty. Education also teaches us about our rights and responsibilities as citizens of Nepal.`
    },
    {
      title: "Environmental Protection in Nepal",
      description: "A paragraph about protecting Nepal's environment",
      content: `Nepal's environment is facing many serious problems that need immediate attention. Air pollution in Kathmandu has reached dangerous levels, making it difficult for people to breathe clean air. Deforestation is happening rapidly as people cut trees for firewood and building materials. Many rivers are polluted with garbage and industrial waste. Climate change is melting glaciers in the Himalayas, which could cause floods and water shortages. We must act now to protect our environment. People should use clean energy like solar power instead of burning fossil fuels. Everyone should plant more trees and stop throwing garbage in rivers. The government should make strict laws against pollution and ensure they are followed. If we don't protect our environment today, future generations will suffer greatly.`
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
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Paragraph Writing</h1>
          </div>
          <p className="text-muted-foreground">
            Learn how to write well-structured paragraphs on various topics about Nepal
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {paragraphExamples.map((example, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-education-text">{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-education-light p-4 rounded-lg border">
                  <p className="text-sm text-education-text leading-relaxed">
                    {example.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-card rounded-lg shadow-card">
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for Paragraph Writing</h2>
          <ul className="space-y-2 text-education-text">
            <li>• Start with a clear topic sentence that introduces the main idea</li>
            <li>• Use supporting sentences to explain and give examples</li>
            <li>• Keep all sentences related to the main topic</li>
            <li>• Use connecting words like "however," "therefore," "for example"</li>
            <li>• End with a concluding sentence that summarizes the main point</li>
            <li>• Write 5-8 sentences for a good paragraph length</li>
            <li>• Use simple, clear language that everyone can understand</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ParagraphWriting;