import { BookOpen, Users, Award, GraduationCap, FlaskConical, Globe, Palette, Sprout, Calculator, Languages, Baby, Microscope, Briefcase, Heart, Moon, Bus, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useInViewRepeat } from '../hooks/useInViewRepeat';
import { useState, useEffect } from 'react';

const heroSlides = [
  { image: '/hero-classroom.jpg',  label: 'Active Learning'       },
  { image: '/hero-computers.jpg',  label: 'Computer Studies'      },
  { image: '/hero-assembly.jpg',   label: 'Our Campus'            },
  { image: '/hero-science.jpg',    label: 'Science & Discovery'   },
];

export function Home() {
  useSEO({
    title: 'Kabati Fly-over School | Shining to the Top — Kenol, Kenya',
    description: "Welcome to Kabati Fly-over School in Kenol, Murang'a County, Kenya. Quality CBC education from Pre-Primary to Junior School. Unlocking your child's potential to the fullest. Call +254 708 192 030.",
    canonical: 'https://kabatiflyoverschool.com/',
  });

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setCurrent((c) => (c + 1) % heroSlides.length);

  // Boarding card mini-slideshow — cycles every 3.5 s
  const boardingImages = [
    { src: '/boarding-dorm.jpg',      alt: 'Boarding dormitory at Kabati Fly-over School' },
    { src: '/boarding-transport.jpg', alt: 'School buses at Kabati Fly-over School'        },
  ];
  const [boardingSlide, setBoardingSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setBoardingSlide((p) => (p + 1) % boardingImages.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  // Junior School photo slideshow — 6 images
  const juniorImages = [
    { src: '/junior-school-1.jpg', alt: 'Junior School learner attentively listening in class' },
    { src: '/junior-school-2.jpg', alt: 'Junior School class in session at Kabati Fly-over School' },
    { src: '/junior-school-3.jpg', alt: 'Junior School learners in the science lab' },
    { src: '/junior-school-4.jpg', alt: 'Junior School science practical experiment' },
    { src: '/junior-school-5.jpg', alt: 'Junior School learner focused in class' },
    { src: '/junior-school-6.jpg', alt: 'Junior School learner smiling in class' },
  ];
  const [juniorSlide, setJuniorSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setJuniorSlide((p) => (p + 1) % juniorImages.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  // Upper Primary photo slideshow
  const upperPrimaryImages = [
    { src: '/upper-primary-classroom-1.jpg', alt: 'Teacher guiding Upper Primary learners at Kabati Fly-over School' },
    { src: '/upper-primary-classroom-2.jpg', alt: 'Upper Primary learner using a computer at Kabati Fly-over School' },
  ];
  const [upperSlide, setUpperSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setUpperSlide((p) => (p + 1) % upperPrimaryImages.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  // Lower Primary photo slideshow
  const lowerPrimaryImages = [
    { src: '/lower-primary-classroom.jpg',   alt: 'Grade 1–3 learners attentively engaged in class at Kabati Fly-over School' },
    { src: '/lower-primary-classroom-2.jpg', alt: 'Lower Primary learner writing in class at Kabati Fly-over School' },
  ];
  const [lowerSlide, setLowerSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setLowerSlide((p) => (p + 1) % lowerPrimaryImages.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  // Repeating scroll-triggered animation refs
  const sectionTitle  = useInViewRepeat(0.2);
  const prePrimaryRef = useInViewRepeat(0.1);
  const lowerRef      = useInViewRepeat(0.1);
  const upperRef      = useInViewRepeat(0.1);
  const juniorRef     = useInViewRepeat(0.1);
  const beyondRef     = useInViewRepeat(0.1);
  const ctaRef        = useInViewRepeat(0.2);

  const prePrimary = [
    { icon: Languages,    label: 'Language Activities',       desc: 'Early communication, listening and speaking skills in English and Kiswahili.' },
    { icon: Calculator,   label: 'Mathematical Activities',   desc: 'Play-based number sense, shapes, patterns and basic counting.' },
    { icon: Globe,        label: 'Environmental Activities',  desc: 'Exploring the immediate natural and social environment through play.' },
    { icon: Palette,      label: 'Creative Activities',       desc: 'Art, music, movement and drama to spark imagination and expression.' },
    { icon: Heart,        label: 'Religious Education',       desc: 'Values, character and spiritual foundation from an early age.' },
  ];

  const lowerPrimary = [
    { icon: BookOpen,     label: 'English Language Activities',      desc: 'Reading, writing and communication skills in English.' },
    { icon: Languages,    label: 'Kiswahili Language Activities',    desc: 'Kiswahili literacy and oral communication skills.' },
    { icon: Calculator,   label: 'Mathematical Activities',          desc: 'Foundational number work, measurement and basic operations.' },
    { icon: Globe,        label: 'Environmental Activities',         desc: 'Understanding the natural and social world around the learner.' },
    { icon: Palette,      label: 'Creative Activities',              desc: 'Art, craft, music and movement that nurture imagination.' },
    { icon: Heart,        label: 'Religious Education Activities',   desc: 'Values, ethics and character development.' },
    { icon: Baby,         label: 'Indigenous Language Activities',   desc: 'Mother tongue literacy to strengthen cultural identity and early learning.' },
  ];

  const upperPrimary = [
    { icon: Languages,    label: 'English & Kiswahili',        desc: 'Advanced language competencies — listening, speaking, reading and writing.' },
    { icon: Calculator,   label: 'Mathematics',                desc: 'Problem-solving, reasoning, financial literacy and mathematical concepts.' },
    { icon: FlaskConical, label: 'Science & Technology',       desc: 'Inquiry-based learning covering life, physical and earth sciences with integrated ICT.' },
    { icon: Globe,        label: 'Social Studies',             desc: 'Kenya, Africa and the world — history, geography and civic responsibility.' },
    { icon: Sprout,       label: 'Agriculture & Nutrition',    desc: 'Practical farming skills, food production and healthy living education.' },
    { icon: Palette,      label: 'Creative Arts & Sports',     desc: 'Visual art, music, drama and physical health education.' },
    { icon: Heart,        label: 'Religious Education',        desc: 'CRE/IRE — moral development, values and ethical reasoning.' },
    { icon: BookOpen,     label: 'Home Science',               desc: 'Practical life skills covering home management and family living.' },
  ];

  const juniorSchool = [
    { icon: Languages,    label: 'English & Kiswahili',                    desc: 'Communication and literacy skills for a globalised world.' },
    { icon: Calculator,   label: 'Mathematics',                            desc: 'Advanced problem-solving, algebra, geometry and financial mathematics.' },
    { icon: Microscope,   label: 'Integrated Science',                     desc: 'Biology, chemistry, physics and environmental science as one integrated subject.' },
    { icon: Globe,        label: 'Social Studies',                         desc: 'Global governance, civic education, geography and history.' },
    { icon: Briefcase,    label: 'Pre-Technical & Pre-Career Education',   desc: 'Practical technical skills and introduction to career pathways.' },
    { icon: Palette,      label: 'Creative Arts & Sports',                 desc: 'Music, art, drama, physical education and sports science.' },
    { icon: Heart,        label: 'Religious Education',                    desc: 'Ethical debates, community values and character development.' },
    { icon: Sprout,       label: 'Agriculture',                            desc: 'Practical farming skills, agribusiness basics and environmental stewardship.' },
  ];

  // Shared card animation style helper
  const cardStyle = (inView: boolean, i: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.96)',
    transition: `opacity 0.5s ease ${i * 70}ms, transform 0.5s ease ${i * 70}ms, box-shadow 0.3s, border-color 0.3s`,
  });

  // Shared heading slide-in style
  const slideIn = (inView: boolean) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-40px)',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
  });

  return (
    <div>
      {/* ── Hero Slideshow ── */}
      <section className="relative text-white overflow-hidden" style={{ minHeight: '85vh' }}>
        {heroSlides.map((slide, index) => (
          <div
            key={slide.image}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: index === current ? 1 : 0 }}
          >
            <img src={slide.image} alt={slide.label} className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/40 to-green-700/20"></div>
          </div>
        ))}

        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6 lg:px-8" style={{ minHeight: '85vh' }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg max-w-4xl leading-tight">
            Welcome to Kabati Fly-over School
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow text-green-50 mb-8">
            Unlocking your child's potential to the fullest through quality education,
            strong discipline and a supportive learning environment.
          </p>
          <a href="tel:+254708192030" className="bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-colors text-lg">
            Enrol Today
          </a>
        </div>

        <button onClick={prev} aria-label="Previous slide" className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-colors">
          <ChevronLeft size={24} className="text-white" />
        </button>
        <button onClick={next} aria-label="Next slide" className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-colors">
          <ChevronRight size={24} className="text-white" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button key={index} onClick={() => setCurrent(index)} aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all duration-300 ${index === current ? 'w-8 h-3 bg-white' : 'w-3 h-3 bg-white/50 hover:bg-white/80'}`}
            />
          ))}
        </div>
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
            {[
              { Icon: BookOpen,      title: 'Quality Education',     body: 'Competency Based Curriculum (CBC) designed to foster academic excellence and critical thinking skills.' },
              { Icon: Users,         title: 'Dedicated Staff',       body: 'Experienced and passionate teachers committed to nurturing every child\'s potential.' },
              { Icon: Award,         title: 'Proven Excellence',     body: 'Recognized for outstanding performance in academics, sports, and co-curricular activities.' },
              { Icon: GraduationCap, title: 'Holistic Development',  body: 'Building character, values, and life skills alongside academic knowledge.' },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="group bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 hover:border-green-400 border border-transparent transition-all duration-300 cursor-default">
                <div className="w-16 h-16 bg-green-100 group-hover:bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <Icon className="text-green-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-700 transition-colors duration-300">{title}</h3>
                <p className="text-gray-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CBC Curriculum Offerings ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Animated section heading */}
          <div
            ref={sectionTitle.ref}
            className="text-center mb-12"
            style={{
              opacity: sectionTitle.inView ? 1 : 0,
              transform: sectionTitle.inView ? 'translateY(0)' : 'translateY(32px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing quality education, strong discipline and a
              supportive learning environment for learners from Pre-Primary, Upper Primary
              and Junior School levels under Kenya's Competency Based Curriculum (CBC).
            </p>
          </div>

          {/* ── Pre-Primary ── */}
          <div className="mb-12" ref={prePrimaryRef.ref}>
            <div className="flex items-center mb-6" style={slideIn(prePrimaryRef.inView)}>
              <div className="bg-green-400 text-white px-5 py-1.5 rounded-full font-semibold text-sm whitespace-nowrap">
                Pre-Primary — PP1 &amp; PP2
              </div>
              <div className="flex-1 h-0.5 bg-gray-200 ml-4"></div>
            </div>

            {/* ── Photo introduction ── */}
            <div
              className="mb-8"
              style={{
                opacity: prePrimaryRef.inView ? 1 : 0,
                transform: prePrimaryRef.inView ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4" style={{ minHeight: '320px' }}>

                {/* ── Large photo — PP1 (spans 3 cols) ── */}
                <div className="md:col-span-3 relative group overflow-hidden rounded-2xl shadow-md" style={{ minHeight: '320px' }}>
                  <img
                    src="/pp-classroom-1.jpg"
                    alt="PP1 learners engaged in early learning activities at Kabati Fly-over School"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    style={{ minHeight: '320px' }}
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {/* Badge + caption */}
                  <div className="absolute bottom-0 left-0 p-5">
                    <span className="inline-block bg-green-400 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wider">
                      Pre-Primary 1
                    </span>
                    <p className="text-white text-sm font-medium leading-snug drop-shadow max-w-xs">
                      Curious minds at work — early learning comes alive through play and discovery.
                    </p>
                  </div>
                  {/* Subtle shine on hover */}
                  <div className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/10 transition-colors duration-500 pointer-events-none" />
                </div>

                {/* ── Right column — photo + callout ── */}
                <div className="md:col-span-2 flex flex-col gap-4">

                  {/* PP2 photo */}
                  <div className="relative group overflow-hidden rounded-2xl shadow-md flex-1" style={{ minHeight: '160px' }}>
                    <img
                      src="/pp-classroom-2.jpg"
                      alt="PP2 learners in a vibrant, learning-rich classroom at Kabati Fly-over School"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      style={{ minHeight: '160px' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-1.5 uppercase tracking-wider">
                        Pre-Primary 2
                      </span>
                      <p className="text-white text-xs font-medium leading-snug drop-shadow">
                        A vibrant, print-rich environment built for growing learners.
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/10 transition-colors duration-500 pointer-events-none" />
                  </div>

                  {/* Callout card */}
                  <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-5 flex flex-col justify-center shadow-md flex-1">
                    <p className="text-green-100 text-xs font-bold uppercase tracking-widest mb-2">
                      Our Pre-Primary Promise
                    </p>
                    <p className="text-white text-sm leading-relaxed">
                      Trained caregivers and a language-rich environment —
                      giving every child the very best start before Grade&nbsp;1.
                    </p>
                    <div className="mt-4 flex gap-2 flex-wrap">
                      {['Trained Caregivers', 'Play-Based Learning'].map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/25"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subject cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {prePrimary.map(({ icon: Icon, label, desc }, i) => (
                <div key={label} className="group bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-green-300 cursor-default"
                  style={cardStyle(prePrimaryRef.inView, i)}>
                  <div className="w-10 h-10 bg-green-100 group-hover:bg-green-500 rounded-full flex items-center justify-center mb-3 transition-colors duration-300">
                    <Icon className="text-green-600 group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-sm group-hover:text-green-700 transition-colors">{label}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Lower Primary ── */}
          <div className="mb-12" ref={lowerRef.ref}>
            <div className="flex items-center mb-6" style={slideIn(lowerRef.inView)}>
              <div className="bg-green-500 text-white px-5 py-1.5 rounded-full font-semibold text-sm whitespace-nowrap">
                Lower Primary — Grade 1 to 3
              </div>
              <div className="flex-1 h-0.5 bg-gray-200 ml-4"></div>
            </div>

            {/* ── Photo introduction ── */}
            <div
              className="mb-8"
              style={{
                opacity: lowerRef.inView ? 1 : 0,
                transform: lowerRef.inView ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4" style={{ minHeight: '300px' }}>

                {/* ── Large photo slideshow (spans 3 cols) ── */}
                <div className="md:col-span-3 relative group overflow-hidden rounded-2xl shadow-md bg-green-900" style={{ minHeight: '300px' }}>
                  {lowerPrimaryImages.map((img, idx) => (
                    <img
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
                      style={{
                        opacity: idx === lowerSlide ? 1 : 0,
                        minHeight: '300px',
                      }}
                    />
                  ))}
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                  {/* Dot indicators */}
                  <div className="absolute top-3 right-3 flex gap-1.5 z-10">
                    {lowerPrimaryImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setLowerSlide(idx)}
                        aria-label={`Show lower primary image ${idx + 1}`}
                        className={`rounded-full transition-all duration-300 ${
                          idx === lowerSlide ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                  {/* Badge + caption */}
                  <div className="absolute bottom-0 left-0 p-5 z-10">
                    <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wider">
                      Grade 1 – 3
                    </span>
                    <p className="text-white text-sm font-medium leading-snug drop-shadow max-w-xs">
                      Focused, curious and eager — our Lower Primary learners building
                      a strong foundation one lesson at a time.
                    </p>
                  </div>
                  {/* Subtle shine on hover */}
                  <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 transition-colors duration-500 pointer-events-none" />
                </div>

                {/* ── Right column — callout cards ── */}
                <div className="md:col-span-2 flex flex-col gap-4">

                  {/* Stat card */}
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 flex-1 flex flex-col justify-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-3">
                      What Makes It Special
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Hands-on, play-based approach',
                        'Strong reading & numeracy foundations',
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-1.5"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Callout card */}
                  <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-5 flex flex-col justify-center shadow-md flex-1">
                    <p className="text-green-100 text-xs font-bold uppercase tracking-widest mb-2">
                      Our Lower Primary Promise
                    </p>
                    <p className="text-white text-sm leading-relaxed">
                      Every child in Grades 1–3 receives the individual attention and
                      structured support they need to read, write and think with confidence.
                    </p>
                    <div className="mt-4 flex gap-2 flex-wrap">
                      {['Literacy First', 'Numeracy Strong'].map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/25"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subject cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lowerPrimary.map(({ icon: Icon, label, desc }, i) => (
                <div key={label} className="group bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-green-300 cursor-default"
                  style={cardStyle(lowerRef.inView, i)}>
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
            <div className="flex items-center mb-6" style={slideIn(upperRef.inView)}>
              <div className="bg-green-600 text-white px-5 py-1.5 rounded-full font-semibold text-sm whitespace-nowrap">
                Upper Primary — Grade 4 to 6
              </div>
              <div className="flex-1 h-0.5 bg-gray-200 ml-4"></div>
            </div>

            {/* ── Photo introduction ── */}
            <div
              className="mb-8"
              style={{
                opacity: upperRef.inView ? 1 : 0,
                transform: upperRef.inView ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4" style={{ minHeight: '300px' }}>

                {/* ── Large photo slideshow (spans 3 cols) ── */}
                <div className="md:col-span-3 relative group overflow-hidden rounded-2xl shadow-md bg-green-900" style={{ minHeight: '300px' }}>
                  {upperPrimaryImages.map((img, idx) => (
                    <img
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
                      style={{ opacity: idx === upperSlide ? 1 : 0, minHeight: '300px' }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                  {/* Dot indicators */}
                  <div className="absolute top-3 right-3 flex gap-1.5 z-10">
                    {upperPrimaryImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setUpperSlide(idx)}
                        aria-label={`Show upper primary image ${idx + 1}`}
                        className={`rounded-full transition-all duration-300 ${
                          idx === upperSlide ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-0 p-5 z-10">
                    <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wider">
                      Grade 4 – 6
                    </span>
                    <p className="text-white text-sm font-medium leading-snug drop-shadow max-w-xs">
                      Dedicated teachers and hands-on learning — shaping confident,
                      critical thinkers ready for the next stage.
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-green-600/0 group-hover:bg-green-600/10 transition-colors duration-500 pointer-events-none" />
                </div>

                {/* ── Right column — callout cards ── */}
                <div className="md:col-span-2 flex flex-col gap-4">

                  {/* Feature list card */}
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 flex-1 flex flex-col justify-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-3">
                      What Makes It Special
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Science lab & computer studies integrated',
                        'Agriculture & practical life skills',
                        'Strong CBC subject coverage',
                        'Preparation for Junior School transition',
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-1.5"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Callout card */}
                  <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-5 flex flex-col justify-center shadow-md flex-1">
                    <p className="text-green-100 text-xs font-bold uppercase tracking-widest mb-2">
                      Our Upper Primary Promise
                    </p>
                    <p className="text-white text-sm leading-relaxed">
                      Every Grade 4–6 learner is equipped with the knowledge,
                      skills and confidence to excel — in class and beyond.
                    </p>
                    <div className="mt-4 flex gap-2 flex-wrap">
                      {['CBC Aligned', 'Tech Ready'].map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/25"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Subject cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upperPrimary.map(({ icon: Icon, label, desc }, i) => (
                <div key={label} className="group bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-green-300 cursor-default"
                  style={cardStyle(upperRef.inView, i)}>
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
            <div className="flex items-center mb-6" style={slideIn(juniorRef.inView)}>
              <div className="bg-green-700 text-white px-5 py-1.5 rounded-full font-semibold text-sm whitespace-nowrap">
                Junior School — Grade 7 to 9
              </div>
              <div className="flex-1 h-0.5 bg-gray-200 ml-4"></div>
            </div>

            {/* ── Photo introduction ── */}
            <div
              className="mb-8"
              style={{
                opacity: juniorRef.inView ? 1 : 0,
                transform: juniorRef.inView ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4" style={{ minHeight: '340px' }}>

                {/* ── Large crossfading slideshow (spans 3 cols) ── */}
                <div className="md:col-span-3 relative group overflow-hidden rounded-2xl shadow-md bg-gray-900" style={{ minHeight: '340px' }}>
                  {juniorImages.map((img, idx) => (
                    <img
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
                      style={{ opacity: idx === juniorSlide ? 1 : 0, minHeight: '340px' }}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                  {/* Dot indicators */}
                  <div className="absolute top-3 right-3 flex gap-1.5 z-10 flex-wrap justify-end max-w-[100px]">
                    {juniorImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setJuniorSlide(idx)}
                        aria-label={`Show junior school image ${idx + 1}`}
                        className={`rounded-full transition-all duration-300 ${
                          idx === juniorSlide ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Image counter */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {juniorSlide + 1} / {juniorImages.length}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 p-5 z-10">
                    <span className="inline-block bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wider">
                      Grade 7 – 9
                    </span>
                    <p className="text-white text-sm font-medium leading-snug drop-shadow max-w-xs">
                      Ambitious, driven and full of potential — our Junior School
                      learners are the future in the making.
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-green-700/0 group-hover:bg-green-700/10 transition-colors duration-500 pointer-events-none" />
                </div>

                {/* ── Right column — callout cards ── */}
                <div className="md:col-span-2 flex flex-col gap-4">

                  {/* Feature list card */}
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 flex-1 flex flex-col justify-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-green-700 mb-3">
                      What Makes It Special
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Dedicated science lab for practicals',
                        'Full CBC Junior School curriculum',
                        'Transition support to Senior School',
                      ].map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0 mt-1.5"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Callout card */}
                  <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-5 flex flex-col justify-center shadow-md flex-1">
                    <p className="text-green-100 text-xs font-bold uppercase tracking-widest mb-2">
                      Our Junior School Promise
                    </p>
                    <p className="text-white text-sm leading-relaxed">
                      Every Grade 7–9 learner grows into a confident, disciplined
                      and well-rounded individual — ready to shine at Senior School
                      and beyond.
                    </p>
                    <div className="mt-4 flex gap-2 flex-wrap">
                      {['Science Lab', 'Future Ready'].map((tag) => (
                        <span
                          key={tag}
                          className="bg-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/25"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Subject cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {juniorSchool.map(({ icon: Icon, label, desc }, i) => (
                <div key={label} className="group bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-green-300 cursor-default"
                  style={cardStyle(juniorRef.inView, i)}>
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
      <section className="py-16 bg-gray-50" ref={beyondRef.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12"
            style={{
              opacity: beyondRef.inView ? 1 : 0,
              transform: beyondRef.inView ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Beyond the Classroom</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We go beyond academics to ensure every child is safe, cared for and supported
              from the earliest years through to their senior school life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* ── Daycare ── */}
            <div
              className="group relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-green-300"
              style={{
                opacity: beyondRef.inView ? 1 : 0,
                transform: beyondRef.inView ? 'translateX(0)' : 'translateX(-40px)',
                transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s, box-shadow 0.3s, border-color 0.3s',
              }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src="/daycare.jpg"
                  alt="Children playing at Kabati Fly-over School Daycare"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-green-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 flex items-end gap-3">
                  <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 border border-white/30">
                    <Baby className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight drop-shadow">Daycare</h3>
                    <p className="text-green-200 text-xs font-medium">For our youngest learners</p>
                  </div>
                </div>
              </div>
              <div className="p-7">
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                  Our daycare programme provides a warm, safe and nurturing environment
                  for young children before they join Pre-Primary. Under the care of
                  trained and compassionate staff, children are engaged through play,
                  storytelling and early learning activities that build a strong
                  foundation for formal schooling.
                </p>
                <ul className="space-y-2">
                  {['Supervised by trained, caring staff','Safe and stimulating environment','Play-based early learning activities','Smooth transition into PP1'].map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── Boarding ── */}
            <div
              className="group relative bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-green-300"
              style={{
                opacity: beyondRef.inView ? 1 : 0,
                transform: beyondRef.inView ? 'translateX(0)' : 'translateX(40px)',
                transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s, box-shadow 0.3s, border-color 0.3s',
              }}
            >
              <div className="relative h-52 overflow-hidden bg-green-900">
                {boardingImages.map((img, idx) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 group-hover:scale-105"
                    style={{
                      opacity: idx === boardingSlide ? 1 : 0,
                      transform: 'scale(1)',
                      transition: 'opacity 1s ease, transform 0.5s ease',
                    }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/75 via-green-900/20 to-transparent" />
                <div className="absolute top-3 right-3 flex gap-1.5 z-10">
                  {boardingImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setBoardingSlide(idx)}
                      aria-label={`Show boarding image ${idx + 1}`}
                      className={`rounded-full transition-all duration-300 ${
                        idx === boardingSlide ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 p-5 flex items-end gap-3">
                  <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 border border-white/30">
                    <Moon className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight drop-shadow">Boarding</h3>
                    <p className="text-green-200 text-xs font-medium">Full residential accommodation</p>
                  </div>
                </div>
              </div>
              <div className="p-7">
                <p className="text-gray-600 leading-relaxed mb-5 text-sm">
                  Kabati Fly-over School offers full boarding facilities for learners
                  who require residential accommodation. Students live in a structured,
                  disciplined and supportive environment that promotes focus, routine
                  and peer camaraderie — ensuring they get the most out of their
                  education away from home.
                </p>
                <ul className="space-y-2">
                  {['Comfortable and secure residential facilities','Structured daily routine and supervision','Nutritious meals provided daily','Evening prep and study sessions'].map((point) => (
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
          <div
            className="mt-8 bg-green-600 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-white shadow-lg"
            style={{
              opacity: beyondRef.inView ? 1 : 0,
              transform: beyondRef.inView ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s',
            }}
          >
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
            <a href="tel:+254708192030" className="ml-auto flex-shrink-0 bg-white text-green-700 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-green-50 transition-colors shadow">
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Join Our Community CTA ── */}
      <section className="py-16 bg-green-50" ref={ctaRef.ref}>
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          style={{
            opacity: ctaRef.inView ? 1 : 0,
            transform: ctaRef.inView ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.98)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Join Our Community</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover how Kabati Fly-over School can help your child reach their full
            potential. Contact us today to learn more about admissions and our programmes.
          </p>
          <a href="tel:+254708192030" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md hover:shadow-lg">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
