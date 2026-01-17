import { ArrowLeft, Calendar, MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NewsArticles = () => {
  const newsArticles = [
    {
      title: "Mount Everest Climbing Season Opens with Record Applications",
      date: "March 15, 2024",
      location: "Kathmandu, Nepal",
      author: "Rajesh Sharma",
      category: "Adventure",
      excerpt: "The Department of Tourism has received over 400 applications for Mount Everest climbing permits this spring season, marking the highest number in recent years.",
      content: `KATHMANDU - The Nepal Department of Tourism announced today that they have received 421 applications for Mount Everest climbing permits for the upcoming spring season, representing a 15% increase from last year.

"This year's surge in applications shows the growing confidence of climbers in our safety protocols and the improved weather predictions," said Mira Acharya, Director of the Department of Tourism.

The climbing season typically runs from April to May when weather conditions are most favorable. Each permit costs $11,000 for foreign climbers, making it a significant source of revenue for Nepal's economy.

Safety measures have been enhanced this year with mandatory oxygen level checks at base camp and improved communication systems throughout the climbing routes. The government has also increased the number of liaison officers to ensure climber safety.

Local Sherpa guides report optimism about the season, with many bookings already secured through international expedition companies. The tourism industry, which was severely impacted by the COVID-19 pandemic, sees this as a positive sign of recovery.

Weather forecasters predict stable conditions this spring, which could lead to a successful climbing season for both amateur and professional mountaineers attempting to reach the world's highest peak at 8,848.86 meters.`
    },
    {
      title: "Nepal Introduces New Digital Education Initiative in Rural Schools",
      date: "March 10, 2024",
      location: "Pokhara, Nepal",
      author: "Sita Gurung",
      category: "Education",
      excerpt: "The government launches a comprehensive digital learning program aimed at connecting remote schools with modern educational resources.",
      content: `POKHARA - The Ministry of Education, Science and Technology has launched an ambitious digital education initiative that will provide internet connectivity and digital devices to 500 rural schools across Nepal by the end of 2024.

The program, named "Digital Nepal Schools," aims to bridge the educational gap between urban and rural students by providing access to online learning resources, virtual classrooms, and digital libraries.

"Every child in Nepal deserves access to quality education regardless of their geographic location," said Education Minister Dr. Devendra Poudel during the launch ceremony in Pokhara.

The initiative includes providing tablets to students, training teachers in digital literacy, and establishing satellite internet connections in remote areas. The project is funded through a combination of government resources and international aid from development partners.

Initial pilot programs in 50 schools have shown promising results, with student engagement increasing by 40% and improved performance in mathematics and science subjects. Teachers report that students are more motivated to learn when they have access to interactive digital content.

The program also includes provisions for maintaining the equipment and providing ongoing technical support to ensure sustainability. Local technicians will be trained to handle basic maintenance and troubleshooting.

This initiative is part of Nepal's broader strategy to modernize its education system and prepare students for the digital economy of the future.`
    },
    {
      title: "Chitwan National Park Reports Increase in Tiger Population",
      date: "March 8, 2024",
      location: "Chitwan, Nepal",
      author: "Dr. Bishnu Shrestha",
      category: "Environment",
      excerpt: "Latest wildlife census shows a 20% increase in tiger population, indicating successful conservation efforts in Nepal's premier national park.",
      content: `CHITWAN - The latest wildlife census conducted in Chitwan National Park has revealed encouraging news for conservation efforts, with the tiger population increasing by 20% compared to the previous count three years ago.

The census, conducted over three months using camera traps and direct observation methods, counted 128 adult tigers in the park, up from 106 in the previous survey. This represents one of the most significant increases in recent decades.

"These results demonstrate that our conservation strategies are working effectively," said Dr. Haribhadra Acharya, Chief Warden of Chitwan National Park. "The increase is particularly significant given the challenges we face with human-wildlife conflict and habitat pressure."

The park's anti-poaching units have been instrumental in protecting tigers from illegal hunting. Enhanced patrolling, community engagement programs, and improved coordination with local authorities have contributed to creating a safer environment for wildlife.

Local communities living around the park have played a crucial role in conservation efforts. Community-based anti-poaching groups and wildlife monitoring committees have been established in buffer zones, creating a collaborative approach to conservation.

The park has also seen increases in prey species populations, including spotted deer and wild boar, which provides adequate food sources for the growing tiger population. Habitat restoration programs have created better breeding grounds and territorial spaces for the big cats.

Nepal has committed to doubling its tiger population as part of international conservation goals, and these results suggest the country is on track to achieve this ambitious target.`
    },
    {
      title: "Kathmandu's New Smart Traffic System Shows Early Success",
      date: "March 5, 2024",
      location: "Kathmandu, Nepal",
      author: "Prakash Thapa",
      category: "Technology",
      excerpt: "AI-powered traffic management system reduces congestion by 30% in pilot areas of the capital city.",
      content: `KATHMANDU - The Kathmandu Metropolitan City's new smart traffic management system has shown impressive results in its first month of operation, reducing traffic congestion by 30% in pilot areas.

The system, which uses artificial intelligence and real-time data analysis, automatically adjusts traffic light timing based on traffic flow patterns and density. It has been implemented at 25 major intersections across the city as part of the first phase.

"The early results exceed our expectations," said Keshav Man Shakya, Chief of Kathmandu Traffic Police. "Average waiting time at traffic lights has decreased from 3.5 minutes to 2.4 minutes during peak hours."

The smart system includes sensors embedded in roads, traffic cameras with AI analysis capabilities, and mobile apps that provide real-time traffic updates to drivers. The technology can predict traffic patterns and adjust signals proactively rather than reactively.

Citizens have responded positively to the changes, with many reporting shorter commute times and reduced fuel consumption. The app has been downloaded by over 100,000 users who actively use it for route planning.

The system also includes emergency vehicle priority features, allowing ambulances and fire trucks to trigger green lights along their routes. This has reduced emergency response times by an average of 15%.

The second phase of implementation will cover an additional 50 intersections and include features like automatic challan generation for traffic violations and integration with parking management systems. The complete city-wide rollout is expected by early 2025.

Data collected by the system is also being used to plan future road infrastructure and public transportation improvements.`
    },
    {
      title: "Nepal's Hydroelectric Capacity Reaches New Milestone",
      date: "March 1, 2024",
      location: "Kathmandu, Nepal",
      author: "Ramesh Koirala",
      category: "Energy",
      excerpt: "The country's total hydroelectric generation capacity surpasses 2,000 MW with the completion of several major projects.",
      content: `KATHMANDU - Nepal has achieved a significant milestone in its quest for energy independence, with total hydroelectric generation capacity crossing 2,000 MW following the completion of several major hydropower projects.

The Tamakoshi Hydroelectric Project, which added 456 MW to the national grid last month, pushed the country's total capacity beyond the 2,000 MW mark for the first time in its history.

"This is a historic moment for Nepal's energy sector," said Energy Minister Pampha Bhusal during a press conference. "We are now well-positioned to meet our domestic electricity demand and begin substantial energy exports to neighboring countries."

The achievement comes as Nepal works toward its goal of generating 15,000 MW of electricity within the next decade. Several large-scale projects are currently under construction, including the 1,200 MW Budhi Gandaki project and the 900 MW Upper Karnali project.

Load shedding, which plagued the country for decades, has been eliminated in most areas, and Nepal now exports electricity to India during peak generation periods. The country earned $2.5 million from electricity exports in the last fiscal year.

Small and medium-scale run-of-river projects have also contributed significantly to the milestone, with over 50 projects in the 1-50 MW range coming online in the past three years. These projects have created employment opportunities in rural areas and improved access to electricity.

The government has streamlined licensing procedures and created investment-friendly policies to attract both domestic and international investors in the hydropower sector. Environmental and social impact assessments have been strengthened to ensure sustainable development.

With Nepal's theoretical hydropower potential estimated at 83,000 MW, the country sees enormous opportunity for economic growth through clean energy development.`
    },
    {
      title: "Traditional Nepali Handicrafts Gain International Recognition",
      date: "February 28, 2024",
      location: "Bhaktapur, Nepal",
      author: "Maya Tamang",
      category: "Culture",
      excerpt: "UNESCO acknowledges Nepali traditional crafts as part of global cultural heritage, boosting local artisan communities.",
      content: `BHAKTAPUR - Traditional Nepali handicrafts have received international recognition as UNESCO added several Nepali craft traditions to its Representative List of the Intangible Cultural Heritage of Humanity.

The recognition includes traditional pottery making in Bhaktapur, Thanka painting, wood carving techniques, and traditional metalwork. This acknowledgment is expected to boost the livelihood of thousands of artisans across the country.

"This recognition validates what we have known for generations - that our traditional crafts represent some of the world's finest artisanal work," said Laxmi Tuladhar, president of the Nepal Handicraft Association.

The announcement has already led to increased international interest in Nepali handicrafts, with several international buyers placing orders for traditional items. Online platforms have reported a 150% increase in searches for authentic Nepali crafts since the UNESCO announcement.

Local artisan communities, particularly in the Kathmandu Valley, are experiencing renewed interest in traditional skills. Young people who had migrated to cities for work are returning to learn ancestral crafts from their elders.

The government has announced plans to establish craft villages and training centers to preserve these traditional skills for future generations. A special fund will be created to provide low-interest loans to artisans looking to expand their workshops or improve their techniques.

Export promotion agencies are working to connect artisans with international markets while ensuring fair trade practices and sustainable production methods. Quality certification programs are being developed to maintain the authenticity and standard of exported crafts.

The recognition is also expected to boost cultural tourism, with visitors increasingly interested in observing traditional craft-making processes and purchasing authentic handmade items directly from artisans.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/table-of-contents">
            <Button variant="outline" size="lg" className="hover-scale group border-2">
              <ArrowLeft className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              Back to Contents
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            News Articles from Nepal
          </h1>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto">
            Stay informed with the latest news and developments from across Nepal
          </p>
        </div>

        {/* News Articles Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {newsArticles.map((article, index) => (
            <Card key={index} className="h-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-blue-200">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge 
                    variant="secondary" 
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                  >
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                </div>
                <CardTitle className="text-xl text-blue-900 leading-tight hover:text-blue-700 transition-colors">
                  {article.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {article.location}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {article.author}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base mb-4 leading-relaxed">
                  {article.excerpt}
                </CardDescription>
                
                {/* Article Content */}
                <div className="prose prose-sm max-w-none">
                  <div className="bg-gray-200 p-4 rounded-lg border border-gray-300">
                    <h4 className="font-semibold text-black mb-2">Full Article:</h4>
                    <div className="text-black text-sm leading-relaxed whitespace-pre-line select-all cursor-text">
                      {article.content}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Writing Tips Section */}
        <Card className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Tips for Writing News Articles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Structure & Format:</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Start with a compelling headline</li>
                  <li>• Write a clear lead paragraph with 5 W's and H</li>
                  <li>• Use inverted pyramid structure</li>
                  <li>• Include direct quotes from reliable sources</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Content Guidelines:</h4>
                <ul className="space-y-1 text-blue-100">
                  <li>• Maintain objectivity and factual accuracy</li>
                  <li>• Use active voice and clear language</li>
                  <li>• Verify all facts and sources</li>
                  <li>• Include relevant background information</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NewsArticles;