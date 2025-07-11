import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
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
          {/* Placeholder routes for new topics - will be implemented later */}
          <Route path="/paragraph-writing" element={<NotFound />} />
          <Route path="/book-review" element={<NotFound />} />
          <Route path="/speech-writing" element={<NotFound />} />
          <Route path="/summary-writing" element={<NotFound />} />
          <Route path="/travelogue-writing" element={<NotFound />} />
          <Route path="/advertisement-writing" element={<NotFound />} />
          <Route path="/letter-sympathy" element={<NotFound />} />
          <Route path="/message-condolence" element={<NotFound />} />
          <Route path="/recipe-writing" element={<NotFound />} />
          <Route path="/thankyou-letter" element={<NotFound />} />
          <Route path="/letter-congratulation" element={<NotFound />} />
          <Route path="/application-letter" element={<NotFound />} />
          <Route path="/reply-letter" element={<NotFound />} />
          <Route path="/rules-regulations" element={<NotFound />} />
          <Route path="/instructions" element={<NotFound />} />
          <Route path="/dialogue-writing" element={<NotFound />} />
          <Route path="/brochure-writing" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
