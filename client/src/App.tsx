import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Newsletter from "@/pages/Newsletter";
import MonthlySubscription from "@/pages/MonthlySubscription";
import BlogSubscription from "@/pages/BlogSubscription";
import Blog from "@/pages/Blog";
import Book from "@/pages/Book";
import Contact from "@/pages/Contact";
import Chapter from "@/pages/Chapter";
import Demo from "@/pages/Demo";
import BlogPost from "@/pages/BlogPost";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/newsletter" component={Newsletter} />
      <Route path="/monthly-subscription" component={MonthlySubscription} />
      <Route path="/blog-subscription" component={BlogSubscription} />
      <Route path="/blog/:id" component={BlogPost} />
      <Route path="/blog" component={Blog} />
      <Route path="/book" component={Book} />
      <Route path="/contact" component={Contact} />
      <Route path="/book/chapter/:chapterNumber" component={Chapter} />
      <Route path="/demo/:slug" component={Demo} />
      <Route path="/demo" component={Demo} />
      <Route path="/admin" component={Admin} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
