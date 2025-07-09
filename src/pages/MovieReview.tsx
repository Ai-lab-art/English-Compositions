import { ArrowLeft, Film } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
Rating: 5 out of 5 stars

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
Rating: 4.5 out of 5 stars

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
Rating: 5 out of 5 stars

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
Rating: 4 out of 5 stars

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
Rating: 4.5 out of 5 stars

Moana is a beautiful Disney movie about a brave Polynesian girl who sails across the ocean to save her island. This movie celebrates Pacific Island culture in a respectful and colorful way.

The animation is absolutely gorgeous. The ocean looks so real that you feel like you could jump into it. The island scenes show the beauty of tropical paradise with amazing detail.

Moana is a strong female character who follows her dreams despite obstacles. She teaches us to be brave, follow our hearts, and never give up on our goals.

The music is fantastic, especially songs like "How Far I'll Go" and "You're Welcome." Lin-Manuel Miranda created songs that are catchy and meaningful.

Maui, voiced by Dwayne Johnson, is a funny and lovable character. The relationship between Moana and Maui shows how people can help each other grow.

The movie respects Polynesian culture and shows the importance of traditions, family, and protecting nature.

The only small problem is that some parts might be too intense for very young children, especially the scenes with Te Kā.

Moana is a wonderful movie that combines adventure, beautiful music, and important life lessons.`
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
            <Film className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Movie Reviews</h1>
          </div>
          <p className="text-muted-foreground">
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
  );
};

export default MovieReview;