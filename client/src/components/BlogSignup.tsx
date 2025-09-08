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
  );
}