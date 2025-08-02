import { ArrowLeft, Film } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import movieReviewHero from "@/assets/movie-review-hero.jpg";

const MovieReview = () => {
  const reviewExamples = [
    {
      title: "Review of 'The Lion King'",
      description: "A review of the classic Disney animated movie",
      content: `Movie: The Lion King
Director: Roger Allers, Rob Minkoff
Producer: Don Hahn
Starring: Matthew Broderick, James Earl Jones, Jeremy Irons
Genre: Animation, Adventure, Drama
Release Date: June 15, 1994

The Lion King is one of the best animated movies ever made. The story follows Simba, a young lion who must learn to become king after his father's death.

What I liked most about this movie is the beautiful animation and amazing songs. The characters are funny and lovable, especially Timon and Pumbaa. The movie teaches us important lessons about responsibility, courage, and family.

The voice acting is excellent, and the music by Elton John is unforgettable. Songs like "Circle of Life" and "Can You Feel the Love Tonight" are truly magical.

I recommend this movie to everyone, especially families with children. It's a timeless story that makes you laugh, cry, and sing along.

Overall, The Lion King is a masterpiece that will be loved for generations.`
    },
    {
      title: "Review of 'Spider-Man: Into the Spider-Verse'",
      description: "A review focusing on animation and storytelling",
      content: `Movie: Spider-Man: Into the Spider-Verse
Director: Bob Persichetti, Peter Ramsey, Rodney Rothman
Producer: Avi Arad, Phil Lord, Christopher Miller
Starring: Shameik Moore, Jake Johnson, Hailee Steinfeld
Genre: Animation, Action, Adventure, Comedy
Release Date: December 14, 2018

This movie completely changed how we think about animated superhero films. The story follows Miles Morales as he becomes the new Spider-Man and meets other Spider-People from different dimensions.

The animation style is absolutely stunning. It looks like a living comic book with bright colors and creative visual effects. Each character has their own unique animation style that matches their personality.

The story is exciting and emotional. Miles learns that being a hero is not about having powers, but about caring for others. The movie shows that anyone can be a hero, no matter who they are.

The voice acting is great, especially by Shameik Moore as Miles. The action scenes are thrilling and the humor is perfect for both kids and adults.

If I had to find one problem, it would be that some parts move very quickly and might be confusing for younger children.

I highly recommend this movie to superhero fans and animation lovers. It's creative, inspiring, and lots of fun.`
    },
    {
      title: "Review of 'Finding Nemo'",
      description: "A family movie review highlighting themes and characters",
      content: `Movie: Finding Nemo
Director: Andrew Stanton
Producer: Graham Walters
Starring: Albert Brooks, Ellen DeGeneres, Alexander Gould
Genre: Animation, Adventure, Comedy, Family
Release Date: May 30, 2003

Finding Nemo is a heartwarming story about a father fish named Marlin searching for his lost son Nemo. This Pixar movie is perfect for the whole family.

The underwater world is beautifully created with colorful coral reefs and amazing sea creatures. Each character has a unique personality, from the forgetful Dory to the wise sea turtle Crush.

The movie teaches important lessons about independence, trust, and never giving up. Marlin learns to let his son explore the world, while Nemo learns to be brave and confident.

The humor in this movie works for both children and adults. Dory's funny comments and the seagulls saying "Mine! Mine!" always make me laugh.

The adventure is exciting but not too scary for young children. The movie shows that family love can overcome any challenge.

The voice acting by Albert Brooks and Ellen DeGeneres is fantastic. They bring the characters to life perfectly.

Finding Nemo is a movie that everyone should watch. It's funny, touching, and beautifully made.`
    },
    {
      title: "Review of 'Harry Potter and the Philosopher's Stone'",
      description: "A review of the first Harry Potter movie adaptation",
      content: `Movie: Harry Potter and the Philosopher's Stone
Director: Chris Columbus
Producer: David Heyman
Starring: Daniel Radcliffe, Emma Watson, Rupert Grint
Genre: Adventure, Family, Fantasy
Release Date: November 16, 2001

This movie brings the magical world of Harry Potter to life on the big screen. It follows Harry as he discovers he's a wizard and starts his first year at Hogwarts School.

The best part of this movie is how it creates the magical world. Hogwarts castle looks exactly like I imagined from reading the book. The special effects for spells and magical creatures are amazing.

Daniel Radcliffe, Emma Watson, and Rupert Grint are perfect as Harry, Hermione, and Ron. They show the friendship and loyalty that makes the story so special.

The movie teaches us about friendship, courage, and standing up for what's right. Harry learns that love and friendship are more powerful than magic.

The film is quite long (about 2.5 hours), which might be difficult for younger children. Some scenes with the three-headed dog might be a bit scary.

The music by John Williams is beautiful and makes every scene more exciting. The Quidditch game is thrilling to watch.

I recommend this movie to anyone who loves adventure and magic. It's the perfect start to an amazing film series.`
    },
    {
      title: "Review of 'Moana'",
      description: "A review highlighting cultural themes and music",
      content: `Movie: Moana
Director: Ron Clements, John Musker
Producer: Osnat Shurer
Starring: Auli'i Cravalho, Dwayne Johnson, Rachel House
Genre: Animation, Adventure, Comedy, Family, Musical
Release Date: November 23, 2016

Moana is a beautiful Disney movie about a brave Polynesian girl who sails across the ocean to save her island. This movie celebrates Pacific Island culture in a respectful and colorful way.

The animation is absolutely gorgeous. The ocean looks so real that you feel like you could jump into it. The island scenes show the beauty of tropical paradise with amazing detail.

Moana is a strong female character who follows her dreams despite obstacles. She teaches us to be brave, follow our hearts, and never give up on our goals.

The music is fantastic, especially songs like "How Far I'll Go" and "You're Welcome." Lin-Manuel Miranda created songs that are catchy and meaningful.

Maui, voiced by Dwayne Johnson, is a funny and lovable character. The relationship between Moana and Maui shows how people can help each other grow.

The movie respects Polynesian culture and shows the importance of traditions, family, and protecting nature.

      The only small problem is that some parts might be too intense for very young children, especially the scenes with Te Kā.

Moana is a wonderful movie that combines adventure, beautiful music, and important life lessons.`
    },
    {
      title: "Review of 'Pashupati Prasad'",
      description: "A review of the popular Nepali social drama film",
      content: `Movie: Pashupati Prasad
Director: Dipendra K. Khanal
Producer: Madhav Wagle, Narendra Maharjan
Starring: Khagendra Lamichhane, Rabindra Singh Baniya, Barsha Siwakoti
Genre: Social Drama, Comedy
Release Date: January 29, 2016

Pashupati Prasad is one of the finest Nepali movies that beautifully portrays the struggles of ordinary people in Nepal. The story follows Pashupati, a poor man from a village who comes to Kathmandu seeking a better life.

The movie shows the harsh reality of life in Nepal, where honest people often struggle while corrupt people succeed. Khagendra Lamichhane gives an outstanding performance as Pashupati, making us feel his pain and hopes.

What makes this movie special is its realistic portrayal of Nepali society. The dialogues are natural and the situations feel real. The movie doesn't use fancy effects but relies on good storytelling and acting.

The film addresses important social issues like corruption, poverty, and the gap between rich and poor in Nepal. It shows how difficult it is for honest people to survive in a corrupt system.

The cinematography captures both the beauty of rural Nepal and the chaos of Kathmandu city. The music by Rohit John Chettri perfectly complements the story.

The movie might be sad at times, but it gives an important message about honesty, hard work, and staying true to your values.

I highly recommend this movie to anyone who wants to understand Nepali society and culture. It's a masterpiece of Nepali cinema.`
    },
    {
      title: "Review of 'Loot'",
      description: "A review of the popular Nepali action-comedy film",
      content: `Movie: Loot
Director: Nischal Basnet
Producer: Madhav Wagle, Narendra Maharjan
Starring: Saugat Malla, Dayahang Rai, Karma Shakya, Prateek Raj Neupane
Genre: Action, Comedy, Crime
Release Date: February 11, 2012

Loot changed the landscape of Nepali cinema with its fresh approach to storytelling and natural acting. The movie follows four friends who plan a bank robbery to solve their financial problems.

The best thing about Loot is its realistic dialogue and natural acting. The actors don't feel like they're acting - they become their characters. Saugat Malla, Dayahang Rai, and the entire cast deliver brilliant performances.

The movie perfectly balances action and comedy without making it unrealistic. The friendship between the four main characters feels genuine and their problems are relatable to young Nepali audiences.

Director Nischal Basnet created a movie that feels very Nepali while using modern filmmaking techniques. The cinematography and editing are professional and engaging.

The movie addresses real issues that young people face in Nepal - unemployment, financial struggles, and peer pressure. However, it doesn't glorify crime but shows its consequences.

The soundtrack by various artists fits perfectly with the story and has become very popular among Nepali youth.

One small criticism is that some action scenes could have been better choreographed, but the strong story and acting make up for it.

Loot is a landmark movie in Nepali cinema that proved audiences want quality stories with good acting. It's entertaining, thought-provoking, and thoroughly enjoyable.`
    },
    {
      title: "Review of 'Kabaddi'",
      description: "A review of the heartwarming Nepali sports drama",
      content: `Movie: Kabaddi
Director: Ram Babu Gurung
Producer: Nawal Nepal
Starring: Dayahang Rai, Rishma Gurung, Buddhi Tamang, Bijay Baral
Genre: Sports, Drama, Comedy
Release Date: March 27, 2014

Kabaddi is a beautiful movie that combines sports, romance, and social issues in rural Nepal. The story follows Kaji, who returns to his village and gets involved in a kabaddi tournament that becomes more than just a game.

Dayahang Rai once again proves why he's one of Nepal's best actors. His portrayal of Kaji is natural and convincing. The entire cast, including the villagers, gives authentic performances that make the story believable.

The movie beautifully captures rural Nepali life with its traditions, festivals, and community spirit. The kabaddi matches are exciting and well-filmed, making you feel like you're part of the crowd cheering.

What makes Kabaddi special is how it addresses serious social issues like caste discrimination and gender equality while maintaining a light and entertaining tone. The movie shows how sports can bring people together despite their differences.

The romance between Kaji and the female characters is sweet and doesn't overshadow the main story. The comedy is natural and arises from situations rather than forced jokes.

The cinematography showcases the beautiful landscapes of rural Nepal. The music and songs add to the festive atmosphere of the village celebrations.

The movie successfully shows that Nepali cinema can tell local stories that are both entertaining and meaningful. It celebrates Nepali culture while addressing important social messages.

Kabaddi is a must-watch movie that will make you laugh, think, and feel proud of Nepali storytelling and filmmaking.`
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${movieReviewHero})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link to="/table-of-contents">
            <Button variant="ghost" className="mb-4 twinkle-button px-6 py-3 text-lg font-semibold">
              <ArrowLeft className="mr-3 h-6 w-6" />
              Back to Contents
            </Button>
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <Film className="h-8 w-8 text-white" />
            <h1 className="text-3xl font-bold text-white drop-shadow-lg">Movie Reviews</h1>
          </div>
          <p className="text-white/90 drop-shadow-md">
            Learn how to write thoughtful movie reviews that share your opinions clearly
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {reviewExamples.map((example, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-education-text">{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-education-light p-4 rounded-lg border">
                  <pre className="whitespace-pre-wrap text-sm text-education-text">
                    {example.content}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-card rounded-lg shadow-card">
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for Writing Movie Reviews</h2>
          <ul className="space-y-2 text-education-text">
            <li>• Start with basic movie information (title, director, main actors)</li>
            <li>• Give a brief summary without spoiling the ending</li>
            <li>• Share what you liked and didn't like</li>
            <li>• Comment on acting, story, music, and visual effects</li>
            <li>• Rate the movie and say who should watch it</li>
            <li>• Use specific examples to support your opinions</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MovieReview;