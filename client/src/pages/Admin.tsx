import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Download, Copy, Users, Mail, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { Newsletter, BlogSubscription } from "@shared/schema";

interface Subscriber {
  id: string;
  email: string;
  name?: string;
  createdAt: Date;
}

export default function Admin() {
  const [activeTab, setActiveTab] = useState<'newsletter' | 'blog'>('newsletter');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  // Simple password protection - you can change this password
  const ADMIN_PASSWORD = "resonant2024";

  useEffect(() => {
    // Check if already authenticated in this session
    const authenticated = sessionStorage.getItem('admin_authenticated');
    if (authenticated === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      toast({
        title: "Access granted",
        description: "Welcome to the admin panel.",
      });
    } else {
      toast({
        title: "Access denied",
        description: "Incorrect password. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        
        <main className="pt-20">
          <section className="py-20">
            <div className="max-w-md mx-auto px-6">
              <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200">
                <div className="text-center mb-8">
                  <Lock className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <h1 className="text-3xl font-light mb-4">Admin Access</h1>
                  <p className="text-gray-600">
                    Enter the admin password to manage subscribers
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <input
                    type="password"
                    placeholder="Admin password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    data-testid="input-admin-password"
                  />
                  <Button
                    type="submit"
                    className="apple-button w-full py-3 font-medium"
                    data-testid="button-admin-login"
                  >
                    Access Admin Panel
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>Security Note:</strong> The current password is "resonant2024". 
                    You can change this in the Admin.tsx file.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  const newsletterQuery = useQuery<Newsletter[]>({
    queryKey: ['/api/admin/newsletter-subscribers'],
    enabled: activeTab === 'newsletter'
  });

  const blogQuery = useQuery<BlogSubscription[]>({
    queryKey: ['/api/admin/blog-subscribers'],
    enabled: activeTab === 'blog'
  });

  const currentData = activeTab === 'newsletter' ? newsletterQuery.data : blogQuery.data;
  const isLoading = activeTab === 'newsletter' ? newsletterQuery.isLoading : blogQuery.isLoading;

  const copyEmailList = () => {
    if (!currentData?.length) return;
    
    const emailList = currentData.map((sub: Newsletter | BlogSubscription) => sub.email).join('\n');
    navigator.clipboard.writeText(emailList).then(() => {
      toast({
        title: "Emails copied!",
        description: `${currentData.length} email addresses copied to clipboard.`,
      });
    });
  };

  const downloadEmailList = () => {
    if (!currentData?.length) return;
    
    const csvContent = [
      'Email,Subscribed Date',
      ...currentData.map((sub: Newsletter | BlogSubscription) => `${sub.email},${new Date(sub.createdAt).toLocaleDateString()}`)
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${activeTab}-subscribers-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
    
    toast({
      title: "Download started!",
      description: `${activeTab} subscriber list downloaded as CSV.`,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-white rounded-2xl px-12 pt-6 pb-12 shadow-lg border border-gray-200">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-light mb-4">Subscriber Management</h1>
                <p className="text-xl text-gray-600">
                  View and export your newsletter and blog subscriber lists
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 rounded-lg p-1 flex">
                  <button
                    onClick={() => setActiveTab('newsletter')}
                    className={`px-6 py-2 rounded-md font-medium transition-colors ${
                      activeTab === 'newsletter'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                    data-testid="tab-newsletter"
                  >
                    <Users className="w-4 h-4 inline mr-2" />
                    Newsletter ({(newsletterQuery.data as Newsletter[])?.length || 0})
                  </button>
                  <button
                    onClick={() => setActiveTab('blog')}
                    className={`px-6 py-2 rounded-md font-medium transition-colors ${
                      activeTab === 'blog'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                    data-testid="tab-blog"
                  >
                    <Mail className="w-4 h-4 inline mr-2" />
                    Blog Updates ({(blogQuery.data as BlogSubscription[])?.length || 0})
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-4 mb-8">
                <Button
                  onClick={copyEmailList}
                  disabled={!currentData?.length || isLoading}
                  className="apple-button px-6 py-3 font-medium"
                  data-testid="button-copy-emails"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Email List
                </Button>
                <Button
                  onClick={downloadEmailList}
                  disabled={!currentData?.length || isLoading}
                  className="apple-button px-6 py-3 font-medium"
                  data-testid="button-download-csv"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CSV
                </Button>
              </div>

              {/* Subscriber List */}
              <div className="bg-gray-50 rounded-lg p-6">
                {isLoading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-2 text-gray-600">Loading subscribers...</p>
                  </div>
                ) : !currentData?.length ? (
                  <div className="text-center py-8">
                    <p className="text-gray-600">
                      No {activeTab === 'newsletter' ? 'newsletter' : 'blog'} subscribers yet.
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="mb-4">
                      <h3 className="text-lg font-medium mb-2">
                        {activeTab === 'newsletter' ? 'Newsletter' : 'Blog Update'} Subscribers
                      </h3>
                      <p className="text-sm text-gray-600">
                        Total: {currentData.length} subscribers
                      </p>
                    </div>
                    
                    <div className="max-h-96 overflow-y-auto">
                      <div className="grid gap-2">
                        {currentData.map((subscriber: Newsletter | BlogSubscription, index: number) => (
                          <div
                            key={subscriber.id}
                            className="bg-white p-3 rounded border flex justify-between items-center"
                            data-testid={`subscriber-${index}`}
                          >
                            <div>
                              <div className="font-medium">{subscriber.email}</div>
                            </div>
                            <div className="text-sm text-gray-500">
                              {new Date(subscriber.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Usage Instructions */}
              <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="font-medium mb-2 text-blue-800">How to Use This Data</h3>
                <div className="text-sm text-blue-700">
                  <p className="mb-2">
                    <strong>Copy Email List:</strong> Copies all email addresses to your clipboard, separated by line breaks. Perfect for pasting into your email client's BCC field.
                  </p>
                  <p>
                    <strong>Download CSV:</strong> Downloads a spreadsheet file with email addresses, names (if provided), and subscription dates. Import this into your email service or keep as a backup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="text-xl font-medium mb-4">
              <span className="logo-i">i</span>
              <span className="logo-dig ml-1">DIG</span>
              <span className="logo-io">.io</span>
            </div>
            <p className="text-gray-400 text-sm">
              Resonant Tools for Curious Minds
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}