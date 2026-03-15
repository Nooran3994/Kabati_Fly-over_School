import { BookOpen, Users, Award, GraduationCap, FlaskConical, Globe, Palette, Sprout, Calculator, Languages, Baby, Microscope, Briefcase, Heart } from 'lucide-react';

export function Home() {

  const prePreimary = [
    { icon: Languages, label: 'Language Activities', desc: 'Early communication, listening and speaking skills in English and Kiswahili.' },
    { icon: Calculator, label: 'Mathematical Activities', desc: 'Play-based number sense, shapes, patterns and basic counting.' },
    { icon: Globe, label: 'Environmental Activities', desc: 'Exploring the immediate natural and social environment through play.' },
    { icon: Palette, label: 'Creative Activities', desc: 'Art, music, movement and drama to spark imagination and expression.' },
    { icon: Heart, label: 'Religious Education', desc: 'Values, character and spiritual foundation from an early age.' },
  ];

  const lowerPrimary = [
    { icon: BookOpen, label: 'English Language Activities', desc: 'Reading, writing and communication skills in English.' },
    { icon: Languages, label: 'Kiswahili Language Activities', desc: 'Kiswahili literacy and oral communication skills.' },
    { icon: Calculator, label: 'Mathematical Activities', desc: 'Foundational number work, measurement and basic operations.' },
    { icon: Globe, label: 'Environmental Activities', desc: 'Understanding the natural and social world around the learner.' },
    { icon: Palette, label: 'Creative Activities', desc: 'Art, craft, music and movement that nurture imagination.' },
    { icon: Heart, label: 'Religious Education Activities', desc: 'Values, ethics and character development.' },
    { icon: Baby, label: 'Indigenous Language Activities', desc: 'Mother tongue literacy to strengthen cultural identity and early learning.' },
  ];

  const upperPrimary = [
    { icon: Languages, label: 'English & Kiswahili', desc: 'Advanced language competencies — listening, speaking, reading and writing.' },
    { icon: Calculator, label: 'Mathematics', desc: 'Problem-solving, reasoning, financial literacy and mathematical concepts.' },
    { icon: FlaskConical, label: 'Science & Technology', desc: 'Inquiry-based learning covering life, physical and earth sciences with integrated ICT.' },
    { icon: Globe, label: 'Social Studies', desc: 'Kenya, Africa and the world — history, geography and civic responsibility.' },
    { icon: Sprout, label: 'Agriculture & Nutrition', desc: 'Practical farming skills, food production and healthy living education.' },
    { icon: Palette, label: 'Creative Arts & Sports', desc: 'Visual art, music, drama and physical health education.' },
    { icon: Heart, label: 'Religious Education', desc: 'CRE/IRE — moral development, values and ethical reasoning.' },
    { icon: BookOpen, label: 'Home Science', desc: 'Practical life skills covering home management and family living.' },
  ];

  const juniorSchool = [
    { icon: Languages, label: 'English & Kiswahili', desc: 'Communication and literacy skills for a globalised world.' },
    { icon: Calculator, label: 'Mathematics', desc: 'Advanced problem-solving, algebra, geometry and financial mathematics.' },
    { icon: Microscope, label: 'Integrated Science', desc: 'Biology, chemistry, physics and environmental science as one integrated subject.' },
    { icon: Globe, label: 'Social Studies', desc: 'Global governance, civic education, geography and history.' },
    { icon: Heart, label: 'Health Education', desc: 'Physical health, mental wellbeing and life skills for adolescents.' },
    { icon: Briefcase, label: 'Pre-Technical & Pre-Career Education', desc: 'Practical technical skills and introduction to career pathways.' },
    { icon: Palette, label: 'Creative Arts & Sports', desc: 'Music, art, drama, physical education and sports science.' },
    { icon: Heart, label: 'Religious Education', desc: 'Ethical debates, community values and character development.' },
    { icon: Sprout, label: 'Agriculture & Business Studies', desc: 'Entrepreneurship, agribusiness basics and financial literacy.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Kabati Fly-over School
            </h1>

            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Unlocking your child's potential to the fullest through quality education,
              strong discipline and a supportive learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Quality Education</h3>
              <p className="text-gray-600">
                Competency Based Curriculum (CBC) designed to foster academic excellence
                and critical thinking skills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Dedicated Staff</h3>
              <p className="text-gray-600">
                Experienced and passionate teachers committed to nurturing every child's
                potential.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Proven Excellence</h3>
              <p className="text-gray-600">
                Recognized for outstanding performance in academics, sports, and
                co-curricular activities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Holistic Development</h3>
              <p className="text-gray-600">
                Building character, values, and life skills alongside academic knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CBC Curriculum Offerings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing quality education, strong discipline and a
              supportive learning environment for learners from Pre-Primary, Upper Primary
              and Junior School levels under Kenya's Competency Based Curriculum (CBC).
            </p>
          </div>

          {/* Pre-Primary */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-green-400 text-white px-5 py-1.5 rounded-full font-semibold text-sm whitespace-nowrap">
                Pre-Primary — PP1 &amp; PP2
              </div>
              <div className="flex-1 h-0.5 bg-gray-200 ml-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {prePreimary.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <Icon className="text-green-600" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">{label}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lower Primary */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-green-500 text-white px-5 py-1.5 rounded-full font-semibold text-sm whitespace-nowrap">
                Lower Primary — Grade 1 to 3
              </div>
              <div className="flex-1 h-0.5 bg-gray-200 ml-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lowerPrimary.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <Icon className="text-green-600" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">{label}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upper Primary */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-green-600 text-white px-5 py-1.5 rounded-full font-semibold text-sm whitespace-nowrap">
                Upper Primary — Grade 4 to 6
              </div>
              <div className="flex-1 h-0.5 bg-gray-200 ml-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upperPrimary.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <Icon className="text-green-600" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">{label}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Junior School */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-green-700 text-white px-5 py-1.5 rounded-full font-semibold text-sm whitespace-nowrap">
                Junior School — Grade 7 to 9
              </div>
              <div className="flex-1 h-0.5 bg-gray-200 ml-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {juniorSchool.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <Icon className="text-green-600" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm">{label}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Community CTA */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover how Kabati Fly-over School can help your child reach their full
            potential. Contact us today to learn more about admissions and our programmes.
          </p>
          <a
            href="tel:+254708192030"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
