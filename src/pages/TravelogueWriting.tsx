import { Plane, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TravelogueWriting = () => {
  const travelogueExamples = [
    {
      title: "My Journey to Everest Base Camp",
      description: "A travelogue about trekking to Everest Base Camp",
      content: `                                                              Kathmandu-5, Thamel
                                                               25th November, 2025

My Journey to Everest Base Camp

Day 1: Kathmandu to Lukla
Our adventure began early morning when we took a small aircraft from Kathmandu to Lukla. The 35-minute flight was both scary and exciting as we flew between high mountains. Lukla airport is one of the most dangerous airports in the world, but our pilot landed safely. From Lukla, we started our trek to Phakding village, walking for about 3 hours through beautiful rhododendron forests.

Day 3: Namche Bazaar
After two days of walking, we reached Namche Bazaar, the gateway to Everest. This colorful town sits at 3,440 meters above sea level. We could see Mount Everest for the first time from the viewpoint above Namche. The local Sherpa people were very friendly and served us delicious dal-bhat. We spent an extra day here to acclimatize to the high altitude.

Day 7: Tengboche Monastery
The trek to Tengboche was magical. We walked through pine forests and crossed several suspension bridges over roaring rivers. The famous Tengboche Monastery sits in a beautiful location surrounded by snow-capped peaks. We attended the evening prayer ceremony with the monks and felt very peaceful.

Day 12: Everest Base Camp
Finally, after 12 days of trekking, we reached Everest Base Camp at 5,364 meters. Standing there, looking at the world's highest mountain, was an emotional moment. The massive Khumbu Icefall and the climbing camps looked both beautiful and dangerous. Many climbers were preparing for their summit attempts.

Challenges:
The biggest challenge was altitude sickness. Many trekkers in our group suffered from headaches and nausea. The weather changed quickly from sunny to snowy. Food became expensive as we went higher. Sleeping in tea houses was cold and uncomfortable.

What I Learned:
This journey taught me that determination and patience can help us achieve any goal. The Sherpa people's hospitality and strength inspired me greatly. I realized how beautiful and powerful nature is. Most importantly, I learned to appreciate the simple things in life.

I will never forget this incredible journey to the roof of the world. Nepal's mountains are truly a gift to humanity.

Written by: Suresh Tamang
Solukhumbu, Nepal`
    },
    {
      title: "Visiting Lumbini - The Birthplace of Buddha",
      description: "A spiritual journey to Buddha's birthplace",
      content: `                                                              Bhairahawa-8, Siddharthanagar
                                                               10th May, 2025

A Peaceful Journey to Lumbini

I recently visited Lumbini, the birthplace of Lord Buddha, and it was one of the most peaceful experiences of my life. This UNESCO World Heritage Site in southern Nepal attracts pilgrims and tourists from all over the world.

The Sacred Garden:
Our first stop was the Sacred Garden where Queen Mayadevi gave birth to Prince Siddhartha (later Buddha) in 623 BC. The ancient Ashokan Pillar still stands there, marking the exact spot. Seeing the 2,600-year-old pillar gave me goosebumps. The Mayadevi Temple houses the stone carving showing Buddha's birth. Many pilgrims were praying and offering flowers.

International Monasteries:
Lumbini has monasteries built by different countries including Myanmar, Thailand, Japan, and Germany. Each monastery represents the unique architectural style of its country. The Japanese monastery with its golden pagoda was especially beautiful. Monks from various countries were chanting prayers in their own languages, creating a truly international atmosphere.

The Eternal Flame:
We visited the Eternal Flame which has been burning continuously since Buddha's time. Local guides told us stories about Buddha's childhood and how he played in these gardens. The large pond where Buddha's mother took a bath before his birth still exists and is considered holy.

Museum and Learning:
The Lumbini Museum displays ancient artifacts and explains Buddha's life story through paintings and sculptures. I learned about Buddhism's spread to different countries and how it became a world religion. The audio guide was very helpful in understanding the historical significance.

Personal Reflection:
Walking in the same place where Buddha was born filled me with inner peace. The environment was so calm and spiritual that I felt all my worries disappear. Many visitors were meditating under the Bodhi trees. I also tried meditation and felt very relaxed.

Conclusion:
Lumbini is not just a tourist destination; it's a place for spiritual awakening. Every Nepali should visit this sacred site to understand our cultural heritage. The message of peace, love, and compassion that Buddha taught is more relevant today than ever.

I left Lumbini with a peaceful heart and a promise to return again.

Written by: Sangita Sharma
Kapilvastu, Nepal`
    },
    {
      title: "Adventure in Chitwan National Park",
      description: "Wildlife safari experience in Chitwan",
      content: `                                                              Chitwan-7, Sauraha
                                                               18th March, 2025

Wild Adventures in Chitwan National Park

Last week, my family and I spent three amazing days in Chitwan National Park. This was my first time seeing wild animals in their natural habitat, and it was absolutely thrilling.

Day 1: Jungle Safari
We started with an elephant safari early in the morning. Riding on the back of a gentle elephant named Laxmi, we entered the dense forest. Within an hour, we spotted a one-horned rhinoceros with her baby! The mother rhino was huge and looked very powerful. Our guide told us that Chitwan is home to over 600 rhinos.

Later, we took a jeep safari and were lucky to see a Royal Bengal Tiger resting under a tree. Tigers are very rare, so we felt extremely fortunate. We also saw spotted deer, wild boars, and many colorful birds including peacocks and kingfishers.

Day 2: Canoe Ride and Nature Walk
The canoe ride on the Rapti River was peaceful but exciting. We saw gharial crocodiles sunbathing on the riverbank. Some were over 12 feet long! Our guide explained that these crocodiles only eat fish and don't attack humans. We also spotted many water birds and even a few elephants coming to drink water.

During the nature walk, we learned about medicinal plants and trees. The forest is home to over 700 species of animals and 500 species of birds. Our experienced guide showed us tiger paw prints and explained how to identify different animal tracks.

Day 3: Cultural Program
On our last evening, we enjoyed a Tharu cultural program. The local Tharu people performed traditional dances with colorful costumes and told stories about living with wild animals. We learned that Tharu people have been protecting these forests for generations.

Accommodation:
We stayed in a jungle lodge made of local materials. The food was simple but delicious - mostly rice, dal, vegetables, and fish from the river. Sleeping in the jungle with natural sounds was a unique experience.

Conservation Message:
Chitwan National Park is a great example of successful wildlife conservation. Fifty years ago, rhino numbers had dropped to only 100, but now there are over 600. This shows that with proper protection, wildlife can recover.

What I Learned:
This trip taught me the importance of protecting our natural environment. Wild animals need safe spaces to live and breed. Tourism also helps local communities earn money while protecting forests. I realized that humans and animals can live together peacefully if we respect nature.

I encourage all young Nepalis to visit Chitwan and experience the wonder of our wildlife heritage.

Written by: Deepak Thapa Magar
Gorkha, Nepal`
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
            <Plane className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Travelogue Writing</h1>
          </div>
          <p className="text-muted-foreground">
            Learn how to write engaging travel experiences about Nepal's beautiful destinations
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {travelogueExamples.map((example, index) => (
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
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for Travelogue Writing</h2>
          <ul className="space-y-2 text-education-text">
            <li>• Write in chronological order (day by day or place by place)</li>
            <li>• Include specific details about places, people, and experiences</li>
            <li>• Describe your emotions and personal reactions</li>
            <li>• Mention practical information like food, accommodation, and costs</li>
            <li>• Include cultural insights and what you learned</li>
            <li>• Use vivid descriptions to help readers visualize the places</li>
            <li>• Write in first person (I, we, my, our)</li>
            <li>• Include both positive and challenging aspects of the journey</li>
            <li>• End with personal reflections or recommendations</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TravelogueWriting;