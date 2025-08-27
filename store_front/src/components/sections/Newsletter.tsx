"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Stay in the Loop
            </h2>
            
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get exclusive deals, product updates, and be the first to know about our latest arrivals
            </p>
            
            {isSubscribed ? (
              <div className="bg-green-500 text-white px-6 py-3 rounded-lg inline-block">
                ✓ Thank you for subscribing! Check your email for confirmation.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/50 focus:outline-none"
                    required
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
            )}
            
            <p className="text-sm text-blue-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}