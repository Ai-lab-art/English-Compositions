import { MessageSquare, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DialogueWriting = () => {
  const dialogueExamples = [
    {
      title: "At a Nepali Restaurant",
      description: "Conversation between customer and waiter",
      content: `Waiter: Namaste! Welcome to Himalayan Kitchen. How may I help you?

Customer: Namaste! Could you please show me the menu?

Waiter: Of course, sir. Here is our menu. We have traditional Nepali food like dal-bhat, momos, and gundruk.

Customer: What do you recommend for someone trying Nepali food for the first time?

Waiter: I would suggest our special dal-bhat set with chicken curry. It comes with rice, lentils, vegetables, and pickle. It's very popular with our guests.

Customer: That sounds good. I'll have that please. And could I also get some momos as a starter?

Waiter: Excellent choice! Would you like chicken momos or vegetable momos?

Customer: Chicken momos, please. How long will it take?

Waiter: The momos will be ready in 10 minutes, and the dal-bhat will take about 15 minutes. Would you like something to drink?

Customer: Yes, I'll have a glass of lassi.

Waiter: Perfect! I'll bring your order soon. Thank you for choosing our restaurant.`
    },
    {
      title: "Shopping at Local Market",
      description: "Bargaining conversation at a Kathmandu market",
      content: `Shopkeeper: Namaste, dai! What can I show you today?

Customer: Namaste! I'm looking for a traditional Nepali cap. Do you have any?

Shopkeeper: Yes, we have many beautiful dhaka topis. Look at these designs - they are handmade and very good quality.

Customer: This red one looks nice. How much does it cost?

Shopkeeper: This is our best quality topi. Only 800 rupees for you.

Customer: 800 rupees? That seems expensive. Can you make it cheaper?

Shopkeeper: For you, special price - 700 rupees. This is genuine dhaka fabric from Palpa.

Customer: I've seen similar ones for 500 rupees in other shops.

Shopkeeper: Sir, those are machine-made. This is handwoven and will last for years. Okay, final price - 600 rupees.

Customer: Make it 550 and I'll buy it right now.

Shopkeeper: Alright, 550 rupees. You drive a hard bargain! Here, take it.

Customer: Thank you! Do you have a bag for it?

Shopkeeper: Of course! Here you go. Come back anytime, dai!`
    },
    {
      title: "At the Doctor's Clinic",
      description: "Patient consulting with a doctor",
      content: `Doctor: Good morning! Please sit down. What seems to be the problem today?

Patient: Good morning, doctor. I've been having a bad cough and fever for three days.

Doctor: I see. Do you have any other symptoms like headache or body pain?

Patient: Yes, I have a headache and I feel very tired. I also lost my appetite.

Doctor: Are you taking any medications right now?

Patient: No, I only took some paracetamol yesterday for the fever.

Doctor: Let me check your temperature and throat. Please open your mouth and say "Aah."

Patient: Aah... Doctor, is it serious?

Doctor: Don't worry, it looks like a common cold and throat infection. I'll prescribe some medicines for you.

Patient: How long will it take to get better?

Doctor: With proper rest and medication, you should feel better in 4-5 days. Drink plenty of warm water and avoid cold foods.

Patient: Should I come back for a check-up?

Doctor: Only if your symptoms don't improve after a week. Take rest and follow the medicine schedule.

Patient: Thank you, doctor. How much is the consultation fee?

Doctor: 500 rupees. Take care and get well soon!`
    },
    {
      title: "Planning a Trip to Pokhara",
      description: "Friends discussing travel plans",
      content: `Ram: Hey Sita, are you free during Dashain holidays?

Sita: Yes, I don't have any special plans. Why do you ask?

Ram: I was thinking we could go to Pokhara with our friends. What do you think?

Sita: That sounds great! I've always wanted to visit Phewa Lake. How many days are you planning?

Ram: Maybe 4-5 days. We can visit Sarangkot for sunrise, go boating on the lake, and see some caves.

Sita: Perfect! How will we go there - by bus or by flight?

Ram: I think bus would be cheaper and we can enjoy the scenery on the way. It takes about 6-7 hours from Kathmandu.

Sita: Good idea. Where will we stay? Hotels are expensive during festival season.

Ram: I found some budget guesthouses near Lakeside for about 1500 rupees per night. We can share rooms to save money.

Sita: That works for me. How much money should I bring for the whole trip?

Ram: I estimate about 15,000 rupees per person including food, accommodation, and sightseeing.

Sita: Sounds reasonable. Let me talk to my parents and I'll confirm by tomorrow.

Ram: Great! I'll also ask Hari and Maya if they want to join us.

Sita: This is going to be so much fun! I can't wait to see the mountains.`
    },
    {
      title: "Job Interview",
      description: "Fresh graduate appearing for job interview",
      content: `Interviewer: Good morning! Please take a seat. Tell me about yourself.

Candidate: Good morning, sir. My name is Pradeep Sharma. I recently completed my BBA from Tribhuvan University with first division.

Interviewer: That's impressive. Why do you want to work for our company?

Candidate: Your company has an excellent reputation in Nepal's banking sector. I believe I can learn a lot and contribute to your team's success.

Interviewer: What are your strengths and weaknesses?

Candidate: My strengths are that I'm hardworking, punctual, and good with numbers. My weakness is that sometimes I'm too perfectionist, which can slow me down.

Interviewer: Do you have any work experience?

Candidate: I did a three-month internship at Nepal Bank Limited where I learned about customer service and basic banking operations.

Interviewer: How do you handle pressure and deadlines?

Candidate: I work well under pressure. During my studies, I managed multiple projects simultaneously and always submitted them on time.

Interviewer: What are your salary expectations?

Candidate: I'm more interested in learning and growing in this field. I'm flexible with salary, but I expect a fair amount according to market standards.

Interviewer: Do you have any questions for us?

Candidate: Yes, what are the opportunities for career growth in this position?

Interviewer: There are good promotion opportunities based on performance. We'll let you know our decision within a week.

Candidate: Thank you for your time, sir. I look forward to hearing from you.`
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
            <MessageSquare className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Dialogue Writing</h1>
          </div>
          <p className="text-muted-foreground">
            Learn how to write realistic conversations for different situations in Nepal
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {dialogueExamples.map((example, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-education-text">{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-education-light p-4 rounded-lg border">
                  <pre className="whitespace-pre-wrap text-sm text-education-text font-mono leading-relaxed">
                    {example.content}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-card rounded-lg shadow-card">
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for Dialogue Writing</h2>
          <ul className="space-y-2 text-education-text">
            <li>• Start each speaker's words on a new line</li>
            <li>• Use quotation marks around spoken words</li>
            <li>• Make the conversation sound natural and realistic</li>
            <li>• Include appropriate greetings like "Namaste" for Nepali context</li>
            <li>• Show emotions and personality through the way characters speak</li>
            <li>• Use simple, everyday language that people actually use</li>
            <li>• Keep the conversation focused on the main topic or situation</li>
            <li>• End conversations politely with appropriate closing words</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DialogueWriting;