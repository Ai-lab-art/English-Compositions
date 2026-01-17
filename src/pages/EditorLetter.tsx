import { ArrowLeft, Edit, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const formatDate = () => {
  const now = new Date();
  const day = now.getDate();
  const month = now.toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();
  
  const getOrdinalSuffix = (day: number) => {
    if (day >= 11 && day <= 13) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };
  
  return `${day}${getOrdinalSuffix(day)} ${month}, ${year}`;
};

const EditorLetter = () => {
  const [currentExample, setCurrentExample] = useState(0);

  const editorLetterExamples = [
    {
      title: "Letter About Education Problems",
      description: "A letter to editor about educational issues in Nepal",
      content: `                                                                    123 Main Street
                                                                    Dhading, Nepal
                                                                    ${formatDate()}

The Editor,
The Himalayan Times
Dear Sir/Madam,

Through your esteemed newspaper, I want to share my deep concerns about the deteriorating condition of government schools in Nepal. This issue affects millions of children across the country and requires immediate attention from the authorities.

Many schools in rural areas do not have adequate teachers, proper infrastructure, or basic facilities like toilets and clean drinking water. Students have to sit on the floor throughout the day because there are no desks and chairs available. During the monsoon season, classes are frequently cancelled because the roofs leak badly and rainwater floods the classrooms. Teachers often remain absent, and when they do come, they struggle to teach large numbers of students without proper teaching materials.

The government makes promises to improve the educational sector every year, but unfortunately nothing substantial changes on the ground. Parents who can afford it are compelled to send their children to expensive private schools to ensure quality education. However, poor families cannot bear such financial burden, and consequently their children suffer from inadequate learning opportunities. This creates a dangerous gap between rich and poor students, which will harm our society in the long run.

I earnestly request the government to take immediate action by hiring more qualified teachers who are properly trained and motivated. They should construct proper school buildings with strong roofs, adequate ventilation, and sufficient classrooms. Essential educational materials like books, notebooks, and uniforms should be provided free of cost to needy students. Furthermore, regular electricity supply and internet connectivity must be ensured so that students can access modern educational resources and compete in today's digital world.

Education is the foundation of our nation's development and prosperity. We cannot progress as a country if our children do not receive quality education that prepares them for future challenges. A well-educated population is essential for economic growth, social harmony, and democratic values.

I sincerely hope you will publish this letter in your newspaper so that concerned authorities will take immediate and effective action to address this critical issue.

Thank you for your attention.

Yours truly,
Krishna Bahadur Shrestha

Difficult Words with Meanings:
• Esteemed (respected, valued) - सम्माननीय
• Deteriorating (becoming worse) - बिग्रँदै गएको
• Adequate (enough, sufficient) - पर्याप्त
• Infrastructure (basic facilities and systems) - पूर्वाधार
• Compelled (forced to do something) - बाध्य
• Substantial (large, significant) - महत्वपूर्ण
• Consequently (as a result) - परिणामस्वरूप
• Earnestly (seriously, sincerely) - गम्भीरतापूर्वक
• Ventilation (air circulation system) - हावा संचार
• Prosperity (success, wealth, growth) - समृद्धि`
    },
    {
      title: "Letter About Road Conditions",
      description: "A letter to editor about poor road conditions",
      content: `                                                                    456 Ring Road
                                                                    Lalitpur, Nepal
                                                                    ${formatDate()}

The Editor,
Kantipur Daily
Dear Sir/Madam,

I am writing to highlight the deplorable condition of roads in Kathmandu Valley through your reputed newspaper. This persistent problem has been affecting the daily lives of millions of citizens for many years now, yet no concrete solution seems to be in sight.

The roads in our capital city are riddled with dangerous potholes and covered in thick layers of dust. During the dry season, pedestrians and commuters cannot breathe properly due to excessive dust pollution that fills the air. When the monsoon arrives, these same roads transform into muddy rivers, creating hazardous conditions for all types of vehicles. Traffic congestion lasts for hours every single day simply because the road infrastructure is so poorly maintained. Drivers struggle to navigate through the damaged surfaces, which slows down movement throughout the entire valley.

The consequences of these terrible road conditions are severe and far-reaching. Ambulances carrying critically ill patients get stuck in endless traffic jams, sometimes leading to tragic outcomes. School children arrive late to their classes regularly, missing important lessons and disrupting their education. Office workers waste precious hours every day just traveling short distances that should take only minutes. The air pollution from thousands of vehicles stuck in traffic is causing respiratory diseases and other serious health problems among the population. Additionally, vehicles get damaged frequently due to potholes, forcing people to spend large amounts on repairs.

The concerned authorities appear to be completely indifferent to this mounting crisis. They initiate road construction projects during the monsoon season when work quality is compromised, and then abandon these projects halfway through completion. Taxpayers' money is being wasted on substandard work done by contractors who use inferior materials and poor construction techniques. There seems to be no accountability or quality control mechanism in place to ensure that public funds are utilized properly.

I strongly urge the government and municipal authorities to complete all ongoing road projects quickly and efficiently. They must use high-quality construction materials that can withstand heavy traffic and weather conditions. All major road construction and repair work should be carefully planned and executed during the dry season to ensure better results. Furthermore, contractors who deliver poor quality work should face strict penalties and be blacklisted from future government projects to maintain standards.

We are law-abiding citizens who pay our taxes regularly and therefore deserve good roads that facilitate safe and efficient transportation. Even our political leaders and government officials travel on these same damaged roads, so they should personally understand the severity of our daily struggles and frustrations.

I earnestly request you to please publish this letter to draw widespread public and official attention to this urgent civic issue that demands immediate resolution.

Sincerely,
Sushma Karki

Difficult Words with Meanings:
• Deplorable (very bad, shocking) - अत्यन्तै खराब
• Reputed (well-known, respected) - प्रतिष्ठित
• Persistent (continuing, ongoing) - निरन्तर
• Riddled (full of, covered with) - भरिएको
• Hazardous (dangerous, risky) - खतरनाक
• Congestion (crowding, traffic jam) - भीडभाड
• Far-reaching (having wide effects) - व्यापक प्रभाव पार्ने
• Critically (seriously, extremely) - गम्भीर रूपमा
• Indifferent (not caring, unconcerned) - उदासीन
• Substandard (below acceptable quality) - घटिया
• Accountability (responsibility) - जवाफदेहिता`
    },
    {
      title: "Letter About Water Shortage",
      description: "A letter to editor about water supply problems",
      content: `                                                                    789 Water Colony
                                                                    Kirtipur, Nepal
                                                                    ${formatDate()}

The Editor,
Nagarik News
Dear Sir/Madam,

I want to bring urgent attention to the acute water shortage crisis that has been plaguing Kathmandu Valley through your widely-read newspaper. This fundamental problem is affecting the health, dignity, and daily survival of thousands of families in our community.

For the past two months, our residential area has been receiving piped water supply only two days per week, which is absolutely insufficient for basic household needs. People are forced to wake up at four o'clock in the morning to collect whatever water comes through the taps during those brief hours. Many families are now spending hundreds of rupees every week purchasing water from private tanker operators who exploit this desperate situation by charging exorbitant prices. Children miss school and adults miss work just to stay home and collect water when supply arrives.

The situation becomes dramatically worse during the hot summer months when water demand naturally increases. Poor families who cannot afford to buy expensive tanker water suffer the most severely. Women and young children have to walk several kilometers in the scorching heat carrying heavy containers to find alternative water sources like public taps or stone spouts. Shockingly, some families have resorted to drinking contaminated water from unsafe sources, which is causing waterborne diseases like diarrhea, typhoid, and jaundice to spread rapidly in our neighborhood.

The Kathmandu Upatyaka Khanepani Limited authorities claim that there is insufficient water available at the source points. However, we regularly observe massive amounts of water being wasted in various places throughout the city due to leaking pipes and illegal connections. There is also a disturbing pattern of discrimination in water distribution whereby affluent neighborhoods receive regular and adequate water supply while economically disadvantaged areas like ours face severe rationing. This inequality is completely unacceptable and violates the principle of equal access to essential resources.

Access to clean drinking water is recognized as a basic human right by the United Nations and our own constitution. The government and concerned water supply authorities must act immediately to find new sustainable water sources that can meet the growing demands of our expanding urban population. All old and corroded pipes that leak precious water should be identified and replaced without delay. Water distribution systems must be reformed to ensure fair and equal supply to all neighborhoods regardless of their economic status. Strict penalties should be imposed on individuals and establishments that waste water through negligence or illegal practices.

The problem intensifies dramatically during major festivals and wedding seasons when water consumption peaks. Large hotels, restaurants, and banquet halls somehow manage to get sufficient water for their commercial activities while ordinary citizens struggle to get even drinking water for their families. This injustice highlights the corruption and mismanagement in our water supply system.

I urgently request you to publish this letter prominently in your newspaper so that government authorities, water supply management, and policymakers will be compelled to take immediate and effective action to resolve this humanitarian crisis that threatens the well-being of so many citizens.

Thank you for giving voice to this critical issue.

Respectfully,
Raj Kumar Tamang

Difficult Words with Meanings:
• Acute (severe, serious) - तीव्र
• Plaguing (troubling, affecting badly) - सताइरहेको
• Insufficient (not enough) - अपर्याप्त
• Exorbitant (extremely high, unreasonable) - अत्याधिक
• Dramatically (greatly, significantly) - एकदमै
• Contaminated (polluted, impure) - दूषित
• Waterborne (spread through water) - पानीबाट सर्ने
• Affluent (wealthy, rich) - धनी
• Discrimination (unfair treatment) - भेदभाव
• Sustainable (long-lasting, maintainable) - दिगो
• Humanitarian (relating to human welfare) - मानवीय`
    },
    {
      title: "Letter About Plastic Pollution",
      description: "A letter to editor about environmental pollution",
      content: `                                                                    101 Heritage Lane
                                                                    Bhaktapur, Nepal
                                                                    ${formatDate()}

The Editor,
Gorkhapatra Daily
Dear Sir/Madam,

I am deeply concerned about the alarming increase in plastic pollution throughout Nepal and wish to share this critical environmental issue through your influential newspaper. Our beautiful country is being slowly suffocated by mountains of plastic waste that threatens our ecosystem, wildlife, and future generations.

Every single day, we witness plastic bags, bottles, wrappers, and containers being carelessly thrown everywhere in our streets, parks, and public spaces. Our once-beautiful sacred rivers like Bagmati and Bishnumati have tragically transformed into flowing garbage dumps filled with plastic waste. Massive heaps of plastic refuse are accumulating in every corner of Kathmandu Valley, creating an eyesore and serious health hazard. Even in rural areas far from cities, plastic pollution has become a visible problem as consumer goods packaged in plastic reach remote villages.

The environmental and health consequences of this plastic menace are devastating and far-reaching. Stray animals and cattle are frequently eating discarded plastic bags and subsequently dying painful deaths from intestinal blockages. Our agricultural soil is becoming increasingly toxic because plastic does not biodegrade even after hundreds of years buried underground. During the monsoon season, plastic waste blocks drainage systems and sewers, causing severe urban flooding that damages property and spreads diseases. Our tourist destinations that once attracted visitors with their pristine natural beauty now look filthy and unappealing because of plastic litter scattered everywhere, which directly harms our tourism industry and national reputation.

Many developed and developing countries around the world have successfully banned single-use plastic items, but Nepal continues to use them without any meaningful restrictions. Shopkeepers and vendors provide everything from vegetables to snacks in thin plastic bags that are used once and thrown away. Citizens carelessly discard plastic waste wherever convenient because there are insufficient public dustbins and no culture of proper waste segregation. There is neither adequate awareness about the long-term damage caused by plastic nor any sense of personal responsibility for environmental protection.

We desperately need comprehensive and immediate action from all levels of government and society. Single-use plastic items like thin bags, straws, and disposable plates should be completely banned nationwide with strict enforcement mechanisms. Heavy monetary fines must be imposed on individuals and businesses caught littering plastic waste in public areas. Recycling and waste processing centers should be established in every municipal ward to handle plastic waste scientifically. Extensive public education campaigns must be launched to inform people about eco-friendly alternatives such as cloth bags, paper packaging, and reusable containers. Plastic manufacturing companies should be legally mandated to take responsibility for collecting and recycling their products rather than simply producing and selling them without concern for disposal.

Our children and grandchildren will suffer tremendously if we fail to act decisively right now. We have already lost many pristine natural areas to uncontrolled pollution and environmental degradation. Small countries like Rwanda have achieved remarkable success in becoming completely plastic-free through political will and citizen participation. If they can accomplish this transformation, why cannot Nepal follow their inspiring example and protect our natural heritage?

I sincerely hope this letter will motivate citizens, businesses, and government authorities to take urgent action in eliminating plastic pollution and preserving our country's environmental beauty for future generations.

Thank you for providing a platform to discuss this vital issue.

Yours sincerely,
Maya Devi Poudel

Difficult Words with Meanings:
• Alarming (worrying, frightening) - चिन्ताजनक
• Ecosystem (environment where living things exist) - पारिस्थितिक प्रणाली
• Accumulating (gathering, piling up) - जम्मा हुँदै
• Devastating (extremely destructive) - विनाशकारी
• Subsequently (afterwards, later) - पछि
• Biodegrade (naturally break down) - प्राकृतिक रूपमा सड्नु
• Pristine (pure, unspoiled) - शुद्ध
• Segregation (separation, sorting) - छुट्याउने
• Comprehensive (complete, thorough) - व्यापक
• Degradation (damage, decline) - ह्रास`
    },
    {
      title: "Letter About Youth Unemployment",
      description: "A letter to editor about job opportunities for youth",
      content: `                                                                    567 Lakeside Road
                                                                    Pokhara, Nepal
                                                                    ${formatDate()}

The Editor,
Republica Daily
Dear Sir/Madam,

Through your esteemed newspaper, I wish to discuss the grave problem of youth unemployment that is destroying the future of our nation. This crisis is forcing thousands of talented young Nepalis to leave their homeland every year in search of opportunities abroad, which constitutes a massive loss for our country's development potential.

Every year, thousands of young people graduate from colleges and universities with degrees in various fields, but tragically there are very few meaningful employment opportunities available in Nepal to absorb this educated workforce. Many of these educated youth end up working as manual laborers, security guards, or service workers in foreign countries because they simply cannot find suitable professional jobs matching their qualifications in their own homeland. The irony is heartbreaking when we see engineering graduates working as kitchen helpers and medical professionals employed as caregivers doing basic tasks that do not utilize their expensive education and specialized skills.

Our nation is suffering an enormous loss of human capital when these educated and talented young people are compelled to migrate abroad. Families invest their life savings, often selling land or taking heavy loans amounting to lakhs of rupees, to provide quality higher education to their children with dreams of a better future. However, these same children eventually have to work in restaurants, factories, and construction sites in foreign countries doing jobs that require no formal education at all. This represents not only a waste of individual potential but also a tremendous drain on our national resources and capabilities.

The government and political leaders constantly talk about economic development, modernization, and national progress, but the fundamental question remains unanswered. How can we possibly develop as a nation without retaining our own talented human resources? Young doctors who could serve Nepali patients become cleaning staff in American hospitals. Engineers who could build Nepal's infrastructure end up driving taxis in Australian cities. Skilled IT professionals who could contribute to our technology sector work in foreign call centers. This tragic situation is not only humiliating for these individuals but represents a monumental failure of our national planning and economic policies.

The root causes of this unemployment crisis are multiple and interconnected. Virtually no new industries or manufacturing facilities are being established in Nepal to create jobs for the growing educated population. Government sector employment opportunities are extremely limited and often distributed through political connections rather than merit. Private companies and businesses demonstrate a strong preference for experienced workers and are unwilling to invest in training fresh graduates. Widespread corruption in hiring processes means that capable candidates without financial resources or political connections cannot secure positions even when they are qualified. Furthermore, there is minimal government support or favorable policies for young entrepreneurs who wish to start their own businesses and create employment for others.

To address this national emergency, the government must immediately take concrete and comprehensive action. New employment opportunities must be actively created within Nepal through industrial development, technology parks, and support for both domestic and foreign investment in job-creating sectors. Young people with innovative business ideas should receive substantial financial support, mentorship programs, and simplified procedures to establish their own enterprises and become job creators rather than job seekers. Major investment must be channeled into technology sectors, manufacturing industries, agriculture modernization, and service industries that can absorb educated youth. The phenomenon of brain drain must be stopped by offering competitive salaries and attractive career prospects that make staying in Nepal more appealing than migrating abroad. Additionally, loan and credit facilities for young entrepreneurs should be made accessible with minimal bureaucracy and reasonable interest rates.

If we can successfully create an environment with abundant opportunities here in Nepal, our talented youth will have no compelling reason to seek employment in foreign lands. They can actively contribute to building our nation's economy, participate in social development, and enjoy life with their families instead of enduring separation and discrimination abroad. Our young people have enormous potential, energy, and modern education that should be harnessed for Nepal's progress rather than being exported to enrich other countries.

I earnestly hope that concerned government authorities, policymakers, and business leaders will carefully read this letter and finally take meaningful action to solve this critical national crisis that threatens our future.

Respectfully yours,
Dinesh Adhikari

Difficult Words with Meanings:
• Grave (serious, severe) - गम्भीर
• Constitutes (forms, makes up) - गठन गर्छ
• Absorb (take in, accommodate) - समायोजन गर्नु
• Compelled (forced) - बाध्य पारिएको
• Monumental (very great, huge) - विशाल
• Interconnected (linked together) - आपसमा जोडिएका
• Demonstrate (show, display) - प्रदर्शन गर्नु
• Comprehensive (complete, thorough) - विस्तृत
• Channeled (directed, guided) - निर्देशित
• Harnessed (used, utilized) - उपयोग गरिएको`
    },
    {
      title: "Letter About Festival Celebrations",
      description: "A letter to editor about preserving cultural traditions",
      content: `                                                                    234 Festival Street
                                                                    Chitwan, Nepal
                                                                    ${formatDate()}

The Editor,
Annapurna Post
Dear Sir/Madam,

I wish to share my observations and concerns about how we celebrate our traditional festivals in these modern times through your respected newspaper. This matter is important for preserving our unique cultural identity and passing on our rich heritage to future generations.

Nepal is extraordinarily rich in diverse cultural traditions and colorful festivals that have been celebrated for centuries. Magnificent celebrations like Dashain, Tihar, Holi, Teej, and countless other festivals have historically brought immense joy, spiritual meaning, and social unity to our families and communities. However, I am increasingly worried that we are gradually losing the authentic essence and true spiritual meaning of these sacred celebrations in the rush toward modernization and materialism. The way we observe festivals today has changed dramatically from how our parents and grandparents celebrated them with genuine devotion and simplicity.

During major festivals like Dashain, many people now spend their entire annual savings on purchasing expensive designer clothes, luxury items, and excessive amounts of meat for feasting. Numerous families actually take substantial loans from banks or moneylenders just to finance lavish festival celebrations that they cannot afford. The focus has unfortunately shifted away from spiritual reflection, family bonding, and cultural observance toward ostentatious display of wealth and social competition. People seem more concerned with impressing neighbors and relatives than with understanding the religious significance and mythological stories behind our festivals. This commercialization of sacred traditions is deeply troubling and contradicts the original purpose of these celebrations.

The younger generation shows particularly concerning behavioral patterns during festival seasons. Many young people prefer attending late-night parties, nightclubs, and commercial entertainment events instead of participating in traditional rituals and receiving blessings from elders and family members. They remain largely ignorant about the historical stories, religious significance, and cultural symbolism behind our festivals because nobody properly teaches them anymore. For contemporary youth, social media posting, photography, and virtual communication have become more important than actual quality time spent with family members and community participation. This disconnect threatens the continuity of our cultural traditions across generations.

However, it would be unfair not to acknowledge some positive transformations that are simultaneously occurring in our society. Many educated people are becoming increasingly conscious and sensitive about animal rights and ethical treatment during festival celebrations. A growing number of families now choose to celebrate festivals without animal sacrifice, opting instead for symbolic offerings and vegetarian feasts, which demonstrates evolving compassion and modern ethical values. This change respects both our traditions and contemporary understanding of compassion toward all living creatures.

Moving forward, we should strive to celebrate our festivals in ways that genuinely preserve and honor our invaluable cultural values and spiritual teachings. Our celebrations must prioritize bringing extended families together for meaningful interactions, storytelling, and strengthening emotional bonds rather than materialistic display. Festival observances should not create crushing financial burdens that force families into debt and economic hardship lasting months afterward. We have a sacred responsibility to systematically teach our children about the deeper meanings, mythological origins, and moral lessons embedded in our traditional festivals so they can appreciate and continue these practices. Additionally, our celebrations must demonstrate respect and compassion for all living beings in accordance with the fundamental ethical principles that underlie our Hindu and Buddhist heritage.

Our traditional festivals constitute the very core of our national and cultural identity as Nepali people. If we allow these precious traditions to fade away or become meaninglessly commercialized, we lose an essential part of who we are as a unique civilization with thousands of years of history. Let us celebrate our beautiful festivals with genuine joy, enthusiasm, and reverence, but simultaneously with social responsibility, environmental consciousness, and authentic understanding of their cultural and spiritual significance.

I sincerely hope this message will inspire fellow citizens to reflect deeply on how we observe our festivals and motivate everyone to celebrate our magnificent cultural heritage in its true spirit for the benefit of present and future generations.

Thank you for providing space to discuss this important cultural matter.

With cultural pride and concern,
Kamala Sharma

Difficult Words with Meanings:
• Observations (things noticed) - अवलोकनहरू
• Extraordinarily (extremely, exceptionally) - असाधारण रूपमा
• Authentic (genuine, real) - प्रामाणिक
• Materialism (focus on money and possessions) - भौतिकवाद
• Ostentatious (showy, flashy) - दिखावटी
• Commercialization (making things business-focused) - व्यापारीकरण
• Ignorant (lacking knowledge) - अनभिज्ञ
• Simultaneously (at the same time) - एकै साथ
• Invaluable (extremely valuable) - अमूल्य
• Constitute (make up, form) - गठन गर्नु`
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
              <div>{formatDate()}</div>
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