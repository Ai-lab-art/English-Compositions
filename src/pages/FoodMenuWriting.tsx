import { ArrowLeft, ChefHat, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const FoodMenuWriting = () => {
  const foodMenuExamples = [
    {
      title: "Everest Summit Restaurant - Traditional Nepali Cuisine",
      description: "A menu featuring authentic Nepali dishes with traditional flavors",
      menuItems: [
        { name: "Dal Bhat Tarkari (Complete Meal)", description: "Steamed rice, lentil soup, mixed vegetables, choice of chicken or mutton curry, pickles & papad", price: "Rs. 450" },
        { name: "Chicken Curry", description: "Traditional Nepali-style chicken cooked with aromatic spices", price: "Rs. 380" },
        { name: "Mutton Curry", description: "Tender mutton prepared with authentic Himalayan spices", price: "Rs. 420" },
        { name: "Mixed Vegetables", description: "Seasonal vegetables cooked with traditional herbs", price: "Rs. 280" },
        { name: "Nepali Tea", description: "Traditional milk tea served in clay cups", price: "Rs. 50" }
      ]
    },
    {
      title: "Himalayan Garden Cafe - International & Local Fusion",
      description: "A modern menu combining Nepali and international flavors",
      menuItems: [
        { name: "Chicken Sekuwa", description: "24-hour marinated chicken grilled with Himalayan herbs & spices", price: "Rs. 520" },
        { name: "Gundruk Soup", description: "Signature soup made from fermented leafy greens", price: "Rs. 180" },
        { name: "Yak Cheese Pizza", description: "Wood-fired pizza topped with local yak cheese & garden vegetables", price: "Rs. 650" },
        { name: "Garden Salad", description: "Fresh vegetables from our own organic garden", price: "Rs. 220" },
        { name: "Complimentary Nepali Tea", description: "Traditional tea served with every meal", price: "Free" }
      ]
    },
    {
      title: "Annapurna Lodge - Mountain Trekker's Special",
      description: "Hearty meals designed for mountain adventurers and trekkers",
      menuItems: [
        { name: "Trekker's Breakfast", description: "Two fried eggs, hash browns, grilled tomatoes, fresh bread & jam", price: "Rs. 350" },
        { name: "Thukpa (Evening Special)", description: "Warming noodle soup with vegetables & choice of chicken or yak meat", price: "Rs. 320" },
        { name: "Energy Porridge", description: "Nutritious oats with nuts, honey & dried fruits", price: "Rs. 250" },
        { name: "Mountain Coffee", description: "Strong coffee to fuel your adventure", price: "Rs. 120" },
        { name: "Hot Chocolate", description: "Warming drink perfect for cold mountain evenings", price: "Rs. 150" }
      ]
    },
    {
      title: "Royal Palace Restaurant - Luxury Dining Experience",
      description: "Premium Nepali cuisine inspired by ancient royal kitchens",
      menuItems: [
        { name: "Maharaja's Feast", description: "Tender goat curry, saffron rice, palace vegetables in ghee, naan bread", price: "Rs. 1,200" },
        { name: "Royal Goat Curry", description: "Slow-cooked tender goat in aromatic royal spices", price: "Rs. 780" },
        { name: "Saffron Rice", description: "Basmati rice infused with premium saffron", price: "Rs. 320" },
        { name: "Palace Vegetables", description: "Assorted vegetables prepared in traditional ghee", price: "Rs. 450" },
        { name: "Kheer (Royal Dessert)", description: "Organic milk dessert with almonds & cardamom", price: "Rs. 280" }
      ]
    },
    {
      title: "Village Corner Restaurant - Home-style Cooking",
      description: "Family-run restaurant serving traditional home-cooked meals",
      menuItems: [
        { name: "Family Meal (Serves 4)", description: "Fragrant rice, black lentils, seasonal vegetables, village-style chicken", price: "Rs. 1,800" },
        { name: "Village-Style Chicken", description: "Tender chicken cooked with grandmother's secret spices", price: "Rs. 420" },
        { name: "Black Lentils (Dal)", description: "Creamy black lentils slow-cooked to perfection", price: "Rs. 180" },
        { name: "Seasonal Vegetables", description: "Fresh vegetables from local farms", price: "Rs. 250" },
        { name: "Homemade Pickles & Yogurt", description: "Traditional accompaniments made fresh daily", price: "Rs. 80" }
      ]
    }
  ];

  // SEO metadata
  useEffect(() => {
    document.title = "Food Menu Design | Food Menu Writing";
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
    meta.content = 'Two-column sample food menu design with categories and prices; learn effective menu writing.';
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = window.location.href;
  }, []);

  const Row = (props: { name: string; price: string }) => (
    <div className="flex items-baseline gap-2 py-1">
      <span className="text-foreground">{props.name}</span>
      <span aria-hidden className="flex-1 border-b border-dotted border-muted-foreground/50" />
      <span className="font-semibold text-foreground">{props.price}</span>
    </div>
  );

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

        {/* Sample two-column Food Menu design (based on provided reference) */}
        <section aria-labelledby="sample-menu" className="mb-8">
          <Card className="overflow-hidden shadow-card">
            <header className="bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between">
              <h2 id="sample-menu" className="text-xl font-semibold">Menu</h2>
              <span className="text-sm opacity-90">Page 1</span>
            </header>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8 p-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Wonderland Special Khaja set:</h3>
                  <Row name="Wonderland Non Veg" price="250/-" />
                  <Row name="Wonderland Veg" price="150/-" />
                  <h3 className="text-lg font-semibold mt-4 mb-2 text-foreground">Breakfast:</h3>
                  <Row name="Toasted Bread (Jam/Honey)" price="80/-" />
                  <Row name="Sausage Corn on Toast" price="120/-" />
                  <Row name="Aloo Parautah Set" price="100/-" />
                  <Row name="Cornflakes with Milk" price="100/-" />
                  <Row name="Puri Bhaji" price="120/-" />
                  <Row name="Plain Omelette" price="70/-" />
                  <Row name="Masala Omelette" price="100/-" />
                  <Row name="Cheese Omelette" price="120/-" />
                  <h3 className="text-lg font-semibold mt-4 mb-2 text-foreground">Appetizers (Starter):</h3>
                  <Row name="Nepali Salad" price="100/-" />
                  <Row name="Fruit Salad" price="150/-" />
                  <Row name="Russian Salad" price="200/-" />
                  <Row name="Tropical Veg Salad" price="120/-" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Nepali Khana Set:</h3>
                  <Row name="Khana set (Veg Curry)" price="170/-" />
                  <Row name="Khana set (Chicken Curry)" price="250/-" />
                  <Row name="Khana set (Pork Curry)" price="250/-" />
                  <Row name="Khana set (Fish Curry)" price="250/-" />
                  <Row name="Khana set (Local Fish Curry)" price="300/-" />
                  <Row name="Khana set (Mutton Curry)" price="300/-" />
                  <Row name="Khana set (L. Chicken Curry)" price="350/-" />
                  <Row name="Thakali Khana set (Veg)" price="250/-" />
                  <Row name="Thakali Khana set (Non Veg)" price="350/-" />
                  <h3 className="text-lg font-semibold mt-4 mb-2 text-foreground">Chapati set:</h3>
                  <Row name="Chapati set (Veg)" price="170/-" />
                  <Row name="Chapati set (Chicken)" price="250/-" />
                  <Row name="Chapati set (Mutton)" price="300/-" />
                </div>
              </div>
            </CardContent>
            <footer className="bg-secondary text-secondary-foreground px-6 py-3 flex items-center justify-between">
              <span className="font-semibold tracking-wide">HOTEL</span>
              <span className="text-xl font-bold">Wonderland</span>
            </footer>
          </Card>
        </section>

        <div className="grid gap-8 md:grid-cols-1">
          {foodMenuExamples.map((example, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow rainbow-border">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                <CardTitle className="text-xl text-primary font-bold">{example.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{example.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-b-lg">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gradient-to-r from-primary/5 to-secondary/5">
                        <TableHead className="font-semibold text-primary">Menu Item</TableHead>
                        <TableHead className="text-right font-semibold text-primary">Price</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {example.menuItems.map((item, itemIndex) => (
                        <TableRow 
                          key={itemIndex} 
                          className={`hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-colors ${
                            itemIndex % 2 === 0 ? 'bg-muted/30' : 'bg-background'
                          }`}
                        >
                          <TableCell className="font-medium">
                            <div>
                              <div className="font-semibold text-foreground mb-1">{item.name}</div>
                              <div className="text-sm text-muted-foreground">{item.description}</div>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <span className="font-bold text-primary text-lg">{item.price}</span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
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