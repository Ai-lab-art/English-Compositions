import { ArrowLeft, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const NewsStory = () => {
  const newsExamples = [
    {
      title: "Fatal Bus Accident on Prithvi Highway Claims 15 Lives",
      description: "A tragic road accident news from Nepal",
      content: `Tragic Bus Accident on Prithvi Highway Kills 15 Passengers

CHITWAN - A passenger bus traveling from Kathmandu to Pokhara met with a fatal accident yesterday morning on the Prithvi Highway near Mugling, claiming 15 lives and injuring 25 others. The accident occurred around 6:30 AM when the bus skidded off the road and plunged into the Trishuli River.

The bus, operated by Greenline Tours (Ba 2 Kha 1234), was carrying 40 passengers when it lost control while navigating a sharp turn near kilometer post 87. Preliminary investigations suggest that dense fog and wet road conditions contributed to the accident.

"The driver seemed to have lost control due to poor visibility caused by heavy fog," said Traffic Police Inspector Ram Bahadur Thapa. "The road was also slippery from last night's rain."

Rescue operations began immediately after local villagers reported the accident. Teams from Nepal Police, Armed Police Force, and local volunteers worked together to pull survivors from the wreckage. The injured were rushed to Bharatpur Hospital and Chitwan Medical College.

Among the deceased are 8 men, 5 women, and 2 children. The injured passengers are receiving treatment, with 10 in critical condition according to Dr. Sushila Karki, Chief Medical Officer at Bharatpur Hospital.

"We are doing everything possible to save the lives of those in critical condition," Dr. Karki stated. "Additional medical staff has been called in to handle the emergency."

The bus driver, Tek Bahadur Gurung (45), was among those killed in the accident. He had 20 years of driving experience on this route.

This tragic incident has once again highlighted the poor condition of Nepal's highways and the urgent need for better road safety measures. The Prithvi Highway has witnessed numerous accidents in recent years due to narrow roads, sharp turns, and lack of proper safety barriers.

Prime Minister has announced compensation of NPR 500,000 for the families of deceased passengers and NPR 100,000 for the injured. The government has also ordered a thorough investigation into the accident.`
    },
    {
      title: "Earthquake Measuring 5.8 Magnitude Hits Western Nepal",
      description: "Breaking news about earthquake in Nepal",
      content: `5.8 Magnitude Earthquake Strikes Bajhang District, No Major Casualties Reported

BAJHANG - A moderate earthquake measuring 5.8 on the Richter scale struck Bajhang district in far-western Nepal yesterday at 11:45 PM, causing widespread panic among residents but no major casualties have been reported so far.

The epicenter of the earthquake was located 12 kilometers northeast of Chainpur, the district headquarters of Bajhang, at a depth of 10 kilometers, according to the National Seismological Centre.

"The earthquake was felt strongly in Bajhang, Doti, Achham, and Kailali districts," said Dr. Lok Bijaya Adhikari, Chief Seismologist at the National Seismological Centre. "We have recorded several aftershocks, with the strongest measuring 4.2 magnitude."

People rushed out of their homes in panic as buildings shook for nearly 30 seconds. Many residents spent the night outdoors, fearing aftershocks. Local authorities have set up temporary shelters in open areas for those afraid to return to their homes.

"The whole house was shaking, and we heard a loud rumbling sound," said Kamala Devi Bhatta, a local resident. "We immediately ran outside with our children. It was very frightening."

Preliminary reports from local authorities indicate minor cracks in some old buildings and traditional houses, but no major structural damage has been reported. The District Emergency Operation Center has been activated to assess damages and coordinate relief efforts.

Chief District Officer Narayan Prasad Bhatta confirmed that no casualties have been reported from any part of the district. "Our teams are conducting detailed surveys in remote areas to assess any possible damages," he said.

The earthquake was also felt in neighboring districts of Uttarakhand, India. However, no damages have been reported from across the border.

Nepal lies in a seismically active zone and frequently experiences earthquakes. The country is still recovering from the devastating 7.8 magnitude earthquake in 2015 that killed nearly 9,000 people and destroyed hundreds of thousands of homes.

Seismologists have advised people to remain alert for aftershocks and follow earthquake safety measures. The government has deployed emergency response teams to the affected areas.`
    },
    {
      title: "Youth Soccer Team Helps Community",
      description: "A news story about young people making a difference",
      content: `Local Soccer Team Raises $5,000 for Animal Shelter

WESTSIDE - The Westside Warriors youth soccer team has raised $5,000 for the Community Animal Shelter through a month-long fundraising campaign that ended last weekend.

The team, made up of 20 players aged 12-14, organized car washes, bake sales, and a charity soccer tournament to raise money for the shelter, which has been struggling financially due to increased operating costs.

"We love animals and wanted to help," said team captain Jessica Martinez, 13. "The shelter takes care of dogs and cats that need homes, and we thought they needed our support."

The fundraising idea started when team member Alex Johnson visited the shelter with his family to adopt a puppy. He learned that the shelter needed money for food, medical care, and building repairs.

"Alex told us about the shelter's problems, and we all agreed we wanted to help," explained coach Sandra Williams. "The kids worked incredibly hard to organize these events."

The car wash events, held every Saturday for four weeks, attracted dozens of customers. Parents and community members supported the bake sales, which featured homemade cookies, cakes, and sandwiches prepared by team families.

The charity tournament was the biggest success, featuring eight local youth teams and raising $2,500 in entry fees and concession sales. Even teams that usually compete against each other came together for this good cause.

"I'm amazed by what these young people accomplished," said Animal Shelter Director Linda Foster. "This money will help us feed and care for over 150 animals currently in our facility."

The donation will specifically help pay for veterinary care for sick and injured animals, as well as food supplies for the next three months.

"These kids show that age doesn't matter when you want to make a difference," Foster added. "They're an inspiration to our entire community."

The team presented the check during a special ceremony at the shelter yesterday, where they also helped clean kennels and played with the animals.

Several team members said they plan to volunteer at the shelter regularly and hope to organize another fundraiser next year.`
    },
    {
      title: "Technology Fair Showcases Student Innovation",
      description: "A news story about educational achievements",
      content: `Students Showcase Creativity at Annual Technology Fair

EASTDALE - Innovation was on full display at the Eastdale School District's Annual Technology Fair held at Lincoln Middle School on Saturday. Over 200 students from grades 6-12 presented projects demonstrating their technological skills and creativity.

This year's theme, "Technology for Tomorrow," encouraged students to create solutions for real-world problems. Projects ranged from mobile apps and websites to robotics and environmental monitoring systems.

Eighth-grader Lisa Park won first place in the middle school division with her project "Smart Garden Monitor." Her device uses sensors to track soil moisture, temperature, and light levels, sending alerts to gardeners' phones when plants need attention.

"I created this because my grandmother loves gardening but sometimes forgets to water her plants," Park explained. "Now she can check on her garden from inside the house."

In the high school division, senior Michael Thompson took first place with a mobile app called "Study Buddy" that helps students organize homework assignments and study schedules. The app has already been downloaded by over 500 students in the district.

"I noticed many students struggle with time management," Thompson said. "My app sends reminders and helps break large assignments into smaller, manageable tasks."

The robotics category featured impressive entries, including a robot designed by sophomore team Katie Liu and Robert Kim that can sort recyclables automatically. Their creation uses artificial intelligence to identify different types of materials.

"We wanted to make recycling easier and more efficient," Liu explained. "Our robot can sort plastic, paper, and metal much faster than humans."

Judges included local business leaders, university professors, and technology professionals. They evaluated projects based on innovation, technical skill, presentation quality, and potential real-world impact.

"The creativity and technical ability we saw today was remarkable," said judge Dr. Patricia Wong, a computer science professor at State University. "These students are solving real problems with impressive solutions."

The fair also featured workshops where students learned about coding, 3D printing, and digital design. Local technology companies sponsored the event and offered internship opportunities to high school participants.

District Superintendent Dr. Mark Johnson praised the students' achievements. "Events like this show that our students are prepared for the technology-driven careers of the future," he said.

Next year's fair is scheduled for the second Saturday in May, and organizers hope to expand participation to include elementary school students.`
    },
    {
      title: "Community Garden Project Brings Neighbors Together",
      description: "A news story about community cooperation and environmental action",
      content: `Community Garden Transforms Vacant Lot into Green Space

RIVERSIDE - What was once an empty lot filled with weeds and trash has been transformed into a thriving community garden, thanks to the efforts of local residents and students from Riverside Elementary School.

The garden project began six months ago when neighborhood resident Maria Gonzalez proposed converting the vacant lot on Maple Street into a community space where families could grow their own vegetables and flowers.

"The lot was an eyesore, and kids had nowhere safe to play," Gonzalez explained. "I thought a garden would beautify the area and bring people together."

The city council approved the project after Gonzalez presented a detailed plan and gathered support from 50 local families. The Parks Department provided tools and soil, while local businesses donated seeds and plants.

Students from Mrs. Peterson's fourth-grade class at Riverside Elementary became key participants, adopting sections of the garden as part of their science curriculum. The children planted tomatoes, carrots, lettuce, and sunflowers while learning about plant biology and nutrition.

"The kids are so excited to see their plants growing," said teacher Sarah Peterson. "This project makes science real and meaningful for them."

The garden now includes 30 individual family plots, a shared herb section, and a playground area with benches and a picnic table. Each family pays $25 per year to maintain a plot, with the money used for water and common supplies.

Every Saturday morning, neighbors gather to tend their plants, share gardening tips, and enjoy coffee and pastries together. Children play on the small playground while adults work in the garden.

"It's brought our neighborhood closer together," said resident James Wilson, who grows peppers and tomatoes with his teenage son. "We know our neighbors better now, and the kids have made new friends."

The garden has also had unexpected benefits. Local police report that minor crime in the area has decreased significantly since the garden opened, and property values on surrounding streets have increased by an average of 8%.

Environmental science students from the nearby high school recently conducted a study showing that the garden has improved air quality and provides habitat for birds and beneficial insects.

"This project proves that small community actions can have big impacts," said City Councilwoman Jennifer Park. "The garden has improved the environment, property values, and community relationships."

Plans are already underway for a second community garden on the north side of town, inspired by the success of the Maple Street project.

The garden holds an annual harvest festival each October, where families share the fruits of their labor and celebrate their community achievement.`
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
              <CardContent>
                <div className="bg-education-light p-4 rounded-lg border max-h-96 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm text-education-text">
                    {example.content}
                  </pre>
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