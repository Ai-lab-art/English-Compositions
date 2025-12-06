import { ArrowLeft, PartyPopper, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CongratulationsMessage = () => {
  const congratulationsExamples = [
    {
      title: "Congratulations to Friend - School Captain",
      description: "A formal message to a friend selected as School Captain",
      recipient: "Anisha Basnet",
      content: `Dear Anisha,

I am absolutely delighted to hear that you have been selected as the School Captain for the upcoming academic year. This is indeed a proud moment for you, your family, and all your friends. You have always been a responsible and confident person, and I believe the school has made the best choice by selecting you for this prestigious position.

Your leadership qualities and dedication to studies have always inspired me. I am sure you will carry out your duties with great enthusiasm and lead our school to new heights. This is a well-deserved achievement, and I am truly happy for you.

Once again, heartiest congratulations on this wonderful achievement. I wish you all the best in your new role as School Captain.

With warm regards,
Your friend`
    },
    {
      title: "Congratulations to Cousin - Essay Competition Winner",
      description: "A formal message to cousin for winning district-level essay competition",
      recipient: "Rabin Shrestha",
      content: `Dear Rabin,

I am overjoyed to learn that you have secured the first position in the district-level essay competition. This is truly a well-deserved achievement that fills our entire family with immense pride and happiness.

Your talent and creativity have always been remarkable, and this success is a testament to your hard work and dedication. You have proven that with determination and passion, one can achieve great things. I have always admired your way with words, and this victory shows that others recognize your gift too.

I am confident that this is just the beginning of many more achievements to come. You have a bright future ahead of you, and I know you will continue to shine in whatever you pursue.

Congratulations once again on this outstanding achievement. Keep up the excellent work!

With love and best wishes,
Your proud cousin`
    },
    {
      title: "Congratulations to Neighbour - Youth Volunteer Award",
      description: "A formal message to neighbour for receiving Youth Volunteer Award",
      recipient: "Kritika Thapa",
      content: `Dear Kritika,

I was thrilled to hear that you have received the Youth Volunteer Award from the municipality. Please accept my heartiest congratulations on this wonderful recognition of your selfless service to our community.

You have always been a helpful and dedicated person, and your commitment to community service has truly been inspiring. The countless hours you have spent helping others and making our neighbourhood a better place have not gone unnoticed. This award is a fitting tribute to your hard work and compassion.

Your inspiring work sets a beautiful example for young people everywhere. You have shown that one person can make a real difference in the lives of others through kindness and dedication.

I wish you continued success in all your future endeavors. May you keep inspiring others with your wonderful spirit of service.

With warm regards and admiration,
Your neighbour`
    },
    {
      title: "Congratulations to Classmate - National Science Exhibition",
      description: "A formal message to classmate selected for National Science Exhibition",
      recipient: "Milan Chaudhary",
      content: `Dear Milan,

Congratulations on being selected for the National Science Exhibition! I am extremely proud of this remarkable achievement. When I heard the news, I could not contain my excitement because I know how much effort you have put into your innovative project.

Your hardworking nature and passion for science have always impressed me. The countless hours you spent in the laboratory, testing and improving your project, have finally paid off. Your dedication to research and your innovative ideas truly deserve this recognition.

I am confident that you will represent our school brilliantly at the national level. This selection is a testament to your intelligence and perseverance, and I have no doubt that you will achieve even greater things in the future.

Best wishes for the exhibition. I hope your project receives the appreciation it deserves. Keep exploring and innovating!

With pride and best wishes,
Your classmate`
    },
    {
      title: "Congratulations to Friend - Top Singer Award",
      description: "A formal message to friend for winning inter-school singing competition",
      recipient: "Bina Magar",
      content: `Dear Bina,

I am thrilled to congratulate you on winning the title of Top Singer in the inter-school singing competition. This is truly a proud moment for all of us who have always believed in your amazing talent.

Your melodious voice has always captivated everyone who has had the pleasure of hearing you sing. This victory is a result of your disciplined practice and unwavering dedication to music. I remember how you would practice for hours every day, perfecting every note and expression. That hard work has now been rewarded beautifully.

This achievement marks an important milestone in your musical journey ahead. I am certain that this is just the beginning of a successful career in music. Your talent and dedication will take you to even greater heights.

Congratulations once again on this wonderful achievement. May your voice continue to bring joy to everyone who hears it.

With love and admiration,
Your proud friend`
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
            <PartyPopper className="h-8 w-8 text-education-yellow" />
            <h1 className="text-3xl font-bold text-foreground">Message of Congratulations</h1>
          </div>
          <p className="text-muted-foreground">
            Learn how to write formal congratulations messages for various achievements and occasions
          </p>
        </div>

        <div className="grid gap-8">
          {congratulationsExamples.map((example, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-education-text">{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Copy Paper Style Background */}
                <div className="copy-paper-bg p-6 rounded-lg">
                  <p className="text-sm leading-loose whitespace-pre-line font-handwriting text-gray-800">
                    {example.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-card rounded-lg shadow-card">
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for Writing Congratulations Messages</h2>
          <ul className="space-y-2 text-education-text">
            <li>• Begin with expressing your joy and happiness about the achievement</li>
            <li>• Mention the specific achievement or occasion being celebrated</li>
            <li>• Highlight the qualities of the person that led to their success</li>
            <li>• Express your pride and admiration sincerely</li>
            <li>• Include good wishes for their future endeavors</li>
            <li>• End with warm closing remarks appropriate to your relationship</li>
            <li>• Keep the tone positive, encouraging, and heartfelt</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsMessage;