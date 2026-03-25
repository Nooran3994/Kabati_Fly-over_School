import { BookOpen, Users, Award, GraduationCap, FlaskConical, Globe, Palette, Sprout, Calculator, Languages, Baby, Microscope, Briefcase, Heart, Moon, Bus, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useInView } from '../hooks/useInView';
import { useState, useEffect } from 'react';

const heroSlides = [
  {
    image: '/hero-classroom.jpg',
    label: 'Active Learning',
  },
  {
    image: '/hero-computers.jpg',
    label: 'Computer Studies',
  },
  {
    image: '/hero-assembly.jpg',
    label: 'Our Campus',
  },
  {
    image: '/hero-science.jpg',
    label: 'Science & Discovery',
  },
];

export function Home() {
  useSEO({
    title: 'Kabati Fly-over School | Shining to the Top — Kenol, Kenya',
    description: "Welcome to Kabati Fly-over School in Kenol, Murang'a County, Kenya. Quality CBC education from Pre-Primary to Junior School. Unlocking your child's potential to the fullest. Call +254 708 192 030.",
    canonical: 'https://kabatiflyoverschool.com/',
  });

  const [current, setCurrent] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setCurrent((c) => (c + 1) % heroSlides.length);

  // Scroll-triggered animation refs
  const sectionTitle  = useInView(0.2);
  const prePrimaryRef = useInView(0.1);
  const lowerRef      = useInView(0.1);
  const upperRef      = useInView(0.1);
  const juniorRef     = useInView(0.1);

  const prePrimary = [
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
    { icon: Briefcase, label: 'Pre-Technical & Pre-Career Education', desc: 'Practical technical skills and introduction to career pathways.' },
    { icon: Palette, label: 'Creative Arts & Sports', desc: 'Music, art, drama, physical education and sports science.' },
    { icon: Heart, label: 'Religious Education', desc: 'Ethical debates, community values and character development.' },
    { icon: Sprout, label: 'Agriculture', desc: 'Practical farming skills, agribusiness basics and environmental stewardship.' },
  ];

  return (
    <div>
      {/* ── Hero Slideshow ── */}
      <section
        className="relative text-white overflow-hidden"
        style={{ minHeight: '85vh' }}
      >
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.image}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: index === current ? 1 : 0 }}
          >
            <img
              src={slide.image}
              alt={slide.label}
              className="w-full h-full object-cover object-center"
            />
            {/* Green overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-green-700/20"></div>
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 lg:px-8" style={{ minHeight: '85vh' }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg max-w-4xl leading-tight">
            Welcome to Kabati Fly-over School
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow text-green-50 mb-8">
            Unlocking your child's potential to the fullest through quality education,
            strong discipline and a supportive learning environment.
          </p>
          <a
            href="tel:+254708192030"
            className="bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-colors text-lg"
          >
            Enrol Today
          </a>
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-colors"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-colors"
        >
          <ChevronRight size={24} className="text-white" />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all duration-300 ${
                index === current
                  ? 'w-8 h-3 bg-white'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        {/* Slide label badge */}
        <div className="absolute bottom-6 right-6 z-20">
          <span className="bg-black/30 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
            {heroSlides[current].label}
          </span>
        </div>
      </section>

      {/* ── Feature cards ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 hover:border-green-400 border border-transparent transition-all duration-300 cursor-default">
              <div className="w-16 h-16 bg-green-100 group-hover:bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <BookOpen className="text-green-600 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-700 transition-colors duration-300">Quality Education</h3>
              <p className="text-gray-600">
                Competency Based Curriculum (CBC) designed to foster academic excellence
                and critical thinking skills.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 hover:border-green-400 border border-transparent transition-all duration-300 cursor-default">
              <div className="w-16 h-16 bg-green-100 group-hover:bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <Users className="text-green-600 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-700 transition-colors duration-300">Dedicated Staff</h3>
              <p className="text-gray-600">
                Experienced and passionate teachers committed to nurturing every child's
                potential.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 hover:border-green-400 border border-transparent transition-all duration-300 cursor-default">
              <div className="w-16 h-16 bg-green-100 group-hover:bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <Award className="text-green-600 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-700 transition-colors duration-300">Proven Excellence</h3>
              <p className="text-gray-600">
                Recognized for outstanding performance in academics, sports, and
                co-curricular activities.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 hover:border-green-400 border border-transparent transition-all duration-300 cursor-default">
              <div className="w-16 h-16 bg-green-100 group-hover:bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <GraduationCap className="text-green-600 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-700 transition-colors duration-300">Holistic Development</h3>
              <p className="text-gray-600">
                Building character, values, and life skills alongside academic knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CBC Curriculum Offerings ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Animated section heading */}
          <div
            ref={sectionTitle.ref}
            className="text-center mb-12 transition-all duration-700"
            style={{
              opacity: sectionTitle.inView ? 1 : 0,
              transform: sectionTitle.inView ? 'translateY(0)' : 'translateY(32px)',
            }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing quality education, strong discipline and a
              supportive learning environment for learners from Pre-Primary, Upper Primary
              and Junior School levels under Kenya's Competency Based Curriculum (CBC).
            </p>
          </div>

          {/* Pre-Primary */}
          <div className="mb-12" ref={prePrimaryRef.ref}>
            <div
              className="flex items-center mb-6 transition-all duration-500"
              style={{
                opacity: prePrimaryRef.inView ? 1 : 0,
                transform: prePrimaryRef.inView ? 'translateX(0)' : 'translateX(-40px)',
              }}
            >
              <div className="bg-green-400 text-white px-5 py-1.5 rounded-full font-semibold text-sm whitespace-nowrap">
                Pre-Primary — PP1 &amp; PP2
              </div>
              <div className="flex-1 h-0.5 bg-gray-200 ml-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {prePrimary.map(({ icon: Icon, label, desc }, i) => (
                <div
                  key={label}
                  className="group bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-green-300 transition-all duration-300 cursor-default"
                  style={{
                    opacity: prePrimaryRef.inView ? 1 : 0,
                    transform: prePrimaryRef.inView ? 'translateY(0)' : 'translateY(40px)',
                    transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms, box-shadow 0.3s, border-color 0.3s`,
                  }}
                >
                  <div className="w-10 h-10 bg-green-100 group-hover:bg-green-500 rounded-full flex items-center justify-center mb-3 transition-colors duration-300">
                    <Icon className="text-green-600 group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm group-hover:text-green-700 transition-colors">{label}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lower Primary */}
          <div className="mb-12" ref={lowerRef.ref}>
            <div
              className="flex items-center mb-6 transition-all duration-500"
              style={{
                opacity: lowerRef.inView ? 1 : 0,
                transform: lowerRef.inView ? 'translateX(0)' : 'translateX(-40px)',
              }}
            >
              <div className="bg-green-500 text-white px-5 py-1.5 rounded-full font-semibold text-sm whitespace-nowrap">
                Lower Primary — Grade 1 to 3
              </div>
              <div className="flex-1 h-0.5 bg-gray-200 ml-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lowerPrimary.map(({ icon: Icon, label, desc }, i) => (
                <div
                  key={label}
                  className="group bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-green-300 transition-all duration-300 cursor-default"
                  style={{
                    opacity: lowerRef.inView ? 1 : 0,
                    transform: lowerRef.inView ? 'translateY(0)' : 'translateY(40px)',
                    transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms, box-shadow 0.3s, border-color 0.3s`,
                  }}
                >
                  <div className="w-10 h-10 bg-green-100 group-hover:bg-green-500 rounded-full flex items-center justify-center mb-3 transition-colors duration-300">
                    <Icon className="text-green-600 group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm group-hover:text-green-700 transition-colors">{label}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upper Primary */}
          <div className="mb-12" ref={upperRef.ref}>
            <div
              className="flex items-center mb-6 transition-all duration-500"
              style={{
                opacity: upperRef.inView ? 1 : 0,
                transform: upperRef.inView ? 'translateX(0)' : 'translateX(-40px)',
              }}
            >
              <div className="bg-green-600 text-white px-5 py-1.5 rounded-full font-semibold text-sm whitespace-nowrap">
                Upper Primary — Grade 4 to 6
              </div>
              <div className="flex-1 h-0.5 bg-gray-200 ml-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upperPrimary.map(({ icon: Icon, label, desc }, i) => (
                <div
                  key={label}
                  className="group bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-green-300 transition-all duration-300 cursor-default"
                  style={{
                    opacity: upperRef.inView ? 1 : 0,
                    transform: upperRef.inView ? 'translateY(0)' : 'translateY(40px)',
                    transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms, box-shadow 0.3s, border-color 0.3s`,
                  }}
                >
                  <div className="w-10 h-10 bg-green-100 group-hover:bg-green-500 rounded-full flex items-center justify-center mb-3 transition-colors duration-300">
                    <Icon className="text-green-600 group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm group-hover:text-green-700 transition-colors">{label}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Junior School */}
          <div ref={juniorRef.ref}>
            <div
              className="flex items-center mb-6 transition-all duration-500"
              style={{
                opacity: juniorRef.inView ? 1 : 0,
                transform: juniorRef.inView ? 'translateX(0)' : 'translateX(-40px)',
              }}
            >
              <div className="bg-green-700 text-white px-5 py-1.5 rounded-full font-semibold text-sm whitespace-nowrap">
                Junior School — Grade 7 to 9
              </div>
              <div className="flex-1 h-0.5 bg-gray-200 ml-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {juniorSchool.map(({ icon: Icon, label, desc }, i) => (
                <div
                  key={label}
                  className="group bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-green-300 transition-all duration-300 cursor-default"
                  style={{
                    opacity: juniorRef.inView ? 1 : 0,
                    transform: juniorRef.inView ? 'translateY(0)' : 'translateY(40px)',
                    transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms, box-shadow 0.3s, border-color 0.3s`,
                  }}
                >
                  <div className="w-10 h-10 bg-green-100 group-hover:bg-green-500 rounded-full flex items-center justify-center mb-3 transition-colors duration-300">
                    <Icon className="text-green-600 group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm group-hover:text-green-700 transition-colors">{label}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Daycare & Boarding ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Beyond the Classroom</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We go beyond academics to ensure every child is safe, cared for and supported
              from the earliest years through to their senior school life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Daycare */}
            <div className="group relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden
              transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-green-300">
              {/* Top accent bar */}
              <div className="h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-green-100 group-hover:bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Baby className="text-green-600 group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                      Daycare
                    </h3>
                    <p className="text-sm text-green-600 font-medium">For our youngest learners</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Our daycare programme provides a warm, safe and nurturing environment
                  for young children before they join Pre-Primary. Under the care of
                  trained and compassionate staff, children are engaged through play,
                  storytelling and early learning activities that build a strong
                  foundation for formal schooling.
                </p>
                <ul className="space-y-2">
                  {[
                    'Supervised by trained, caring staff',
                    'Safe and stimulating environment',
                    'Play-based early learning activities',
                    'Smooth transition into PP1',
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Boarding */}
            <div className="group relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden
              transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-green-300">
              {/* Top accent bar */}
              <div className="h-2 bg-gradient-to-r from-green-600 to-green-800"></div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 bg-green-100 group-hover:bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <Moon className="text-green-600 group-hover:text-white transition-colors duration-300" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                      Boarding
                    </h3>
                    <p className="text-sm text-green-600 font-medium">Full residential accommodation</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Kabati Fly-over School offers full boarding facilities for learners
                  who require residential accommodation. Students live in a structured,
                  disciplined and supportive environment that promotes focus, routine
                  and peer camaraderie — ensuring they get the most out of their
                  education away from home.
                </p>
                <ul className="space-y-2">
                  {[
                    'Comfortable and secure residential facilities',
                    'Structured daily routine and supervision',
                    'Nutritious meals provided daily',
                    'Evening prep and study sessions',
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Transport callout */}
          <div className="mt-8 bg-green-600 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-white shadow-lg">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Bus size={24} className="text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-lg">Learner Transport Available</h4>
              <p className="text-green-100 text-sm">
                Our school bus service covers Kabati, Kimorori Wempa ward and neighbouring areas —
                making quality education accessible wherever you are.
              </p>
            </div>
            <a
              href="tel:+254708192030"
              className="ml-auto flex-shrink-0 bg-white text-green-700 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-green-50 transition-colors shadow"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Join Our Community CTA ── */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Join Our Community</h2>
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
