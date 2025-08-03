import Navigation from "@/components/Navigation";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Users, Globe } from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 light-gray-bg">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-light mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-600">
                Have questions about iDIG or want to join the early access program?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-md">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-medium mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange("name")}
                        disabled={contactMutation.isPending}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange("email")}
                        disabled={contactMutation.isPending}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Select 
                        value={formData.subject} 
                        onValueChange={handleSelectChange}
                        disabled={contactMutation.isPending}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Early Access Request">Early Access Request</SelectItem>
                          <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                          <SelectItem value="Book Question">Book Question</SelectItem>
                          <SelectItem value="Partnership">Partnership</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange("message")}
                        disabled={contactMutation.isPending}
                        className="resize-none"
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full apple-button bg-blue-500 hover:bg-blue-600 text-white py-3"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="shadow-md">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-medium mb-4">Early Access Program</h3>
                    <p className="text-gray-600 mb-4">
                      iDIG is currently in invite-only beta. Join our early access program to be among 
                      the first to experience resonant tools for curious minds.
                    </p>
                    <div className="flex items-center text-blue-500">
                      <Mail className="w-5 h-5 mr-3" />
                      <span>early-access@idig.io</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-medium mb-4">Connect With Us</h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <MessageSquare className="w-5 h-5 mr-3 text-blue-500" />
                        <span>@idig_tools</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-5 h-5 mr-3 text-blue-500" />
                        <span>iDIG Tools</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Globe className="w-5 h-5 mr-3 text-blue-500" />
                        <span>blog.idig.io</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-medium mb-4">Response Time</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      We typically respond within 24-48 hours during business days.
                    </p>
                    <p className="text-gray-600 text-sm">
                      For urgent matters related to early access, please mention "URGENT" in your subject line.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
