
import MainLayout from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Code, Users, Book, MessageSquare } from "lucide-react";

const Interviews = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-club-purple to-club-pink text-white pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Interview Tips & Tricks</h1>
            <p className="text-xl opacity-90">
              Master the art of tech interviews with these proven strategies and preparation techniques
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Resume Building Section */}
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-club-purple/10 p-3 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-club-purple" />
                </div>
                <h2 className="text-2xl font-bold text-club-purple">Resume Building</h2>
              </div>
              
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-4">Keep it Simple & Crisp (1-Page)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Limit your resume to one page, focusing on relevant experiences and skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Use a clean, professional template with consistent formatting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Prioritize recent and relevant experiences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Use action verbs and quantify achievements when possible</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Tailor your resume for each specific job application</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* DSA Practice Section */}
              <div className="flex items-center mb-6">
                <div className="bg-club-purple/10 p-3 rounded-full mr-4">
                  <Code className="h-6 w-6 text-club-purple" />
                </div>
                <h2 className="text-2xl font-bold text-club-purple">Focused DSA Practice</h2>
              </div>
              
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-4">Efficient Study Strategy</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Learn fundamental data structures (arrays, linked lists, trees, graphs, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Master common algorithms and their complexities (sorting, searching, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Practice on platforms like LeetCode, HackerRank, or CodeSignal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Follow a structured approach: focus on one topic at a time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Participate in mock coding competitions to improve speed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column */}
            <div>
              {/* Mock Interviews Section */}
              <div className="flex items-center mb-6">
                <div className="bg-club-purple/10 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-club-purple" />
                </div>
                <h2 className="text-2xl font-bold text-club-purple">Mock Interviews</h2>
              </div>
              
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-4">Practice Makes Perfect</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Use platforms like Pramp or Interviewing.io for peer mock interviews</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Practice with friends or classmates to simulate real interviews</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Record yourself explaining solutions to identify areas for improvement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Request honest feedback after each practice session</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Behavioral Prep Section */}
              <div className="flex items-center mb-6">
                <div className="bg-club-purple/10 p-3 rounded-full mr-4">
                  <MessageSquare className="h-6 w-6 text-club-purple" />
                </div>
                <h2 className="text-2xl font-bold text-club-purple">Behavioral Prep</h2>
              </div>
              
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-4">STAR Method & Soft Skills</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Prepare answers using the STAR method: Situation, Task, Action, Result</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Research common behavioral questions for tech interviews</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Practice communicating technical concepts clearly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Develop stories that highlight your problem-solving abilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Demonstrate teamwork and collaboration experiences</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Project Building Section */}
              <div className="flex items-center mb-6">
                <div className="bg-club-purple/10 p-3 rounded-full mr-4">
                  <Book className="h-6 w-6 text-club-purple" />
                </div>
                <h2 className="text-2xl font-bold text-club-purple">Project Building</h2>
              </div>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-4">Build 2 Good Projects with GitHub</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Focus on quality over quantity—two well-built projects are better than five mediocre ones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Choose projects that demonstrate your technical skills and creativity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Write clean, well-documented code with comprehensive READMEs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Include tests and use modern development practices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-club-purple mr-2 font-bold">•</span>
                      <span>Be prepared to discuss your design choices and challenges you overcame</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final Tips Section */}
      <section className="py-16 bg-club-light-purple/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Additional Interview Advice</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow these additional strategies to stand out during your technical interviews
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Before the Interview</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Research the company thoroughly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Review the job description and required skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Prepare questions to ask the interviewer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Test your technical setup for remote interviews</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">During the Interview</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Think out loud when solving problems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Clarify requirements before starting to code</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Consider edge cases and test your solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Stay calm and ask for hints if needed</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">After the Interview</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Send a thank-you email within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Reflect on the interview and note areas for improvement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Follow up appropriately if you don't hear back</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-club-purple mr-2 font-bold">•</span>
                    <span>Keep practicing for future interviews</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Interviews;
