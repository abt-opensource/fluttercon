"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, ArrowRight, Twitter, Instagram, Facebook } from "lucide-react"

export default function ComingSoonCard() {
  const [email, setEmail] = useState("")
  const [notify,setNotify]=useState(false)
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
    
      console.log("Submitted email:", email)
      setNotify(true)
     
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[500px] p-4 bg-gradient-to-br from-black via-gray-900 to-black mt-40">
      <Card className="w-full max-w-md border-none shadow-lg">
        <CardHeader className="space-y-1 text-center pb-6">
          <div className="mx-auto bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight">Coming Soon</CardTitle>
          <CardDescription className="text-base mt-2">
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
                <span className="bg-background px-2 text-muted-foreground">Get notified</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <div className="flex space-x-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
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
                <p className="text-sm text-green-600 animate-fade-in-down">Thanks! We'll notify you when we launch.</p>
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
  )
}

