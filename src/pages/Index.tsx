
import { Link } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Code, Users, Award } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { setIsRegistered } = useAuth();
  
  const formSchema = z.object({
    fullName: z.string(),
    email: z.string().email(),
    year: z.string() // or z.number(), depending on your data
  });


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      year: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // Store registration data in Supabase
      const { data, error } = await supabase
        .from('registrations')
        .insert([
          {
            name: values.fullName,
            email: values.email,
            year: values.year,
          }
        ]).select(); // It's often a good practice to .select() after insert to get the inserted data back

      // Save user data to local storage
      localStorage.setItem('c3_user_session', JSON.stringify({
        name: values.fullName,
        email: values.email,
        year: values.year
      }));

      setIsRegistered(true);

      toast({
        title: "Registration successful!",
        description: "You've been registered. You can now access all features.",
      });

      form.reset();
    } catch (error: any) {
      console.log("error happens");
      toast({
        title: "Registration failed",
        description: error.message || "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-club-purple to-club-pink text-white pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                C3 CLUB – Explore, Learn, Lead!
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Welcome to the official website of C3 Club, the heart of innovation and curiosity in the Computer Science Department!
                We're excited to invite all junior students to our exclusive event:
                "Pathways in Computer Science – Discover Your Future!"
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-club-purple hover:bg-white/90">
                  <Link to="/event-details">Event Details</Link>
                </Button>
                <Button size="lg" className="bg-white text-club-purple hover:bg-white/90">
                  <Link to="/contact">Join The Club</Link>
                  
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000"
                alt="Students collaborating" 
                className="rounded-lg shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="shadow-lg border-t-4 border-t-club-purple">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-center mb-6">Register Now</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="year"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Year of Study</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your year" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="first">First Year</SelectItem>
                              <SelectItem value="second">Second Year</SelectItem>
                              <SelectItem value="third">Third Year</SelectItem>
                              <SelectItem value="fourth">Fourth Year</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-club-purple to-club-pink"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Registering..." : "Register Now"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About C3 Club */}
      <section className="py-16 bg-club-light-purple/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">About C3 Club</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              <span className="font-bold text-club-purple">C3 stands for Code | Create | Connect</span>
            </p>
            <p className="text-lg max-w-3xl mx-auto text-gray-600 mt-4">
              We're a passionate group of students and mentors dedicated to exploring the vast world of computer science. 
              Whether you're into AI, web dev, cybersecurity, or just figuring out where to start, 
              C3 Club is your space to grow, share, and innovate.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-wrapper" style={{"--delay": "1"} as React.CSSProperties}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-club-purple/10 p-3 rounded-full mb-4">
                    <Code className="h-8 w-8 text-club-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Code</h3>
                  <p className="text-gray-600">
                    Learn programming languages, frameworks, and best practices through workshops and hackathons.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-wrapper" style={{"--delay": "2"} as React.CSSProperties}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-club-purple/10 p-3 rounded-full mb-4">
                    <Users className="h-8 w-8 text-club-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Create</h3>
                  <p className="text-gray-600">
                    Build real-world projects, collaborate on innovative solutions, and showcase your creativity.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-wrapper" style={{"--delay": "3"} as React.CSSProperties}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-club-purple/10 p-3 rounded-full mb-4">
                    <Award className="h-8 w-8 text-club-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Connect</h3>
                  <p className="text-gray-600">
                    Network with peers, seniors, industry professionals and build meaningful relationships.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="section-subtitle mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a href="mailto:c3Cahcet@gmail.com" className="text-club-purple hover:underline">c3Cahcet@gmail.com</a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <a href="tel:8608389224" className="text-club-purple hover:underline">8608389224</a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p>CAHCET, Melvisharam</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="bg-gradient-to-r from-club-purple to-club-pink">
                    <Link to="/contact">Apply to Join C3</Link>
                  </Button>
                </div>
              </div>
              
              <div>
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-bold mb-4">Connect With Us</h2>
                    <div className="flex flex-col space-y-4">
                      <a 
                        href="https://www.instagram.com/cse._cahcet?igsh=NG5nZmV0dWdlNWo5" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center text-gray-600 hover:text-club-purple"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                        Follow us on Instagram
                      </a>
                      <a 
                        href="https://whatsapp.com/channel/0029VbAphad0rGiVuwuBOK2e" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex items-center text-gray-600 hover:text-club-purple"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
                          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                        </svg>
                        Join our WhatsApp Channel
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
