import { Megaphone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SpeechWriting = () => {
  const speechExamples = [
    {
      title: "Constitution Day Speech",
      description: "Speech for Nepal's Constitution Day celebration",
      content: `Respected (सम्मानित) Principal, dear teachers, and my fellow students,

Namaste to everyone!

Today, we are gathered (जम्मा भएका छौं) here to celebrate Nepal's Constitution Day. On this important day, I want to talk about the significance (महत्त्व) of our constitution and our duties (कर्तव्य) as young citizens (नागरिक).

Nepal's constitution was adopted (अपनाइएको) on September 20, 2015, after years of struggle (संघर्ष) and sacrifice (त्याग) by our leaders and people. This constitution made Nepal a federal (संघीय) democratic republic (गणतन्त्र) and gave equal rights (समान अधिकार) to all citizens regardless (चाहे जे होस्) of caste (जात), gender (लिङ्ग), or religion (धर्म).

Our constitution guarantees (सुनिश्चित गर्छ) many fundamental rights (मौलिक अधिकार) including the right to education (शिक्षाको अधिकार), healthcare (स्वास्थ्य सेवा), and freedom of speech (बोल्ने स्वतन्त्रता). It also protects (सुरक्षा गर्छ) the rights of women, minorities (अल्पसंख्यक), and marginalized (सीमान्तकृत) communities. This is something we should be proud (गर्व) of as Nepali citizens.

However (तथापि), having rights also means having responsibilities (जिम्मेवारी). As students, our first responsibility is to study hard and become educated (शिक्षित) citizens. We should respect our teachers, parents, and elders. We should also protect (रक्षा गर्ने) our environment and cultural heritage (सांस्कृतिक सम्पदा).

We must never discriminate (भेदभाव गर्नु हुँदैन) against anyone based on their caste, religion, or background. Our constitution teaches us that all people are equal (समान) and deserve (हकदार) respect. Unity in diversity (विविधतामा एकता) is Nepal's strength.

I urge (आग्रह गर्छु) all my fellow students to become responsible citizens who follow the constitution and work for Nepal's development (विकास). Let us promise to build a prosperous (समृद्ध), peaceful (शान्तिपूर्ण), and progressive (प्रगतिशील) Nepal.

Thank you for your attention. Jai Nepal!`
    },
    {
      title: "World Environment Day Speech",
      description: "Speech about environmental protection",
      content: `Respected teachers and dear friends,

Good morning to all!

Today, I want to speak about a very important topic - protecting (संरक्षण गर्ने) our environment (वातावरण). As we all know, environmental problems are getting worse (खराब हुँदै) every day, and Nepal is also facing many challenges (चुनौतीहरू).

Air pollution (वायु प्रदूषण) in Kathmandu has reached dangerous (खतरनाक) levels. Our beautiful rivers like Bagmati and Bishnumati are polluted (प्रदूषित) with garbage (फोहोर) and waste. Deforestation (वन विनाश) is destroying our forests, and climate change (जलवायु परिवर्तन) is melting (पग्लिरहेको) our glaciers (हिमनदी).

These problems affect (प्रभाव पार्छ) our health and our future. Children are getting sick from air pollution. Farmers (किसानहरू) are struggling because of irregular (अनियमित) rainfall. Our tourism industry suffers (कष्ट पाउँछ) when tourists see dirty rivers and polluted cities.

But we can solve (समाधान गर्न सक्छौं) these problems if we work together. As students, we can plant trees in our schools and communities (समुदाय). We should not throw garbage on the streets or in rivers. We can use cloth bags instead of plastic bags.

We should walk or ride bicycles (साइकल) for short distances instead of using vehicles (सवारी साधन). At home, we can save electricity (बिजुली) by turning off lights when not needed. We should also convince (मनाउने) our families to use clean energy like solar power (सौर्य ऊर्जा).

Remember (याद राख्नुहोस्), Earth is our only home. If we destroy (नष्ट) it, we have nowhere else to go. Other countries like Bhutan have shown that development and environmental protection can go together.

Let us all promise to protect our beautiful Nepal and keep it clean and green. Small actions by each of us can make a big difference (ठूलो फरक).

Thank you!`
    },
    {
      title: "Teachers' Day Speech",
      description: "Speech honoring teachers on Teachers' Day",
      content: `Respected Principal, beloved teachers, and dear friends,

Namaste!

Today, we celebrate Teachers' Day to honor (सम्मान गर्न) and thank our teachers who guide (मार्गदर्शन गर्ने) us every day. In Nepal, we say "Guru Brahma, Guru Vishnu, Guru Devo Maheshwara" which means teachers are like gods to us.

Teachers are the builders (निर्माताहरू) of our nation (राष्ट्र). They shape (आकार दिन्छन्) our minds, character (चरित्र), and future (भविष्य). Without teachers, there would be no doctors, engineers, pilots, or leaders. Every successful (सफल) person in the world once had a teacher who believed (विश्वास गरेको) in them.

Our teachers come to school every day with patience (धैर्य) and dedication (समर्पण). They explain (व्याख्या गर्नुहुन्छ) difficult topics until we understand them. When we make mistakes (गल्तीहरू), they correct us with love. When we feel sad or confused (अलमलमा), they encourage (प्रोत्साहित गर्नुहुन्छ) us and show us the right path (सही बाटो).

Teaching is not just a profession (पेशा); it is a sacred (पवित्र) duty. Our teachers not only teach us subjects like Mathematics and Science, but they also teach us good values (मूल्य), discipline (अनुशासन), and how to be good human beings (राम्रो मानिस).

I remember my first-grade teacher who taught me to read and write. I remember my science teacher who made difficult concepts (अवधारणाहरू) easy to understand. I remember my English teacher who helped me speak confidently (आत्मविश्वासी भएर). All these teachers have contributed (योगदान गरेका) to making me who I am today.

On this special day, on behalf (तर्फबाट) of all students, I want to say thank you to our teachers. Thank you for your patience when we don't understand. Thank you for believing in us when we doubt (शंका) ourselves. Thank you for preparing us for the future.

We promise to respect you, study hard, and make you proud (गर्व गराउने). We will never forget the lessons (पाठहरू) you have taught us.

Happy Teachers' Day!

Dhanyabad (धन्यवाद)!`
    },
    {
      title: "Anti-Drug Campaign Speech",
      description: "Speech about the dangers of drug abuse",
      content: `Dear friends and fellow students,

Today I want to talk about a serious (गम्भीर) problem that is affecting (असर पार्दैछ) young people in Nepal - drug abuse (लागुऔषध दुरुपयोग). This is not an easy topic, but it is important that we understand the dangers (खतराहरू) and stay away from drugs.

Drugs like marijuana, brown sugar, and other substances are destroying (बर्बाद गर्दैछ) the lives of many young Nepalis. Some students think that trying drugs is cool or modern, but this is completely wrong. Drugs are not cool - they are dangerous and can ruin (बर्बाद गर्न) your entire (सम्पूर्ण) life.

Why do some young people start using drugs? Sometimes it's peer pressure (साथीहरूको दबाब) - friends forcing them to try. Sometimes it's curiosity (जिज्ञासा) or wanting to feel different. Some people use drugs to escape (भाग्न) from problems or stress (तनाव). But drugs never solve problems; they create bigger problems.

Drug addiction (लत) affects your health (स्वास्थ्य), your studies, your family, and your future. Students who use drugs cannot concentrate (ध्यान दिन सक्दैनन्) in class. Their grades drop (घट्छ), and they may even drop out of school. They start lying to their parents and stealing money. Many drug users end up in hospitals or even die (मृत्यु हुने) from overdose.

How can we protect (जोगाउन) ourselves? First, choose your friends carefully. Stay away from people who use drugs or pressure you to try them. If someone offers (दिन्छ भने) you drugs, say "NO" firmly (दृढता साथ) and walk away. There is no shame (लाज) in refusing drugs - it shows you are smart and strong.

If you have problems or stress, talk to your parents, teachers, or counselors (परामर्शदाताहरू). There are better ways to deal with difficulties (कठिनाइहरू) than using drugs. Focus (ध्यान दिनुहोस्) on your studies, sports, and hobbies. Keep yourself busy with positive (सकारात्मक) activities.

Remember, your life is precious (अमूल्य). You have dreams (सपनाहरू) and goals for the future. Don't let drugs destroy (नष्ट गर्न) everything you have worked for. Be strong, be smart, and say no to drugs.

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