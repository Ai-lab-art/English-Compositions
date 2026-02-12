import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const LetterWriting = () => {
  const letterExamples = [
    {
      title: "Job Application for Computer Operator",
      description: "A formal letter to apply for a computer operator position",
      content: `                                                              Bhaktapur-5, Kamal Binayak
                                                               15th March, 2025

To The Headmaster
Shree Bagishwari Secondary School, Doodhpokhari Lamjung

Dear Sir/Madam,

I am writing to apply (आवेदन गर्न) for the position (पद) of Computer Operator advertised (विज्ञापन गरिएको) in The Himalayan Times newspaper dated 10th March, 2025. I have completed (पूरा गरेको) my +2 in Science from National College, Kathmandu, and I have one year of professional experience (अनुभव) in data entry and office administration.

During my previous employment (रोजगारी) at Sunrise Trading Company, I gained valuable (बहुमूल्य) skills in managing databases, preparing documents, handling correspondence (पत्राचार), and maintaining digital records. I am proficient (दक्ष) in Microsoft Office applications including Word, Excel, and PowerPoint. I can type fluently (धाराप्रवाह) in both English and Nepali at a speed of 40 words per minute.

I am hardworking (मेहनती), honest (इमानदार), punctual (समयनिष्ठ), and dedicated (समर्पित) to my work. I have excellent communication (सञ्चार) skills and can work both independently and as part of a team. I am also familiar (परिचित) with basic networking, internet browsing, and troubleshooting common computer problems.

I have attached (संलग्न गरेको) my detailed CV, copies of academic certificates, and experience letter with this application. I am available (उपलब्ध) for an interview at your convenience (सुविधा).

I hope you will kindly consider (विचार गर्नुहुनेछ) my application. I look forward (आशा गर्दछु) to hearing from you soon.

Thank you for your valuable time and consideration.

Yours faithfully (विश्वासपूर्वक),
Ramesh Sharma
Contact: 9841XXXXXX
Lalitpur, Nepal`
    },
    {
      title: "Job Application for Teacher",
      description: "A formal letter to apply for a teaching position at a school",
      content: `                                                              Butwal-11, Golpark
                                                               20th January, 2025

To The Principal
Himalayan Model Secondary School, Pokhara

Subject: Application for the Post of English Teacher

Dear Sir/Madam,

With reference (सन्दर्भमा) to the vacancy announcement (रिक्त पद सूचना) published in Gorkhapatra daily newspaper on 15th January, 2025, I would like to apply (आवेदन दिन चाहन्छु) for the post of Secondary Level English Teacher in your esteemed (प्रतिष्ठित) institution.

I have completed my Bachelor's Degree in Education (B.Ed.) with English as my major subject from Tribhuvan University. I also hold a Master's Degree (स्नातकोत्तर) in English Literature. I have three years of teaching experience (शिक्षण अनुभव) at Sunrise Academy, Butwal, where I taught English to students of classes 6 to 10.

During my teaching career (शिक्षण जीवन), I have developed (विकास गरेको) excellent skills in lesson planning (पाठ योजना), classroom management (कक्षा व्यवस्थापन), and student assessment (विद्यार्थी मूल्याङ्कन). I am passionate (उत्साही) about using creative and interactive (अन्तरक्रियात्मक) teaching methods to make learning enjoyable (रमाइलो) for students. I have also organized (आयोजना गरेको) various extra-curricular activities including spelling competitions, essay writing contests, and debate programs.

I am confident (आत्मविश्वासी) that my qualifications (योग्यता), experience, and enthusiasm (उत्साह) make me a suitable (उपयुक्त) candidate for this position. I have enclosed (संलग्न गरेको) my CV, copies of academic certificates, teaching license, and experience letters for your review.

I would be grateful (कृतज्ञ) for the opportunity to attend an interview at your convenience. I am available to join immediately (तुरुन्तै) if selected.

Thank you for considering my application.

Yours faithfully (विश्वासपूर्वक),
Sunita Adhikari
Contact: 9847XXXXXX
Butwal-11, Rupandehi`
    },
    {
      title: "Job Application for Accountant",
      description: "A formal letter to apply for an accounting position",
      content: `                                                              Biratnagar-7, Morang
                                                               10th February, 2025

To The General Manager
Mountain Sales Corporation, Itahari

Subject: Application for the Post of Accountant

Dear Sir/Madam,

I am writing to express (व्यक्त गर्न) my interest (रुचि) in the position of Accountant as advertised (विज्ञापन गरिएको) in The Rising Nepal newspaper on 5th February, 2025. I believe my qualifications (योग्यता) and experience make me a strong candidate (उम्मेदवार) for this role.

I have completed my Bachelor's Degree in Management (BBS) with a specialization (विशेषज्ञता) in Accounting from Tribhuvan University. I have two years of experience working as a Junior Accountant at Nepal Trading House, where I was responsible (जिम्मेवार) for maintaining books of accounts, preparing financial statements (आर्थिक विवरण), handling VAT returns, and managing payroll (तलब व्यवस्थापन).

I am proficient (दक्ष) in using accounting software including Tally ERP and Microsoft Excel. I have thorough (विस्तृत) knowledge of Nepali tax regulations (कर नियमहरू), including VAT, TDS, and income tax filing. I am detail-oriented (विस्तृत उन्मुख), organized (व्यवस्थित), and capable (सक्षम) of working under pressure to meet deadlines (समयसीमा).

I have enclosed my updated CV, copies of academic transcripts (प्रमाणपत्र), experience certificates, and a recent photograph with this application. I am eager (उत्सुक) to contribute my skills and dedication (समर्पण) to your organization.

I would welcome (स्वागत गर्नेछु) the opportunity to discuss my application further in an interview. I am available to join at short notice.

Thank you for your time and kind consideration (विचार).

Yours faithfully (विश्वासपूर्वक),
Bikash Rai
Contact: 9852XXXXXX
Biratnagar-7, Morang`
    },
    {
      title: "Job Application for Nurse",
      description: "A formal letter to apply for a nursing position at a hospital",
      content: `                                                              Dharan-8, Sunsari
                                                               1st April, 2025

To The Medical Director
B.P. Koirala Institute of Health Sciences, Dharan

Subject: Application for the Post of Staff Nurse

Dear Sir/Madam,

I am writing to apply (आवेदन गर्न) for the position of Staff Nurse as announced (घोषणा गरिएको) in the recent vacancy notice published by your prestigious (प्रतिष्ठित) institution. I am a dedicated (समर्पित) and compassionate (दयालु) healthcare professional (स्वास्थ्य पेशेवर) seeking to contribute (योगदान गर्न) my skills to your hospital.

I have completed my Proficiency Certificate Level (PCL) in Nursing from Chitwan Medical College and am currently (हाल) registered with the Nepal Nursing Council. I have two years of clinical experience (क्लिनिकल अनुभव) working at Koshi Hospital, Biratnagar, where I provided (प्रदान गरेको) patient care in the general ward, emergency department, and outpatient clinic.

My responsibilities (जिम्मेवारी) included administering medications (औषधि दिने), monitoring vital signs (जीवन संकेत), assisting doctors during procedures (प्रक्रिया), maintaining patient records, and educating (शिक्षित गर्ने) patients and their families about health and hygiene (स्वच्छता). I am trained in basic life support (BLS) and infection control (संक्रमण नियन्त्रण) protocols.

I am a caring (हेरचाह गर्ने), patient (धैर्यवान), and hardworking individual who can work effectively (प्रभावकारी रूपमा) in both day and night shifts. I work well in teams and communicate clearly with patients and colleagues (सहकर्मी).

I have attached my CV, nursing registration certificate, academic certificates, and experience letter. I am ready to join immediately if selected.

Thank you for considering my application. I look forward to the opportunity (अवसर) to serve (सेवा गर्न) your institution.

Yours faithfully (विश्वासपूर्वक),
Anita Gurung
Contact: 9842XXXXXX
Dharan-8, Sunsari`
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
                <div className="bg-gray-200 p-4 rounded-lg border border-gray-300">
                  <pre className="whitespace-pre-wrap text-sm text-black font-mono select-all cursor-text">
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