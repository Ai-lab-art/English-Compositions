import { ArrowLeft, BarChart3, PieChart, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const GraphicalInterpretation = () => {
  const [currentExample, setCurrentExample] = useState(0);

  const chartExamples = [
    {
      title: "Nepal's Literacy Rate by Province",
      description: "Bar chart showing literacy rates across different provinces",
      type: "bar",
      data: [
        { name: "Province 1", value: 79.2 },
        { name: "Madhesh", value: 59.6 },
        { name: "Bagmati", value: 83.1 },
        { name: "Gandaki", value: 78.9 },
        { name: "Lumbini", value: 69.8 },
        { name: "Karnali", value: 65.4 },
        { name: "Sudurpashchim", value: 72.3 }
      ],
      interpretation: `This bar chart shows the literacy rates across Nepal's seven provinces. Bagmati Province has the highest literacy rate at 83.1%, likely due to better educational infrastructure and urban centers like Kathmandu. Madhesh Province shows the lowest rate at 59.6%, indicating the need for improved educational programs. The national average is around 71%, with Karnali and Madhesh provinces falling below this average. This data highlights the educational disparities between different regions of Nepal and the need for targeted educational development programs in provinces with lower literacy rates.`
    },
    {
      title: "Agriculture Production in Nepal (2023)",
      description: "Pie chart showing major crop production distribution",
      type: "pie",
      data: [
        { name: "Rice", value: 45, color: "#8884d8" },
        { name: "Maize", value: 25, color: "#82ca9d" },
        { name: "Wheat", value: 15, color: "#ffc658" },
        { name: "Millet", value: 8, color: "#ff7300" },
        { name: "Barley", value: 4, color: "#0088fe" },
        { name: "Others", value: 3, color: "#00c49f" }
      ],
      interpretation: `This pie chart illustrates the distribution of major crop production in Nepal for 2023. Rice dominates agricultural production at 45%, reflecting Nepal's traditional farming practices and dietary preferences. Maize follows at 25%, showing its importance as both a food crop and animal feed. Wheat accounts for 15% of production, primarily grown in the Terai region. Traditional crops like millet (8%) and barley (4%) represent smaller but culturally significant portions. This distribution shows Nepal's reliance on staple grains, with rice being the most critical crop for food security. The data suggests the need for crop diversification to improve nutrition and reduce dependency on single crops.`
    },
    {
      title: "Tourist Arrivals to Nepal by Country (2023)",
      description: "Bar chart showing top source countries for tourists",
      type: "bar",
      data: [
        { name: "India", value: 198000 },
        { name: "China", value: 89000 },
        { name: "USA", value: 76000 },
        { name: "UK", value: 45000 },
        { name: "Thailand", value: 38000 },
        { name: "Germany", value: 32000 },
        { name: "France", value: 28000 },
        { name: "Australia", value: 25000 }
      ],
      interpretation: `This bar chart displays tourist arrivals to Nepal by country in 2023. India leads significantly with 198,000 visitors, highlighting the strong cultural and geographical connections between the two countries. China follows with 89,000 tourists, showing growing interest from Nepal's northern neighbor. The USA contributes 76,000 visitors, reflecting Nepal's popularity among Western adventure seekers. European countries like UK, Germany, and France show steady numbers, indicating Nepal's appeal to European travelers. The data reveals Nepal's tourism recovery post-COVID and the importance of regional markets. India's dominance suggests pilgrimage and cultural tourism, while Western countries likely contribute to trekking and adventure tourism sectors.`
    },
    {
      title: "Energy Sources in Nepal (2024)",
      description: "Pie chart showing energy consumption by source",
      type: "pie",
      data: [
        { name: "Hydropower", value: 68, color: "#0088fe" },
        { name: "Traditional Biomass", value: 18, color: "#00c49f" },
        { name: "Imported Electricity", value: 8, color: "#ffbb28" },
        { name: "Solar", value: 4, color: "#ff8042" },
        { name: "Others", value: 2, color: "#8884d8" }
      ],
      interpretation: `This pie chart shows Nepal's energy consumption by source in 2024. Hydropower dominates at 68%, reflecting Nepal's abundant water resources and investment in hydroelectric projects. Traditional biomass still accounts for 18%, primarily in rural areas where modern energy access remains limited. Imported electricity from India represents 8%, showing Nepal's energy trade relationships. Solar energy contributes 4%, indicating growing renewable energy adoption. The remaining 2% includes other sources like wind and biogas. This distribution shows Nepal's progress toward energy self-sufficiency through hydropower development, while highlighting the continued reliance on traditional fuels in rural areas and the potential for expanding renewable energy sources.`
    },
    {
      title: "Population Distribution by Age Group in Nepal",
      description: "Bar chart showing population demographics",
      type: "bar",
      data: [
        { name: "0-14 years", value: 28.2 },
        { name: "15-24 years", value: 18.7 },
        { name: "25-54 years", value: 40.1 },
        { name: "55-64 years", value: 7.8 },
        { name: "65+ years", value: 5.2 }
      ],
      interpretation: `This bar chart illustrates Nepal's population distribution by age groups. The 25-54 age group represents the largest segment at 40.1%, indicating a strong working-age population. Children (0-14 years) make up 28.2%, showing a relatively young population structure. Youth (15-24 years) constitute 18.7%, representing significant potential for economic development and education. The elderly population (65+) is only 5.2%, reflecting lower life expectancy and healthcare challenges. This demographic structure suggests Nepal has a demographic dividend with a large working-age population, but also faces challenges in providing education and employment opportunities for the youth. The aging population, though small, will require increased healthcare and social security planning.`
    },
    {
      title: "Internet Usage by Device in Nepal (2024)",
      description: "Pie chart showing how people access internet",
      type: "pie",
      data: [
        { name: "Mobile Phone", value: 85, color: "#8884d8" },
        { name: "Computer/Laptop", value: 10, color: "#82ca9d" },
        { name: "Tablet", value: 3, color: "#ffc658" },
        { name: "Others", value: 2, color: "#ff7300" }
      ],
      interpretation: `This pie chart shows internet usage by device in Nepal for 2024. Mobile phones dominate internet access at 85%, reflecting the widespread adoption of smartphones and mobile internet services across urban and rural areas. Computer/laptop usage accounts for only 10%, indicating limited access to traditional computing devices, possibly due to cost and infrastructure constraints. Tablet usage is minimal at 3%, showing preference for either mobile phones or computers. The 2% "others" category includes devices like smart TVs and gaming consoles. This data highlights Nepal's mobile-first digital adoption, which has enabled rapid internet penetration even in remote areas through cellular networks, bypassing the need for extensive fixed-line infrastructure.`
    }
  ];

  const nextExample = () => {
    setCurrentExample((prev) => (prev + 1) % chartExamples.length);
  };

  const prevExample = () => {
    setCurrentExample((prev) => (prev - 1 + chartExamples.length) % chartExamples.length);
  };

  const currentChart = chartExamples[currentExample];

  const renderSimpleChart = () => {
    if (currentChart.type === "bar") {
      const maxValue = Math.max(...currentChart.data.map((d: any) => d.value));
      return (
        <div className="space-y-3">
          {currentChart.data.map((item: any, index: number) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-24 text-sm font-medium text-education-text truncate">
                {item.name}
              </div>
              <div className="flex-1 bg-muted rounded-full h-6 relative overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${(item.value / maxValue) * 100}%` }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                  {item.value}%
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-2 gap-4">
          {currentChart.data.map((item: any, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm font-medium text-education-text">
                {item.name}: {item.value}%
              </span>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-education-light">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="mb-4 twinkle-button px-6 py-3 text-lg font-semibold">
              <ArrowLeft className="mr-3 h-6 w-6" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Graphical Interpretation</h1>
          </div>
          <p className="text-muted-foreground">
            Learn to read and interpret charts and graphs with real Nepal data
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {chartExamples.map((example, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-education-text flex items-center gap-2">
                  {example.type === "bar" ? <BarChart3 className="h-5 w-5" /> : <PieChart className="h-5 w-5" />}
                  {example.title}
                </CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-education-light p-6 rounded-lg border">
                  {(() => {
                    if (example.type === "bar") {
                      const maxValue = Math.max(...example.data.map((d: any) => d.value));
                      return (
                        <div className="space-y-3">
                          {example.data.map((item: any, idx: number) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-24 text-sm font-medium text-education-text truncate">
                                {item.name}
                              </div>
                              <div className="flex-1 bg-muted rounded-full h-6 relative overflow-hidden">
                                <div 
                                  className="h-full bg-primary rounded-full transition-all duration-500"
                                  style={{ width: `${(item.value / maxValue) * 100}%` }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                                  {item.value}%
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    } else {
                      return (
                        <div className="grid grid-cols-2 gap-4">
                          {example.data.map((item: any, idx: number) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div 
                                className="w-4 h-4 rounded-full"
                                style={{ backgroundColor: item.color }}
                              />
                              <span className="text-sm font-medium text-education-text">
                                {item.name}: {item.value}%
                              </span>
                            </div>
                          ))}
                        </div>
                      );
                    }
                  })()}
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-education-text">Interpretation:</h3>
                  <p className="text-sm text-education-text leading-relaxed bg-muted p-4 rounded-lg">
                    {example.interpretation}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-card rounded-lg shadow-card">
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for Reading Charts and Graphs</h2>
          <ul className="space-y-2 text-education-text">
            <li>• Read the title and labels to understand what the chart shows</li>
            <li>• Look at the scale and units being used (percentages, numbers, etc.)</li>
            <li>• Identify the highest and lowest values or largest and smallest sections</li>
            <li>• Compare different categories or time periods shown</li>
            <li>• Look for patterns, trends, or relationships in the data</li>
            <li>• Consider what the data means in real-world context</li>
            <li>• Ask questions about what causes the patterns you see</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GraphicalInterpretation;