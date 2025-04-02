"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, Facebook, Instagram, Mail, Twitter } from "lucide-react";
import type React from "react";
import { useState } from "react";

export default function ComingSoonCard() {
  const [email, setEmail] = useState("");
  const [notify, setNotify] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Submitted email:", email);
      setNotify(true);
    }
  };

  return (
    <div className="mt-40 flex min-h-[500px] items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-4">
      <Card className="w-full max-w-md border-none shadow-lg">
        <CardHeader className="space-y-1 pb-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="font-bold text-3xl tracking-tight">
            Coming Soon
          </CardTitle>
          <CardDescription className="mt-2 text-base">
            We're working hard to bring you something amazing. Stay tuned!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Get notified
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <Mail className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                      className="pl-10"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit">
                    Notify Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                {notify && (
                  <p className="animate-fade-in-down text-green-600 text-sm">
                    Thanks! We'll notify you when we launch.
                  </p>
                )}
              </div>
            </form>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4 pt-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Instagram className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
