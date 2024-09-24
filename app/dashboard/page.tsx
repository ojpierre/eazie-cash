"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/app/context/AuthContext";

export default function DashboardPage() {
  const { state } = useAuth();
  const [isActivated, setIsActivated] = useState(false);

  useEffect(() => {
    // In a real application, you would check the user's activation status from the backend
    // For this example, we'll simulate a delay and then set the account as activated
    const timer = setTimeout(() => {
      setIsActivated(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-600">EazieCash</div>
          <Button variant="outline">Logout</Button>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">
          Welcome, {state.user?.name || "User"}!
        </h1>

        {!isActivated && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Account Activation Status</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-yellow-600">
                Your account is being activated/verified. Please wait...
              </p>
            </CardContent>
          </Card>
        )}

        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Fixed Bets</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Access our daily betting tips and expert-analyzed predictions.
              </p>
              <Button className="mt-4" disabled={!isActivated}>
                Access Tips
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Aviator Predictor</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Download our newest aviator predictor APK.</p>
              <Button className="mt-4" disabled={!isActivated}>
                Download APK
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Premium Binary Bots</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access our expert-created forex bots in XML format.</p>
              <Button className="mt-4" disabled={!isActivated}>
                View Bots
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Social Media Boost</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Increase your followers, likes, and views on various platforms.
              </p>
              <Button className="mt-4" disabled={!isActivated}>
                Boost Now
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Forex Tutorials</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Access premium Forex tutorials to enhance your trading skills.
              </p>
              <Button className="mt-4" disabled={!isActivated}>
                Start Learning
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>E-Books</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Browse our collection of enlightening e-books.</p>
              <Button className="mt-4" disabled={!isActivated}>
                View Library
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 EazieCash. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
