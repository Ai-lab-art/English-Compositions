import { ArrowLeft, Megaphone, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AdvertisementWriting = () => {
  const advertisementExamples = [
    {
      title: "Primary Level Teacher - Shree Bagishwari Secondary School",
      description: "Teacher position advertisement for educational institution",
      content: `VACANCY ANNOUNCEMENT

Shree Bagishwari Secondary School
Doodhpokhari Rural Municipality-02, Lamjung

PRIMARY LEVEL TEACHER REQUIRED

We are seeking a qualified and dedicated Primary Level Teacher to join our educational team. The ideal candidate should be passionate about teaching young students and committed to providing quality education.

REQUIRED QUALIFICATIONS:
• +2 (Intermediate) passed in Education Faculty
• Good command of English and Nepali languages
• Basic computer skills
• Strong communication and interpersonal skills

RESPONSIBILITIES:
• Teach students from Grade 1 to 5
• Prepare lesson plans and educational materials
• Evaluate student progress and maintain records
• Participate in school activities and programs

SALARY: As per government scale
CONTRACT: Permanent position available

Interested candidates should submit their application with academic certificates, CV, and recent photograph within 15 days of this advertisement.

Contact: Shree Bagishwari Secondary School, Doodhpokhari-02, Lamjung
Phone: 065-560XXX`
    },
    {
      title: "Manager Position - Marketing Office Gorkha",
      description: "Management position for marketing company",
      content: `VACANCY ANNOUNCEMENT

MANAGER REQUIRED
Himalayan Marketing Solutions Pvt. Ltd.
Gorkha Municipality-5, Gorkha

We are looking for an experienced and dynamic Manager to lead our marketing operations and drive business growth.

REQUIRED QUALIFICATIONS:
• Bachelor's Degree in Management/Marketing/Business Studies
• Minimum 3 years of experience in management role
• Strong leadership and team management skills
• Excellent communication and presentation skills
• Computer proficiency (MS Office, Email, Internet)

KEY RESPONSIBILITIES:
• Manage daily operations and staff supervision
• Develop marketing strategies and business plans
• Handle client relationships and customer service
• Prepare reports and analyze market trends
• Coordinate with suppliers and business partners

SALARY: Rs. 35,000 - 45,000 per month (Negotiable based on experience)
BENEFITS: Dashain Bonus, Festival Allowance, Insurance Coverage

Send your CV with a cover letter to: himalayamarketing@gmail.com
Or visit our office during 10 AM - 5 PM, Sunday to Friday.

Deadline: 30 days from publication date`
    },
    {
      title: "Secondary English Teacher",
      description: "English teacher position for secondary level",
      content: `VACANCY ANNOUNCEMENT

SECONDARY ENGLISH TEACHER
Himalayan Model Secondary School
Bharatpur-10, Chitwan

A reputed educational institution is seeking a qualified English Teacher for secondary level (Class 6-10) to join our academic team.

REQUIRED QUALIFICATIONS:
• Bachelor's Degree in English/Education with English Major
• B.Ed. or equivalent teaching qualification preferred
• Minimum 2 years of teaching experience
• Fluent in spoken and written English
• Creative and innovative teaching methods

DUTIES AND RESPONSIBILITIES:
• Teach English subject for Classes 6-10
• Prepare teaching materials and lesson plans
• Conduct regular assessments and examinations
• Participate in extra-curricular activities
• Maintain student progress records

FACILITIES PROVIDED:
• Competitive salary as per qualification and experience
• Professional development opportunities
• Health insurance and other benefits
• Friendly working environment

Interested candidates are requested to submit their application along with CV, educational certificates, and recent passport-size photograph.

Application Deadline: 20 days from this notice
Contact: 056-571XXX, himalayanmodel@gmail.com`
    },
    {
      title: "Accountant - Sales Office",
      description: "Accounting position for sales office management",
      content: `URGENT VACANCY

ACCOUNTANT REQUIRED
Mountain Sales Corporation
Pokhara-8, Kaski

A well-established sales company is looking for a skilled Accountant to manage financial operations and maintain accurate records.

ESSENTIAL QUALIFICATIONS:
• Bachelor's Degree in Accounting/Finance/Management
• Minimum 2 years of accounting experience
• Knowledge of Tally ERP, Excel, and accounting software
• Understanding of VAT, TDS, and tax regulations
• Strong analytical and mathematical skills

JOB RESPONSIBILITIES:
• Maintain books of accounts and financial records
• Prepare monthly, quarterly, and annual financial reports
• Handle VAT returns and tax-related documentation
• Manage accounts payable and receivable
• Assist in budget preparation and financial planning
• Bank reconciliation and cash flow management

SALARY PACKAGE:
• Monthly Salary: Rs. 25,000 - 35,000
• Performance-based incentives
• Lunch allowance and transportation facility

Apply with complete CV, academic transcripts, experience certificates, and recent photograph.

Email: mountainsales2024@gmail.com
Office Address: New Road, Pokhara-8
Phone: 061-462XXX

Last Date: 25 days from advertisement date`
    },
    {
      title: "Branch Manager - Himalayan Bank Nepal",
      description: "Banking sector management position",
      content: `VACANCY ANNOUNCEMENT

BRANCH MANAGER
Himalayan Bank Limited
Butwal Branch, Rupandehi

Himalayan Bank Limited, one of Nepal's leading commercial banks, invites applications for the position of Branch Manager to lead our Butwal branch operations.

MINIMUM REQUIREMENTS:
• Master's Degree in Management/Economics/Finance/Banking
• Minimum 5 years of banking experience with 2 years in managerial role
• Strong knowledge of banking operations and regulations
• Leadership qualities and team management skills
• Excellent communication and customer relationship skills

KEY RESPONSIBILITIES:
• Overall management of branch operations
• Business development and customer acquisition
• Ensure compliance with banking regulations and policies
• Supervise staff and provide guidance
• Risk management and credit analysis
• Achieve business targets and maintain service quality

REMUNERATION PACKAGE:
• Attractive salary commensurate with qualifications and experience
• Performance-based incentives and bonuses
• Staff loan facilities at concessional rates
• Medical insurance for self and family
• Retirement benefits and other facilities

Qualified candidates should submit their application through our online portal: www.himalayanbank.com/careers or send to hr@himalayanbank.com

Application Deadline: 45 days from this publication

Himalayan Bank Limited is an equal opportunity employer.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-education-light">
      <div className="container mx-auto px-4 py-6">
        {/* Back to Home Button */}
        <div className="mb-6">
          <Link to="/table-of-contents">
            <Button 
              variant="outline" 
              size="lg"
              className="twinkling-button hover-scale group border-2"
            >
              <Home className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              Back to Contents
            </Button>
          </Link>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Megaphone className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Advertisement/Vacancy Announcement</h1>
          </div>
          <p className="text-muted-foreground">
            Learn how to write professional job advertisements and vacancy announcements for various positions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {advertisementExamples.map((example, index) => (
            <Card key={index} className="shadow-card hover:shadow-hover transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-education-text">{example.title}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-education-light p-4 rounded-lg border">
                  <pre className="text-sm text-education-text leading-relaxed whitespace-pre-wrap font-sans">
                    {example.content}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-card rounded-lg shadow-card">
          <h2 className="text-2xl font-semibold mb-4 text-education-text">Tips for Writing Job Advertisements</h2>
          <ul className="space-y-2 text-education-text">
            <li>• Start with a clear and attractive job title</li>
            <li>• Include company name and location prominently</li>
            <li>• List required qualifications and experience clearly</li>
            <li>• Describe key responsibilities and duties</li>
            <li>• Mention salary range and benefits offered</li>
            <li>• Provide clear application instructions and deadline</li>
            <li>• Include contact information for queries</li>
            <li>• Use professional language and proper formatting</li>
            <li>• Be specific about requirements to attract suitable candidates</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementWriting;