import { PartyPopper, Home, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CongratulationsMessage = () => {
  const congratulationsExamples = [
    {
      title: "1. Congratulations to Friend - School Captain",
      description: "A formal message to a friend selected as School Captain",
      recipient: "Anisha Basnet",
      content: `Dear Anisha,

I am absolutely delighted (खुसी) to hear that you have been selected as the School Captain for the upcoming academic (शैक्षिक) year. This is indeed a proud moment for you, your family, and all your friends. You have always been a responsible (जिम्मेवार) and confident (आत्मविश्वासी) person, and I believe the school has made the best choice by selecting you for this prestigious (प्रतिष्ठित) position.

Your leadership (नेतृत्व) qualities and dedication (समर्पण) to studies have always inspired (प्रेरित) me. I am sure you will carry out your duties with great enthusiasm (उत्साह) and lead our school to new heights. This is a well-deserved achievement (उपलब्धि), and I am truly happy for you.

Once again, heartiest (हार्दिक) congratulations on this wonderful achievement. I wish you all the best in your new role as School Captain.

With warm regards,
Your friend`
    },
    {
      title: "2. Congratulations to Cousin - Essay Competition Winner",
      description: "A formal message to cousin for winning district-level essay competition",
      recipient: "Rabin Shrestha",
      content: `Dear Rabin,

I am overjoyed (अत्यन्त खुसी) to learn that you have secured the first position in the district-level essay competition. This is truly a well-deserved achievement (उपलब्धि) that fills our entire family with immense (अपार) pride and happiness.

Your talent (प्रतिभा) and creativity (सिर्जनशीलता) have always been remarkable (उल्लेखनीय), and this success is a testament (प्रमाण) to your hard work and dedication (समर्पण). You have proven (प्रमाणित) that with determination (दृढ संकल्प) and passion (जुनुन), one can achieve great things. I have always admired (प्रशंसा गरेको) your way with words, and this victory shows that others recognize (पहिचान) your gift too.

I am confident (विश्वस्त) that this is just the beginning of many more achievements to come. You have a bright future ahead of you, and I know you will continue to shine in whatever you pursue (पछ्याउनु).

Congratulations once again on this outstanding (उत्कृष्ट) achievement. Keep up the excellent work!

With love and best wishes,
Your proud cousin`
    },
    {
      title: "3. Congratulations to Neighbour - Youth Volunteer Award",
      description: "A formal message to neighbour for receiving Youth Volunteer Award",
      recipient: "Kritika Thapa",
      content: `Dear Kritika,

I was thrilled (रोमाञ्चित) to hear that you have received the Youth Volunteer Award from the municipality (नगरपालिका). Please accept my heartiest (हार्दिक) congratulations on this wonderful recognition (पहिचान) of your selfless (निस्वार्थ) service to our community (समुदाय).

You have always been a helpful and dedicated (समर्पित) person, and your commitment (प्रतिबद्धता) to community service has truly been inspiring (प्रेरणादायी). The countless (अनगिन्ती) hours you have spent helping others and making our neighbourhood a better place have not gone unnoticed. This award is a fitting tribute (श्रद्धांजलि) to your hard work and compassion (करुणा).

Your inspiring work sets a beautiful example for young people everywhere. You have shown that one person can make a real difference in the lives of others through kindness (दयालुता) and dedication.

I wish you continued success in all your future endeavors (प्रयास). May you keep inspiring others with your wonderful spirit of service.

With warm regards and admiration (प्रशंसा),
Your neighbour`
    },
    {
      title: "4. Congratulations to Classmate - National Science Exhibition",
      description: "A formal message to classmate selected for National Science Exhibition",
      recipient: "Milan Chaudhary",
      content: `Dear Milan,

Congratulations on being selected for the National Science Exhibition (प्रदर्शनी)! I am extremely (अत्यन्त) proud of this remarkable (उल्लेखनीय) achievement. When I heard the news, I could not contain my excitement (उत्साह) because I know how much effort you have put into your innovative (नवीन) project.

Your hardworking nature and passion (जुनुन) for science have always impressed (प्रभावित) me. The countless hours you spent in the laboratory (प्रयोगशाला), testing and improving your project, have finally paid off. Your dedication (समर्पण) to research and your innovative ideas truly deserve this recognition (मान्यता).

I am confident that you will represent (प्रतिनिधित्व) our school brilliantly (उत्कृष्ट रूपमा) at the national level. This selection is a testament (प्रमाण) to your intelligence (बुद्धिमत्ता) and perseverance (दृढता), and I have no doubt that you will achieve even greater things in the future.

Best wishes for the exhibition. I hope your project receives the appreciation (प्रशंसा) it deserves. Keep exploring and innovating (नवप्रवर्तन)!

With pride and best wishes,
Your classmate`
    },
    {
      title: "5. Congratulations to Friend - Top Singer Award",
      description: "A formal message to friend for winning inter-school singing competition",
      recipient: "Bina Magar",
      content: `Dear Bina,

I am thrilled (रोमाञ्चित) to congratulate you on winning the title of Top Singer in the inter-school singing competition. This is truly a proud moment for all of us who have always believed in your amazing talent (प्रतिभा).

Your melodious (मधुर) voice has always captivated (मोहित) everyone who has had the pleasure of hearing you sing. This victory is a result of your disciplined (अनुशासित) practice and unwavering (अडिग) dedication to music. I remember how you would practice for hours every day, perfecting every note and expression (अभिव्यक्ति). That hard work has now been rewarded (पुरस्कृत) beautifully.

This achievement marks an important milestone (मील को पत्थर) in your musical journey ahead. I am certain (निश्चित) that this is just the beginning of a successful career (करियर) in music. Your talent and dedication will take you to even greater heights.

Congratulations once again on this wonderful achievement. May your voice continue to bring joy (आनन्द) to everyone who hears it.

With love and admiration (प्रशंसा),
Your proud friend`
    },
    {
      title: "6. Congratulations to Friend - Graduation",
      description: "A formal message to a friend on their graduation ceremony",
      recipient: "Suman Karki",
      content: `Dear Suman,

I am overjoyed (अत्यन्त खुसी) to congratulate you on your graduation (स्नातक). This is a momentous (महत्त्वपूर्ण) occasion that marks the successful completion of your academic (शैक्षिक) journey. You have worked incredibly (अविश्वसनीय रूपमा) hard for this day, and it has finally arrived.

Throughout your years of study, you have shown remarkable (उल्लेखनीय) determination (दृढ संकल्प) and perseverance (दृढता). I remember the late nights you spent studying, the sacrifices (बलिदान) you made, and the challenges you overcame (जित्नु). All of that hard work has now culminated (समापन) in this proud achievement.

As you step into a new chapter of your life, I am confident (विश्वस्त) that you will continue to excel (उत्कृष्ट हुनु) in whatever path you choose. Your education has prepared (तयार) you well for the opportunities (अवसरहरू) that lie ahead.

Heartiest congratulations on your graduation! May this be the beginning of an even more successful and fulfilling (सन्तोषजनक) journey.

With warm wishes and pride,
Your friend`
    },
    {
      title: "7. Congratulations to Colleague - Job Promotion",
      description: "A formal message to a colleague on their well-deserved job promotion",
      recipient: "Ramesh Adhikari",
      content: `Dear Ramesh,

Please accept my heartiest (हार्दिक) congratulations on your well-deserved promotion (पदोन्नति) to the position of Senior Manager. This wonderful news has brought great joy to all of us in the office.

Your dedication (समर्पण) and commitment (प्रतिबद्धता) to your work have always been exemplary (अनुकरणीय). Over the years, you have consistently (निरन्तर) demonstrated exceptional (असाधारण) skills in leadership (नेतृत्व), problem-solving, and teamwork. This promotion is a fitting recognition (मान्यता) of your outstanding contributions (योगदान) to our organization.

I have had the privilege (सौभाग्य) of working alongside you, and I have always admired your professionalism (व्यावसायिकता) and positive attitude. You have been a source of inspiration (प्रेरणा) for many of us, and I am certain you will excel in your new role.

Once again, congratulations on this remarkable (उल्लेखनीय) achievement. Wishing you continued success and prosperity (समृद्धि) in your career.

With respect and best wishes,
Your colleague`
    },
    {
      title: "8. Congratulations to Friend - Wedding",
      description: "A formal message to a friend on their wedding ceremony",
      recipient: "Priya Sharma",
      content: `Dear Priya,

I am absolutely delighted (खुसी) to congratulate you on your wedding (विवाह). This is one of the most beautiful and significant (महत्त्वपूर्ण) moments in life, and I am so happy that you have found your life partner.

Marriage is a sacred (पवित्र) bond that brings two souls together in love and companionship (साथीपना). I have seen the happiness and love in your eyes whenever you talk about your partner, and I know that you both are meant to be together. May your marriage be blessed (आशीर्वादित) with endless (अनन्त) love, understanding (बुझाइ), and harmony (सामंजस्य).

As you embark (सुरु गर्नु) on this new journey of life, I wish you both a lifetime of happiness, prosperity (समृद्धि), and togetherness. May you support each other through all the joys and challenges (चुनौतीहरू) that life brings.

Heartiest congratulations on your wedding! May your love grow stronger with each passing day.

With love and blessings (आशीर्वाद),
Your friend`
    },
    {
      title: "9. Congratulations to Sister - New Baby",
      description: "A formal message to a sister on the arrival of her new baby",
      recipient: "Sunita Gurung",
      content: `Dear Sunita,

I am overjoyed (अत्यन्त खुसी) to congratulate you on the arrival (आगमन) of your beautiful baby! This is truly a blessed (धन्य) and wonderful moment for your entire family. A new life has entered your world, bringing immense (अपार) happiness and love.

Parenthood (आमाबुवा हुनु) is one of the most rewarding (पुरस्कारदायी) experiences in life, and I know you will be an amazing mother. Your caring and nurturing (पालन पोषण) nature will create a loving environment (वातावरण) for your little one to grow and thrive (फस्टाउनु).

May your baby be blessed with good health (स्वास्थ्य), happiness, and a bright future. May your home be filled with laughter (हाँसो), joy, and countless precious (अमूल्य) moments with your new family member.

Congratulations once again on this beautiful gift of life! Wishing you and your family endless happiness and wonderful memories (सम्झनाहरू).

With love and best wishes,
Your sibling (दाजुभाइ/दिदीबहिनी)`
    },
    {
      title: "10. Congratulations to Uncle - Retirement",
      description: "A formal message to an uncle on his retirement after years of service",
      recipient: "Hari Prasad Poudel",
      content: `Dear Uncle,

Please accept my heartiest (हार्दिक) congratulations on your retirement (अवकाश) after many years of dedicated (समर्पित) service. This is a significant (महत्त्वपूर्ण) milestone (मील को पत्थर) that marks the end of one chapter and the beginning of another exciting phase of life.

Throughout your career, you have demonstrated (प्रदर्शन गर्नु) exceptional (असाधारण) professionalism (व्यावसायिकता), integrity (इमानदारी), and dedication. You have touched the lives of many people with your guidance (मार्गदर्शन) and wisdom (बुद्धि). Your contributions (योगदान) will always be remembered and appreciated (प्रशंसा).

Retirement is not an end but a new beginning filled with opportunities (अवसरहरू) to pursue your hobbies (रुचिहरू), spend quality time with family, and enjoy the fruits of your hard work. You have earned (कमाउनु) this well-deserved rest.

Congratulations on completing this wonderful journey! May your retirement be filled with peace (शान्ति), happiness, and good health.

With respect and warm wishes,
Your nephew/niece (भतिजा/भतिजी)`
    }
  ];

  const topics = [
    "School Captain Selection",
    "Essay Competition Winner",
    "Youth Volunteer Award",
    "National Science Exhibition",
    "Top Singer Award",
    "Graduation Ceremony",
    "Job Promotion",
    "Wedding Ceremony",
    "New Baby Arrival",
    "Retirement"
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

        {/* Topics Overview Section */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-education-primary" />
              <CardTitle className="text-xl text-education-text">Topics Covered in This Section</CardTitle>
            </div>
            <CardDescription>Overview of all congratulations message topics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {topics.map((topic, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg border border-border"
                >
                  <span className="flex items-center justify-center w-7 h-7 bg-education-primary text-white rounded-full text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-foreground font-medium">{topic}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-8">
          {congratulationsExamples.map((example, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-education-text">{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Copy Paper Style Background */}
                <div className="bg-gray-200 p-6 rounded-lg border border-gray-300">
                  <p className="text-sm leading-loose whitespace-pre-line font-mono text-black select-all cursor-text">
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
            <li>• Begin with expressing your joy (आनन्द) and happiness about the achievement (उपलब्धि)</li>
            <li>• Mention the specific achievement or occasion (अवसर) being celebrated</li>
            <li>• Highlight the qualities (गुणहरू) of the person that led to their success</li>
            <li>• Express your pride (गर्व) and admiration (प्रशंसा) sincerely (इमानदारीपूर्वक)</li>
            <li>• Include good wishes for their future endeavors (प्रयासहरू)</li>
            <li>• End with warm closing remarks (टिप्पणीहरू) appropriate to your relationship</li>
            <li>• Keep the tone positive, encouraging (प्रोत्साहित), and heartfelt (हार्दिक)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsMessage;
