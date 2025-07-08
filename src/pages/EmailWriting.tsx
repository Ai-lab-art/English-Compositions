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
Subject: Request for Help with Math Assignment

Dear Mrs. Smith,

I hope this email finds you well. I am writing to ask for your help with the math assignment you gave us yesterday.

I have tried to solve problems 5 and 7, but I am having trouble understanding the steps. Could you please explain how to approach these types of problems?

I would be very grateful if you could spare some time to help me. I can meet you during your office hours or after class.

Thank you very much for your time and patience.

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

You won't believe what happened today! I got selected for the school basketball team! I'm so excited I can hardly contain myself.

Remember how I've been practicing every day after school? Well, it finally paid off! The coach said I showed great improvement and team spirit.

The first game is next Friday. I really hope you can come and cheer for me. It would mean so much to have my best friend there.

I can't wait to tell you all the details when we meet tomorrow. This is definitely the best day of my life!

Talk soon!
Your excited friend,
Alex 😊`
    },
    {
      title: "Email Requesting Information",
      description: "A formal email asking for details about a summer camp",
      content: `To: info@summercamp.com
From: parent@email.com
Subject: Inquiry About Summer Camp Program

Dear Sir/Madam,

I am writing to inquire about your summer camp program for teenagers. My daughter is 14 years old and very interested in outdoor activities.

Could you please provide me with the following information:
- Dates and duration of the camp
- Cost and payment options
- Activities included in the program
- Accommodation and meal arrangements
- What items she should bring

I would also like to know about safety measures and the experience of your staff members.

Please send me a brochure or any additional information that might be helpful. You can reach me at this email address or by phone at (555) 123-4567.

Thank you for your time and assistance.

Sincerely,
Mrs. Jennifer Wilson`
    },
    {
      title: "Thank You Email",
      description: "An email expressing gratitude for a favor",
      content: `To: uncle.mike@email.com
From: nephew@email.com
Subject: Thank you for the amazing birthday gift!

Dear Uncle Mike,

I hope you and Aunt Lisa are doing well. I wanted to write to thank you for the wonderful birthday gift you sent me.

The new laptop is absolutely perfect! It's exactly what I needed for my school projects and online classes. The design is beautiful and it works so fast.

I was completely surprised when the package arrived. Mom told me it was from you, and I couldn't believe how thoughtful and generous you are.

I promise to take good care of it and use it wisely for my studies. This gift will really help me with my education.

Thank you again for thinking of me on my special day. I feel so lucky to have such a caring uncle.

Love and best wishes,
David

P.S. Mom says to tell you that we're planning to visit you next month!`
    },
    {
      title: "Email with Complaint",
      description: "A polite email complaining about a service issue",
      content: `To: customer.service@company.com
From: customer@email.com
Subject: Problem with Recent Online Order

Dear Customer Service Team,

I am writing to report a problem with my recent online order (Order Number: 12345).

I ordered a blue backpack on March 10th, but I received a red one instead. The backpack is the right size and style, but the color is completely wrong.

I need the blue backpack for my school uniform, so the red one is not useful for me. I have attached photos of what I received compared to what I ordered.

Could you please help me exchange this item for the correct color? I am willing to return the red backpack as soon as possible.

I have been a satisfied customer for two years, and I hope we can resolve this issue quickly.

Please let me know the next steps for returning this item and receiving the correct one.

Thank you for your help.

Sincerely,
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