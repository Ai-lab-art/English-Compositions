import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RulesRegulations = () => {
  const rulesExamples = [
    {
      title: "Zoo Rules and Regulations",
      description: "Important rules for visitors at the zoo",
      content: `Rules and Regulations for Zoo Visitors

1. Do not feed the animals unless specially permitted
2. Keep a safe distance from animal enclosures
3. Do not throw objects into cages or enclosures
4. Children must be supervised by adults at all times
5. No smoking inside the zoo premises
6. Keep the zoo clean - use dustbins for garbage
7. Do not make loud noises that may disturb animals
8. Photography with flash is prohibited near animals
9. Follow the designated paths and do not enter restricted areas
10. Report any emergency to zoo staff immediately

Remember: These rules are for your safety and the welfare of animals.`
    },
    {
      title: "Library Rules and Regulations",
      description: "Guidelines for proper library usage",
      content: `Library Rules and Regulations

1. Maintain complete silence in reading areas
2. Mobile phones must be switched off or kept on silent mode
3. Return books on time to avoid fine
4. Handle books and materials with care
5. Do not write or mark on library books
6. Maximum 3 books can be borrowed at one time
7. Lost or damaged books must be paid for
8. Food and drinks are not allowed inside
9. Students must show their ID cards before entering
10. Library closes at 8:00 PM on weekdays and 6:00 PM on weekends

Violation of rules may result in suspension of library privileges.`
    },
    {
      title: "Exam Hall Rules and Regulations",
      description: "Important guidelines for examination conduct",
      content: `Exam Hall Rules and Regulations

1. Arrive at least 15 minutes before the exam starts
2. Bring your admit card and valid ID
3. Use only blue or black ink pens
4. Mobile phones and electronic devices are strictly prohibited
5. No talking or communication with other students
6. Raise your hand if you need assistance from invigilators
7. Do not leave the hall during the first 30 minutes
8. Check your question paper immediately upon receiving it
9. Write your roll number clearly on all answer sheets
10. Submit your papers before leaving the hall

Any form of cheating will result in immediate disqualification.`
    },
    {
      title: "Hospital Rules and Regulations",
      description: "Guidelines for patients and visitors",
      content: `Hospital Rules and Regulations

1. Visiting hours: 10:00 AM to 12:00 PM and 4:00 PM to 6:00 PM
2. Maximum 2 visitors allowed per patient at a time
3. Children under 12 years are not allowed in ICU
4. Smoking is strictly prohibited throughout the hospital
5. Mobile phones must be switched off in ICU and operation theaters
6. Maintain cleanliness and hygiene at all times
7. Follow instructions given by doctors and nurses
8. Do not bring outside food for patients without doctor's permission
9. Keep noise levels low to ensure patient comfort
10. In case of emergency, contact the nurse station immediately

Your cooperation helps us provide better healthcare services.`
    },
    {
      title: "Park Rules and Regulations",
      description: "Guidelines for public park visitors",
      content: `Public Park Rules and Regulations

1. Park timings: 5:00 AM to 8:00 PM daily
2. Keep the park clean - do not litter
3. Dogs must be kept on leash at all times
4. Cycling is allowed only on designated paths
5. No alcoholic beverages or smoking allowed
6. Children's playground is for children under 12 years only
7. Do not damage plants, flowers, or trees
8. Organized sports require prior permission from authorities
9. Commercial activities are strictly prohibited
10. Report any suspicious activity to park security

Let's work together to keep our parks beautiful and safe for everyone.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-education-light">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link to="/table-of-contents">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Contents
            </Button>
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Rules and Regulations</h1>
          </div>
          <p className="text-muted-foreground">
            Learn to write clear rules and regulations for different places and situations
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {rulesExamples.map((example, index) => (
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
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for Writing Rules and Regulations</h2>
          <ul className="space-y-2 text-education-text">
            <li>• Use clear and simple language that everyone can understand</li>
            <li>• Number your rules for easy reference</li>
            <li>• Be specific about what is allowed and what is not allowed</li>
            <li>• Include consequences for breaking the rules</li>
            <li>• Make sure rules are fair and reasonable</li>
            <li>• Review and update rules regularly as needed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RulesRegulations;