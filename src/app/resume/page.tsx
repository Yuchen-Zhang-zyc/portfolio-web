export default function Resume() {
  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-6rem)] relative p-8 md:p-24 bg-white overflow-hidden">
      
      {/* Decorative Blur Element */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-100 blur-3xl opacity-60 rounded-full z-0"></div>

      <div className="w-full max-w-4xl z-10 text-[#0a1128]">
        
        {/* Header */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16">
          Resume.
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          
          {/* Main Content Area (Education) */}
          <div className="md:col-span-8 flex flex-col gap-16">
            
            {/* Education Section */}
            <section>
              <h2 className="text-2xl font-bold border-b border-gray-200 pb-4 mb-8 text-blue-600">Education</h2>
              
              <div className="flex flex-col gap-10">
                {/* SCAD */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="md:w-32 flex-shrink-0 text-gray-500 font-mono text-sm pt-1">
                    2024 — Now
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">Savannah College of Art and Design</h3>
                    <p className="text-lg font-medium text-gray-700">Master of Fine Art in Interactive Design</p>
                    <p className="text-gray-500 text-sm">Savannah, Georgia</p>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      Pursuing MFA in Interactive Design, researching AI-human collaboration in UX ideation processes.
                    </p>
                  </div>
                </div>

                {/* UD */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="md:w-32 flex-shrink-0 text-gray-500 font-mono text-sm pt-1">
                    2019 — 2023
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">University of Delaware</h3>
                    <p className="text-lg font-medium text-gray-700">Bachelor’s Degree in Computer Science</p>
                    <p className="text-gray-500 text-sm">Newark, Delaware</p>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      Studied Computer Science with a focus on interface development and software engineering.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Area (Skills & Languages) */}
          <div className="md:col-span-4 flex flex-col gap-12">
            
            {/* Skills */}
            <section>
              <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-6">Professional Skillset</h2>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Figjam", "User Research", "Thematic Analysis", "Usability Testing", "Prototype", "Python", "JavaScript", "Unity", "AI-assisted Dev"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-xl font-bold border-b border-gray-200 pb-2 mb-6">Languages</h2>
              <ul className="flex flex-col gap-3 text-gray-600">
                <li className="flex justify-between items-center">
                  <span>Chinese</span>
                  <span className="text-sm font-mono text-gray-400">Native</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>English</span>
                  <span className="text-sm font-mono text-gray-400">Proficient</span>
                </li>
              </ul>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}
