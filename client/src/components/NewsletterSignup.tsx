import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest("POST", "/api/newsletter", { email });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to The Resonant Builders Monthly.",
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
    if (!email.trim()) return;
    newsletterMutation.mutate(email.trim());
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center">
      <h3 className="text-4xl md:text-5xl font-light mb-4">The Resonant Builders Monthly</h3>
      <p className="text-gray-600 mb-6">
        Join our newsletter for insights on building tools for curious minds.
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3 mb-4">
        <Input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
          disabled={newsletterMutation.isPending}
        />
        <Button 
          type="submit" 
          className="apple-button px-6"
          disabled={newsletterMutation.isPending}
        >
          {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
      
      <div className="mt-4">
        <Link href="/newsletter" className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium" data-testid="link-explore-newsletter">
          Explore Newsletter
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
