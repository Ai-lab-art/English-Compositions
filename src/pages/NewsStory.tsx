import { ArrowLeft, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const NewsStory = () => {
  const newsExamples = [
    {
      title: "Fatal Bus Accident on Prithvi Highway Claims 15 Lives",
      description: "A tragic road accident news from Nepal",
      questions: `Develop a news story based on the following outlines. Use suitable (उपयुक्त) headline (शीर्षक) and include all the essential (आवश्यक) information. Write your answer in about 150 words.

Fatal (घातक) Bus Accident - Prithvi Highway near Mugling - Yesterday morning 6:30 AM - 40 passengers (यात्रुहरू) - Bus skidded (चिप्लियो) and plunged (खसेको) into Trishuli River - Dense (बाक्लो) fog and wet road conditions - 15 deaths, 25 injured (घाइते) - Rescue (उद्धार) operations - Driver Tek Bahadur Gurung killed - Investigation (अनुसन्धान) ordered - Compensation (क्षतिपूर्ति) announced.`,
      content: `Tragic (घातक) Bus Accident on Prithvi Highway Kills 15 Passengers

Chitwan, 15th January - A passenger (यात्री) bus traveling from Kathmandu to Pokhara met with a fatal (घातक) accident (दुर्घटना) yesterday morning on the Prithvi Highway near Mugling, claiming (लिएर जाने) 15 lives and injuring (घाइते बनाउने) 25 others. The accident occurred (भयो) around 6:30 AM when the bus skidded (चिप्लियो) off the road and plunged (खस्यो) into the Trishuli River.

The bus, operated (सञ्चालित) by Greenline Tours (Ba 2 Kha 1234), was carrying 40 passengers when it lost control while navigating (जाँदै गर्दा) a sharp turn near kilometer post 87. Preliminary (प्रारम्भिक) investigations (अनुसन्धान) suggest (संकेत गर्छ) that dense (बाक्लो) fog and wet road conditions (अवस्था) contributed (योगदान) to the accident.

"The driver seemed to have lost control due to poor visibility (दृश्यता) caused (कारण) by heavy fog," said Traffic Police Inspector (निरीक्षक) Ram Bahadur Thapa. "The road was also slippery (चिप्लो) from last night's rain."

Rescue (उद्धार) operations (कार्य) began immediately (तुरुन्तै) after local villagers (गाउँलेहरू) reported the accident. Teams from Nepal Police, Armed Police Force, and local volunteers (स्वयंसेवक) worked together to pull survivors (बाँचेकाहरू) from the wreckage (भग्नावशेष). The injured were rushed (तुरुन्तै लगियो) to Bharatpur Hospital and Chitwan Medical College.

Among the deceased (मृतक) are 8 men, 5 women, and 2 children. The injured passengers are receiving treatment (उपचार), with 10 in critical (गम्भीर) condition according to Dr. Sushila Karki, Chief Medical Officer at Bharatpur Hospital.

"We are doing everything possible (सम्भव) to save the lives of those in critical condition," Dr. Karki stated. "Additional (थप) medical staff has been called in to handle (व्यवस्थापन गर्न) the emergency (आपतकालीन)."

The bus driver, Tek Bahadur Gurung (45), was among those killed in the accident. He had 20 years of driving experience (अनुभव) on this route.

This tragic incident (घटना) has once again highlighted (प्रकाश पारेको) the poor condition of Nepal's highways and the urgent (जरुरी) need for better road safety measures (उपाय). The Prithvi Highway has witnessed (देखेको) numerous (धेरै) accidents in recent years due to narrow roads, sharp turns, and lack (कमी) of proper safety barriers (अवरोध).

Prime Minister has announced (घोषणा गरे) compensation (क्षतिपूर्ति) of NPR 500,000 for the families of deceased passengers and NPR 100,000 for the injured. The government has also ordered a thorough (विस्तृत) investigation (अनुसन्धान) into the accident.`
    },
    {
      title: "Earthquake Measuring 5.8 Magnitude Hits Western Nepal",
      description: "Breaking news about earthquake in Nepal",
      questions: `Develop a news story based on the following outlines. Use suitable (उपयुक्त) headline (शीर्षक) and include all the essential (आवश्यक) information. Write your answer in about 150 words.

Earthquake (भूकम्प) in Western Nepal - 5.8 magnitude (तीव्रता) - Bajhang district - Yesterday 11:45 PM - Epicenter (केन्द्रबिन्दु) 12 km northeast of Chainpur - Depth (गहिराइ) 10 kilometers - Strong tremors (कम्पन) felt in Bajhang, Doti, Achham, Kailali - People rushed (दौडिए) outside in panic (त्रास) - Several aftershocks (पछिल्ला धक्का) recorded - Minor cracks in old buildings - No major casualties (मृतक/घाइते) reported - Temporary shelters (अस्थायी आश्रय) set up - Emergency (आपतकालीन) teams deployed (खटाइएको).`,
      content: `5.8 Magnitude (तीव्रता) Earthquake Strikes Bajhang District, No Major Casualties (मृतक/घाइते) Reported

Bajhang, 8th March - A moderate (मध्यम) earthquake (भूकम्प) measuring 5.8 on the Richter scale struck Bajhang district in far-western Nepal yesterday at 11:45 PM, causing widespread (व्यापक) panic (त्रास) among residents (बासिन्दा) but no major casualties have been reported so far.

The epicenter (केन्द्रबिन्दु) of the earthquake was located (अवस्थित) 12 kilometers northeast of Chainpur, the district headquarters (मुख्यालय) of Bajhang, at a depth (गहिराइ) of 10 kilometers, according to the National Seismological Centre.

"The earthquake was felt strongly in Bajhang, Doti, Achham, and Kailali districts," said Dr. Lok Bijaya Adhikari, Chief Seismologist (भूकम्प वैज्ञानिक) at the National Seismological Centre. "We have recorded (रेकर्ड गरेका) several aftershocks (पछिल्ला धक्का), with the strongest measuring 4.2 magnitude."

People rushed (दौडिए) out of their homes in panic as buildings shook (हल्लियो) for nearly 30 seconds. Many residents spent the night outdoors, fearing aftershocks. Local authorities (अधिकारी) have set up temporary (अस्थायी) shelters (आश्रय) in open areas for those afraid to return to their homes.

"The whole house was shaking, and we heard a loud rumbling (गडगडाहट) sound," said Kamala Devi Bhatta, a local resident. "We immediately (तुरुन्तै) ran outside with our children. It was very frightening (डरलाग्दो)."

Preliminary (प्रारम्भिक) reports from local authorities indicate (संकेत गर्छ) minor cracks (दरार) in some old buildings and traditional (परम्परागत) houses, but no major structural (संरचनागत) damage (क्षति) has been reported. The District Emergency Operation Center has been activated (सक्रिय) to assess (मूल्याङ्कन) damages and coordinate (समन्वय) relief (राहत) efforts.

Chief District Officer Narayan Prasad Bhatta confirmed (पुष्टि गरे) that no casualties have been reported from any part of the district. "Our teams are conducting (सञ्चालन गर्दै) detailed surveys (सर्वेक्षण) in remote (दुर्गम) areas to assess any possible damages," he said.

The earthquake was also felt in neighboring (छिमेकी) districts of Uttarakhand, India. However, no damages have been reported from across the border.

Nepal lies in a seismically (भूकम्पीय) active zone and frequently (बारम्बार) experiences (अनुभव गर्छ) earthquakes. The country is still recovering (पुनः प्राप्त) from the devastating (विनाशकारी) 7.8 magnitude earthquake in 2015 that killed nearly 9,000 people and destroyed (ध्वस्त) hundreds of thousands of homes.

Seismologists have advised (सल्लाह दिए) people to remain alert (सतर्क) for aftershocks and follow earthquake safety measures (उपाय). The government has deployed (खटाइएको) emergency (आपतकालीन) response (प्रतिक्रिया) teams to the affected (प्रभावित) areas.`
    },
    {
      title: "Youth Soccer Team Helps Community",
      description: "A news story about young people making a difference",
      questions: `Develop a news story based on the following outlines. Use suitable (उपयुक्त) headline (शीर्षक) and include all the essential (आवश्यक) information. Write your answer in about 150 words.

Youth Soccer Team - Westside Warriors - 20 players aged 12-14 - Month-long fundraising (कोष सङ्कलन) campaign (अभियान) - Raised $5,000 for Community Animal Shelter (पशु आश्रय) - Organized (आयोजना गरे) car washes, bake sales, charity (परोपकारी) tournament (प्रतियोगिता) - Shelter needed money for operations (सञ्चालन) - Team captain Jessica Martinez initiated (शुरु गरे) - Eight teams participated (भाग लिए) - Money will help feed and care for 150 animals - Veterinary (पशु चिकित्सा) care and food supplies - Donation (दान) presented at special ceremony (समारोह).`,
      content: `Local Soccer Team Raises $5,000 for Animal Shelter (पशु आश्रय)

Westside, 22nd April - The Westside Warriors youth soccer team has raised (सङ्कलन गरेको) $5,000 for the Community Animal Shelter through a month-long fundraising (कोष सङ्कलन) campaign (अभियान) that ended last weekend.

The team, made up of 20 players aged 12-14, organized (आयोजना गरे) car washes, bake sales, and a charity (परोपकारी) soccer tournament (प्रतियोगिता) to raise money for the shelter, which has been struggling (संघर्ष गर्दै) financially (आर्थिक रूपमा) due to increased operating (सञ्चालन) costs.

"We love animals and wanted to help," said team captain (कप्तान) Jessica Martinez, 13. "The shelter takes care of dogs and cats that need homes, and we thought they needed our support (समर्थन)."

The fundraising idea started when team member Alex Johnson visited the shelter with his family to adopt (ग्रहण गर्ने) a puppy. He learned that the shelter needed money for food, medical care, and building repairs (मर्मत).

"Alex told us about the shelter's problems, and we all agreed we wanted to help," explained (व्याख्या गरे) coach Sandra Williams. "The kids worked incredibly (अविश्वसनीय रूपमा) hard to organize these events (कार्यक्रम)."

The car wash events, held every Saturday for four weeks, attracted (आकर्षित गरे) dozens of customers (ग्राहक). Parents and community (समुदाय) members supported the bake sales, which featured (प्रस्तुत गरियो) homemade cookies, cakes, and sandwiches prepared by team families.

The charity tournament was the biggest success (सफलता), featuring eight local youth teams and raising $2,500 in entry fees and concession (रियायत) sales. Even teams that usually compete (प्रतिस्पर्धा गर्ने) against each other came together for this good cause (उद्देश्य).

"I'm amazed (चकित) by what these young people accomplished (हासिल गरे)," said Animal Shelter Director (निर्देशक) Linda Foster. "This money will help us feed and care for over 150 animals currently (हाल) in our facility (सुविधा)."

The donation (दान) will specifically (विशेष गरी) help pay for veterinary (पशु चिकित्सा) care for sick and injured animals, as well as food supplies (आपूर्ति) for the next three months.

"These kids show that age doesn't matter when you want to make a difference (फरक पार्ने)," Foster added. "They're an inspiration (प्रेरणा) to our entire community."

The team presented (प्रस्तुत गरे) the check during a special ceremony (समारोह) at the shelter yesterday, where they also helped clean kennels (कुकुर राख्ने ठाउँ) and played with the animals.

Several team members said they plan to volunteer (स्वयंसेवक बन्ने) at the shelter regularly (नियमित रूपमा) and hope to organize another fundraiser next year.`
    },
    {
      title: "Technology Fair Showcases Student Innovation",
      description: "A news story about educational achievements",
      questions: `Develop a news story based on the following outlines. Use suitable (उपयुक्त) headline (शीर्षक) and include all the essential (आवश्यक) information. Write your answer in about 150 words.

Annual Technology Fair - Lincoln Middle School, Eastdale - Saturday - Over 200 students participated (भाग लिए) - Grades 6-12 - Theme "Technology for Tomorrow" - Projects (परियोजना) ranged from mobile apps to robotics (रोबोट विज्ञान) - Lisa Park won first place with "Smart Garden Monitor" - Michael Thompson created "Study Buddy" app - Robotics category (वर्ग) featured (प्रस्तुत गरियो) recycling robot - Judges (निर्णायक) included business leaders and professors - Evaluated (मूल्याङ्कन गरे) innovation (नवीनता), technical skill, presentation - Workshops (कार्यशाला) on coding and 3D printing - Local companies offered internships (इन्टर्नशिप).`,
      content: `Students Showcase (प्रदर्शन) Creativity (सृजनशीलता) at Annual Technology Fair

Eastdale, 10th November - Innovation (नवीनता) was on full display (प्रदर्शन) at the Eastdale School District's Annual Technology Fair held at Lincoln Middle School on Saturday. Over 200 students from grades 6-12 presented (प्रस्तुत गरे) projects (परियोजना) demonstrating (प्रदर्शन गर्दै) their technological (प्राविधिक) skills and creativity.

This year's theme (विषयवस्तु), "Technology for Tomorrow," encouraged (प्रोत्साहित गरे) students to create solutions (समाधान) for real-world problems. Projects ranged from mobile apps and websites to robotics (रोबोट विज्ञान) and environmental (वातावरणीय) monitoring (अनुगमन) systems.

Eighth-grader Lisa Park won first place in the middle school division (विभाग) with her project "Smart Garden Monitor." Her device (उपकरण) uses sensors (सेन्सर) to track soil moisture (नमी), temperature (तापक्रम), and light levels, sending alerts (चेतावनी) to gardeners' phones when plants need attention.

"I created this because my grandmother loves gardening but sometimes forgets to water her plants," Park explained (व्याख्या गरे). "Now she can check on her garden from inside the house."

In the high school division, senior (अन्तिम वर्ष) Michael Thompson took first place with a mobile app called "Study Buddy" that helps students organize (व्यवस्थित गर्ने) homework assignments (काम) and study schedules (तालिका). The app has already been downloaded (डाउनलोड गरिएको) by over 500 students in the district.

"I noticed many students struggle (संघर्ष गर्ने) with time management (व्यवस्थापन)," Thompson said. "My app sends reminders (स्मरण पत्र) and helps break large assignments into smaller, manageable (व्यवस्थापन योग्य) tasks."

The robotics category (वर्ग) featured (प्रस्तुत गरियो) impressive (प्रभावशाली) entries (प्रविष्टि), including a robot designed by sophomore (दोस्रो वर्ष) team Katie Liu and Robert Kim that can sort recyclables (पुनर्नवीनीकरण योग्य) automatically (स्वचालित रूपमा). Their creation uses artificial intelligence (कृत्रिम बुद्धिमत्ता) to identify (पहिचान गर्ने) different types of materials (सामग्री).

"We wanted to make recycling (पुनर्नवीनीकरण) easier and more efficient (प्रभावकारी)," Liu explained. "Our robot can sort plastic, paper, and metal much faster than humans."

Judges (निर्णायक) included local business leaders, university professors (प्राध्यापक), and technology professionals (व्यावसायिक). They evaluated (मूल्याङ्कन गरे) projects based on innovation, technical (प्राविधिक) skill, presentation (प्रस्तुति) quality, and potential (सम्भावित) real-world impact (प्रभाव).

"The creativity and technical ability (क्षमता) we saw today was remarkable (उल्लेखनीय)," said judge Dr. Patricia Wong, a computer science professor at State University. "These students are solving real problems with impressive solutions."

The fair also featured workshops (कार्यशाला) where students learned about coding (कोडिङ), 3D printing, and digital design. Local technology companies sponsored (प्रायोजित गरे) the event and offered internships (इन्टर्नशिप) opportunities (अवसर) to high school participants (सहभागी).

District Superintendent (अधीक्षक) Dr. Mark Johnson praised (प्रशंसा गरे) the students' achievements (उपलब्धि). "Events like this show that our students are prepared (तयार) for the technology-driven careers of the future," he said.

Next year's fair is scheduled (तालिका) for the second Saturday in May, and organizers (आयोजक) hope to expand (विस्तार गर्ने) participation (सहभागिता) to include elementary school students.`
    },
    {
      title: "Community Garden Project Brings Neighbors Together",
      description: "A news story about community cooperation and environmental action",
      questions: `Develop a news story based on the following outlines. Use suitable (उपयुक्त) headline (शीर्षक) and include all the essential (आवश्यक) information. Write your answer in about 150 words.

Community Garden Project - Maple Street, Riverside - Started six months ago - Vacant (खाली) lot transformed (परिवर्तन गरियो) - Maria Gonzalez initiated (शुरु गरे) - 50 local families supported - City council approved (स्वीकृत गरे) - Students from Riverside Elementary participated (भाग लिए) - 30 individual family plots (जग्गाको टुक्रा) - Shared herb section and playground - Weekly gatherings (भेला) every Saturday - Improved (सुधार भएको) air quality - Decreased (घटेको) crime rate - Property values increased 8% - Plans for second garden - Annual harvest (फसल) festival (चाड).`,
      content: `Community (समुदाय) Garden Transforms (परिवर्तन गर्छ) Vacant (खाली) Lot into Green Space

Riverside, 5th September - What was once an empty lot filled with weeds (झारपात) and trash has been transformed (परिवर्तन गरिएको) into a thriving (फस्टाउदो) community garden, thanks to the efforts (प्रयास) of local residents (बासिन्दा) and students from Riverside Elementary School.

The garden project began six months ago when neighborhood (छिमेक) resident Maria Gonzalez proposed (प्रस्ताव गरे) converting (परिवर्तन गर्ने) the vacant lot on Maple Street into a community space where families could grow their own vegetables (तरकारी) and flowers.

"The lot was an eyesore (आँखा दुखाउने), and kids had nowhere safe to play," Gonzalez explained. "I thought a garden would beautify (सुन्दर बनाउने) the area and bring people together."

The city council (परिषद) approved (स्वीकृत गरे) the project after Gonzalez presented a detailed (विस्तृत) plan and gathered support (समर्थन) from 50 local families. The Parks Department provided (उपलब्ध गराए) tools and soil, while local businesses donated (दान गरे) seeds and plants.

Students from Mrs. Peterson's fourth-grade class at Riverside Elementary became key participants (सहभागी), adopting (ग्रहण गर्दै) sections of the garden as part of their science curriculum (पाठ्यक्रम). The children planted tomatoes, carrots, lettuce, and sunflowers while learning about plant biology (जीवविज्ञान) and nutrition (पोषण).

"The kids are so excited (उत्साहित) to see their plants growing," said teacher Sarah Peterson. "This project makes science real and meaningful (अर्थपूर्ण) for them."

The garden now includes 30 individual (व्यक्तिगत) family plots (जग्गाको टुक्रा), a shared herb section, and a playground area with benches and a picnic table. Each family pays $25 per year to maintain (मर्मत गर्न) a plot, with the money used for water and common supplies (आपूर्ति).

Every Saturday morning, neighbors gather (भेला हुन्छन्) to tend (हेरचाह गर्न) their plants, share gardening tips, and enjoy coffee and pastries together. Children play on the small playground while adults work in the garden.

"It's brought our neighborhood closer together," said resident James Wilson, who grows peppers and tomatoes with his teenage son. "We know our neighbors better now, and the kids have made new friends."

The garden has also had unexpected (अनपेक्षित) benefits (फाइदा). Local police report that minor (सानो) crime (अपराध) in the area has decreased (घटेको) significantly (उल्लेखनीय रूपमा) since the garden opened, and property (सम्पत्ति) values on surrounding streets have increased by an average (औसत) of 8%.

Environmental (वातावरणीय) science students from the nearby high school recently conducted (सञ्चालन गरे) a study showing that the garden has improved (सुधार भएको) air quality and provides habitat (बासस्थान) for birds and beneficial (लाभदायक) insects (कीरा).

"This project proves (प्रमाणित गर्छ) that small community actions can have big impacts (प्रभाव)," said City Councilwoman Jennifer Park. "The garden has improved the environment (वातावरण), property values, and community relationships (सम्बन्ध)."

Plans are already underway (चलिरहेको) for a second community garden on the north side of town, inspired (प्रेरित) by the success (सफलता) of the Maple Street project.

The garden holds an annual (वार्षिक) harvest (फसल) festival (चाड) each October, where families share the fruits of their labor (परिश्रम) and celebrate (मनाउने) their community achievement (उपलब्धि).`
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
            <Newspaper className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">News Story Writing</h1>
          </div>
          <p className="text-muted-foreground">
            Learn to write informative news stories that report facts clearly and objectively
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {newsExamples.map((example, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-education-text">{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-education-text mb-2">Question:</h4>
                  <div className="bg-muted p-3 rounded-lg border">
                    <pre className="whitespace-pre-wrap text-sm text-education-text">
                      {example.questions}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-education-text mb-2">News Story (Answer):</h4>
                  <div className="bg-education-light p-4 rounded-lg border max-h-96 overflow-y-auto">
                    <pre className="whitespace-pre-wrap text-sm text-education-text">
                      {example.content}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-card rounded-lg shadow-card">
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for News Story Writing</h2>
          <ul className="space-y-2 text-education-text">
            <li>• Start with a strong headline that summarizes the main story</li>
            <li>• Use the "5 W's and H": Who, What, When, Where, Why, and How</li>
            <li>• Put the most important information first (inverted pyramid structure)</li>
            <li>• Use quotes from people involved in the story</li>
            <li>• Write in third person and stay objective</li>
            <li>• Keep sentences short and use simple, clear language</li>
            <li>• Include specific facts, numbers, and details</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsStory;