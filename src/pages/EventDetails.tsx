
import MainLayout from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const EventDetails = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-club-purple to-club-pink text-white pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pathways in Computer Science</h1>
            <p className="text-xl opacity-90">
              Discover Your Future
            </p>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Main event info */}
            <div>
              <h2 className="section-title mb-8">Event Highlights</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-club-purple/10 p-3 rounded-full mr-4">
                    <Calendar className="h-6 w-6 text-club-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Event</h3>
                    <p className="text-gray-600">Pathways in Computer Science</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-club-purple/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-club-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Registration</h3>
                    <p className="text-gray-600">Open now for all juniors</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-club-purple/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-club-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Venue</h3>
                    <p className="text-gray-600">CAHCET, Melvisharam</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-club-purple/10 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-club-purple" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Organized by</h3>
                    <p className="text-gray-600">C3 Club – Department of Computer Science</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h2 className="section-subtitle mb-4">What's Happening?</h2>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-club-purple/20 flex items-center justify-center text-club-purple text-sm font-bold mr-3 mt-0.5">
                      <span>1</span>
                    </div>
                    <p className="text-gray-700">Domain showcase: AI/ML, Cybersecurity, Web Dev, and more</p>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-club-purple/20 flex items-center justify-center text-club-purple text-sm font-bold mr-3 mt-0.5">
                      <span>2</span>
                    </div>
                    <p className="text-gray-700">Real interview stories and resume tips</p>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-club-purple/20 flex items-center justify-center text-club-purple text-sm font-bold mr-3 mt-0.5">
                      <span>3</span>
                    </div>
                    <p className="text-gray-700">Insights into companies and hiring processes</p>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-club-purple/20 flex items-center justify-center text-club-purple text-sm font-bold mr-3 mt-0.5">
                      <span>4</span>
                    </div>
                    <p className="text-gray-700">Panel talks with seniors and alumni</p>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-club-purple/20 flex items-center justify-center text-club-purple text-sm font-bold mr-3 mt-0.5">
                      <span>5</span>
                    </div>
                    <p className="text-gray-700">Live Q&A and interactive sessions</p>
                  </li>
                </ul>
              </div>
              
              <div className="mt-10">
                <h2 className="section-subtitle mb-4">How to Join?</h2>
                <div className="bg-club-light-purple/10 p-6 rounded-lg border border-club-purple/20">
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <span className="text-club-purple mr-2">✓</span>
                      Register using the homepage form
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-club-purple mr-2">✓</span>
                      Free for all juniors
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Event highlights */}
            <div>
              <Card className="shadow-lg border-t-4 border-t-club-purple mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold text-center mb-6">Journey Through Tech Domains</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-club-purple/10 p-2 rounded-full mr-3 mt-1">
                        <span className="text-club-purple font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Explore CS Domains</h3>
                        <p className="text-gray-600 text-sm">Discover AI/ML, Cybersecurity, Quantum Computing, Web & App Development, Data Science</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-club-purple/10 p-2 rounded-full mr-3 mt-1">
                        <span className="text-club-purple font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Tech Companies Insights</h3>
                        <p className="text-gray-600 text-sm">Learn about Google, Microsoft, Amazon, Infosys, TCS</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-club-purple/10 p-2 rounded-full mr-3 mt-1">
                        <span className="text-club-purple font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Interview Preparation</h3>
                        <p className="text-gray-600 text-sm">Resume building, DSA practice, technical & behavioral interview tips</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-club-purple/10 p-2 rounded-full mr-3 mt-1">
                        <span className="text-club-purple font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Interactive Learning</h3>
                        <p className="text-gray-600 text-sm">Domain quizzes, guided projects, and learning resources</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="w-full bg-gradient-to-r from-club-purple to-club-pink">
                      <Link to="/">Register Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-bold mb-4">Why Attend?</h2>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-club-purple mr-2"></div>
                      <span>Gain clarity on your future career path</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-club-purple mr-2"></div>
                      <span>Connect with like-minded peers</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-club-purple mr-2"></div>
                      <span>Access exclusive learning resources</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-club-purple mr-2"></div>
                      <span>Learn from experienced students</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-club-purple mr-2"></div>
                      <span>Take interactive domain quizzes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-subtitle mb-4">Don't miss this opportunity!</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Register now and take a major step toward finding your path in the world of Computer Science.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-club-purple to-club-pink hover:opacity-90 text-white">
            <Link to="/">Register Now</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default EventDetails;
