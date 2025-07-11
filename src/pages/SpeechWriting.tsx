import { Megaphone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SpeechWriting = () => {
  const speechExamples = [
    {
      title: "Constitution Day Speech",
      description: "Speech for Nepal's Constitution Day celebration",
      content: `Respected Principal, dear teachers, and my fellow students,

Namaste to everyone!

Today, we are gathered here to celebrate Nepal's Constitution Day. On this important day, I want to talk about the significance of our constitution and our duties as young citizens.

Nepal's constitution was adopted on September 20, 2015, after years of struggle and sacrifice by our leaders and people. This constitution made Nepal a federal democratic republic and gave equal rights to all citizens regardless of caste, gender, or religion.

Our constitution guarantees many fundamental rights including the right to education, healthcare, and freedom of speech. It also protects the rights of women, minorities, and marginalized communities. This is something we should be proud of as Nepali citizens.

However, having rights also means having responsibilities. As students, our first responsibility is to study hard and become educated citizens. We should respect our teachers, parents, and elders. We should also protect our environment and cultural heritage.

We must never discriminate against anyone based on their caste, religion, or background. Our constitution teaches us that all people are equal and deserve respect. Unity in diversity is Nepal's strength.

I urge all my fellow students to become responsible citizens who follow the constitution and work for Nepal's development. Let us promise to build a prosperous, peaceful, and progressive Nepal.

Thank you for your attention. Jai Nepal!`
    },
    {
      title: "World Environment Day Speech",
      description: "Speech about environmental protection",
      content: `Respected teachers and dear friends,

Good morning to all!

Today, I want to speak about a very important topic - protecting our environment. As we all know, environmental problems are getting worse every day, and Nepal is also facing many challenges.

Air pollution in Kathmandu has reached dangerous levels. Our beautiful rivers like Bagmati and Bishnumati are polluted with garbage and waste. Deforestation is destroying our forests, and climate change is melting our glaciers.

These problems affect our health and our future. Children are getting sick from air pollution. Farmers are struggling because of irregular rainfall. Our tourism industry suffers when tourists see dirty rivers and polluted cities.

But we can solve these problems if we work together. As students, we can plant trees in our schools and communities. We should not throw garbage on the streets or in rivers. We can use cloth bags instead of plastic bags.

We should walk or ride bicycles for short distances instead of using vehicles. At home, we can save electricity by turning off lights when not needed. We should also convince our families to use clean energy like solar power.

Remember, Earth is our only home. If we destroy it, we have nowhere else to go. Other countries like Bhutan have shown that development and environmental protection can go together.

Let us all promise to protect our beautiful Nepal and keep it clean and green. Small actions by each of us can make a big difference.

Thank you!`
    },
    {
      title: "Teachers' Day Speech",
      description: "Speech honoring teachers on Teachers' Day",
      content: `Respected Principal, beloved teachers, and dear friends,

Namaste!

Today, we celebrate Teachers' Day to honor and thank our teachers who guide us every day. In Nepal, we say "Guru Brahma, Guru Vishnu, Guru Devo Maheshwara" which means teachers are like gods to us.

Teachers are the builders of our nation. They shape our minds, character, and future. Without teachers, there would be no doctors, engineers, pilots, or leaders. Every successful person in the world once had a teacher who believed in them.

Our teachers come to school every day with patience and dedication. They explain difficult topics until we understand them. When we make mistakes, they correct us with love. When we feel sad or confused, they encourage us and show us the right path.

Teaching is not just a profession; it is a sacred duty. Our teachers not only teach us subjects like Mathematics and Science, but they also teach us good values, discipline, and how to be good human beings.

I remember my first-grade teacher who taught me to read and write. I remember my science teacher who made difficult concepts easy to understand. I remember my English teacher who helped me speak confidently. All these teachers have contributed to making me who I am today.

On this special day, on behalf of all students, I want to say thank you to our teachers. Thank you for your patience when we don't understand. Thank you for believing in us when we doubt ourselves. Thank you for preparing us for the future.

We promise to respect you, study hard, and make you proud. We will never forget the lessons you have taught us.

Happy Teachers' Day!

Dhanyabad!`
    },
    {
      title: "Anti-Drug Campaign Speech",
      description: "Speech about the dangers of drug abuse",
      content: `Dear friends and fellow students,

Today I want to talk about a serious problem that is affecting young people in Nepal - drug abuse. This is not an easy topic, but it is important that we understand the dangers and stay away from drugs.

Drugs like marijuana, brown sugar, and other substances are destroying the lives of many young Nepalis. Some students think that trying drugs is cool or modern, but this is completely wrong. Drugs are not cool - they are dangerous and can ruin your entire life.

Why do some young people start using drugs? Sometimes it's peer pressure - friends forcing them to try. Sometimes it's curiosity or wanting to feel different. Some people use drugs to escape from problems or stress. But drugs never solve problems; they create bigger problems.

Drug addiction affects your health, your studies, your family, and your future. Students who use drugs cannot concentrate in class. Their grades drop, and they may even drop out of school. They start lying to their parents and stealing money. Many drug users end up in hospitals or even die from overdose.

How can we protect ourselves? First, choose your friends carefully. Stay away from people who use drugs or pressure you to try them. If someone offers you drugs, say "NO" firmly and walk away. There is no shame in refusing drugs - it shows you are smart and strong.

If you have problems or stress, talk to your parents, teachers, or counselors. There are better ways to deal with difficulties than using drugs. Focus on your studies, sports, and hobbies. Keep yourself busy with positive activities.

Remember, your life is precious. You have dreams and goals for the future. Don't let drugs destroy everything you have worked for. Be strong, be smart, and say no to drugs.

Thank you!`
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
            <Megaphone className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Speech Writing</h1>
          </div>
          <p className="text-muted-foreground">
            Learn how to write powerful speeches for school events and national occasions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {speechExamples.map((example, index) => (
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
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for Speech Writing</h2>
          <ul className="space-y-2 text-education-text">
            <li>• Start with a proper greeting to the audience</li>
            <li>• Have a clear introduction, main body, and conclusion</li>
            <li>• Use simple, powerful language that everyone can understand</li>
            <li>• Include relevant examples and stories to make it interesting</li>
            <li>• Practice your speech aloud before presenting</li>
            <li>• Make eye contact with the audience while speaking</li>
            <li>• End with a strong message or call to action</li>
            <li>• Keep it appropriate for the occasion and audience</li>
            <li>• Use "Namaste" and "Dhanyabad" for Nepali context</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpeechWriting;