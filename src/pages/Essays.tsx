import { ArrowLeft, PenTool } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Essays = () => {
  const essayExamples = [
    {
      title: "My Best Friend",
      description: "A descriptive essay about friendship",
      content: `My best friend is Sarah, and she has been my closest companion for the past five years. We met in primary school when she helped me pick up my books after I dropped them in the hallway.

Sarah is a wonderful person with many great qualities. She has long brown hair and bright green eyes that always seem to be smiling. But what makes her special is not how she looks, but who she is inside.

She is one of the kindest people I know. Whenever I feel sad or worried, Sarah always knows how to cheer me up. She listens carefully to my problems and gives me helpful advice. She never judges me or makes me feel bad about my mistakes.

Sarah is also very honest and trustworthy. I can tell her all my secrets, and I know she will never share them with anyone else. When she promises to do something, she always keeps her word.

We enjoy doing many things together. We love reading books, watching movies, and going for walks in the park. Sometimes we study together, which makes even difficult homework seem easier and more fun.

Having Sarah as my best friend has made my life much happier. She has taught me the importance of loyalty, kindness, and trust. I hope our friendship will last forever, and I will always be grateful for having such a wonderful friend.

In conclusion, Sarah is not just my best friend; she is like a sister to me. True friendship is one of life's greatest gifts, and I am lucky to have found it with Sarah.`
    },
    {
      title: "The Importance of Education",
      description: "An argumentative essay about the value of learning",
      content: `Education is one of the most important things in human life. It shapes who we become and opens doors to countless opportunities. In today's world, education is not just helpful—it is essential for success and happiness.

First, education gives us knowledge and skills that we need for our future careers. When we study math, science, languages, and other subjects, we develop our minds and learn to think clearly. These skills help us solve problems and make good decisions throughout our lives.

Second, education helps us understand the world around us. Through history, we learn about the past and avoid repeating mistakes. Through science, we understand how nature works. Through literature, we learn about different cultures and ways of thinking.

Education also makes us better citizens. When we are educated, we can participate in democracy by voting wisely and understanding important issues. We can help our communities and contribute to making the world a better place.

Furthermore, education gives us confidence and independence. When we have knowledge and skills, we don't have to depend on others for everything. We can think for ourselves and make our own choices about our lives.

Some people might argue that education is expensive and takes too much time. However, the benefits of education far outweigh the costs. People with good education generally earn more money, have better health, and lead more satisfying lives.

In conclusion, education is the key to a successful and meaningful life. It gives us knowledge, skills, confidence, and opportunities. Every young person should value their education and work hard to learn as much as possible. As Nelson Mandela said, "Education is the most powerful weapon which you can use to change the world."`
    },
    {
      title: "A Day I Will Never Forget",
      description: "A narrative essay about a memorable personal experience",
      content: `Last summer, I experienced a day that changed my life forever. It was the day I learned that small acts of courage can make a big difference.

It was a hot Tuesday morning when my family and I went to the beach for our annual vacation. The sun was shining brightly, and the ocean looked calm and inviting. I was excited to swim and play in the waves with my younger brother Tom.

After playing for about an hour, I noticed a little girl, maybe six years old, playing alone near the water's edge. She had a bright yellow swimsuit and was building a sandcastle. Her parents seemed to be busy talking and not paying attention to her.

Suddenly, a large wave came and knocked the little girl down. She started to panic and struggled in the water. The wave was pulling her deeper into the ocean. I could see the fear in her eyes as she tried to call for help, but her voice was too weak.

My heart started beating fast. I had to make a quick decision. Should I call for help, or should I act immediately? The girl was getting further from shore, and her parents still hadn't noticed what was happening.

Without thinking twice, I ran into the water. I am a strong swimmer, thanks to years of swimming lessons, but the waves were stronger than I expected. I swam as fast as I could toward the little girl.

When I reached her, she was coughing and crying. "Don't worry," I told her, trying to stay calm. "I'm here to help you." I wrapped my arm around her and started swimming back to shore, fighting against the waves.

It seemed to take forever, but finally, we reached shallow water where we could stand. The little girl's parents came running when they saw us. Her mother hugged her daughter tightly, crying with relief.

"Thank you so much," the father said to me, his voice shaking. "You saved our daughter's life." I felt proud but also a little scared when I realized what could have happened.

That day taught me that sometimes we have to act quickly to help others, even when we feel afraid. I learned that being brave doesn't mean you're not scared—it means you do the right thing even when you are scared.

I will never forget the grateful look in that little girl's eyes and the feeling of knowing I made a difference. That experience showed me that anyone, even a teenager like me, can be a hero when the situation calls for it.`
    },
    {
      title: "Environmental Protection: Our Responsibility",
      description: "An expository essay about environmental issues and solutions",
      content: `Our planet Earth is facing serious environmental problems that threaten the future of all living things. Air pollution, water contamination, deforestation, and climate change are just some of the challenges we must address. It is our responsibility to protect the environment for ourselves and future generations.

One of the biggest environmental problems is air pollution. Cars, factories, and power plants release harmful gases into the atmosphere. This pollution causes health problems like asthma and lung disease. It also contributes to global warming, which is changing weather patterns around the world.

Water pollution is another serious issue. Chemicals from factories and farms flow into our rivers, lakes, and oceans. This contaminated water kills fish and other sea creatures. It also makes water unsafe for humans to drink, causing diseases in many parts of the world.

Deforestation, or cutting down forests, destroys the homes of countless animals and plants. Trees are important because they produce oxygen and absorb carbon dioxide. When we cut down too many trees, we lose this natural protection against climate change.

Fortunately, there are many things we can do to help protect our environment. We can reduce pollution by walking, biking, or using public transportation instead of driving cars. We can also save energy by turning off lights and electronics when we don't need them.

Recycling is another important way to help the environment. When we recycle paper, plastic, and metal, we reduce the amount of waste that goes to landfills. We also save the energy and resources needed to make new products.

Planting trees and creating gardens can help improve air quality and provide homes for wildlife. Even small actions like picking up litter in our neighborhoods make a difference.

Schools and communities can work together to educate people about environmental protection. When more people understand these problems, they are more likely to take action to solve them.

In conclusion, environmental protection is everyone's responsibility. We cannot wait for governments and businesses to solve these problems alone. Each person must do their part to keep our planet healthy and beautiful. The actions we take today will determine what kind of world we leave for our children and grandchildren.`
    },
    {
      title: "The Benefits of Reading Books",
      description: "A persuasive essay encouraging reading habits",
      content: `In our digital age, many young people spend most of their free time on social media, video games, and watching videos. While technology has its benefits, we should not forget about one of humanity's greatest inventions: books. Reading books offers incredible benefits that can improve our lives in many ways.

First, reading books improves our language skills and vocabulary. When we read, we encounter new words and learn how to use them correctly. This helps us communicate better in both speaking and writing. Students who read regularly typically perform better in school because they have stronger language abilities.

Reading also exercises our brain and improves our thinking skills. Unlike watching TV or scrolling through social media, reading requires active concentration and imagination. We must visualize characters, settings, and events in our minds. This mental exercise keeps our brains sharp and healthy.

Books provide us with knowledge about countless topics. Whether we read about history, science, other cultures, or different time periods, books expand our understanding of the world. This knowledge helps us become more interesting people and better conversationalists.

Furthermore, reading books can reduce stress and help us relax. When we lose ourselves in a good story, we forget about our daily worries and problems. Reading before bedtime can help us sleep better because it calms our minds after a busy day.

Books also develop our empathy and emotional intelligence. When we read about different characters and their experiences, we learn to understand other people's feelings and perspectives. This makes us more compassionate and better at building relationships.

Some people argue that reading is boring or too slow compared to modern entertainment. However, once you find books that interest you, reading becomes just as exciting as any movie or video game. The key is to start with topics you already enjoy.

Another argument is that reading takes too much time. But reading just 20-30 minutes per day can make a significant difference. You can read during lunch breaks, before bed, or while commuting.

In conclusion, reading books is one of the best habits young people can develop. It improves our language skills, exercises our brains, increases our knowledge, reduces stress, and helps us understand others better. I encourage everyone to pick up a book today and discover the joy of reading. Your future self will thank you for this wonderful habit.`
    },
    {
      title: "AI and Its Importance",
      description: "An essay about Artificial Intelligence and its impact on society",
      content: `Artificial Intelligence (AI) has become one of the most important technological developments of our time. It is changing the way we live, work, and interact with the world around us. Understanding AI and its importance is crucial for everyone in today's digital age.

AI refers to computer systems that can perform tasks that normally require human intelligence. These tasks include learning, reasoning, problem-solving, understanding language, and recognizing patterns. Examples of AI that we use every day include voice assistants like Siri and Alexa, recommendation systems on Netflix and YouTube, and navigation apps like Google Maps.

The importance of AI in education cannot be overlooked. AI-powered tools can help students learn more effectively by providing personalized lessons and instant feedback. Teachers can use AI to identify students who need extra help and create customized learning materials. Online tutoring systems powered by AI are making quality education accessible to students everywhere.

In healthcare, AI is saving lives by helping doctors diagnose diseases faster and more accurately. AI systems can analyze medical images, predict health problems, and even assist in surgical procedures. This technology is particularly valuable in areas where there are not enough doctors and medical specialists.

AI is also transforming the business world. Companies use AI to improve customer service through chatbots, optimize their operations, and make better decisions based on data analysis. This leads to increased efficiency and better products and services for consumers.

However, AI also presents some challenges that we must address carefully. There are concerns about job displacement as AI systems become capable of performing tasks previously done by humans. We also need to ensure that AI systems are fair and do not discriminate against certain groups of people.

Privacy and security are other important considerations. As AI systems collect and analyze vast amounts of personal data, we must have strong protections to keep this information safe and prevent misuse.

Despite these challenges, the benefits of AI far outweigh the risks when it is developed and used responsibly. AI has the potential to solve some of humanity's biggest problems, from climate change to poverty and disease.

For young people like us, it is important to understand AI and learn how to work with these technologies. This doesn't mean everyone needs to become a computer programmer, but we should all have basic AI literacy to participate fully in the future economy and society.

In conclusion, AI is not just a trend or a futuristic concept—it is a reality that is already reshaping our world. By embracing AI while addressing its challenges thoughtfully, we can harness its power to create a better future for everyone. The key is to ensure that AI development remains focused on benefiting humanity and improving the quality of life for all people.`
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
            <PenTool className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Essay Writing</h1>
          </div>
          <p className="text-muted-foreground">
            Learn to write clear, organized essays that express your ideas effectively
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {essayExamples.map((example, index) => (
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
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for Essay Writing</h2>
          <ul className="space-y-2 text-education-text">
            <li>• Start with a clear introduction that states your main idea</li>
            <li>• Organize your thoughts into separate paragraphs</li>
            <li>• Use examples and evidence to support your points</li>
            <li>• Write clear topic sentences for each paragraph</li>
            <li>• End with a strong conclusion that summarizes your main points</li>
            <li>• Always proofread for grammar and spelling mistakes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Essays;