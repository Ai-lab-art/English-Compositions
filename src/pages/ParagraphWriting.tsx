import { ArrowLeft, FileText, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ParagraphWriting = () => {
  const paragraphExamples = [
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

  const foodMenuExamples = [
    {
      title: "Everest Summit Restaurant - Traditional Nepali Cuisine",
      description: "A menu description for authentic Nepali dishes",
      content: `Welcome to Everest Summit Restaurant, where the authentic flavors of Nepal come alive on your plate. Our signature Dal Bhat Tarkari is a complete meal featuring steamed rice, lentil soup, mixed vegetables, and your choice of chicken or mutton curry, served with fresh pickles and papad. The aromatic spices and traditional cooking methods create a dining experience that takes you straight to the heart of Kathmandu. Each dish is prepared with locally sourced ingredients and centuries-old family recipes passed down through generations of Nepali cooks.`
    },
    {
      title: "Himalayan Garden Cafe - International & Local Fusion",
      description: "A modern restaurant menu combining Nepali and international flavors",
      content: `Himalayan Garden Cafe offers a unique fusion of traditional Nepali cuisine with international favorites. Our bestselling Chicken Sekuwa is marinated for 24 hours in Himalayan herbs and spices, then grilled to perfection over an open flame. Pair it with our signature Gundruk soup, made from fermented leafy greens that provide a tangy and nutritious start to your meal. For our international guests, we also serve wood-fired pizzas topped with local yak cheese and fresh vegetables grown in our own garden. Every meal comes with complimentary Nepali tea served in traditional clay cups.`
    },
    {
      title: "Annapurna Lodge - Mountain Trekker's Special",
      description: "A simple yet hearty menu for mountain climbers and trekkers",
      content: `Located at the base of Annapurna, our lodge specializes in hearty meals that provide energy for mountain adventures. Our Famous Trekker's Breakfast includes two fried eggs, hash browns made from local potatoes, grilled tomatoes, and freshly baked bread with homemade jam. The generous portion ensures you have enough energy for a full day of hiking. Our evening special features Thukpa, a warming noodle soup filled with vegetables and your choice of chicken or yak meat, perfect for recovering after a long day on the mountain trails.`
    },
    {
      title: "Royal Palace Restaurant - Luxury Dining Experience",
      description: "An upscale restaurant menu featuring premium Nepali cuisine",
      content: `Royal Palace Restaurant presents the finest in luxury Nepali dining with dishes inspired by ancient royal kitchens. Our Maharaja's Feast includes tender goat curry slow-cooked in aromatic spices, saffron rice, and an assortment of palace vegetables prepared in traditional ghee. The meal is accompanied by freshly made naan bread and concluded with our signature dessert, Kheer, made with organic milk, almonds, and cardamom. Each dish is elegantly presented on handcrafted copper plates, creating an authentic royal dining experience in the heart of modern Nepal.`
    },
    {
      title: "Village Corner Restaurant - Home-style Cooking",
      description: "A family-run restaurant serving simple, delicious home-cooked meals",
      content: `Village Corner Restaurant brings the warmth of Nepali home cooking to your table with recipes from our grandmother's kitchen. Our Popular Family Meal serves four people and includes fragrant rice, creamy black lentils, seasonal vegetables from local farms, and tender chicken cooked in village-style spices. Everything is served on traditional brass plates with a side of homemade pickles and fresh yogurt. The cozy atmosphere, complete with wooden tables and traditional decorations, makes every guest feel like part of our extended family sharing a meal together.`
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

        {/* Food Menu Section */}
        <div className="mt-12">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-foreground mb-2">Restaurant Food Menu Writing</h2>
            <p className="text-muted-foreground">
              Learn how to write appealing food menu descriptions that attract customers
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {foodMenuExamples.map((example, index) => (
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