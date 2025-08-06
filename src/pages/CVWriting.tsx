
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CVWriting = () => {
  const cvExamples = [
    {
      title: "Nepali Class 10 Student CV",
      description: "Perfect for Nepali students in class 10 seeking opportunities",
      content: `राम बहादुर शाही (Ram Bahadur Shahi)
Email: ram.shahi@gmail.com | Phone: 9841234567
Address: Gorkha-5, Lumbini Province, Nepal

OBJECTIVE
Dedicated Class 10 student seeking part-time opportunities or internships to gain practical experience while continuing studies. Eager to learn and contribute to community development.

EDUCATION
Currently studying in Class 10 (SEE Appearing - 2025)
Shree Janata Higher Secondary School, Gorkha
Expected Percentage: 75%+
Subjects: Nepali, English, Mathematics, Science, Social Studies, Computer Science

SKILLS
• Languages: Nepali (Native), English (Intermediate), Hindi (Conversational)
• Computer: MS Office (Word, Excel, PowerPoint), Basic Internet Usage
• Academic: Good in Mathematics and Science
• Personal: Leadership, Teamwork, Communication

ACTIVITIES & ACHIEVEMENTS
• Class Monitor for 2 consecutive years (2023-2024)
• Participated in District Level Science Exhibition 2024
• Winner of School Debate Competition (Nepali Language) 2023
• Member of School Environment Club
• Volunteer at Local Community Library

PROJECTS
• Science Project: "Water Purification Methods in Rural Areas"
• Social Studies Project: "Cultural Heritage of Gorkha District"
• Computer Project: Created presentation on "Digital Nepal"

INTERESTS
• Reading books and newspapers
• Playing football and volleyball
• Participating in cultural programs
• Learning about technology and science

REFERENCES
Available upon request`
    },
    {
      title: "Fresh Graduate CV",
      description: "Perfect for students entering the job market",
      content: `John Smith
Email: john.smith@email.com | Phone: (555) 123-4567
Address: 123 Main Street, City, State 12345

OBJECTIVE
Recent Computer Science graduate seeking an entry-level software developer position to apply programming skills and contribute to innovative projects.

EDUCATION
Bachelor of Science in Computer Science
University of Technology, 2024
GPA: 3.7/4.0
Relevant Coursework: Data Structures, Web Development, Database Management

PROJECTS
• E-commerce Website - Developed using React and Node.js
• Mobile App - Created inventory management app using Flutter
• Database Project - Designed customer management system

SKILLS
• Programming: Java, Python, JavaScript, HTML/CSS
• Databases: MySQL, MongoDB
• Tools: Git, VS Code, Adobe Creative Suite

EXPERIENCE
Intern Software Developer
Tech Solutions Inc. (Summer 2023)
• Assisted in developing web applications
• Participated in code reviews and testing
• Collaborated with senior developers on projects

ACHIEVEMENTS
• Dean's List for 3 consecutive semesters
• Winner of University Coding Competition 2023
• Volunteer tutor for programming courses`
    },
    {
      title: "Experienced Professional CV",
      description: "For professionals with significant work experience",
      content: `Sarah Johnson
Senior Marketing Manager
Email: sarah.johnson@email.com | Phone: (555) 987-6543
LinkedIn: linkedin.com/in/sarahjohnson

PROFESSIONAL SUMMARY
Results-driven marketing professional with 8+ years of experience in digital marketing, brand management, and team leadership. Proven track record of increasing brand awareness by 40% and driving revenue growth.

WORK EXPERIENCE
Senior Marketing Manager
Global Tech Corporation (2020 - Present)
• Led marketing team of 12 members
• Increased brand awareness by 45% through digital campaigns
• Managed annual marketing budget of $2.5 million
• Developed and executed go-to-market strategies

Marketing Specialist
Digital Solutions Ltd. (2017 - 2020)
• Created content marketing strategies that increased website traffic by 60%
• Managed social media accounts with 100K+ followers
• Coordinated with design team for promotional materials

Junior Marketing Associate
StartUp Innovations (2016 - 2017)
• Assisted in market research and competitor analysis
• Supported email marketing campaigns
• Helped organize trade shows and events

EDUCATION
Master of Business Administration (MBA)
Business School University, 2016
Bachelor of Arts in Communications
State University, 2014

CERTIFICATIONS
• Google Analytics Certified
• HubSpot Content Marketing Certification
• Facebook Blueprint Certification

SKILLS
• Digital Marketing: SEO, SEM, Social Media Marketing
• Analytics: Google Analytics, Adobe Analytics
• Tools: Salesforce, HubSpot, Adobe Creative Suite
• Leadership and Team Management`
    }
  ];

  const cvOutlineData = [
    {
      section: "Personal Information",
      keyPoints: "Full name, professional email, phone number, city/state",
      purpose: "Contact details for employers",
      tips: "Use professional email address, include LinkedIn profile"
    },
    {
      section: "Professional Summary/Objective",
      keyPoints: "2-3 sentences highlighting experience and career goals",
      purpose: "Quick overview of your professional profile",
      tips: "Tailor to each job application, focus on value you bring"
    },
    {
      section: "Work Experience",
      keyPoints: "Job title, company, dates, key achievements with metrics",
      purpose: "Demonstrate professional track record",
      tips: "List in reverse chronological order, use action verbs, quantify results"
    },
    {
      section: "Education",
      keyPoints: "Degree, institution, graduation year, relevant coursework",
      purpose: "Show educational qualifications",
      tips: "Include GPA if above 3.5, mention honors and awards"
    },
    {
      section: "Skills",
      keyPoints: "Technical skills, software proficiency, languages",
      purpose: "Highlight relevant competencies",
      tips: "Match skills to job requirements, categorize by type"
    },
    {
      section: "Projects (Optional)",
      keyPoints: "Project name, technologies used, brief description",
      purpose: "Showcase practical application of skills",
      tips: "Include links to portfolio or GitHub, focus on impact"
    },
    {
      section: "Certifications",
      keyPoints: "Certification name, issuing organization, date obtained",
      purpose: "Demonstrate continuous learning and expertise",
      tips: "Include only relevant certifications, mention expiry dates if applicable"
    },
    {
      section: "Achievements/Awards",
      keyPoints: "Award name, organization, date, brief description",
      purpose: "Highlight recognition and accomplishments",
      tips: "Include both academic and professional achievements"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-education-light">
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <Link to="/table-of-contents">
            <Button variant="ghost" className="mb-4 twinkle-button px-6 py-3 text-lg font-semibold">
              <ArrowLeft className="mr-3 h-6 w-6" />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Back to Contents
              </span>
            </Button>
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <FileText className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              CV Writing Guide
            </h1>
          </div>
          <p className="text-muted-foreground">
            Learn to create professional CVs that stand out to employers
          </p>
        </div>

        {/* CV Outline Table */}
        <Card className="mb-8 shadow-card hover:shadow-hover transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              CV Structure & Key Points
            </CardTitle>
            <CardDescription>
              Complete outline with essential elements for every CV section
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      CV Section
                    </TableHead>
                    <TableHead className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Key Points to Include
                    </TableHead>
                    <TableHead className="font-semibold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                      Purpose
                    </TableHead>
                    <TableHead className="font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      Pro Tips
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cvOutlineData.map((row, index) => (
                    <TableRow key={index} className="hover:bg-education-light/50">
                      <TableCell className="font-medium text-education-text">
                        {row.section}
                      </TableCell>
                      <TableCell className="text-education-text">
                        {row.keyPoints}
                      </TableCell>
                      <TableCell className="text-education-text">
                        {row.purpose}
                      </TableCell>
                      <TableCell className="text-education-text">
                        {row.tips}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* CV Examples */}
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {cvExamples.map((example, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {example.title}
                </CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-education-light p-4 rounded-lg border max-h-96 overflow-y-auto">
                  <pre className="whitespace-pre-wrap text-sm text-education-text font-mono">
                    {example.content}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips Section */}
        <div className="mt-8 p-6 bg-gradient-card rounded-lg shadow-card">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
            Essential CV Writing Tips
          </h2>
          <ul className="space-y-2 text-education-text">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Keep your CV to 1-2 pages maximum</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Use a clean, professional font like Arial or Calibri</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Tailor your CV for each job application</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Use action verbs and quantify achievements where possible</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Proofread carefully for spelling and grammar errors</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-2 flex-shrink-0"></span>
              <span>Save as PDF to preserve formatting across different devices</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CVWriting;
