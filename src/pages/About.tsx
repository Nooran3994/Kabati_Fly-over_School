import { useState } from 'react';
import { Target, Eye, Heart, Users, BookOpen, Award, ChevronDown, ChevronUp, Sprout, Lightbulb, DoorOpen, Trophy, TrendingUp, Star } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export function About() {
  useSEO({
    title: "About Us | Kabati Fly-over School — Kenol, Kenya",
    description: "Learn about Kabati Fly-over School's history, mission and vision. Founded in 2007, we now serve 975 learners in Kenol, Murang'a County with 55 dedicated staff members.",
    canonical: 'https://kabatiflyoverschool.com/#about',
  });

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const timeline = [
    {
      year: '2004',
      Icon: Sprout,
      title: 'The Seed is Planted',
      short: 'A welfare group of parents unite around a shared dream — a quality school for their children.',
      desc: 'A dedicated welfare group of parents and community members in Kabati come together, united by one dream — a safe, accessible school that offers quality education for their children.',
    },
    {
      year: '2006',
      Icon: Lightbulb,
      title: 'A Vision Takes Shape',
      short: 'Mr. Moses Njoroge moots the idea of a formal school. The founding directors immediately rally behind him.',
      desc: 'Mr. Moses Njoroge moots the idea of establishing a formal school. The founding directors, young parents themselves, immediately embrace the vision and begin laying the groundwork.',
    },
    {
      year: '2007',
      Icon: DoorOpen,
      title: 'Opening Day',
      short: '64 learners walk through the doors on day one. A historic beginning near the Kabati Flyover.',
      desc: "Kabati Fly-over School opens its doors — operating from rented premises near the Kabati Flyover, next to St. Paul ACK Church. Sixty-four learners from Standard One to Six walk in on the first day. With skeleton staff led by Administrator Madam Carolyn Wanjiru, the journey begins.",
    },
    {
      year: '2009',
      Icon: Trophy,
      title: 'First KCPE — A Statement of Intent',
      short: 'Mean Score of 349.33. Best candidate scores 395/500 and earns a place at Maseno National School.',
      desc: 'The school presents its first KCPE candidature and achieves a Mean Standard Score of 349.33. The best candidate scores 395 out of 500 and earns admission to Maseno National School — one of the finest results in the entire locality.',
    },
    {
      year: '2010s',
      Icon: TrendingUp,
      title: 'Growth & Expansion',
      short: 'Parents flock to enrol. New classrooms, more staff, better facilities — year after year.',
      desc: "Word spreads fast. Parents are drawn by the school's strong discipline, consistent performance, co-curricular activities, lunch programme and learner transport. New classrooms are added, the teaching staff grows, and facilities improve year after year.",
    },
    {
      year: 'Today',
      Icon: Star,
      title: 'A Thriving Institution',
      short: '975+ learners. 55 staff. Pre-Primary to Junior School. One unwavering commitment to excellence.',
      desc: "Kabati Flyover School Limited now serves 975+ learners from Pre-Primary to Junior School, supported by 55 dedicated staff members — 32 teaching and 23 non-teaching. The school operates under Kenya's Competency Based Curriculum with modern facilities and an unwavering commitment to excellence.",
    },
  ];

  const stats = [
    { icon: Users,    value: '975+', label: 'Learners Enrolled' },
    { icon: BookOpen, value: '55',   label: 'Staff Members' },
    { icon: Award,    value: '32',   label: 'Teaching Staff' },
    { icon: Heart,    value: '18+',  label: 'Years of Excellence' },
  ];

  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative text-white"
        style={{
          backgroundImage: 'url(/about-students.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          minHeight: '520px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">About Us</h1>
          <p className="text-xl text-green-100 drop-shadow">Building the future, one child at a time</p>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-white border-b border-gray-100 py-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <Icon className="text-green-600" size={22} />
                </div>
                <span className="text-3xl font-bold text-gray-800">{value}</span>
                <span className="text-sm text-gray-500 mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story — blurred aerial campus background ── */}
      <section className="py-16 relative overflow-hidden">
        {/* Blurred background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/about-story-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(6px)',
            transform: 'scale(1.08)',
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 z-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Our Story</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From a small welfare group to one of the most respected institutions in
              Murang'a county — click on any milestone to read the full story.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-green-500 to-green-600 opacity-80" />

            <div className="space-y-4">
              {timeline.map((item, index) => {
                const isOpen = expandedIndex === index;
                const isLast = index === timeline.length - 1;
                const ItemIcon = item.Icon;

                return (
                  <div key={item.year} className="relative pl-20">
                    {/* Dot */}
                    <div
                      className={`absolute left-5 top-5 w-6 h-6 rounded-full border-4 border-white shadow-md z-10 transition-all duration-300
                        ${isOpen ? 'bg-green-500 scale-125' : 'bg-green-400 hover:scale-110'}`}
                    />

                    {/* Year badge */}
                    <div
                      className={`absolute top-3 text-xs font-bold px-2 py-0.5 rounded-full transition-all duration-300 whitespace-nowrap
                        ${isOpen ? 'bg-green-500 text-white' : 'bg-white/90 text-green-700'}`}
                      style={{ left: '-8px', fontSize: '10px' }}
                    >
                      {item.year}
                    </div>

                    {/* Card */}
                    <button
                      onClick={() => toggleItem(index)}
                      className={`w-full text-left rounded-xl border transition-all duration-300 overflow-hidden focus:outline-none
                        ${isOpen
                          ? 'bg-white border-green-400 shadow-lg'
                          : 'bg-white/92 border-white/50 hover:bg-white hover:border-green-200 hover:shadow-md'
                        }`}
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300
                            ${isOpen ? 'bg-green-500' : 'bg-green-100'}`}>
                            <ItemIcon
                              size={18}
                              className={`transition-colors duration-300 ${isOpen ? 'text-white' : 'text-green-600'}`}
                            />
                          </div>
                          <div>
                            <h3 className={`font-bold text-base transition-colors duration-200
                              ${isOpen ? 'text-green-700' : 'text-gray-800'}`}>
                              {item.title}
                            </h3>
                            {!isOpen && (
                              <p className="text-gray-500 text-xs mt-0.5 leading-snug max-w-sm">
                                {item.short}
                              </p>
                            )}
                          </div>
                        </div>
                        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300
                          ${isOpen ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-400 hover:bg-green-100 hover:text-green-600'}`}>
                          {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                        </span>
                      </div>

                      {/* Expanded body */}
                      <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden
                          ${isOpen ? 'max-h-52 opacity-100' : 'max-h-0 opacity-0'}`}
                      >
                        <div className="px-5 pb-5">
                          <div className="h-px bg-green-100 mb-4" />
                          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                          {isLast && (
                            <div className="mt-3 inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200">
                              <Star size={12} />
                              Where we are today
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* End cap */}
            <div className="relative pl-20 pt-4">
              <div className="absolute left-5 top-4 w-6 h-6 rounded-full bg-green-600 border-4 border-white shadow-md z-10 flex items-center justify-center">
                <Award size={11} className="text-white" />
              </div>
              <p className="text-xs text-gray-400 italic pt-1.5">And the story continues…</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Values ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Who We Are</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                Icon: Target,
                title: 'Our Mission',
                body: "Unlocking your child's potential to the fullest through quality education, strong discipline and a supportive learning environment.",
              },
              {
                Icon: Eye,
                title: 'Our Vision',
                body: 'To be a centre of academic excellence that produces holistic, disciplined and well-rounded individuals ready to thrive in a rapidly changing world.',
              },
              {
                Icon: Heart,
                title: 'Core Values',
                list: ['Teamwork & Commitment', 'Discipline & Integrity', 'Respect & Responsibility', 'Excellence in all we do'],
              },
            ].map(({ Icon, title, body, list }) => (
              <div key={title} className="group relative bg-white rounded-2xl shadow-md border border-gray-100 p-8 overflow-hidden
                transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-green-400 cursor-default">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-100 group-hover:bg-green-500 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                    <Icon className="text-green-600 group-hover:text-white transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-green-700 transition-colors duration-300">{title}</h3>
                  {body && <p className="text-gray-600 leading-relaxed">{body}</p>}
                  {list && (
                    <ul className="text-gray-600 leading-relaxed space-y-1">
                      {list.map((v) => (
                        <li key={v} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full inline-block flex-shrink-0" />
                          {v}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Leadership</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Kabati Flyover School Limited is a co-operative institution registered as a
            company under the Companies Act, governed by a Board of 12 Directors. An
            Executive Committee of five members is elected every three years to provide
            strategic direction.
          </p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Chairmen Through the Years</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Mr. Wambugu',  role: 'Founder Chairman' },
                { name: 'Mr. Njoroge',  role: 'Former Chairman'  },
                { name: 'Mr. Kamau',    role: 'Former Chairman'  },
                { name: 'Mr. Muraguri', role: 'Former Chairman'  },
                { name: 'Mr. Mburu',    role: 'Current Chairman' },
              ].map((person) => (
                <div key={person.name} className="bg-green-50 border border-green-200 rounded-lg px-4 py-3 flex flex-col hover:bg-green-100 transition-colors">
                  <span className="font-semibold text-gray-800 text-sm">{person.name}</span>
                  <span className="text-xs text-green-600">{person.role}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2">School Administration</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The day-to-day running of the school is managed by our School Administrator,
                <strong> Madam Carolyn Wanjiru</strong> — the only Administrative Officer the
                school has had since inception, a testament to the stability and continuity
                that has defined Kabati Fly-over School from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Sets Us Apart ── */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Experienced Teachers',    desc: "Qualified, passionate staff trained in CBC delivery who genuinely invest in every learner's success." },
              { title: 'Strong Discipline',        desc: 'A structured environment that shapes responsible, focused and respectful learners.' },
              { title: 'Full CBC Coverage',        desc: 'Complete delivery from Pre-Primary (PP1–PP2) through Upper Primary (Grade 6) and Junior School (Grade 9).' },
              { title: 'Community Roots',          desc: 'Founded by parents, for parents — our strong community bond continues to drive everything we do.' },
              { title: 'Co-Curricular Activities', desc: 'Sports, arts, clubs and learner transport — a complete school experience beyond the classroom.' },
              { title: 'Proven Track Record',      desc: 'Since our first KCPE class in 2009, we have consistently produced top performers who join national schools.' },
            ].map(({ title, desc }) => (
              <div key={title} className="border-l-4 border-green-500 pl-6 py-3 hover:bg-green-50 rounded-r-lg transition-colors duration-200 cursor-default">
                <h3 className="text-lg font-semibold mb-1 text-gray-800">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
