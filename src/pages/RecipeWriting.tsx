import { ChefHat, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RecipeWriting = () => {
  const recipeExamples = [
    {
      title: "Omelet Recipe",
      description: "Simple and delicious omelet for breakfast",
      content: `Ingredients:
- 3 fresh eggs
- 2 tablespoons milk
- 1 tablespoon cooking oil or butter
- Salt to taste
- Black pepper powder (optional)
- 1 small onion, finely chopped (optional)
- Green chilies, chopped (optional)

Instructions:
1. Break the eggs into a bowl and beat them well with a fork
2. Add milk, salt, and pepper to the beaten eggs
3. Mix everything together until smooth
4. Heat oil or butter in a non-stick pan over medium heat
5. Add chopped onions and chilies if using, cook for 1 minute
6. Pour the egg mixture into the pan
7. Let it cook for 2-3 minutes until the bottom sets
8. Gently fold the omelet in half
9. Cook for another minute and serve hot

Serves: 1-2 people
Cooking time: 5-7 minutes`
    },
    {
      title: "Rice Pudding (Kheer)",
      description: "Traditional Nepali sweet rice pudding",
      content: `Ingredients:
- 1 cup rice
- 4 cups full-fat milk
- 1/2 cup sugar
- 4-5 green cardamom pods
- 10-12 almonds, chopped
- 10-12 raisins
- 2 tablespoons ghee (clarified butter)

Instructions:
1. Wash rice and soak for 30 minutes, then drain
2. Heat ghee in a heavy-bottomed pan
3. Add rice and fry for 2-3 minutes until lightly golden
4. Add milk gradually while stirring continuously
5. Bring to boil, then reduce heat and simmer
6. Cook for 45 minutes, stirring occasionally
7. Add sugar and cardamom powder
8. Cook for 10 more minutes until thick
9. Add almonds and raisins
10. Serve warm or chilled

Serves: 4-6 people
Cooking time: 1 hour`
    },
    {
      title: "Nepali Tea (Chiya)",
      description: "Traditional spiced milk tea",
      content: `Ingredients:
- 2 cups water
- 1 cup milk
- 2 teaspoons black tea leaves
- 2 tablespoons sugar
- 2-3 green cardamom pods
- 1 small piece ginger
- 2-3 cloves (optional)

Instructions:
1. Crush cardamom, ginger, and cloves
2. Boil water in a saucepan
3. Add crushed spices and tea leaves
4. Boil for 2-3 minutes until water turns dark
5. Add milk and sugar
6. Bring to boil again
7. Simmer for 3-4 minutes
8. Strain and serve hot

Serves: 2-3 people
Cooking time: 8-10 minutes`
    },
    {
      title: "Momo (Steamed Dumplings)",
      description: "Popular Nepali steamed dumplings",
      content: `Ingredients:
For wrapper:
- 2 cups all-purpose flour
- 1/2 cup warm water
- 1/2 teaspoon salt

For filling:
- 300g ground chicken or buffalo
- 1 large onion, finely chopped
- 3 cloves garlic, minced
- 1 tablespoon ginger paste
- 2 green chilies, chopped
- 1 teaspoon cumin powder
- Salt and pepper to taste
- 2 tablespoons cooking oil
- Fresh coriander leaves

Instructions:
1. Mix flour, salt, and water to make smooth dough. Rest for 30 minutes
2. Mix all filling ingredients in a bowl
3. Roll dough into small circles (3-4 inches)
4. Place 1 tablespoon filling in center
5. Gather edges and seal to form dumplings
6. Steam in a steamer for 15-20 minutes
7. Serve hot with tomato sauce

Makes: 20-25 momos
Cooking time: 45 minutes`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-education-light">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link to="/table-of-contents">
            <Button variant="ghost" className="mb-4 twinkle-button px-6 py-3 text-lg font-semibold">
              <Home className="mr-3 h-6 w-6" />
              Back to Contents
            </Button>
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <ChefHat className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Recipe Writing</h1>
          </div>
          <p className="text-muted-foreground">
            Learn how to write clear and easy-to-follow recipes
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {recipeExamples.map((example, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-education-text">{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-education-light p-4 rounded-lg border">
                  <pre className="whitespace-pre-wrap text-sm text-education-text">
                    {example.content}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-card rounded-lg shadow-card">
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for Recipe Writing</h2>
          <ul className="space-y-2 text-education-text">
            <li>• List all ingredients with exact measurements first</li>
            <li>• Write instructions in chronological order</li>
            <li>• Use action verbs (mix, chop, boil, fry)</li>
            <li>• Include cooking times and serving sizes</li>
            <li>• Mention cooking temperatures when needed</li>
            <li>• Add helpful tips for beginners</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeWriting;