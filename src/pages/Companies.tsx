
import MainLayout from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Cpu, Database, Code, Server } from "lucide-react";
import { Link } from "react-router-dom";

const Companies = () => {
  const companies = [
    {
      name: "Google",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "AI, Search, Android, and Cloud technologies",
      focus: ["Machine Learning", "Systems", "Web Technologies", "Mobile", "Cloud"],
      internships: "careers.google.com",
      icon: <Globe className="h-6 w-6" />,
      color: "from-blue-500 to-green-500",
      url: "https://careers.google.com/"
    },
    {
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1642078481933-8613fd431d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Windows, Azure, GitHub, and more",
      focus: ["Cloud Computing", "Software Development", "AI/ML", "Gaming"],
      internships: "careers.microsoft.com",
      icon: <Cpu className="h-6 w-6" />,
      color: "from-blue-600 to-cyan-400",
      url: "https://careers.microsoft.com/"
    },
    {
      name: "Amazon",
      logo: "https://images.unsplash.com/photo-1646517372233-d0c8faabddcf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "E-commerce, AWS, Machine Learning",
      focus: ["Distributed Systems", "Cloud Infrastructure", "Data Science", "E-commerce"],
      internships: "amazon.jobs",
      icon: <Database className="h-6 w-6" />,
      color: "from-amber-500 to-orange-600",
      url: "https://www.amazon.jobs/"
    },
    {
      name: "Infosys & TCS",
      logo: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", 
      description: "Great starting points for software careers",
      focus: ["IT Services", "Software Development", "Training Programs", "Enterprise Solutions"],
      internships: "careers.infosys.com / careers.tcs.com",
      icon: <Code className="h-6 w-6" />,
      color: "from-indigo-500 to-blue-600",
      url: "https://www.infosys.com/careers/"
    },
    {
      name: "Startups & Internships",
      logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Work with real products from day one",
      focus: ["Hands-on Experience", "Multiple Roles", "Fast-paced Environment", "Innovation"],
      internships: "angellist.com / internshala.com",
      icon: <Server className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      url: "https://www.tcs.com/careers"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-club-purple to-club-pink text-white pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Top Tech Companies</h1>
            <p className="text-xl opacity-90">
              Dream big and explore where your skills can take you. These companies are changing the world—and they need people like you.
            </p>
          </div>
        </div>
      </section>

      {/* Companies Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Explore Tech Giants</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From global tech giants to promising startups, learn about the companies that are shaping the future of technology and how you can be a part of it.
            </p>
          </div>

          <div className="space-y-16">
            {companies.map((company, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className={`bg-gradient-to-r ${company.color} w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white`}>
                      {company.icon}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{company.name}</h2>
                    <p className="text-gray-700 mb-6">{company.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Focus Areas:</h3>
                      <div className="flex flex-wrap gap-2">
                        {company.focus.map((area, i) => (
                          <span key={i} className="bg-gray-100 px-3 py-1 text-sm rounded-full">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Careers & Internships:</h3>
                      <p className="text-club-purple">{company.internships}</p>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-club-purple to-club-pink self-start" asChild>
                      <a href={company.url} target="_blank" rel="noopener noreferrer">Learn More</a>
                    </Button>
                  </div>
                  <div className="hidden md:block h-64 md:h-auto">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} office`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Tips */}
      <section className="py-16 bg-club-light-purple/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Land Your Dream Internship</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Follow these proven strategies to increase your chances of getting noticed by top tech companies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg border-t-4 border-t-club-purple">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Build Your Portfolio</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Create a GitHub profile with 2-3 solid projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Document your work clearly with detailed READMEs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Include projects that showcase relevant skills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg border-t-4 border-t-club-purple">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Perfect Your Resume</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Highlight relevant coursework and projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Quantify achievements whenever possible</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Tailor your resume for each application</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg border-t-4 border-t-club-purple">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Prepare for Interviews</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Practice DSA problems on LeetCode/HackerRank</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Do mock interviews with peers or platforms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Research the company before your interview</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-club-purple to-club-pink rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
              <div className="space-y-4 text-white">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Contact the Experts?</h2>
                <p className="opacity-90">
                  Connect with mentors, ask questions, and get personalized career guidance from industry professionals.
                </p>
                <Button size="lg" className="bg-white text-club-purple hover:bg-white/90">
                  <a href="https://adplist.org" target="_blank" rel="noopener noreferrer">Meet Experts</a>
                </Button>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000" 
                  alt="Tech meetup"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Companies;
