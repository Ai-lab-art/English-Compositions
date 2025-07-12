import { ArrowLeft, Edit, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EditorLetter = () => {
  const [currentExample, setCurrentExample] = useState(0);

  const editorLetterExamples = [
    {
      title: "Letter About Education Problems",
      description: "A letter to editor about educational issues in Nepal",
      content: `The Editor,
The Himalayan Times
Dear Sir/Madam,

Through your newspaper, I want to share my concerns about the poor condition of government schools in Nepal.

Many schools in rural areas do not have enough teachers, proper buildings, or basic facilities like toilets and clean water. Students have to sit on the floor because there are no desks and chairs. During monsoon, classes are cancelled because the roofs leak.

The government promises to improve education every year, but nothing changes. Parents are forced to send their children to expensive private schools if they can afford it. Poor families cannot afford private schools, so their children suffer.

I request the government to:
- Hire more qualified teachers
- Build proper school buildings
- Provide books and uniforms for free
- Ensure regular electricity and internet

Education is the foundation of our country's development. We cannot progress if our children do not get quality education.

I hope you will publish this letter so that concerned authorities will take action.

Thank you.

Yours truly,
Krishna Bahadur Shrestha
Dhading, Nepal`
    },
    {
      title: "Letter About Road Conditions",
      description: "A letter to editor about poor road conditions",
      content: `The Editor,
Kantipur Daily
Dear Sir/Madam,

I am writing to highlight the terrible condition of roads in Kathmandu Valley through your newspaper.

The roads in our capital city are full of potholes and dust. During the dry season, we cannot breathe properly due to dust. During monsoon, the roads become muddy rivers. Traffic jams last for hours because of bad roads.

Ambulances carrying sick patients get stuck in traffic. School children reach late to classes. Office workers waste hours every day just traveling short distances. The air pollution from vehicles stuck in traffic is making people sick.

The concerned authorities seem to ignore this problem. They start road construction during monsoon and leave it incomplete. Tax payers' money is wasted on poor quality work.

I urge the government to:
- Complete ongoing road projects quickly
- Use good quality materials
- Plan construction during dry season
- Punish contractors who do poor work

We pay taxes and deserve good roads. Our leaders travel on the same roads, so they should understand our problems.

Please publish this letter to draw attention to this urgent issue.

Sincerely,
Sushma Karki
Lalitpur, Nepal`
    },
    {
      title: "Letter About Water Shortage",
      description: "A letter to editor about water supply problems",
      content: `The Editor,
Nagarik News
Dear Sir/Madam,

I want to bring attention to the serious water shortage problem in Kathmandu through your newspaper.

For the past two months, our area receives water supply only two days a week. People have to wake up at 4 AM to collect water when it comes. Many families spend hundreds of rupees buying water from tankers.

The situation is worse in summer. Poor people cannot afford to buy water. Women and children have to walk long distances to find water. Some people are getting sick from drinking dirty water.

The Kathmandu Upatyaka Khanepani Limited (KUKL) says there is not enough water in the source. But we see water being wasted in many places. Rich areas get regular water supply while poor areas suffer.

This is a basic human right. The government should:
- Find new water sources immediately
- Fix old, leaking pipes
- Ensure equal distribution to all areas
- Punish people who waste water

During festivals and wedding seasons, the problem becomes worse. Hotels and restaurants get enough water while common people suffer.

I request you to publish this letter so that authorities will take immediate action to solve this crisis.

Thank you.

Respectfully,
Raj Kumar Tamang
Kirtipur, Nepal`
    },
    {
      title: "Letter About Plastic Pollution",
      description: "A letter to editor about environmental pollution",
      content: `The Editor,
Gorkhapatra Daily
Dear Sir/Madam,

I am concerned about the increasing plastic pollution in Nepal and want to share this through your newspaper.

Every day, we see plastic bags, bottles, and containers thrown everywhere. Our beautiful rivers like Bagmati and Bishnumati have become garbage dumps. Mountains of plastic waste are growing in every corner of Kathmandu.

Animals are eating plastic and dying. The soil is becoming poisonous because plastic does not decompose. During monsoon, plastic blocks drains and causes flooding. Our tourist areas look dirty because of plastic waste.

Many countries have banned single-use plastic, but Nepal is still using it freely. Shopkeepers give everything in plastic bags. People throw plastic wherever they want because there are no proper dustbins.

We need immediate action:
- Ban single-use plastic completely
- Put heavy fines for throwing plastic
- Create recycling centers in every ward
- Educate people about alternatives like cloth bags
- Make plastic producing companies responsible

Our children will suffer if we don't act now. We have already lost many beautiful places to pollution. Countries like Rwanda have become plastic-free. Why can't Nepal do the same?

I hope this letter will inspire people to stop using plastic and keep our country clean.

Thank you for your time.

Yours sincerely,
Maya Devi Poudel
Bhaktapur, Nepal`
    },
    {
      title: "Letter About Youth Unemployment",
      description: "A letter to editor about job opportunities for youth",
      content: `The Editor,
Republica Daily
Dear Sir/Madam,

Through your newspaper, I want to discuss the serious problem of youth unemployment in Nepal.

Every year, thousands of young people graduate from colleges, but there are very few job opportunities. Many educated youth are working as laborers in foreign countries because they cannot find suitable jobs in Nepal.

Our country loses its best human resources when educated people go abroad. Families spend lakhs of rupees on education, but their children have to work in restaurants and factories in other countries.

The government talks about development, but how can we develop without our own people? Young doctors become cleaners in America. Engineers drive taxis in Australia. This is very sad for our nation.

The main problems are:
- No new industries being established
- Government jobs are very limited
- Private companies prefer experienced workers
- Corruption in hiring processes
- No support for new businesses

The government should:
- Create more job opportunities in Nepal
- Help young people start their own businesses
- Invest in technology and manufacturing
- Stop brain drain by providing good salaries
- Make loan processes easier for entrepreneurs

If we can provide good opportunities here, our youth will not need to go abroad. They can contribute to Nepal's development and stay with their families.

I hope concerned authorities will read this and take action to solve this national problem.

Respectfully yours,
Dinesh Adhikari
Pokhara, Nepal`
    },
    {
      title: "Letter About Festival Celebrations",
      description: "A letter to editor about preserving cultural traditions",
      content: `The Editor,
Annapurna Post
Dear Sir/Madam,

I want to share my thoughts about how we celebrate our traditional festivals in modern times through your newspaper.

Nepal is rich in cultural traditions and festivals. Dashain, Tihar, Holi, and many other festivals bring joy and unity to our families. However, I am worried that we are slowly losing the true meaning of these celebrations.

During Dashain, people spend all their money on expensive clothes and meat. Many families take loans just to celebrate festivals. The focus has shifted from family bonding to showing off wealth.

Young people prefer going to parties instead of receiving blessings from elders. They don't know the stories and traditions behind our festivals. Social media has become more important than spending time with family.

Some positive changes are also happening. People are becoming more aware about animal rights during festivals. Many families now celebrate without sacrificing animals, which is good.

We should celebrate our festivals in a way that:
- Preserves our cultural values
- Brings families together
- Doesn't create financial burden
- Teaches our children about traditions
- Respects all living beings

Our festivals are our identity. If we lose them, we lose who we are as Nepali people. Let's celebrate with joy but also with responsibility and cultural awareness.

I hope this message will remind people to celebrate our beautiful festivals in their true spirit.

Thank you.

With cultural pride,
Kamala Sharma
Chitwan, Nepal`
    }
  ];

  const nextExample = () => {
    setCurrentExample((prev) => (prev + 1) % editorLetterExamples.length);
  };

  const prevExample = () => {
    setCurrentExample((prev) => (prev - 1 + editorLetterExamples.length) % editorLetterExamples.length);
  };

  const currentLetter = editorLetterExamples[currentExample];

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
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <Edit className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Letter to Editor</h1>
            </div>
            <div className="text-right text-sm text-muted-foreground">
              <div>Your Address</div>
              <div>{new Date().toLocaleDateString()}</div>
            </div>
          </div>
          <p className="text-muted-foreground">
            Learn how to write letters to newspaper editors about important issues
          </p>
        </div>


        {/* All Examples Grid */}
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {editorLetterExamples.map((example, index) => (
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
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for Writing Letters to Editor</h2>
          <ul className="space-y-2 text-education-text">
            <li>• Start with "The Editor," then newspaper name, then "Dear Sir/Madam,"</li>
            <li>• Write about issues that affect many people in your community</li>
            <li>• Give specific examples and suggest practical solutions</li>
            <li>• Keep your language simple and respectful</li>
            <li>• Make sure your facts are correct before writing</li>
            <li>• Stay focused on one main issue per letter</li>
            <li>• Be polite even when criticizing government or authorities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EditorLetter;