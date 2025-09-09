import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function BlogSignup() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const blogMutation = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/blog-subscription", { email });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to blog post notifications.",
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      blogMutation.mutate(email);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
      <h3 className="text-4xl md:text-5xl font-light mb-4">The Resonant Builders Blog</h3>
      <p className="text-gray-600 mb-4">
        Insights, reflections, and deep explorations into building tools that serve human curiosity and foster meaningful digital experiences.
      </p>
      
      <div className="mb-6">
        <a href="/#demo-section" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium" data-testid="link-explore-blog">
          Watch the i<em>DIG</em> Demo
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
        <Input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
          disabled={blogMutation.isPending}
          data-testid="input-blog-email"
        />
        <Button 
          type="submit" 
          className="apple-button px-6"
          disabled={blogMutation.isPending}
          data-testid="button-blog-submit"
        >
          {blogMutation.isPending ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
}