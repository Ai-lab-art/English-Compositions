import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LetterWriting = () => {
  const letterExamples = [
    {
      title: "Job Application Letter",
      description: "A formal letter to apply for a job position",
      content: `                                                              Bhaktapur-5, Kamal Binayak
                                                               15th March, 2025

To The Headmaster
Shree Bagishwari Secondary School, Doodhpokhari Lamjung

Dear Sir/Madam,

I am writing to apply (आवेदन गर्न) for the position (पद) of Computer Operator advertised (विज्ञापन गरिएको) in The Himalayan Times newspaper. I have completed (पूरा गरेको) my +2 in Science from Kathmandu and have one year of experience (अनुभव) in data entry.

I am hardworking (मेहनती), honest (इमानदार), and good at working with computers. I can type both in English and Nepali. I believe I would be perfect (उपयुक्त) for this job. I have attached (संलग्न गरेको) my CV with this letter.

I hope you will consider (विचार गर्नुहुनेछ) my application. I look forward (आशा गर्दछु) to hearing from you soon.

Thank you for your time.

Yours faithfully (विश्वासपूर्वक),
Ramesh Sharma
Lalitpur, Nepal`
    },
    {
      title: "Letter to a Friend",
      description: "An informal letter sharing news with a friend",
      content: `                                                              Pokhara-8, Mahendrapul
                                                               25th October, 2025

Dear Sita,

How are you? I hope you and your family are doing well. I wanted to tell you about my recent trip (यात्रा) to Pokhara during Dashain holidays.

Last week, I went to Pokhara with my family. The weather was perfect (उत्तम) and Phewa Lake looked so beautiful (सुन्दर). We went boating (डुंगा चलाउन) and visited Sarangkot for sunrise (सूर्योदय). We also went to Devi's Fall and took many photos.

The mountains looked amazing (अद्भुत) in the clear weather. We could see Annapurna and Machhapuchhre very clearly. We ate delicious (स्वादिष्ट) momos and dal bhat at local restaurants.

I wish you could have been there with us. Maybe next Tihar we can go together. Please write back and tell me about your Dashain celebrations (उत्सव).

Give my namaste to uncle and auntie.

Your friend,
Bina Thapa`
    },
    {
      title: "Complaint Letter",
      description: "A letter to complain about a product or service",
      content: `                                                              Kathmandu-10, New Baneshwor
                                                               22nd March, 2025

To The Manager
Sunrise Electronics Store, New Road

Dear Customer Service Manager,

I am writing to complain (गुनासो गर्न) about the mobile phone I bought from your store on March 15th, 2024. The phone stopped working (काम गर्न छोड्यो) after just one week.

When I tried to call your customer service, nobody answered. This is very disappointing (निराशाजनक) because I expected (आशा गरेको) better service from your company.

I would like you to either repair (मर्मत गर्न) my phone or give me a new one. I have the receipt (रसिद) and warranty card (ग्यारेन्टी कार्ड) with me.

Please contact (सम्पर्क गर्नुहोस्) me as soon as possible to solve (समाधान गर्न) this problem.

Thank you for your attention (ध्यान).

Yours sincerely (शुभकामना सहित),
[Your Name]`
    },
    {
      title: "Thank You Letter",
      description: "A letter expressing gratitude for help or kindness",
      content: `                                                              Chitwan-6, Bharatpur
                                                               5th June, 2025

Dear Mrs. Johnson,

I hope this letter finds you in good health (स्वास्थ्य). I am writing to thank you for all the help you gave me during my studies.

Your guidance (मार्गदर्शन) and support (सहयोग) helped me understand difficult (कठिन) subjects. You always had time to answer my questions and explain (व्याख्या गर्न) things clearly. Because of your help, I was able to pass (पास गर्न) my exams with good grades (नम्बर).

I will never forget your kindness (दयालुता) and patience (धैर्य). You are not just a great teacher, but also a wonderful (अद्भुत) person.

Thank you once again for everything.

With gratitude (कृतज्ञता सहित),
[Your Name]`
    },
    {
      title: "Invitation Letter",
      description: "A letter inviting someone to an event or celebration",
      content: `                                                              Lalitpur-7, Patan Dhoka
                                                               15th April, 2025

Dear Friend,

I hope you are doing well. I am very excited (उत्साहित) to invite (निमन्त्रणा गर्न) you to my birthday party on Saturday, April 20th, 2024.

The party will start at 6:00 PM at my house. We will have music, dancing, games, and lots of delicious (स्वादिष्ट) food. All our friends from school will be there.

Please let me know if you can come by calling me or sending a message. I really hope you can join (सामेल हुन) us for this special (विशेष) day.

Looking forward (प्रतीक्षा गर्दै) to celebrating with you!

Your friend,
[Your Name]`
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
            <Mail className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Letter Writing</h1>
          </div>
          <p className="text-muted-foreground">
            Learn how to write different types of letters for various purposes
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {letterExamples.map((example, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-education-text">{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-education-light p-4 rounded-lg border">
                  <pre className="whitespace-pre-wrap text-sm text-education-text font-mono">
                    {example.content}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-card rounded-lg shadow-card">
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for Letter Writing</h2>
          <ul className="space-y-2 text-education-text">
            <li>• Start with the date and address</li>
            <li>• Use proper greetings (Dear Sir/Madam for formal, Dear [Name] for informal)</li>
            <li>• Keep your language simple and clear</li>
            <li>• End with appropriate closing (Yours sincerely, Your friend, etc.)</li>
            <li>• Check your grammar and spelling before sending</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LetterWriting;