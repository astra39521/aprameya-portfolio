import React from "react";
import { Briefcase, BookOpen, Code, Award, User, Globe, Star } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">Aprameya Vamshi C</h1>
        <p className="text-lg text-gray-600">Electronics & Communication Engineer | Embedded Systems | IoT | Python Developer</p>
        <div className="mt-4 text-sm text-gray-600">
          <p>Bangalore, India | aprameyavamshic@gmail.com | +91 8277911074</p>
          <p><a href="https://linkedin.com/in/aprameya-vamshi-c-720aa5357" target="_blank" className="text-blue-600 underline">LinkedIn Profile</a></p>
        </div>
      </header>

      <main className="grid gap-10 max-w-5xl mx-auto">
        <Section icon={<User className="w-6 h-6 text-blue-500" />} title="Summary">
          <p>
            Motivated Electronics and Communication Engineer with hands-on experience in embedded systems,
            IoT, and software development. Passionate about technological innovation and continuous learning,
            with strong organizational and teamwork skills.
          </p>
          <p>
            <em>Seeking to contribute to innovative projects in IoT, automation, and embedded software development that solve real-world problems.</em>
          </p>
        </Section>

        <Section icon={<Briefcase className="w-6 h-6 text-yellow-500" />} title="Projects">
          <ul className="list-disc pl-5">
            <li>
              <strong>Electromagnetic Haptic Mouse Interface</strong>: Co-authored a research paper enhancing VR interaction through haptic feedback.<br/>
              <span className="text-sm text-gray-600">Tech: Electromagnetism, VR, Sensor Feedback</span>
            </li>
            <li>
              <strong>IoT-Based Safety Device</strong>: Developed a temperature-based alert system for health safety monitoring.<br/>
              <span className="text-sm text-gray-600">Tech: Arduino, Sensors, IoT Platform</span>
            </li>
            <li>
              <strong>Electromagnetic Engine</strong>: Built a motor using Lorentz force and electromagnetic induction.<br/>
              <span className="text-sm text-gray-600">Tech: Electromagnetic Coil, Simulation</span>
            </li>
          </ul>
        </Section>

        <Section icon={<Briefcase className="w-6 h-6 text-pink-500" />} title="Experience">
          <div>
            <p><strong>Emertxe, Bangalore – Intern</strong> (07/2023 – 10/2023)</p>
            <ul className="list-disc pl-5">
              <li>Developed and tested embedded software for microwave oven simulation.</li>
              <li>Performed debugging, optimization, and presentation deployment.</li>
              <li>Collaborated in a team to streamline embedded workflows and troubleshoot real-time issues.</li>
            </ul>
          </div>
        </Section>

        <Section icon={<Code className="w-6 h-6 text-green-500" />} title="Skills">
          <div>
            <p className="font-semibold">Technical Skills:</p>
            <ul className="list-disc pl-5">
              <li>Python, MATLAB, Verilog</li>
              <li>Embedded Systems, IoT Development</li>
              <li>Machine Learning Basics: Classification, NLP, Forecasting</li>
            </ul>
            <p className="font-semibold mt-2">Tools & Platforms:</p>
            <ul className="list-disc pl-5">
              <li>Arduino, MS Office, Virtual Reality, SQL (Beginner)</li>
            </ul>
            <p className="font-semibold mt-2">Soft Skills:</p>
            <ul className="list-disc pl-5">
              <li>Problem Solving, Team Collaboration, Project Management</li>
            </ul>
          </div>
        </Section>

        <Section icon={<Award className="w-6 h-6 text-red-500" />} title="Certifications">
          <ul className="list-disc pl-5">
            <li>Python Machine Learning – Aqmenz Automation</li>
            <li>MATLAB Onramp & Verilog – MathWorks</li>
          </ul>
        </Section>

        <Section icon={<BookOpen className="w-6 h-6 text-purple-500" />} title="Education">
          <div className="space-y-2">
            <p><strong>Brindavan College of Engineering</strong> – B.Tech, Electronics and Communication Engineering (08/2020 – 05/2024)<br />CGPA: 7.89</p>
            <p><strong>Sri Chaitanya Institutions</strong> – Pre-University (PCME) (06/2018 – 05/2020)</p>
            <p><strong>Stracy Memorial High School</strong> – 10th Grade (State Board) (06/2013 – 05/2018)</p>
          </div>
        </Section>

        <Section icon={<Globe className="w-6 h-6 text-indigo-500" />} title="Languages & Interests">
          <p><strong>Languages:</strong> English, Telugu, Tamil, Kannada, Hindi</p>
          <p><strong>Interests:</strong> Bike Riding, Traveling, Cooking, Photography</p>
        </Section>

        <Section icon={<Star className="w-6 h-6 text-blue-400" />} title="Let’s Connect">
          <p>
            I'm actively seeking opportunities in embedded systems, IoT, and data-centric development roles.
            If you're working on exciting tech, let’s connect!
          </p>
        </Section>
      </main>
    </div>
  );
}

function Section({ title, icon, children }) {
  return (
    <section className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="text-gray-700 text-base space-y-2">{children}</div>
    </section>
  );
}
