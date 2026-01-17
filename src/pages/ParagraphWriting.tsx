import { ArrowLeft, FileText, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ParagraphWriting = () => {
  const paragraphExamples = [
    {
      title: "Benefits of Reading Books",
      description: "A paragraph about why reading is valuable",
      content: `Reading books is one of the best habits (बानी) a person can develop (विकास गर्न). It increases (बढाउँछ) our knowledge (ज्ञान) and helps us learn new things every day. When we read stories, our imagination (कल्पना) grows stronger and we can picture different worlds in our minds. Reading also improves (सुधार गर्छ) our language skills because we learn new words and better ways to express (व्यक्त गर्न) ourselves. After a tiring day, sitting with a good book can reduce (कम गर्न) stress (तनाव) and make us feel calm (शान्त). Books teach us that learning never stops (रुक्दैन), no matter how old we become. That is why reading is truly a wonderful hobby (शौक) that enriches (समृद्ध बनाउँछ) our lives.`
    },
    {
      title: "Importance of Saving Water",
      description: "A paragraph about water conservation",
      content: `Water is one of the most precious (बहुमूल्य) resources on our planet, and saving it is our duty (कर्तव्य). Many places around the world face water scarcity (पानीको अभाव), making life very difficult for people there. Water is essential (आवश्यक) for drinking, farming, and daily activities, so we cannot survive (बाँच्न) without it. By using water wisely (बुद्धिमानी साथ), we can prevent (रोक्न) drought (खडेरी) and ensure there is enough for everyone. Simple actions like fixing leaky (चुहिने) taps and collecting rainwater through harvesting (संकलन) systems can make a big difference. We must practice conservation (संरक्षण) today so that future generations (भावी पुस्ता) can also enjoy clean and safe water. Every drop we save truly matters (महत्त्वपूर्ण छ).`
    },
    {
      title: "Advantages of Playing Sports",
      description: "A paragraph about benefits of sports activities",
      content: `Playing sports is very beneficial (फाइदाजनक) for both our body and mind. Regular physical (शारीरिक) activity keeps us fit (स्वस्थ) and improves our stamina (सहनशक्ति), making us stronger and more energetic (ऊर्जावान). Sports teach us important values like teamwork (सहकार्य), discipline (अनुशासन), and leadership (नेतृत्व), which help us in all areas of life. When we play with others, we learn to work together and respect our teammates (सहकर्मीहरू). Physical exercise also reduces (घटाउँछ) stress and helps us feel happier after a busy day of studying. By making sports a part of our daily routine (दिनचर्या), we develop a healthy lifestyle (स्वस्थ जीवनशैली) that stays with us forever. Everyone should try to play at least one sport regularly.`
    },
    {
      title: "Value of Time Management",
      description: "A paragraph about managing time wisely",
      content: `Time is one of the most precious (बहुमूल्य) things we have, and once it passes, we can never get it back. Good time management starts with proper planning (योजना) and making a schedule (तालिका) for our daily tasks. Being punctual (समयनिष्ठ) shows that we respect other people's time as well as our own. When we manage our time well, we avoid unnecessary stress (अनावश्यक तनाव) because we complete our work on time without rushing. This also increases (बढाउँछ) our productivity (उत्पादकता), allowing us to achieve (हासिल गर्न) more each day. Students who practice time management often find success (सफलता) in their studies and future careers (भविष्यको करियर). A balanced routine (सन्तुलित दिनचर्या) with time for work, play, and rest makes life much happier.`
    },
    {
      title: "Importance of Healthy Eating Habits",
      description: "A paragraph about nutritious food choices",
      content: `Eating healthy food is one of the best things we can do for our body and mind. A balanced diet (सन्तुलित आहार) that includes proteins (प्रोटिन), carbohydrates (कार्बोहाइड्रेट), and vitamins (भिटामिन) keeps us strong and active throughout the day. Fresh fruits (ताजा फलफूल) and vegetables (तरकारी) boost (बढाउँछ) our immunity (रोग प्रतिरोधक क्षमता) and help us fight against common illnesses (सामान्य रोगहरू). When we eat nutritious (पोषक) meals, we have more energy (ऊर्जा) to study, play, and do our daily activities. Healthy food also keeps our brain sharp (तीक्ष्ण) and improves our mental alertness (मानसिक सतर्कता) in class. By avoiding junk food (जंक फुड) and choosing wholesome (स्वास्थ्यकर) meals, we can prevent (रोक्न) many diseases and maintain a healthy body (स्वस्थ शरीर). Good eating habits formed in childhood last a lifetime.`
    },
    {
      title: "My Favorite Festival - Dashain",
      description: "A paragraph about Nepal's biggest festival",
      content: `Dashain is the biggest and most important festival (चाड) in Nepal. It lasts for fifteen days and usually falls in September or October. During Dashain, all family members come together to celebrate (मनाउन). We worship (पूजा गर्छौं) Goddess Durga and ask for her blessings (आशीर्वाद). On the tenth day, called Vijaya Dashami, elders put tika and jamara on our foreheads and give us blessings. We also receive money and gifts from relatives (आफन्त). The whole atmosphere (वातावरण) is filled with joy (खुशी), love, and unity (एकता). Houses are cleaned and decorated (सजाइएको), and everyone wears new clothes. Dashain teaches us the importance (महत्त्व) of family bonds and our cultural traditions (सांस्कृतिक परम्परा).`
    },
    {
      title: "Beautiful Nepal",
      description: "A paragraph describing Nepal's natural beauty",
      content: `Nepal is a beautiful country located (अवस्थित) between India and China. It is famous for having the world's highest mountain, Mount Everest. Nepal has many different landscapes (भूदृश्यहरू) including high mountains, green hills, rivers, and forests. The weather varies (फरक-फरक हुन्छ) from hot in the Terai region to very cold in the mountain areas. Nepal is home to many rare (दुर्लभ) animals like the one-horned rhinoceros (एक सिंगे गैंडा), tigers, and snow leopards. The country has many rivers including the Ganges, which is considered (मानिन्छ) holy by Hindus. Nepal's natural beauty (प्राकृतिक सौन्दर्य) attracts (आकर्षित गर्छ) tourists from all over the world who come to see the mountains, go trekking, and experience (अनुभव गर्न) our rich culture.`
    },
    {
      title: "My School Life",
      description: "A paragraph about daily school experiences",
      content: `My school life is very interesting (रोचक) and full of learning (सिकाइ). I wake up early every morning and get ready for school. Our school starts at 10 AM and ends at 4 PM. We have different subjects (विषयहरू) like English, Nepali, Mathematics, Science, and Social Studies. My favorite subject is English because I want to improve (सुधार गर्न) my speaking skills. During lunch break, I play with my friends in the playground (खेल मैदान). Our teachers are very kind and helpful (सहयोगी). They explain (व्याख्या गर्नुहुन्छ) difficult topics until we understand them properly. School is not just about studying; we also learn about teamwork (सहकार्य), friendship (मित्रता), and discipline (अनुशासन). I enjoy participating (भाग लिन) in programs during festivals and competitions. School is preparing (तयार गर्दैछ) me for my future career and making me a better person.`
    },
    {
      title: "The Importance of Education",
      description: "A paragraph about why education matters in Nepal",
      content: `Education (शिक्षा) is very important for the development (विकास) of Nepal and its people. It helps us learn new things and understand (बुझ्न) the world around us. With good education, people can get better jobs and improve (सुधार गर्न) their living conditions (जीवन स्तर). Education teaches us to think logically (तार्किक रूपमा) and solve (समाधान गर्न) problems in our daily life. In Nepal, many children in rural areas still do not have access (पहुँच) to quality education. The government should build more schools and hire qualified (योग्य) teachers. Parents should also understand that education is more important than immediate (तत्काल) income from child labor. Educated people can contribute (योगदान गर्न) to the country's progress (प्रगति) and help reduce poverty (गरिबी). Education also teaches us about our rights and responsibilities (अधिकार र जिम्मेवारी) as citizens of Nepal.`
    },
    {
      title: "Environmental Protection in Nepal",
      description: "A paragraph about protecting Nepal's environment",
      content: `Nepal's environment (वातावरण) is facing many serious (गम्भीर) problems that need immediate attention (तत्काल ध्यान). Air pollution (वायु प्रदूषण) in Kathmandu has reached dangerous (खतरनाक) levels, making it difficult for people to breathe clean air. Deforestation (वन विनाश) is happening rapidly as people cut trees for firewood and building materials (सामग्री). Many rivers are polluted (प्रदूषित) with garbage and industrial waste (औद्योगिक फोहोर). Climate change (जलवायु परिवर्तन) is melting glaciers (हिमनदी) in the Himalayas, which could cause floods and water shortages (पानीको अभाव). We must act now to protect (संरक्षण गर्न) our environment. People should use clean energy like solar power instead of burning fossil fuels (जीवाश्म इन्धन). Everyone should plant more trees and stop throwing garbage in rivers. The government should make strict (कडा) laws against pollution and ensure they are followed. If we don't protect our environment today, future generations (भावी पुस्ता) will suffer greatly.`
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