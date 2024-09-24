import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-600">EazieCash</div>
          <div className="space-x-4">
            <Button asChild variant="outline">
              <Link href="/register">Register</Link>
            </Button>
            <Button asChild>
              <Link href="/signin">Login</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Register Now for Digital Access
            </h1>
            <p className="text-xl mb-8">
              We Provide BETTING TIPS, AVIATOR PREDICTION, Instagram followers,
              YouTube views, premium Forex tutorials, enlightening e-books, and
              competitive chess and draughts games to boost your earnings
            </p>
            <Button asChild size="lg">
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Fixed Bets</h3>
                <p>
                  Subscribe to access our daily betting tips. Login daily for
                  expert-analyzed predictions posted daily.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Aviator Predictor
                </h3>
                <p>
                  Get the newest aviator predictor on the market here. Once you
                  access the dashboard, download it as an APK.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Premium Binary Bots
                </h3>
                <p>
                  Subscribers gain access to our expert-created forex bots,
                  regularly uploaded to our website as XML.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">
                  Social Media Boost
                </h3>
                <p>
                  Access YouTube, Twitter, TikTok followers/likes/views. Boost
                  social media presence, gain followers, and increase
                  engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-200 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Crafted For You
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-8">
                Looking to elevate your earnings and expand your horizons? Look
                no further! Our platform offers a comprehensive suite of
                services tailored to optimize your financial growth and personal
                development.
              </p>
              <p className="text-lg mb-8">
                From expert betting tips and insightful aviator predictions to
                increasing your social media presence with Instagram followers
                and YouTube views, we're dedicated to enhancing your
                profitability and visibility.
              </p>
              <p className="text-lg">
                But that's not all – delve into the world of Forex with our
                premium tutorials, enrich your mind with enlightening e-books,
                and sharpen your strategic prowess with competitive chess and
                draughts games. Join us today and unlock a world of
                opportunities to boost your earnings and enrich your life.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Services We Provide
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div>Social Media services</div>
              <div>Competitive Games</div>
              <div>Competitive Trivia</div>
              <div>Forex Lessons</div>
              <div>Forex Bots</div>
              <div>Premium Business Ebooks</div>
            </div>
          </div>
        </section>

        <section className="bg-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Pricing Plans</h2>
            <p className="text-xl mb-12">
              This is our low pricing plan you can check
            </p>
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg max-w-md mx-auto">
              <h3 className="text-2xl font-bold mb-4">Standard</h3>
              <p className="text-4xl font-bold mb-6">$5.00</p>
              <ul className="text-left mb-8">
                <li className="mb-2">✓ All our above services</li>
                <li className="mb-2">
                  ✓ Implement one-to-one catalysts for change
                </li>
                <li className="mb-2">✓ Wireless catalysts for change</li>
                <li className="mb-2">
                  ✓ Adaptive e-tailers after sustainable total linkage
                </li>
              </ul>
              <Button className="w-full" size="lg">
                Get Started
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Customer Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="mb-4">
                    Appropriately implement one-to-one catalysts for change
                    vis-a-vis wireless catalysts for change. Enthusiastically
                    architect adaptive e-tailers after sustainable total
                    linkage.
                  </p>
                  <p className="font-semibold">
                    Tahmina Anny ; UIdeck Customer
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-200 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Team Members
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Patric Green", role: "Lead Designer" },
                { name: "Celina D Cruze", role: "Front-end Developer" },
                { name: "Daryl Dixon", role: "Content Writer" },
                { name: "Mark Parker", role: "Support Engineer" },
              ].map((member, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Latest Blog Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  How to register on eaziecash
                </h3>
                <p className="mb-4">
                  Click register, fill out a few info and start.
                </p>
                <p className="text-sm text-gray-600">
                  5 Min read • Posted by Admin • 10 April, 2024
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  How Slick Will Transform Your Business
                </h3>
                <p className="mb-4">How to write articles on eaziecash.</p>
                <p className="text-sm text-gray-600">
                  5 Min read • Posted by Admin • 10 April, 2024
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">
                  Growth Techniques for New Startups
                </h3>
                <p className="mb-4">
                  How to grow your businesses on eaziecash today.
                </p>
                <p className="text-sm text-gray-600">
                  5 Min read • Posted by Admin • 10 April, 2024
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Get In Touch
            </h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Name"
                  className="bg-white text-gray-800"
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Subject"
                  className="bg-white text-gray-800"
                />
              </div>
              <div className="mb-4">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white text-gray-800"
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Budget"
                  className="bg-white text-gray-800"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Write Message"
                  className="w-full p-2 rounded-md bg-white text-gray-800"
                  rows={4}
                ></textarea>
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">EazieCash</h3>
              <p>Support@eaziecash.com</p>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Company</h4>
              <ul>
                <li>
                  <a href="#" className="hover:text-purple-400">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2">Subscribe Now</h4>
              <p className="mb-2">
                Appropriately implement catalysts for change via wireless
                catalysts for change.
              </p>
              <form className="flex">
                <Input
                  type="email"
                  placeholder="Enter Email"
                  className="flex-grow mr-2 bg-white text-gray-800"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 EazieCash. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
