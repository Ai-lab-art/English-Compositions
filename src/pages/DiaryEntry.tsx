import { ArrowLeft, Heart, Sun, Moon, Cloud, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DiaryEntry = () => {
  const diaryEntries = [
    {
      title: "My First Day at New School",
      date: "Monday, March 4th, 2024",
      mood: "Nervous but Excited",
      icon: Sun,
      color: "from-yellow-400 to-orange-500",
      content: `Dear Diary,

Today was my first day at my new school in Kathmandu. I was so nervous this morning that I could barely eat my dal bhat! My stomach felt like there were butterflies doing somersaults inside.

When I walked through the school gates, everything seemed so big and different from my old school in Pokhara. The buildings were taller, and there were so many students everywhere. I felt lost and scared.

But then something wonderful happened. A girl named Priya from my class noticed I was sitting alone during lunch. She came over with her friends and invited me to sit with them. They were so kind and friendly! They asked me about Pokhara and seemed genuinely interested in my stories about the mountains and the lake.

My English teacher, Mrs. Shrestha, was really nice too. When she heard I was new, she made sure to include me in class discussions and helped me feel welcome. She even complimented my handwriting!

The best part of the day was during art class. We were supposed to draw something that represents home. I drew the view of Machhapuchhre mountain from my old house. When I showed it to my classmates, they were amazed and wanted to know more about my life in Pokhara.

By the end of the day, I realized that even though everything was new and scary, there were kind people everywhere willing to help. I'm still missing my old friends, but I'm starting to feel hopeful about making new ones here.

Tomorrow is another day, and I'm actually looking forward to it now!

Good night,
Sita`
    },
    {
      title: "The Day I Climbed My First Mountain",
      date: "Saturday, February 24th, 2024",
      mood: "Proud and Accomplished",
      icon: Star,
      color: "from-green-400 to-blue-500",
      content: `Dear Diary,

Today I did something I never thought I could do - I climbed Sarangkot hill near Pokhara! It was the most challenging and rewarding experience of my life.

We started the hike at 4:30 AM when it was still dark. My uncle had convinced our family to wake up early to catch the sunrise from the top. I was grumbling and complaining about the early hour, but now I'm so glad we did it.

The path was steep and rocky. My legs started hurting after just 30 minutes, and I wanted to give up several times. "I can't do this," I kept telling myself. But my uncle encouraged me to take it one step at a time. "Just focus on the next rock, the next tree," he said.

About halfway up, we met an elderly grandmother who was also climbing. She must have been at least 70 years old, but she was moving steadily and smiling. If she could do it, I definitely could! That gave me the motivation to keep going.

When we finally reached the top, I couldn't believe my eyes. The view was absolutely breathtaking! The Annapurna range stretched out before us like a white wall touching the sky. Machhapuchhre looked so close I felt like I could touch it. And then the sunrise began...

As the first rays of sunlight hit the snow-capped peaks, they turned golden, then pink, then blazing orange. It was like watching nature paint the most beautiful picture ever. I had tears in my eyes - partly from the cold wind, but mostly from the overwhelming beauty of the moment.

I realized that the difficult climb made the view even more special. If we had just driven up, it wouldn't have felt the same. The struggle made the reward so much sweeter.

On the way down, my legs were shaky and I was tired, but my heart was full of pride. I had challenged myself and won. I learned that I'm stronger than I think I am.

I want to remember this feeling forever - the feeling of pushing through difficulty and achieving something amazing.

With love,
Anjali`
    },
    {
      title: "Dashain Festival with My Grandparents",
      date: "Thursday, October 12th, 2023",
      mood: "Joyful and Grateful",
      icon: Heart,
      color: "from-red-400 to-pink-500",
      content: `Dear Diary,

This Dashain was extra special because we spent it at my grandparents' village in Sindhupalchok. It was my first time celebrating the festival in a traditional village setting, and it was magical!

The preparation started days before the actual festival. My grandmother (ama) taught me how to make sel roti from scratch. At first, my attempts looked more like question marks than perfect circles! But ama was so patient, guiding my hands and laughing at my funny-shaped rotis. "Practice makes perfect," she said with a twinkle in her eyes.

The village came alive during Dashain. Everywhere you looked, there were colorful decorations, the smell of delicious food, and the sound of laughter. Children were flying kites from every rooftop, and the sky was full of bright colors dancing in the wind.

On Vijaya Dashami, the blessing ceremony was so meaningful. When my grandfather (aja) put tika on my forehead and gave me his blessings, I felt connected to generations of my family. He told me stories about his own childhood Dashains and how some traditions have remained exactly the same for hundreds of years.

The best part was the community feeling. In the city, we usually celebrate just with our immediate family, but in the village, everyone is like family. Neighbors shared food, children played together regardless of which house they belonged to, and elderly people shared stories that had everyone listening with wide eyes.

I helped ama cook for what felt like an army of relatives who came to visit. We made sukuti, gundruk, and enough dal bhat to feed the entire village! My favorite moment was when all the women of the family were sitting together, peeling vegetables and gossiping. I felt like I was part of something bigger than myself.

In the evening, we sat outside under the stars (you can actually see them clearly in the village, unlike in Kathmandu!), and aja told us old folk tales. His voice was gentle and hypnotic, and even though I've heard some of these stories before, they felt new and exciting in the village setting.

This Dashain taught me that festivals are not just about food and fun - they're about connecting with your roots, honoring your ancestors, and strengthening family bonds. I feel so grateful to be part of this beautiful tradition.

I promised ama I would come back next year and help her make sel roti again. Hopefully, they'll actually look like circles by then!

Blessed and happy,
Rohan`
    },
    {
      title: "The Day the Lights Went Out",
      date: "Tuesday, January 16th, 2024",
      mood: "Reflective and Appreciative",
      icon: Moon,
      color: "from-purple-400 to-indigo-500",
      content: `Dear Diary,

Today we had a power cut that lasted for almost 8 hours, and it turned out to be one of the most interesting days I've had in a long time.

It started this morning when I was getting ready for school. Suddenly, everything went dark. No lights, no fan, no internet. My first reaction was frustration because I couldn't charge my phone or use WiFi to finish my homework.

But then something unexpected happened. My family actually started talking to each other more. Without TV or phones to distract us, we sat together and had real conversations. My dad told us stories about his childhood when power cuts were normal and people had different ways of entertaining themselves.

Mom brought out some old board games that we hadn't touched in years. We played Ludo and cards by candlelight, laughing and joking like we used to when I was younger. My little brother, who usually complains about being bored without his video games, was actually enjoying himself.

At school, classes continued with natural light from the windows. Our teachers used the opportunity to have more discussion-based lessons instead of using the projector. I found myself paying more attention because there were fewer distractions.

During lunch break, instead of everyone being on their phones, we actually talked and played traditional games like stapoo (hopscotch) and hide and seek. It felt like stepping back in time, but in a good way.

The most beautiful moment came in the evening. My neighbor aunty brought out her old oil lamps, and soon many families were sitting outside their houses with candles and diyas. The whole neighborhood looked like it was celebrating something magical. Children were running around playing, and adults were chatting across balconies.

My grandmother, who was visiting us, seemed happiest of all. "This is how we used to live," she said with a smile. "People were closer to each other." She taught us some old songs and games that she played during her childhood.

When the lights finally came back on at 9 PM, there was actually a part of me that felt a little disappointed. We had discovered a slower, more connected way of living that we rarely experience in our busy, digital lives.

This experience made me realize how dependent we've become on electricity and technology. But it also showed me that some of the best moments in life don't require any power at all - just the company of people you love.

I think I'll suggest we have a "no electricity evening" once a week as a family activity. Sometimes the best gifts come in unexpected packages.

Enlightened in the darkness,
Shreya`
    },
    {
      title: "My Interview with the Village Elder",
      date: "Sunday, December 10th, 2023",
      mood: "Inspired and Wise",
      icon: Cloud,
      color: "from-gray-400 to-blue-400",
      content: `Dear Diary,

Today I had the most fascinating conversation with 85-year-old Thulo Apa (grandfather) from our village. For my school project on "Changes in Nepal," I decided to interview him about how life has transformed over the decades.

Thulo Apa's eyes lit up when I asked him to share his memories. He invited me to sit on his porch, offered me sweet tea, and began painting pictures with his words that transported me to a completely different time.

"When I was your age," he began, "there were no roads in our village. If we wanted to go to Kathmandu, it took 3 days of walking through mountain paths. Now you can reach there in 4 hours by bus!" He chuckled at the memory of carrying supplies on his back for such long distances.

He told me about how people used to grow everything they needed. "We didn't buy vegetables from the market," he explained. "Every family had their own kitchen garden. We knew exactly where our food came from and how it was grown." This made me think about how we now buy everything from shops without knowing its origin.

The most interesting part was when he talked about communication. "If we wanted to send a message to another village, we had to walk there ourselves or wait for someone who was traveling in that direction," he said. "Now you children can talk to people on the other side of the world instantly!" He was amazed by my smartphone and asked me to show him how video calls work.

But not all changes have been positive, according to him. "People used to help each other more," he said with a slightly sad smile. "When someone's house needed repair, the whole village would come together. Now everyone is busy with their own lives." This made me reflect on how individualistic our society has become.

He also spoke about the environment. "The rivers were cleaner, and there were more trees. We could drink directly from streams without worrying about getting sick." This reminded me of the environmental challenges we face today.

What struck me most was his attitude toward change. Despite missing some aspects of the old days, he wasn't bitter about progress. "Change is like the seasons," he said wisely. "Some things are lost, but new good things also come. The important thing is to keep the good values while embracing helpful new things."

As I was leaving, he gave me a piece of advice that I'll never forget: "Learn from the past, live in the present, but always keep hope for the future. And remember, technology should serve people, not control them."

This conversation made me appreciate both how far we've come and how much wisdom older generations possess. I realized that progress isn't just about having newer and faster things - it's about making life better for everyone while preserving what's truly valuable from our traditions.

I'm definitely going back to hear more of his stories!

Respectfully learning,
Bibek`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/table-of-contents">
            <Button variant="outline" size="lg" className="hover-scale group border-2">
              <ArrowLeft className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              Back to Contents
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            Personal Diary Entries
          </h1>
          <p className="text-xl text-purple-600 max-w-3xl mx-auto">
            Explore personal experiences and reflections through heartfelt diary entries
          </p>
        </div>

        {/* Diary Entries Grid */}
        <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-2">
          {diaryEntries.map((entry, index) => {
            const IconComponent = entry.icon;
            return (
              <Card key={index} className="h-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-purple-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${entry.color} flex items-center justify-center shadow-md`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="bg-purple-100 text-purple-800 hover:bg-purple-200"
                    >
                      {entry.mood}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-purple-900 leading-tight">
                    {entry.title}
                  </CardTitle>
                  <CardDescription className="text-purple-600 font-medium">
                    {entry.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Diary Content */}
                  <div className="prose prose-sm max-w-none">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                      <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line font-mono">
                        {entry.content}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Writing Tips Section */}
        <Card className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Tips for Writing Diary Entries</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Personal Expression:</h4>
                <ul className="space-y-1 text-purple-100">
                  <li>• Write in first person and be authentic</li>
                  <li>• Include emotions and personal reflections</li>
                  <li>• Use conversational, natural language</li>
                  <li>• Add specific details and sensory descriptions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Structure & Content:</h4>
                <ul className="space-y-1 text-purple-100">
                  <li>• Date each entry clearly</li>
                  <li>• Start with significant events or feelings</li>
                  <li>• Include lessons learned or insights gained</li>
                  <li>• End with hopes or plans for the future</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DiaryEntry;