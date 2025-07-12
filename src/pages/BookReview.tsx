import { BookOpenCheck, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BookReview = () => {
  const bookReviewExamples = [
    {
      title: "Seto Dharti by Amar Neupane",
      description: "Review of a classic Nepali novel",
      content: `Book Review: Seto Dharti

Title: Seto Dharti (White Earth)
Author: Amar Neupane
Published by: Nepal Pustakalaya
Main Characters: Tara (protagonist), her family members
Genre: Social Fiction
Language: Nepali
Publication Year: 1989

"Seto Dharti" is one of the most popular novels in Nepali literature written by Amar Neupane. The story takes place in a small village in Nepal and shows the hard life of farmers.

The main character is Tara, a young woman who faces many difficulties because of poverty and social inequality. The author shows how women in Nepal suffer from unfair treatment and lack of opportunities. Tara's struggle to get education and improve her life is very touching.

What I liked most about this book is how realistically it shows village life in Nepal. The descriptions of mountains, rivers, and rural culture make you feel like you are actually there. The author uses simple Nepali language that is easy to understand.

The story teaches us about the importance of education, especially for women. It also shows how hard work and determination can help overcome difficulties. However, some parts of the story are very sad and make you feel sorry for the characters.

I would recommend this book to anyone who wants to understand Nepali society and culture. Students will especially learn about the problems that rural people face in Nepal. The book is not too long and can be finished in a few days.

Overall, I give this book 4 out of 5 stars because it is educational, well-written, and gives a true picture of Nepal's social issues.

Reviewed by: Kritika Sharma
Class: 10, Bright Future School`
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      description: "Review of the famous fantasy novel",
      content: `Book Review: Harry Potter and the Philosopher's Stone

Title: Harry Potter and the Philosopher's Stone
Author: J.K. Rowling
Published by: Bloomsbury Publishing
Main Characters: Harry Potter, Hermione Granger, Ron Weasley, Hagrid, Dumbledore
Genre: Fantasy, Adventure, Young Adult Fiction
Language: English
Publication Year: 1997

"Harry Potter and the Philosopher's Stone" by J.K. Rowling is the first book in the famous Harry Potter series. It tells the story of a young boy who discovers he is a wizard on his 11th birthday.

The story begins when Harry Potter is living with his cruel aunt and uncle who treat him badly. On his birthday, a giant named Hagrid comes to take him to Hogwarts School of Witchcraft and Wizardry. There, Harry learns about his magical powers and makes good friends like Ron and Hermione.

What makes this book special is the magical world that the author creates. Hogwarts castle, flying broomsticks, talking paintings, and magical creatures make the story very exciting. The friendship between Harry, Ron, and Hermione teaches us about loyalty and teamwork.

The main lesson of the book is that good always wins over evil. Harry faces the dark wizard Voldemort who killed his parents, but with courage and help from friends, he defeats him. The book also shows that being different or special is not something to be ashamed of.

I enjoyed reading about Quidditch (the wizarding sport), the different magical subjects, and the mystery of the Philosopher's Stone. Some parts were scary, especially when Harry faces dangerous situations, but it makes the story more interesting.

The language is simple enough for young readers but the plot is exciting for adults too. The book teaches important values like friendship, bravery, and standing up for what is right.

I would give this book 5 out of 5 stars because it is entertaining, teaches good values, and makes you want to read the next books in the series.

Reviewed by: Arjun Khadka
Class: 9, Mount Everest School`
    },
    {
      title: "Muna Madan by Laxmi Prasad Devkota",
      description: "Review of Nepal's most famous epic poem",
      content: `Book Review: Muna Madan

Title: Muna Madan
Author: Laxmi Prasad Devkota
Published by: Various Nepali Publishers
Main Characters: Madan (protagonist), Muna (his wife), Madan's mother
Genre: Epic Poetry, Tragedy
Language: Nepali
Publication Year: 1935

"Muna Madan" is the most famous poem in Nepali literature, written by the great poet Laxmi Prasad Devkota. It is considered the national epic of Nepal and tells the love story of Madan and his wife Muna.

The story is about Madan, a young man who leaves his beloved wife Muna to go to Lhasa (Tibet) for business to earn money. Muna begs him not to go, but Madan thinks earning money is more important than staying with family. On his journey, Madan faces many difficulties and eventually dies far from home.

The poem teaches us that money is not more important than love and family relationships. When Madan returns home (carried by his friends), Muna has already died from sadness and waiting. This tragic ending shows how materialistic thinking can destroy happiness.

Devkota's use of language is beautiful and poetic. He uses simple words that common people can understand, but creates deep emotions. The rhythm and rhyme of the poem make it easy to remember, and many people in Nepal can recite parts of it.

The poem reflects Nepali culture and traditions very well. It shows the importance of family bonds, the role of women in society, and the hardships that people face for survival. The character of Muna represents the strength and patience of Nepali women.

What I learned from this poem is that true wealth lies in love, relationships, and contentment, not in material possessions. The poem is still relevant today when many Nepali youth go abroad for work and leave their families behind.

This is a must-read for every Nepali student as it represents our cultural heritage and teaches important life lessons. I give it 5 out of 5 stars for its literary beauty and timeless message.

Reviewed by: Sunita Thapa
Class: 10, Saraswati Higher Secondary School`
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
            <BookOpenCheck className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Book Review</h1>
          </div>
          <p className="text-muted-foreground">
            Learn how to write thoughtful reviews of Nepali and international literature
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {bookReviewExamples.map((example, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-education-text">{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-education-light p-4 rounded-lg border">
                  <pre className="whitespace-pre-wrap text-sm text-education-text font-mono leading-relaxed">
                    {example.content}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-card rounded-lg shadow-card">
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for Book Review Writing</h2>
          <ul className="space-y-2 text-education-text">
            <li>• Start with the book title, author, and basic information</li>
            <li>• Give a brief summary without revealing the ending</li>
            <li>• Discuss what you liked and didn't like about the book</li>
            <li>• Mention the main themes and lessons learned</li>
            <li>• Comment on the author's writing style and language</li>
            <li>• Recommend who should read this book and why</li>
            <li>• Give a rating (like stars or points) at the end</li>
            <li>• Write in first person (I think, I liked, I learned)</li>
            <li>• Be honest but respectful in your opinions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookReview;