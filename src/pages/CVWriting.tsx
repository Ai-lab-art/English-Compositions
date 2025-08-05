import { FileText, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import cvWritingHero from "@/assets/cv-writing-hero.jpg";

const CVWriting = () => {
  const cvExamples = [
    {
      title: "Grade 10 Nepali Student CV",
      description: "CV for Grade 10 student applying for scholarships and part-time opportunities",
      content: `CURRICULUM VITAE

PERSONAL INFORMATION
Name: Kritika Adhikari
Address: Baneshwor-12, Kathmandu, Nepal
Phone: +977-9841123456 (Guardian: Mother)
Email: kritika.adhikari2009@gmail.com
Date of Birth: March 25, 2009
Age: 15 years
Nationality: Nepali
Gender: Female
Guardian: Mrs. Sunita Adhikari (Mother)

ACADEMIC OBJECTIVE
Dedicated and enthusiastic Grade 10 student at Kathmandu Model Secondary School with strong academic performance and active participation in extracurricular activities. Seeking scholarship opportunities for higher studies and part-time work opportunities to support family and gain practical experience.

CURRENT EDUCATION
• Grade 10 (SEE Preparation) - 2024
  Kathmandu Model Secondary School, Baneshwor
  Current Grade: A+ (90% average)
  Major Subjects: Nepali, English, Mathematics, Science, Social Studies, 
  Computer Science, Health Education, Occupation Education

• Grade 9 (2023)
  Kathmandu Model Secondary School
  Grade: A+ (92%)
  Class Rank: 3rd out of 45 students

• Grade 8 (2022)
  Kathmandu Model Secondary School
  Grade: A+ (89%)
  
ACADEMIC ACHIEVEMENTS
• Consistent A+ grades from Grade 6 to current Grade 10
• School topper in English subject (Grade 9)
• 2nd position in school-level Mathematics Olympiad (2023)
• Perfect attendance record for past 3 years
• Selected for District Level Science Exhibition (2023)
• Winner of Inter-school Essay Competition in English (2022)

SKILLS & ABILITIES
• Languages: Nepali (Native), English (Fluent), Hindi (Good), Newari (Basic)
• Computer Skills: MS Office (Word, PowerPoint, Excel), Internet browsing, 
  Basic programming in QBASIC
• Leadership: Class representative for 2 consecutive years
• Communication: Excellent public speaking and presentation skills
• Time Management: Successfully balancing studies with extracurricular activities

EXTRACURRICULAR ACTIVITIES
• Member, English Literary Club (2022-Present)
  - Participated in debate competitions and poetry recitations
  - Organized school magazine "Young Voices"

• Member, Science Club (2023-Present)  
  - Participated in science project exhibitions
  - Conducted experiments and demonstrations for junior classes

• Member, School Dance Group (2021-Present)
  - Performed traditional and modern dances in school events
  - Represented school in inter-school cultural programs

• Volunteer, Community Cleanliness Drive (2022-2023)
  - Participated in monthly neighborhood cleaning activities
  - Organized awareness programs about waste management

SCHOOL PROJECTS & PRESENTATIONS
• "Water Conservation in Nepal" - Science Project (Grade 9)
  - Researched water scarcity issues and presented solutions
  - Won 2nd prize in school science fair

• "Traditional Games of Nepal" - Social Studies Project (Grade 8)
  - Documented and demonstrated traditional Nepali games
  - Created presentation for cultural preservation awareness

• "Computer and Our Future" - Computer Science Project (Grade 10)
  - Prepared presentation on technology's impact on education
  - Currently preparing for district-level competition

WORK EXPERIENCE
• Part-time Tutor (2023-Present)
  - Teaching Mathematics and English to Grade 6-7 students
  - 3 hours per week after school
  - Earning NPR 3,000 per month to support family expenses

• Helper at Mother's Small Shop (2022-Present)
  - Assisting in family grocery shop during weekends
  - Managing inventory and customer service
  - Learning basic business and accounting skills

FAMILY BACKGROUND
• Father: Mr. Ramesh Adhikari (Daily wage laborer)
• Mother: Mrs. Sunita Adhikari (Small shop owner)
• Younger Brother: Arjun Adhikari (Grade 5 student)
• Family Income: Limited (approximately NPR 25,000 per month)
• Financial Status: Seeking educational support for higher studies

CAREER ASPIRATIONS
• Short-term Goal: Excel in SEE examination with A+ grade
• Medium-term Goal: Complete +2 in Science stream with scholarship
• Long-term Goal: Become a Computer Engineer or Doctor to serve community
• Dream: Start technology-based social enterprise to help rural Nepal

HOBBIES & INTERESTS
• Reading storybooks and educational magazines
• Writing poems and short stories in both Nepali and English
• Learning traditional Nepali songs and dances
• Playing badminton and volleyball
• Helping neighbors with computer-related problems
• Gardening and growing vegetables at home

AWARDS & RECOGNITIONS
• "Best Student of the Year" Award (Grade 8, 2022)
• Certificate of Excellence in English (Grade 9, 2023)
• Certificate of Participation in District Science Exhibition (2023)
• Community Service Recognition Certificate (2023)
• Perfect Attendance Award (2021, 2022, 2023)

REFERENCES
• Mrs. Kamala Sharma
  Class Teacher, Grade 10
  Kathmandu Model Secondary School
  Phone: +977-9841111111
  Email: kamala.teacher@kms.edu.np

• Mr. Bijay Lama  
  Principal, Kathmandu Model Secondary School
  Phone: +977-9851222222
  Email: principal@kms.edu.np

• Mrs. Gita Maharjan
  Neighbor and Community Leader
  Phone: +977-9876543210
  (Can vouch for character and community involvement)

ADDITIONAL INFORMATION
• Willing to work part-time while continuing studies
• Available for weekend and evening work
• Strong determination to overcome financial challenges through education
• Excellent relationships with teachers, classmates, and community members
• Committed to using education for community development

DECLARATION
I hereby declare that all the above information is true and correct to the best of my knowledge. I am willing to provide any additional documents or certificates as required.

Date: December 2024
Place: Kathmandu

Signature: ________________
           Kritika Adhikari`
    },
    {
      title: "Nepali Student CV",
      description: "CV for Nepali student applying for higher studies and jobs",
      content: `CURRICULUM VITAE

PERSONAL INFORMATION
Name: Aashish Sharma
Address: Thamel-29, Kathmandu, Nepal
Phone: +977-9841234567
Email: aashish.sharma@student.edu.np
Date of Birth: February 18, 2002
Nationality: Nepali
Gender: Male

CAREER OBJECTIVE
Dedicated and ambitious final year Computer Engineering student at Tribhuvan University seeking opportunities for internships and entry-level positions in software development. Passionate about technology and eager to contribute to innovative projects while continuing academic excellence.

EDUCATION
• Bachelor of Engineering in Computer Engineering (2020-2024)
  Tribhuvan University, Institute of Engineering, Pulchowk Campus
  Current CGPA: 3.6/4.0 (Expected graduation: June 2024)
  Relevant Coursework: Data Structures, Algorithms, Database Systems, 
  Software Engineering, Computer Networks, Artificial Intelligence

• Higher Secondary Education (+2) Science (2018-2020)
  Kathmandu Model College, Physical Science
  GPA: 3.8/4.0 (Grade: A+)
  Major Subjects: Physics, Chemistry, Mathematics, Computer Science

• School Leaving Certificate (2018)
  Little Angels' School, Lalitpur
  GPA: 3.9/4.0 (Grade: A+)

TECHNICAL SKILLS
• Programming Languages: C/C++, Java, Python, JavaScript
• Web Development: HTML5, CSS3, React.js, Node.js, Express.js
• Database: MySQL, MongoDB, PostgreSQL
• Tools & Technologies: Git/GitHub, Docker, Linux, VS Code
• Mobile Development: Android Studio (Java), Flutter (Dart)
• Cloud Platforms: AWS (basic), Firebase

ACADEMIC PROJECTS
• E-Commerce Web Application (2023)
  - Full-stack web application using React.js and Node.js
  - Implemented user authentication, shopping cart, and payment integration
  - Used MongoDB for database management
  - GitHub: github.com/aashish/ecommerce-app

• Nepal Tourism Mobile App (2023)
  - Android application showcasing tourist destinations in Nepal
  - Integrated Google Maps API and weather information
  - Over 500+ downloads on college app store

• Student Management System (2022)
  - Desktop application using Java and MySQL
  - Features include student registration, grade management, and reporting
  - Won 2nd place in college programming competition

WORK EXPERIENCE
• Web Development Intern (Summer 2023)
  Yomari Inc., Kathmandu
  - Developed responsive web components using React.js
  - Collaborated with senior developers on client projects
  - Gained experience in Agile development methodology
  - Duration: 3 months

• Computer Lab Assistant (2021-2023)
  IOE Pulchowk Campus
  - Assisted students with programming assignments and lab exercises
  - Maintained computer lab equipment and software installations
  - Conducted basic troubleshooting for hardware and software issues
  - Part-time position (10 hours/week)

EXTRACURRICULAR ACTIVITIES
• President, Computer Engineering Society (2023-2024)
  - Organized technical workshops and coding competitions
  - Led team of 15 members in organizing annual tech fest
  - Coordinated with industry professionals for guest lectures

• Member, IEEE Student Branch (2021-Present)
  - Participated in technical seminars and workshops
  - Volunteered in community service programs
  - Attended national and international IEEE conferences

• Captain, College Cricket Team (2022-2023)
  - Led team to inter-college championship finals
  - Demonstrated leadership and team management skills

ACHIEVEMENTS & CERTIFICATIONS
• Dean's List for Academic Excellence (2021, 2022, 2023)
• First Prize in College Programming Contest (2022)
• AWS Cloud Practitioner Certification (2023)
• Google Analytics Certified (2023)
• Participant in ACM ICPC Asia Regional Contest (2022)
• Bronze Medal in Nepal Olympiad in Informatics (2019)

LANGUAGES
• Nepali: Native
• English: Fluent (IELTS: 7.5/9.0)
• Hindi: Conversational
• Newari: Conversational

VOLUNTEER EXPERIENCE
• Coding Instructor at Rural Schools (2022-Present)
  - Teaching basic computer skills to students in rural areas
  - Part of "Digital Nepal" initiative by student organization

• Earthquake Relief Volunteer (2021)
  - Distributed relief materials in affected areas
  - Helped in data collection and digital mapping

HOBBIES & INTERESTS
• Photography and Video Editing
• Trekking and Mountain Climbing
• Reading Technology Blogs and Books
• Playing Chess and Online Gaming
• Traditional Nepali Music (Flute)

REFERENCES
• Prof. Dr. Bal Krishna Bal
  Head of Department, Computer Engineering
  Institute of Engineering, Pulchowk Campus
  Email: balkrishna@ioe.edu.np
  Phone: +977-9841111111

• Mr. Roshan Manandhar
  Senior Software Engineer, Yomari Inc.
  Email: roshan@yomari.com.np
  Phone: +977-9851222222

ADDITIONAL INFORMATION
• Available for full-time employment from July 2024
• Open to relocation within Nepal and abroad
• Active GitHub profile with 20+ repositories
• Personal blog on latest technology trends
• LinkedIn: linkedin.com/in/aashish-sharma-nepal`
    },
    {
      title: "Fresh Graduate CV",
      description: "CV for recent graduate seeking first job",
      content: `CURRICULUM VITAE

PERSONAL INFORMATION
Name: Priya Maharjan
Address: Lalitpur-5, Kathmandu, Nepal
Phone: +977-9841234567
Email: priya.maharjan@email.com
Date of Birth: April 15, 2001
Nationality: Nepali

OBJECTIVE
Fresh graduate with Bachelor's degree in Computer Science seeking an entry-level position as Software Developer. Eager to apply programming skills and contribute to innovative technology solutions while gaining practical experience in the IT industry.

EDUCATION
• Bachelor of Computer Science (2019-2023)
  Tribhuvan University, Kathmandu
  Grade: First Division (78%)

• Higher Secondary Education (2017-2019)
  Science Stream, DAV College
  Grade: A+ (85%)

• School Leaving Certificate (2017)
  Rato Bangala School
  Grade: A+ (90%)

TECHNICAL SKILLS
• Programming Languages: Java, Python, C++
• Web Technologies: HTML, CSS, JavaScript, React
• Database: MySQL, MongoDB
• Tools: Git, Visual Studio Code, Eclipse
• Operating Systems: Windows, Linux

PROJECTS
• Online Library Management System (2023)
  Developed using Java and MySQL for final year project
  Features include book search, issue/return system, and user management

• Personal Portfolio Website (2022)
  Created responsive website using HTML, CSS, and JavaScript
  Showcases projects and technical skills

ACHIEVEMENTS
• Dean's List for academic excellence (2021, 2022)
• Winner of Programming Contest at college level (2022)
• Volunteer at Nepal Red Cross Society (2020-2021)

LANGUAGES
• Nepali: Native
• English: Fluent (written and spoken)
• Hindi: Conversational

REFERENCES
Available upon request`
    },
    {
      title: "Experienced Teacher CV",
      description: "CV for experienced teacher with 5 years experience",
      content: `CURRICULUM VITAE

PERSONAL INFORMATION
Name: Ramesh Kumar Shrestha
Address: Bhaktapur-8, Nepal
Phone: +977-9851234567
Email: ramesh.shrestha@email.com
Date of Birth: June 20, 1985
Nationality: Nepali
Marital Status: Married

PROFESSIONAL SUMMARY
Dedicated and experienced Mathematics teacher with 5 years of teaching experience in secondary education. Proven track record of improving student performance and creating engaging learning environments. Committed to fostering critical thinking and problem-solving skills among students.

WORK EXPERIENCE
• Secondary Mathematics Teacher (2019-Present)
  Sunrise Secondary School, Kathmandu
  - Teaching Mathematics to grades 8-10
  - Developed innovative teaching methods improving student scores by 25%
  - Organized mathematics club and competitions
  - Mentored 15+ students for SLC preparation

• Junior Mathematics Teacher (2018-2019)
  Little Angels' School, Lalitpur
  - Taught Mathematics to grades 6-8
  - Assisted in curriculum development
  - Conducted parent-teacher meetings

EDUCATION
• Master of Education (M.Ed.) Mathematics (2016-2018)
  Tribhuvan University, Faculty of Education
  Grade: First Division (75%)

• Bachelor of Education (B.Ed.) Mathematics (2014-2016)
  Tribhuvan University
  Grade: First Division (72%)

• Bachelor of Science (B.Sc.) Mathematics (2011-2014)
  Tribhuvan University
  Grade: Second Division (65%)

CERTIFICATIONS
• Teacher Training Certificate from Ministry of Education (2018)
• Computer Literacy Certificate (MS Office, Internet) (2017)
• First Aid Training Certificate, Red Cross (2019)

SKILLS
• Excellent communication and presentation skills
• Classroom management and student counseling
• Curriculum planning and assessment
• Computer skills: MS Office, online teaching platforms
• Problem-solving and analytical thinking

ACHIEVEMENTS
• Best Teacher Award at Sunrise Secondary School (2022)
• Successfully prepared 95% students for SLC Mathematics (2020-2023)
• Organized inter-school mathematics competition (2021)

LANGUAGES
• Nepali: Native
• English: Fluent
• Hindi: Good

HOBBIES
Reading educational books, playing chess, gardening

REFERENCES
• Mr. Bishnu Prasad Adhikari
  Principal, Sunrise Secondary School
  Phone: +977-9841111111
  Email: principal@sunrise.edu.np

• Mrs. Laxmi Devi Karki
  Head Teacher, Little Angels' School
  Phone: +977-9851222222
  Email: laxmi.karki@littleangels.edu.np`
    },
    {
      title: "Business Manager CV",
      description: "CV for business professional with management experience",
      content: `CURRICULUM VITAE

PERSONAL INFORMATION
Name: Sita Rani Thapa
Address: Pokhara-15, Kaski, Nepal
Phone: +977-9856789012
Email: sita.thapa@email.com
Date of Birth: March 8, 1988
Nationality: Nepali
Marital Status: Married

CAREER OBJECTIVE
Results-driven business manager with 7 years of experience in operations management, team leadership, and business development. Seeking a senior management position to utilize strategic planning skills and contribute to organizational growth and profitability.

PROFESSIONAL EXPERIENCE
• Operations Manager (2020-Present)
  Himalayan Trading Company, Pokhara
  - Manage daily operations of import/export business
  - Led team of 25+ employees across different departments
  - Increased company revenue by 40% through strategic planning
  - Implemented quality control systems reducing errors by 30%
  - Developed relationships with international suppliers

• Assistant Manager (2017-2020)
  Nepal Business Solutions, Kathmandu
  - Supervised sales and marketing activities
  - Coordinated with clients and managed project timelines
  - Trained new employees on company policies and procedures
  - Achieved 120% of sales targets for three consecutive years

• Sales Executive (2016-2017)
  Modern Electronics Pvt. Ltd., Pokhara
  - Handled B2B and B2C sales of electronic products
  - Maintained customer relationships and after-sales service
  - Exceeded monthly sales targets by average of 15%

EDUCATION
• Master of Business Administration (MBA) (2014-2016)
  Pokhara University, Faculty of Management
  Specialization: Marketing and Finance
  Grade: First Division (76%)

• Bachelor of Business Studies (BBS) (2011-2014)
  Tribhuvan University
  Grade: First Division (70%)

• Higher Secondary Education (+2) Management (2009-2011)
  Mahendra Multiple Campus, Pokhara
  Grade: Second Division (65%)

CORE COMPETENCIES
• Strategic Planning and Business Development
• Team Leadership and Human Resource Management
• Financial Analysis and Budget Management
• Project Management and Process Improvement
• Client Relationship Management
• Cross-cultural Communication
• Data Analysis and Reporting

TECHNICAL SKILLS
• Microsoft Office Suite (Advanced)
• QuickBooks and Tally Accounting Software
• CRM Software (Salesforce, HubSpot)
• Project Management Tools (MS Project, Trello)
• Basic knowledge of Digital Marketing

ACHIEVEMENTS
• Promoted twice within 4 years at current organization
• Led successful implementation of ERP system
• Recipient of "Employee of the Year" award (2019)
• Completed leadership development program (2021)

LANGUAGES
• Nepali: Native
• English: Fluent (Business Level)
• Hindi: Conversational

PROFESSIONAL MEMBERSHIPS
• Member, Nepal Chamber of Commerce
• Associate Member, Management Association of Nepal

REFERENCES
• Mr. Gopal Singh Thakuri
  Managing Director, Himalayan Trading Company
  Phone: +977-9841333333
  Email: gopal@himalayantrade.com

• Mrs. Kamala Devi Sharma
  General Manager, Nepal Business Solutions
  Phone: +977-9851444444
  Email: kamala@nepalbusiness.com`
    },
    {
      title: "Healthcare Professional CV",
      description: "CV for nurse with hospital experience",
      content: `CURRICULUM VITAE

PERSONAL INFORMATION
Name: Anita Gurung
Address: Chitwan-7, Bharatpur, Nepal
Phone: +977-9845678901
Email: anita.gurung@email.com
Date of Birth: September 12, 1990
Nationality: Nepali
Marital Status: Single

PROFESSIONAL SUMMARY
Compassionate and dedicated registered nurse with 6 years of experience in hospital settings. Skilled in patient care, emergency response, and healthcare team collaboration. Committed to providing quality healthcare services and improving patient outcomes.

WORK EXPERIENCE
• Staff Nurse (2018-Present)
  Bharatpur Hospital, Chitwan
  - Provide direct patient care in medical and surgical units
  - Administer medications and monitor patient vital signs
  - Assist doctors during procedures and emergencies
  - Maintain accurate patient records and documentation
  - Supervise junior nursing staff and nursing students
  - Handle average of 15-20 patients per shift

• Junior Nurse (2017-2018)
  College of Medical Sciences Hospital, Chitwan
  - Assisted senior nurses in patient care activities
  - Performed basic nursing procedures under supervision
  - Educated patients and families about health conditions
  - Participated in infection control and safety protocols

EDUCATION
• Bachelor of Science in Nursing (B.Sc. Nursing) (2013-2017)
  Chitwan Medical College, Tribhuvan University
  Grade: First Division (74%)

• Proficiency Certificate Level (PCL) Nursing (2011-2013)
  Chitwan Medical College
  Grade: First Division (78%)

• Higher Secondary Education (+2) Science (2009-2011)
  Birendra Multiple Campus, Chitwan
  Grade: Second Division (68%)

PROFESSIONAL CERTIFICATIONS
• Registered Nurse License, Nepal Nursing Council (2017)
• Basic Life Support (BLS) Certification (2018, renewed 2023)
• Advanced Cardiac Life Support (ACLS) Certification (2020)
• Infection Prevention and Control Training (2019)
• Trauma Nursing Course Certificate (2021)

CLINICAL SKILLS
• Patient Assessment and Care Planning
• Medication Administration and IV Therapy
• Wound Care and Dressing Changes
• Emergency Response and Critical Care
• Patient Education and Counseling
• Electronic Health Records Management
• Infection Control Practices
• Team Collaboration and Communication

AREAS OF EXPERTISE
• Medical-Surgical Nursing
• Emergency and Critical Care
• Pediatric Nursing
• Geriatric Care
• Community Health Nursing
• Health Education and Promotion

ACHIEVEMENTS
• Recognized as "Best Nurse of the Year" (2021)
• Successfully led COVID-19 vaccination drive (2021-2022)
• Completed 100+ hours of continuing education
• Mentored 20+ nursing students during clinical rotations
• Zero medication error record for past 3 years

LANGUAGES
• Nepali: Native
• English: Fluent (Medical terminology)
• Hindi: Good
• Tamang: Conversational

PROFESSIONAL MEMBERSHIPS
• Member, Nepal Nurses Association
• Member, Emergency Nurses Association of Nepal

VOLUNTEER EXPERIENCE
• Health camps in rural areas of Chitwan (2019-2022)
• Earthquake relief medical assistance (2015)
• Blood donation awareness campaigns

REFERENCES
• Dr. Prakash Bahadur KC
  Medical Superintendent, Bharatpur Hospital
  Phone: +977-9841555555
  Email: prakash.kc@bharatpurhospital.gov.np

• Mrs. Sushila Devi Poudel
  Nursing Superintendent, Bharatpur Hospital
  Phone: +977-9851666666
  Email: sushila.nursing@bharatpurhospital.gov.np`
    },
    {
      title: "Engineering Professional CV",
      description: "CV for civil engineer with project experience",
      content: `CURRICULUM VITAE

PERSONAL INFORMATION
Name: Bikash Raj Adhikari
Address: Butwal-5, Rupandehi, Nepal
Phone: +977-9847890123
Email: bikash.adhikari@email.com
Date of Birth: January 25, 1987
Nationality: Nepali
Marital Status: Married

CAREER OBJECTIVE
Experienced Civil Engineer with 8 years of experience in construction project management, structural design, and infrastructure development. Seeking a senior engineering position to contribute technical expertise in large-scale construction projects and infrastructure development in Nepal.

PROFESSIONAL EXPERIENCE
• Project Engineer (2019-Present)
  Nepal Construction Company, Butwal
  - Manage construction projects worth NPR 50+ million
  - Supervise team of 40+ construction workers and technicians
  - Ensure quality control and safety standards at construction sites
  - Coordinate with clients, contractors, and government authorities
  - Prepare project reports and technical documentation
  - Successfully completed 15+ building construction projects

• Site Engineer (2016-2019)
  Himalayan Infrastructure Development, Kathmandu
  - Supervised road construction and bridge building projects
  - Conducted site surveys and prepared technical drawings
  - Managed material procurement and inventory control
  - Monitored project timelines and budget constraints
  - Ensured compliance with engineering standards and safety protocols

• Junior Engineer (2015-2016)
  Modern Engineering Consultancy, Pokhara
  - Assisted senior engineers in structural design and analysis
  - Prepared engineering drawings using AutoCAD
  - Conducted field inspections and quality assessments
  - Supported project planning and cost estimation activities

EDUCATION
• Master of Engineering (M.E.) Structural Engineering (2013-2015)
  Tribhuvan University, Institute of Engineering
  Grade: First Division (75%)
  Thesis: "Seismic Analysis of High-Rise Buildings in Nepal"

• Bachelor of Engineering (B.E.) Civil Engineering (2009-2013)
  Tribhuvan University, Institute of Engineering, Pulchowk Campus
  Grade: First Division (72%)

• Higher Secondary Education (+2) Science (2007-2009)
  Siddhartha Campus, Butwal
  Grade: First Division (78%)

TECHNICAL SKILLS
• Software: AutoCAD, STAAD Pro, ETABS, MS Project, MATLAB
• Structural Design and Analysis
• Project Management and Planning
• Construction Quality Control
• Site Surveying and Measurement
• Cost Estimation and Budget Management
• Building Codes and Safety Standards
• Environmental Impact Assessment

PROFESSIONAL CERTIFICATIONS
• Professional Engineer License, Nepal Engineering Council (2016)
• Project Management Professional (PMP) Training (2020)
• Earthquake Resistant Construction Training (2018)
• AutoCAD Certification, Autodesk (2017)
• Safety Officer Training Certificate (2019)

MAJOR PROJECTS
• Butwal Multi-Purpose Commercial Complex (2022-2023)
  - 8-story building construction worth NPR 80 million
  - Project completed 2 months ahead of schedule

• East-West Highway Bridge Construction (2018-2019)
  - 150-meter span bridge connecting two districts
  - Managed team of 60+ workers and engineers

• Residential Housing Project, Lumbini (2020-2021)
  - 50 units earthquake-resistant housing complex
  - Implemented modern construction techniques

ACHIEVEMENTS
• Successfully completed 25+ construction projects without safety incidents
• Reduced project costs by 15% through efficient resource management
• Received "Best Project Engineer" award (2022)
• Published research paper on earthquake-resistant construction (2020)
• Led reconstruction efforts after 2015 earthquake in Gorkha district

LANGUAGES
• Nepali: Native
• English: Fluent (Technical)
• Hindi: Good

PROFESSIONAL MEMBERSHIPS
• Member, Nepal Engineering Council
• Associate Member, Nepal Society of Civil Engineers
• Member, Project Management Association of Nepal

REFERENCES
• Er. Mahesh Kumar Joshi
  Managing Director, Nepal Construction Company
  Phone: +977-9841777777
  Email: mahesh@nepalconstruction.com

• Er. Sita Ram Bhattarai
  Chief Engineer, Department of Roads, Lumbini Province
  Phone: +977-9851888888
  Email: sitaram.roads@gov.np`
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cvWritingHero})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Back to Table of Contents Button */}
          <div className="mb-6">
            <Link to="/table-of-contents">
              <Button 
                variant="outline" 
                size="lg"
                className="twinkling-button hover-scale group border-2"
              >
                <Home className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
                Back to Table of Contents
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg mr-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white drop-shadow-lg">
                Writing a CV (Curriculum Vitae)
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Learn how to write an effective CV to showcase your skills, experience, and qualifications
            </p>
          </div>

          {/* Explanation Section */}
          <Card className="mb-8 shadow-card bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-education-text">
                What is a CV and Why is it Important?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-education-text space-y-4">
              <p>
                A <strong>Curriculum Vitae (CV)</strong> is a detailed document that presents your educational background, 
                work experience, skills, and achievements. It is your first impression to potential employers and a crucial 
                tool for job applications.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">Key Components of a CV:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Personal Information:</strong> Name, contact details, address</li>
                    <li>• <strong>Objective/Summary:</strong> Brief career goals and strengths</li>
                    <li>• <strong>Education:</strong> Academic qualifications and achievements</li>
                    <li>• <strong>Work Experience:</strong> Previous jobs and responsibilities</li>
                    <li>• <strong>Skills:</strong> Technical and soft skills relevant to the job</li>
                    <li>• <strong>Achievements:</strong> Awards, certifications, and accomplishments</li>
                    <li>• <strong>References:</strong> Contact information of previous employers/mentors</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-primary">Tips for Writing an Effective CV:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Keep it clear, concise, and well-organized</li>
                    <li>• Use professional language and proper formatting</li>
                    <li>• Highlight achievements with specific examples and numbers</li>
                    <li>• Tailor your CV to match the job requirements</li>
                    <li>• Use action words like "managed," "developed," "achieved"</li>
                    <li>• Proofread carefully for grammar and spelling errors</li>
                    <li>• Keep it to 2-3 pages maximum for most positions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CV Examples */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-white drop-shadow-lg mb-8">
              Sample CV Examples
            </h2>
            
            {cvExamples.map((example, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 bg-gradient-card border-0">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-education-text">
                    {example.title}
                  </CardTitle>
                  <CardDescription className="text-education-text">
                    {example.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <pre className="whitespace-pre-wrap text-sm text-education-text font-mono leading-relaxed">
                      {example.content}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center text-white/80 mt-12">
            <p className="text-sm">
              Remember: A well-written CV is your gateway to career opportunities. Customize it for each job application!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVWriting;