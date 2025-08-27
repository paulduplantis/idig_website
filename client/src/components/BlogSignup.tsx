import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email for blog updates"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
          disabled={blogMutation.isPending}
          data-testid="input-blog-email"
        />
        <Button
          type="submit"
          className="apple-button px-6 py-3 font-medium"
          disabled={blogMutation.isPending}
          data-testid="button-blog-submit"
        >
          {blogMutation.isPending ? "Subscribing..." : "Subscribe"}
        </Button>
      </div>
      <p className="text-xs text-gray-500 text-center">
        Unsubscribe anytime. We respect your privacy and won't share your email.
      </p>
    </form>
  );
}