import { FileText, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import noticeHeroImg from "@/assets/notice-writing-hero.jpg";

const NoticeWriting = () => {
  const noticeExamples = [
    {
      title: "Notice about Parents Day",
      question: "Write a notice on behalf of your headteacher about organizing (आयोजना) a Parents Day program in your school. Include the date, time, and purpose (उद्देश्य) of the meeting.",
      content: `                    ABC Secondary School
                    Kathmandu, Nepal
                                                           Date: March 10, 2025

NOTICE

This is to inform all parents and guardians (संरक्षक) that our school is organizing (आयोजना गर्दै छ) a Parents Day program on March 25, 2025, at 10:00 AM in the school auditorium (सभाकक्ष).

The purpose (उद्देश्य) of this meeting is to discuss students' academic (शैक्षिक) performance and behavior (व्यवहार). Teachers will be available for individual consultations (परामर्श).

All parents are requested to attend (उपस्थित हुन) this important event.

Thank you for your cooperation (सहयोग).

Ram Kumar Sharma
Headteacher`
    },
    {
      title: "Notice about Sports Day",
      question: "Your school is organizing (आयोजना) an Annual Sports Day. Write a notice informing students about the event, registration (दर्ता) process, and participation (सहभागिता) requirements.",
      content: `                    Sunrise English School
                    Pokhara, Nepal
                                                           Date: April 5, 2025

NOTICE

All students are hereby informed that our school will organize (आयोजना गर्नेछ) the Annual Sports Day on April 20, 2025, at the school ground.

Events include:
- 100m and 200m races
- Long jump and high jump
- Football and volleyball matches
- Relay (रिले) races

Interested students must register (दर्ता गर्नु) their names with the sports teacher by April 12, 2025. Students should bring proper sports attire (खेलकुद पोशाक) and be present by 8:00 AM sharp.

Active participation (सहभागिता) of all students is highly encouraged (प्रोत्साहन गरिएको छ).

Prakash Adhikari
Sports Coordinator (संयोजक)`
    },
    {
      title: "Notice about Educational Trip",
      question: "Write a notice about an educational excursion (भ्रमण) to a historical (ऐतिहासिक) place. Mention the destination (गन्तव्य), date, fees, and instructions for students.",
      content: `                    Nepal National School
                    Lalitpur, Nepal
                                                           Date: February 15, 2025

NOTICE

This is to inform all students of Grade 10 that our school is organizing an educational excursion (भ्रमण) to Lumbini, the birthplace (जन्मस्थल) of Lord Buddha, on March 5-7, 2025.

Details:
- Departure (प्रस्थान): March 5, 6:00 AM
- Return: March 7, 6:00 PM
- Fees: Rs. 5,000 per student
- Includes: Transport (यातायात), accommodation (बास), and meals

Students must submit (बुझाउनु) the fees and a consent (स्वीकृति) letter signed by parents by February 28, 2025. Carry proper clothing, ID card, and necessary (आवश्यक) medicines.

For more information, contact (सम्पर्क) the undersigned.

Sita Karki
Trip Coordinator`
    },
    {
      title: "Notice about Lost Identity Card",
      question: "Write a notice about a lost identity (परिचय) card found in the school premises (परिसर). Include description (विवरण) and contact information.",
      content: `                    Everest High School
                    Bhaktapur, Nepal
                                                           Date: January 20, 2025

NOTICE

An identity (परिचय) card has been found in the school library on January 18, 2025.

Description (विवरण):
- Name: Anita Sharma
- Class: 9A
- ID Number: EHS/2024/345
- Blue color card with student photo

The genuine (वास्तविक) owner can collect the card from the school office by showing proof (प्रमाण) of identity. Please contact (सम्पर्क गर्नुहोस्) the undersigned during school hours (10:00 AM - 4:00 PM).

Lost items should be claimed (दाबी गर्नु) within 7 days.

Mohan Thapa
Administrative Officer (प्रशासनिक अधिकृत)`
    },
    {
      title: "Notice about Annual Function",
      question: "Your school is celebrating (मनाउँदै छ) its Annual Day. Write a notice as the cultural secretary inviting (निमन्त्रणा) students to participate (भाग लिन) in various cultural programs.",
      content: `                    Himalayan English School
                    Chitwan, Nepal
                                                           Date: November 1, 2025

NOTICE

This is to inform all students that our school will celebrate (मनाउनेछ) its 25th Annual Day on November 30, 2025, at 2:00 PM in the school hall.

Cultural Programs:
- Dance performances (नृत्य प्रस्तुति)
- Songs and music
- Drama and skits
- Poetry recitation (कविता वाचन)

Students interested in participating (भाग लिन) must submit their names to the cultural committee (समिति) by November 15, 2025. Auditions (परीक्षण) will be held on November 18, 2025.

Parents and guardians are cordially invited (निमन्त्रणा गरिएको छ) to attend this special occasion (विशेष अवसर).

Binita Poudel
Cultural Secretary`
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${noticeHeroImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
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

          <div className="bg-gradient-card rounded-lg shadow-card p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-bold text-education-text">Notice Writing</h1>
            </div>
            <p className="text-lg text-education-text">
              Learn to write clear and effective notices for various school events and announcements
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {noticeExamples.map((example, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-shadow bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle className="text-education-text flex items-start gap-2">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span>{example.title}</span>
                  </CardTitle>
                  <CardDescription className="text-education-text mt-4 p-4 bg-background/50 rounded-lg border-l-4 border-primary">
                    <strong className="text-primary">Question:</strong>
                    <p className="mt-2">{example.question}</p>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-background/80 p-6 rounded-lg">
                    <pre className="whitespace-pre-wrap font-sans text-sm text-education-text leading-relaxed">
                      {example.content}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 shadow-card bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="text-education-text text-2xl">Tips for Notice Writing</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-education-text">
                <li>Always write "NOTICE" at the top center in capital letters</li>
                <li>Include the name and address of the institution at the top</li>
                <li>Mention the date on the left side</li>
                <li>Write a suitable heading that indicates the subject</li>
                <li>Keep the content brief, clear, and to the point</li>
                <li>Include all important details: What, When, Where, Who, Why</li>
                <li>Use formal and polite language</li>
                <li>Sign with your name and designation at the bottom</li>
                <li>Put the notice in a box for presentation</li>
                <li>Avoid using "I", "We", or personal pronouns</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NoticeWriting;