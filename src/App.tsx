import { Toaster as DefaultToaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EventDetails from "./pages/EventDetails";
import Domains from "./pages/Domains";
import Companies from "./pages/Companies";
import Interviews from "./pages/Interviews";
import Contact from "./pages/Contact";
import { AuthProvider } from "./contexts/AuthContext";

// Create query client instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <DefaultToaster />
          <SonnerToaster />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/event-details" element={<EventDetails />} />
              <Route path="/domains" element={<Domains />} />
              <Route path="/companies" element={<Companies />} />
              <Route path="/interviews" element={<Interviews />} />
              <Route path="/contact" element={<Contact />} />
              {/* Catch-all route (404) */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;