import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LetterWriting from "./pages/LetterWriting";
import MovieReview from "./pages/MovieReview";
import EmailWriting from "./pages/EmailWriting";
import StoryWriting from "./pages/StoryWriting";
import Essays from "./pages/Essays";
import NewsStory from "./pages/NewsStory";
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
          <Route path="/letter-writing" element={<LetterWriting />} />
          <Route path="/movie-review" element={<MovieReview />} />
          <Route path="/email-writing" element={<EmailWriting />} />
          <Route path="/story-writing" element={<StoryWriting />} />
          <Route path="/essays" element={<Essays />} />
          <Route path="/news-story" element={<NewsStory />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
