import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const StoryWriting = () => {
  const storyExamples = [
    {
      title: "The Honest Woodcutter",
      description: "A story about honesty and its rewards",
      content: `Once upon a time, there lived a poor woodcutter near a deep forest. Every day, he would go to the forest to cut wood and sell it in the market to feed his family.

One day, while cutting wood near a river, his old axe slipped from his hands and fell into the deep water. The woodcutter sat by the river and began to cry because he could not buy a new axe.

Suddenly, a fairy appeared from the water holding a golden axe. "Is this your axe?" she asked kindly. The woodcutter looked at the beautiful golden axe but shook his head. "No, that is not mine. My axe was old and made of iron."

The fairy disappeared and came back with a silver axe. "Is this yours?" she asked again. Once more, the honest woodcutter said, "No, my axe was not so beautiful."

Finally, the fairy brought his old iron axe. "Yes! That's my axe!" said the woodcutter happily. The fairy was impressed by his honesty.

"Because you told the truth, you can keep all three axes," said the fairy, and gave him the golden, silver, and iron axes.

The woodcutter returned home rich and happy, and never had to worry about money again.

Moral: Honesty is always rewarded. When we tell the truth, good things happen to us.`
    },
    {
      title: "The Lazy Grasshopper and the Hardworking Ant",
      description: "A story about the importance of hard work and planning",
      content: `In a beautiful meadow lived a grasshopper and an ant. The grasshopper loved to sing and dance all day under the warm summer sun. He never worried about anything and spent his time having fun.

The ant, however, worked hard every day. From morning until evening, she collected food and stored it safely in her home. "Winter is coming," she always reminded herself.

One day, the grasshopper saw the ant carrying a heavy grain of wheat. "Why do you work so hard?" laughed the grasshopper. "Come and dance with me! The sun is shining and life is beautiful!"

"I must prepare for winter," replied the ant. "You should also collect food. Soon it will be cold and there will be no food to find."

The grasshopper just laughed. "Winter is still far away! I have plenty of time to worry about that later." And he continued singing and dancing.

Summer passed quickly, and soon the cold winter arrived. Snow covered the ground, and no food could be found anywhere.

The grasshopper was cold and hungry. He remembered the wise ant and went to her home. "Please help me," he said sadly. "I have no food and I'm very hungry."

The kind ant shared her food with the grasshopper. "Next summer, you must work hard and prepare for winter," she advised.

The grasshopper learned his lesson and promised to work hard in the future.

Moral: Hard work and planning for the future are very important. We should not waste time when we should be preparing for difficult times.`
    },
    {
      title: "The Boy Who Cried Wolf",
      description: "A story about the consequences of lying",
      content: `There was a young shepherd boy who lived in a village near the mountains. His job was to watch the sheep and protect them from wild animals.

The boy often felt bored and lonely watching the sheep all day. One day, he thought of a plan to have some fun and get attention from the villagers.

"Wolf! Wolf! A wolf is attacking the sheep!" he shouted loudly from the hillside.

The villagers heard his cries and came running with sticks and tools to help him. But when they reached the hill, they found no wolf anywhere. The sheep were grazing peacefully.

"Where is the wolf?" they asked, breathing heavily from running.

The boy laughed. "There was no wolf! I just wanted to see if you would come!"

The villagers were angry but returned to their work. A few days later, the boy played the same trick again. Once more, the villagers came running, and once more, there was no wolf.

"This is not funny!" said the villagers. "Don't lie to us again!" They were very upset and went back to the village.

A week later, a real wolf came down from the mountains and started attacking the sheep. The boy was terrified and shouted for help.

"Wolf! Wolf! Please help me! This time there really is a wolf!"

But the villagers heard his cries and said, "He's lying again. We won't fall for his tricks anymore." Nobody came to help.

The wolf scared away many sheep, and the boy lost his job. He learned that lying has serious consequences.

Moral: If you lie often, people will not believe you even when you tell the truth. Trust is easily lost but very hard to regain.`
    },
    {
      title: "The Tortoise and the Hare",
      description: "A story about persistence and humility",
      content: `In a sunny meadow, there lived a speedy hare who was very proud of how fast he could run. He often bragged to other animals about his incredible speed.

One day, he met a slow-moving tortoise and began to make fun of him. "You are so slow!" laughed the hare. "It takes you forever to go anywhere!"

The tortoise remained calm and said quietly, "Speed is not everything. Would you like to race with me?"

All the animals gathered to watch this unusual race. "This will be easy!" thought the hare. "I'll win without even trying hard."

The race began, and the hare immediately sprinted far ahead of the tortoise. He was so confident that he decided to take a nap under a shady tree.

"I have plenty of time," he thought. "The tortoise is so slow that I can sleep for hours and still win easily."

Meanwhile, the tortoise continued moving slowly but steadily. Step by step, he never stopped walking toward the finish line. He passed the sleeping hare without making any noise.

The hare woke up just as the sun was setting. He looked around and couldn't see the tortoise anywhere behind him. "Good," he thought, "I still have time."

But when he reached the finish line, he got the biggest surprise of his life. The tortoise was already there, surrounded by cheering animals!

"How did you win?" asked the amazed hare.

"I never stopped trying," replied the tortoise with a gentle smile. "Slow and steady wins the race."

Moral: Consistent effort and determination are more important than natural talent. Never give up, and don't let pride make you careless.`
    },
    {
      title: "The Kind Lion and the Grateful Mouse",
      description: "A story about kindness and how small acts matter",
      content: `In the heart of the jungle lived a mighty lion, the king of all animals. One hot afternoon, he was sleeping peacefully under a large tree when a tiny mouse accidentally ran across his paw.

The lion woke up angry and grabbed the little mouse with his huge paw. "How dare you disturb my sleep!" he roared. "I should eat you right now!"

The mouse trembled with fear but spoke bravely, "Please, Your Majesty, forgive me! I didn't mean to wake you. If you spare my life, I promise I will help you someday."

The lion laughed loudly. "You? Help me? You're just a tiny mouse! How could someone so small ever help the king of the jungle?" But he was feeling generous that day, so he let the mouse go.

"Thank you so much!" squeaked the grateful mouse, and he quickly ran away.

A few weeks later, some hunters came to the jungle and set a large net trap for the lion. When the lion was walking through the forest, he got caught in the strong ropes and couldn't escape no matter how hard he tried.

The lion roared for help, and all the animals heard him, including the little mouse. The mouse immediately ran to where the lion was trapped.

"Don't worry, Your Majesty! I'll help you!" said the mouse.

The lion was surprised. "How can you possibly help me?"

The clever mouse began to chew through the ropes with his sharp teeth. He worked quickly and carefully until he had made a hole big enough for the lion to escape.

"You're free!" announced the mouse proudly.

The lion was amazed and grateful. "Thank you, little friend. I was wrong to think that someone small couldn't help someone big. You saved my life!"

From that day on, the lion and the mouse became the best of friends.

Moral: Kindness is never wasted, and even the smallest person can make a big difference. We should treat everyone with respect, no matter how different they are from us.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-education-light">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
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
              <CardContent>
                <div className="bg-education-light p-4 rounded-lg border max-h-96 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm text-education-text">
                    {example.content}
                  </pre>
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