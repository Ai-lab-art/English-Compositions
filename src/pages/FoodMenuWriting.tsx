import { ArrowLeft, ChefHat, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FoodMenuWriting = () => {
  const foodMenuExamples = [
    {
      title: "Everest Summit Restaurant - Traditional Nepali Cuisine",
      description: "A menu description for authentic Nepali dishes",
      content: `Welcome to Everest Summit Restaurant, where the authentic flavors of Nepal come alive on your plate. Our signature Dal Bhat Tarkari is a complete meal featuring steamed rice, lentil soup, mixed vegetables, and your choice of chicken or mutton curry, served with fresh pickles and papad. The aromatic spices and traditional cooking methods create a dining experience that takes you straight to the heart of Kathmandu. Each dish is prepared with locally sourced ingredients and centuries-old family recipes passed down through generations of Nepali cooks.`
    },
    {
      title: "Himalayan Garden Cafe - International & Local Fusion",
      description: "A modern restaurant menu combining Nepali and international flavors",
      content: `Himalayan Garden Cafe offers a unique fusion of traditional Nepali cuisine with international favorites. Our bestselling Chicken Sekuwa is marinated for 24 hours in Himalayan herbs and spices, then grilled to perfection over an open flame. Pair it with our signature Gundruk soup, made from fermented leafy greens that provide a tangy and nutritious start to your meal. For our international guests, we also serve wood-fired pizzas topped with local yak cheese and fresh vegetables grown in our own garden. Every meal comes with complimentary Nepali tea served in traditional clay cups.`
    },
    {
      title: "Annapurna Lodge - Mountain Trekker's Special",
      description: "A simple yet hearty menu for mountain climbers and trekkers",
      content: `Located at the base of Annapurna, our lodge specializes in hearty meals that provide energy for mountain adventures. Our Famous Trekker's Breakfast includes two fried eggs, hash browns made from local potatoes, grilled tomatoes, and freshly baked bread with homemade jam. The generous portion ensures you have enough energy for a full day of hiking. Our evening special features Thukpa, a warming noodle soup filled with vegetables and your choice of chicken or yak meat, perfect for recovering after a long day on the mountain trails.`
    },
    {
      title: "Royal Palace Restaurant - Luxury Dining Experience",
      description: "An upscale restaurant menu featuring premium Nepali cuisine",
      content: `Royal Palace Restaurant presents the finest in luxury Nepali dining with dishes inspired by ancient royal kitchens. Our Maharaja's Feast includes tender goat curry slow-cooked in aromatic spices, saffron rice, and an assortment of palace vegetables prepared in traditional ghee. The meal is accompanied by freshly made naan bread and concluded with our signature dessert, Kheer, made with organic milk, almonds, and cardamom. Each dish is elegantly presented on handcrafted copper plates, creating an authentic royal dining experience in the heart of modern Nepal.`
    },
    {
      title: "Village Corner Restaurant - Home-style Cooking",
      description: "A family-run restaurant serving simple, delicious home-cooked meals",
      content: `Village Corner Restaurant brings the warmth of Nepali home cooking to your table with recipes from our grandmother's kitchen. Our Popular Family Meal serves four people and includes fragrant rice, creamy black lentils, seasonal vegetables from local farms, and tender chicken cooked in village-style spices. Everything is served on traditional brass plates with a side of homemade pickles and fresh yogurt. The cozy atmosphere, complete with wooden tables and traditional decorations, makes every guest feel like part of our extended family sharing a meal together.`
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
            <ChefHat className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Food Menu Writing</h1>
          </div>
          <p className="text-muted-foreground">
            Learn how to write appealing food menu descriptions that attract customers and showcase your restaurant's specialties
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {foodMenuExamples.map((example, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-education-text">{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-education-light p-4 rounded-lg border">
                  <p className="text-sm text-education-text leading-relaxed">
                    {example.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-card rounded-lg shadow-card">
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for Food Menu Writing</h2>
          <ul className="space-y-2 text-education-text">
            <li>• Use descriptive words that make food sound appetizing and appealing</li>
            <li>• Include cooking methods (grilled, roasted, steamed) to add detail</li>
            <li>• Mention key ingredients, especially local or special ones</li>
            <li>• Create a story or experience around the dish</li>
            <li>• Use sensory words that describe taste, texture, and aroma</li>
            <li>• Keep descriptions concise but engaging</li>
            <li>• Highlight what makes each dish unique or special</li>
            <li>• Consider your target audience and restaurant atmosphere</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FoodMenuWriting;