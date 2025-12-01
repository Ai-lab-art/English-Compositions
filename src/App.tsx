import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import AdminRoute from "@/components/AdminRoute";
import Index from "./pages/Index";
import TableOfContents from "./pages/TableOfContents";
import LetterWriting from "./pages/LetterWriting";
import MovieReview from "./pages/MovieReview";
import EmailWriting from "./pages/EmailWriting";
import StoryWriting from "./pages/StoryWriting";
import Essays from "./pages/Essays";
import NewsStory from "./pages/NewsStory";
import EditorLetter from "./pages/EditorLetter";
import GraphicalInterpretation from "./pages/GraphicalInterpretation";
import RecipeWriting from "./pages/RecipeWriting";
import ParagraphWriting from "./pages/ParagraphWriting";
import DialogueWriting from "./pages/DialogueWriting";
import BookReview from "./pages/BookReview";
import SpeechWriting from "./pages/SpeechWriting";
import SummaryWriting from "./pages/SummaryWriting";
import TravelogueWriting from "./pages/TravelogueWriting";
import RulesRegulations from "./pages/RulesRegulations";
import NewsArticles from "./pages/NewsArticles";
import DiaryEntry from "./pages/DiaryEntry";
import CVWriting from "./pages/CVWriting";
import FoodMenuWriting from "./pages/FoodMenuWriting";
import AdvertisementWriting from "./pages/AdvertisementWriting";
import NoticeWriting from "./pages/NoticeWriting";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Index />} />
            <Route path="/table-of-contents" element={<TableOfContents />} />
            <Route path="/letter-writing" element={<LetterWriting />} />
            <Route path="/movie-review" element={<MovieReview />} />
            <Route path="/email-writing" element={<EmailWriting />} />
            <Route path="/story-writing" element={<StoryWriting />} />
            <Route path="/essays" element={<Essays />} />
            <Route path="/news-story" element={<NewsStory />} />
            <Route path="/editor-letter" element={<EditorLetter />} />
            <Route path="/graphical-interpretation" element={<GraphicalInterpretation />} />
            <Route path="/recipe-writing" element={<RecipeWriting />} />
            <Route path="/paragraph-writing" element={<ParagraphWriting />} />
            <Route path="/dialogue-writing" element={<DialogueWriting />} />
            <Route path="/book-review" element={<BookReview />} />
            <Route path="/speech-writing" element={<SpeechWriting />} />
            <Route path="/summary-writing" element={<SummaryWriting />} />
            <Route path="/travelogue-writing" element={<TravelogueWriting />} />
            <Route path="/rules-regulations" element={<RulesRegulations />} />
            <Route path="/news-articles" element={<NewsArticles />} />
            <Route path="/diary-entry" element={<DiaryEntry />} />
            <Route path="/cv-writing" element={<CVWriting />} />
            <Route path="/food-menu-writing" element={<FoodMenuWriting />} />
            <Route path="/advertisement-writing" element={<AdvertisementWriting />} />
            <Route path="/notice-writing" element={<NoticeWriting />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
