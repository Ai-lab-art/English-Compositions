import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const StoryWriting = () => {
  const storyExamples = [
    {
      title: "The Honest Woodcutter",
      description: "A story about honesty and its rewards",
      outline: `Outline:
1. A poor woodcutter loses his axe in the river
2. A fairy appears with a golden axe - woodcutter says it's not his
3. Fairy brings a silver axe - woodcutter remains honest
4. Fairy brings his real iron axe - woodcutter claims it
5. Fairy rewards his honesty with all three axes`,
      content: `Once upon a time, there lived a poor (गरिब) woodcutter (दाउरा काट्ने) near a deep forest. Every day, he would go to the forest to cut wood and sell it in the market to feed his family.

One day, while cutting wood near a river, his old axe (बन्चरो) slipped from his hands and fell into the deep water. The woodcutter sat by the river and began to cry because he could not buy a new axe.

Suddenly (अचानक), a fairy (परी) appeared from the water holding a golden (सुनको) axe. "Is this your axe?" she asked kindly (दयालु भएर). The woodcutter looked at the beautiful golden axe but shook his head. "No, that is not mine. My axe was old and made of iron."

The fairy disappeared (हराइन्) and came back with a silver (चाँदीको) axe. "Is this yours?" she asked again. Once more, the honest (इमानदार) woodcutter said, "No, my axe was not so beautiful."

Finally (अन्ततः), the fairy brought his old iron axe. "Yes! That's my axe!" said the woodcutter happily. The fairy was impressed (प्रभावित) by his honesty (इमानदारी).

"Because you told the truth (सत्य), you can keep all three axes," said the fairy, and gave him the golden, silver, and iron axes.

The woodcutter returned home rich and happy, and never had to worry (चिन्ता) about money again.

Moral (नैतिक शिक्षा): Honesty is always rewarded (पुरस्कृत). When we tell the truth, good things happen to us.`
    },
    {
      title: "The Lazy Grasshopper and the Hardworking Ant",
      description: "A story about the importance of hard work and planning",
      outline: `Outline:
1. Grasshopper spends summer singing and dancing
2. Ant works hard collecting food for winter
3. Grasshopper mocks ant for working too hard
4. Winter arrives - grasshopper has no food
5. Ant helps grasshopper and teaches him about planning`,
      content: `Once, in a beautiful meadow (घाँसे मैदान) lived a grasshopper (फट्यांग्रा) and an ant (कमिला). The grasshopper loved to sing and dance all day under the warm summer sun. He never worried (चिन्ता गरेन) about anything and spent his time having fun.

The ant, however (तथापि), worked hard every day. From morning until evening, she collected (संकलन गर्थी) food and stored it safely in her home. "Winter (जाडो) is coming," she always reminded herself.

One day, the grasshopper saw the ant carrying a heavy (भारी) grain of wheat. "Why do you work so hard?" laughed the grasshopper. "Come and dance with me! The sun is shining and life is beautiful!"

"I must prepare (तयारी गर्नुपर्छ) for winter," replied the ant. "You should also collect food. Soon it will be cold and there will be no food to find."

The grasshopper just laughed. "Winter is still far away! I have plenty of time to worry about that later." And he continued singing and dancing.

Summer passed quickly, and soon the cold winter arrived (आयो). Snow covered the ground, and no food could be found anywhere.

The grasshopper was cold and hungry (भोको). He remembered (सम्झ्यो) the wise (बुद्धिमान) ant and went to her home. "Please help me," he said sadly. "I have no food and I'm very hungry."

The kind (दयालु) ant shared her food with the grasshopper. "Next summer, you must work hard and prepare for winter," she advised (सल्लाह दिइन्).

The grasshopper learned (सिक्यो) his lesson and promised (वाचा गर्यो) to work hard in the future.

Moral (नैतिक शिक्षा): Hard work (मेहनत) and planning for the future are very important. We should not waste time when we should be preparing for difficult (कठिन) times.`
    },
    {
      title: "The Boy Who Cried Wolf",
      description: "A story about the consequences of lying",
      outline: `Outline:
1. Shepherd boy gets bored watching sheep alone
2. Boy falsely cries "Wolf!" to get attention
3. Villagers come running but find no wolf
4. Boy repeats the lie several times
5. Real wolf comes but nobody believes the boy's cries`,
      content: `Once upon a time, there was a young shepherd (गोठालो) boy who lived in a village (गाउँ) near the mountains. His job was to watch the sheep and protect (रक्षा गर्ने) them from wild animals.

The boy often felt bored (बोरिङ) and lonely (एक्लो) watching the sheep all day. One day, he thought of a plan (योजना) to have some fun and get attention from the villagers (गाउँलेहरू).

"Wolf! Wolf! A wolf is attacking (आक्रमण गर्दैछ) the sheep!" he shouted loudly from the hillside.

The villagers heard his cries and came running with sticks and tools to help him. But when they reached the hill, they found no wolf anywhere. The sheep were grazing (घाँस खाइरहेका थिए) peacefully.

"Where is the wolf?" they asked, breathing heavily from running.

The boy laughed. "There was no wolf! I just wanted to see if you would come!"

The villagers were angry but returned (फर्के) to their work. A few days later, the boy played the same trick again. Once more, the villagers came running, and once more, there was no wolf.

"This is not funny!" said the villagers. "Don't lie (झूठ बोल्नु हुँदैन) to us again!" They were very upset (रिसाए) and went back to the village.

A week later, a real wolf came down from the mountains and started attacking the sheep. The boy was terrified (डरायो) and shouted for help.

"Wolf! Wolf! Please help me! This time there really is a wolf!"

But the villagers heard his cries and said, "He's lying again. We won't fall for his tricks (चालमा पर्दैनौं) anymore." Nobody came to help.

The wolf scared away many sheep, and the boy lost his job. He learned that lying has serious consequences (गम्भीर परिणाम).

Moral (नैतिक शिक्षा): If you lie often, people will not believe (विश्वास गर्दैनन्) you even when you tell the truth. Trust (विश्वास) is easily lost but very hard to regain (फिर्ता पाउन).`
    },
    {
      title: "The Tortoise and the Hare",
      description: "A story about persistence and humility",
      outline: `Outline:
1. Proud hare makes fun of slow tortoise
2. Tortoise challenges hare to a race
3. Hare runs ahead and takes a nap, feeling overconfident
4. Tortoise continues slowly but steadily
5. Tortoise wins while hare sleeps`,
      content: `Once, in a sunny meadow (घाँसे मैदान), there lived a speedy (छिटो) hare (खरायो) who was very proud (घमण्डी) of how fast he could run. He often bragged (घमण्ड गर्थ्यो) to other animals about his incredible speed (गति).

One day, he met a slow-moving tortoise (कछुवा) and began to make fun (मजाक गर्न) of him. "You are so slow!" laughed the hare. "It takes you forever to go anywhere!"

The tortoise remained (रह्यो) calm and said quietly, "Speed is not everything. Would you like to race (दौड प्रतियोगिता) with me?"

All the animals gathered (जम्मा भए) to watch this unusual (असाधारण) race. "This will be easy!" thought the hare. "I'll win without even trying hard."

The race began, and the hare immediately (तुरुन्तै) sprinted far ahead of the tortoise. He was so confident (आत्मविश्वासी) that he decided to take a nap (झट्टा) under a shady tree.

"I have plenty of time," he thought. "The tortoise is so slow that I can sleep for hours and still win easily."

Meanwhile (त्यति बेला), the tortoise continued moving slowly (बिस्तारै) but steadily (निरन्तर). Step by step, he never stopped walking toward the finish line. He passed the sleeping hare without making any noise.

The hare woke up just as the sun was setting. He looked around and couldn't see the tortoise anywhere behind him. "Good," he thought, "I still have time."

But when he reached the finish line (अन्त्य रेखा), he got the biggest surprise (आश्चर्य) of his life. The tortoise was already there, surrounded by cheering (जयजयकार गर्दै) animals!

"How did you win?" asked the amazed (चकित) hare.

"I never stopped trying (कोसिस गर्न छोडिनँ)," replied the tortoise with a gentle smile. "Slow and steady (बिस्तारै तर निरन्तर) wins the race."

Moral (नैतिक शिक्षा): Consistent (निरन्तर) effort and determination (दृढ संकल्प) are more important than natural talent (प्राकृतिक प्रतिभा). Never give up, and don't let pride make you careless (लापरवाह).`
    },
    {
      title: "The Kind Lion and the Grateful Mouse",
      description: "A story about kindness and how small acts matter",
      outline: `Outline:
1. Mouse accidentally disturbs sleeping lion
2. Lion catches mouse but spares his life
3. Mouse promises to help lion someday
4. Lion gets trapped in hunters' net
5. Mouse saves lion by chewing through ropes`,
      content: `Once upon a time, in the heart of the jungle lived a mighty (शक्तिशाली) lion, the king (राजा) of all animals. One hot afternoon, he was sleeping peacefully under a large tree when a tiny (सानो) mouse accidentally (गल्तीले) ran across his paw.

The lion woke up angry and grabbed (समात्यो) the little mouse with his huge paw. "How dare you disturb (बाधा दिने) my sleep!" he roared (गर्जियो). "I should eat you right now!"

The mouse trembled (काम्यो) with fear but spoke bravely (साहसी भएर), "Please, Your Majesty (महाराज), forgive (माफ गर्नुहोस्) me! I didn't mean to wake you. If you spare (छोडिदिनुभयो भने) my life, I promise (वाचा) I will help you someday."

The lion laughed loudly. "You? Help me? You're just a tiny mouse! How could someone so small (सानो) ever help the king of the jungle?" But he was feeling generous (उदार) that day, so he let the mouse go.

"Thank you so much!" squeaked the grateful (कृतज्ञ) mouse, and he quickly ran away.

A few weeks later, some hunters (शिकारीहरू) came to the jungle and set a large net trap (जाल) for the lion. When the lion was walking through the forest, he got caught (फसेको) in the strong ropes and couldn't escape no matter how hard he tried.

The lion roared for help, and all the animals heard him, including the little mouse. The mouse immediately ran to where the lion was trapped.

"Don't worry, Your Majesty! I'll help you!" said the mouse.

The lion was surprised (आश्चर्यचकित). "How can you possibly help me?"

The clever mouse began to chew (कुट्न) through the ropes with his sharp (तीक्ष्ण) teeth. He worked quickly and carefully until he had made a hole big enough for the lion to escape.

"You're free (मुक्त)!" announced the mouse proudly.

The lion was amazed and grateful. "Thank you, little friend. I was wrong to think that someone small couldn't help someone big. You saved my life!"

From that day on, the lion and the mouse became the best of friends.

Moral (नैतिक शिक्षा): Kindness (दयालुता) is never wasted, and even the smallest (सानो) person can make a big difference (ठूलो फरक). We should treat everyone with respect (सम्मान), no matter how different they are from us.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-education-light">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link to="/table-of-contents">
            <Button variant="ghost" className="mb-4 twinkle-button px-6 py-3 text-lg font-semibold">
              <ArrowLeft className="mr-3 h-6 w-6" />
              Back to Contents
            </Button>
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Story Writing with Morals</h1>
          </div>
          <p className="text-muted-foreground">
            Learn to write engaging stories that teach important life lessons
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {storyExamples.map((example, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-education-text">{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-education-text mb-2">Story Outline:</h4>
                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg border-2 border-orange-200 shadow-sm">
                    <div className="text-sm text-orange-800 leading-relaxed">
                      {example.outline.replace(/Outline:\n/, '').split('\n').filter(line => line.trim()).map((point, idx) => {
                        const cleanPoint = point.replace(/^\d+\.\s*/, '');
                        return (
                          <div key={idx} className="flex items-start gap-2 mb-2">
                            <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{cleanPoint}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-education-text mb-2">Complete Story:</h4>
                  <div className="bg-education-light p-4 rounded-lg border max-h-96 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-sm text-education-text">
                      {example.content}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-card rounded-lg shadow-card">
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for Writing Stories with Morals</h2>
          <ul className="space-y-2 text-education-text">
            <li>• Start with interesting characters that readers can relate to</li>
            <li>• Create a clear problem or conflict in your story</li>
            <li>• Show how characters learn and grow through their experiences</li>
            <li>• Make the moral lesson clear but not too obvious</li>
            <li>• Use simple language that everyone can understand</li>
            <li>• End with a satisfying conclusion that teaches the lesson</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StoryWriting;