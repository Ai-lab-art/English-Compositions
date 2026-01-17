import { ArrowLeft, AtSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EmailWriting = () => {
  const emailExamples = [
    {
      title: "Email to Teacher",
      description: "A formal email asking for help with homework",
      content: `To: teacher.smith@school.edu
From: student@email.com
Subject: Request (अनुरोध) for Help with Math Assignment (गणितको काम)

Dear Mrs. Smith,

I hope this email finds you well. I am writing to ask for your help with the math assignment (गणितको काम) you gave us yesterday.

I have tried to solve (समाधान गर्न) problems 5 and 7, but I am having trouble understanding (बुझ्न) the steps. Could you please explain (व्याख्या गर्नुहोस्) how to approach these types of problems?

I would be very grateful (कृतज्ञ) if you could spare (दिनुहोस्) some time to help me. I can meet you during your office hours or after class.

Thank you very much for your time and patience (धैर्य).

Best regards,
John Student
Class 9A`
    },
    {
      title: "Email to a Friend",
      description: "An informal email sharing exciting news",
      content: `To: sarah.friend@email.com
From: me@email.com
Subject: Guess what happened today! 🎉

Hey Sarah!

You won't believe (विश्वास गर्नुहुन्न) what happened today! I got selected (छानिएँ) for the school basketball team! I'm so excited (उत्साहित) I can hardly contain (समात्न) myself.

Remember how I've been practicing (अभ्यास गर्दै) every day after school? Well, it finally paid off (सफल भयो)! The coach said I showed great improvement (सुधार) and team spirit (सहकार्य भावना).

The first game is next Friday. I really hope you can come and cheer (उत्साह) for me. It would mean so much to have my best friend there.

I can't wait to tell you all the details (विवरण) when we meet tomorrow. This is definitely (निश्चित रूपमा) the best day of my life!

Talk soon!
Your excited friend,
Alex 😊`
    },
    {
      title: "Email Requesting Information",
      description: "A formal email asking for details about a summer camp",
      content: `To: info@summercamp.com
From: parent@email.com
Subject: Inquiry (सोधपुछ) About Summer Camp Program

Dear Sir/Madam,

I am writing to inquire (सोधपुछ गर्न) about your summer camp program for teenagers (किशोरहरू). My daughter is 14 years old and very interested in outdoor activities (बाहिरी गतिविधिहरू).

Could you please provide (प्रदान गर्नुहोस्) me with the following information:
- Dates and duration (अवधि) of the camp
- Cost and payment options (भुक्तानी विकल्पहरू)
- Activities (गतिविधिहरू) included in the program
- Accommodation (आवास) and meal arrangements (खाना व्यवस्था)
- What items she should bring

I would also like to know about safety measures (सुरक्षा उपायहरू) and the experience (अनुभव) of your staff members.

Please send me a brochure (पुस्तिका) or any additional (थप) information that might be helpful. You can reach me at this email address or by phone at (555) 123-4567.

Thank you for your time and assistance (सहायता).

Sincerely (शुभकामना सहित),
Mrs. Jennifer Wilson`
    },
    {
      title: "Thank You Email",
      description: "An email expressing gratitude for a favor",
      content: `To: uncle.mike@email.com
From: nephew@email.com
Subject: Thank you for the amazing birthday gift!

Dear Uncle Mike,

I hope you and Aunt Lisa are doing well. I wanted to write to thank you for the wonderful (अद्भुत) birthday gift you sent me.

The new laptop is absolutely perfect (उत्तम)! It's exactly what I needed for my school projects and online classes. The design is beautiful and it works so fast.

I was completely surprised (आश्चर्यचकित) when the package arrived (आइपुग्यो). Mom told me it was from you, and I couldn't believe how thoughtful (विचारशील) and generous (उदार) you are.

I promise (वाचा) to take good care of it and use it wisely (बुद्धिमानी साथ) for my studies. This gift will really help me with my education (शिक्षा).

Thank you again for thinking of me on my special day. I feel so lucky (भाग्यशाली) to have such a caring uncle.

Love and best wishes,
David

P.S. Mom says to tell you that we're planning to visit you next month!`
    },
    {
      title: "Email with Complaint",
      description: "A polite email complaining about a service issue",
      content: `To: customer.service@company.com
From: customer@email.com
Subject: Problem (समस्या) with Recent Online Order

Dear Customer Service Team,

I am writing to report (रिपोर्ट गर्न) a problem with my recent online order (Order Number: 12345).

I ordered a blue backpack on March 10th, but I received (प्राप्त गरेँ) a red one instead. The backpack is the right size and style, but the color is completely wrong (गलत).

I need the blue backpack for my school uniform (स्कुल पोशाक), so the red one is not useful (उपयोगी) for me. I have attached (संलग्न) photos of what I received compared (तुलना) to what I ordered.

Could you please help me exchange (साट्न) this item for the correct (सही) color? I am willing (तयार) to return the red backpack as soon as possible (सकेसम्म चाँडो).

I have been a satisfied (सन्तुष्ट) customer for two years, and I hope we can resolve (समाधान गर्न) this issue quickly.

Please let me know the next steps for returning this item and receiving the correct one.

Thank you for your help.

Sincerely (शुभकामना सहित),
Maria Rodriguez
Customer ID: CR789`
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
            <AtSign className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Email Writing</h1>
          </div>
          <p className="text-muted-foreground">
            Master the art of writing clear and effective emails for different purposes
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {emailExamples.map((example, index) => (
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
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for Email Writing</h2>
          <ul className="space-y-2 text-education-text">
            <li>• Use a clear and specific subject line</li>
            <li>• Start with an appropriate greeting</li>
            <li>• Keep your message clear and to the point</li>
            <li>• Use proper grammar and spelling</li>
            <li>• End with a polite closing</li>
            <li>• Include your full name and contact information</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmailWriting;