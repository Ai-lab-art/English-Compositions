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
            <Route path="/" element={
              <AdminRoute>
                <Index />
              </AdminRoute>
            } />
            <Route path="/table-of-contents" element={
              <AdminRoute>
                <TableOfContents />
              </AdminRoute>
            } />
            <Route path="/letter-writing" element={
              <AdminRoute>
                <LetterWriting />
              </AdminRoute>
            } />
            <Route path="/movie-review" element={
              <AdminRoute>
                <MovieReview />
              </AdminRoute>
            } />
            <Route path="/email-writing" element={
              <AdminRoute>
                <EmailWriting />
              </AdminRoute>
            } />
            <Route path="/story-writing" element={
              <AdminRoute>
                <StoryWriting />
              </AdminRoute>
            } />
            <Route path="/essays" element={
              <AdminRoute>
                <Essays />
              </AdminRoute>
            } />
            <Route path="/news-story" element={
              <AdminRoute>
                <NewsStory />
              </AdminRoute>
            } />
            <Route path="/editor-letter" element={
              <AdminRoute>
                <EditorLetter />
              </AdminRoute>
            } />
            <Route path="/graphical-interpretation" element={
              <AdminRoute>
                <GraphicalInterpretation />
              </AdminRoute>
            } />
            <Route path="/recipe-writing" element={
              <AdminRoute>
                <RecipeWriting />
              </AdminRoute>
            } />
            <Route path="/paragraph-writing" element={
              <AdminRoute>
                <ParagraphWriting />
              </AdminRoute>
            } />
            <Route path="/dialogue-writing" element={
              <AdminRoute>
                <DialogueWriting />
              </AdminRoute>
            } />
            <Route path="/book-review" element={
              <AdminRoute>
                <BookReview />
              </AdminRoute>
            } />
            <Route path="/speech-writing" element={
              <AdminRoute>
                <SpeechWriting />
              </AdminRoute>
            } />
            <Route path="/summary-writing" element={
              <AdminRoute>
                <SummaryWriting />
              </AdminRoute>
            } />
            <Route path="/travelogue-writing" element={
              <AdminRoute>
                <TravelogueWriting />
              </AdminRoute>
            } />
            <Route path="/rules-regulations" element={
              <AdminRoute>
                <RulesRegulations />
              </AdminRoute>
            } />
            <Route path="/news-articles" element={
              <AdminRoute>
                <NewsArticles />
              </AdminRoute>
            } />
            <Route path="/diary-entry" element={
              <AdminRoute>
                <DiaryEntry />
              </AdminRoute>
            } />
            <Route path="/cv-writing" element={
              <AdminRoute>
                <CVWriting />
              </AdminRoute>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
