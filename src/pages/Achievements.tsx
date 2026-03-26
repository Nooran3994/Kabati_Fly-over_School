import { useState } from 'react';
import { Trophy, Building, Bus, Monitor, Music, MapPin, GraduationCap, TrendingUp, Star, Award } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

type Category = 'All' | 'Academic' | 'Infrastructure' | 'Co-Curricular' | 'Growth';

const milestones = [
  {
    year: '2009',
    icon: Trophy,
    category: 'Academic' as Category,
    title: 'First KCPE — Top Results in the Locality',
    desc: 'Kabati Fly-over School presented its first KCPE candidature and achieved a Mean Standard Score of 349.33. Our best candidate scored 395 out of 500 and was admitted to Maseno National School — one of the finest results in the entire locality and a statement of intent for the years ahead.',
    highlight: 'Best candidate: 395/500 → Maseno National School',
    color: 'green',
    image: '/achievement-1.jpg',
    imageAlt: 'Trophies won by Kabati Fly-over School',
  },
  {
    year: '2009–2015',
    icon: TrendingUp,
    category: 'Growth' as Category,
    title: 'Rapid Growth & Community Recognition',
    desc: "Following the outstanding 2009 results, the school gained widespread popularity and acceptance. Parents flocked to enrol their children, drawn by the school's reputation for strong discipline, quality education, co-curricular activities, a lunch programme and learner transport services.",
    highlight: 'Rapid enrolment growth across Kabati and beyond',
    color: 'blue',
    image: '/achievement-2.jpg',
    imageAlt: 'Learners at morning assembly at Kabati Fly-over School',
  },
  {
    year: '2016',
    icon: MapPin,
    category: 'Infrastructure' as Category,
    title: 'Own Land Acquired',
    desc: 'Years of planning and saving by the Board of Directors culminated in the acquisition of a prime plot next to the main road in Kabati. This was a turning point — the school was no longer a tenant. Construction of the permanent school began immediately.',
    highlight: 'Plot acquired next to the Kabati main road',
    color: 'yellow',
    image: '/achievement-3.jpg',
    imageAlt: 'Aerial view of Kabati Fly-over School main campus',
  },
  {
    year: '2018',
    icon: Building,
    category: 'Infrastructure' as Category,
    title: 'Relocation to Permanent Campus',
    desc: 'After operating from rented premises near St. Paul ACK Church for over a decade, the school proudly relocated to its own purpose-built campus. This milestone marked the beginning of an era of exponential growth in facilities, staff, enrolment and academic performance.',
    highlight: 'From rented premises to our own permanent home',
    color: 'green',
    image: '/achievement-4.jpg',
    imageAlt: 'Aerial view of Kabati Fly-over Annex School campus during morning assembly',
  },
  {
    year: '2018+',
    icon: Monitor,
    category: 'Academic' as Category,
    title: 'Introduction of Computer Studies',
    desc: "Recognising the importance of digital literacy in a modern world, the school introduced Computer Studies as a formal learning area. Learners now benefit from hands-on technology education, preparing them for the demands of Kenya's CBC and the wider digital economy.",
    highlight: 'Digital literacy integrated into the curriculum',
    color: 'blue',
    image: '/achievement-5.jpg',
    imageAlt: 'Learner using a computer at Kabati Fly-over School computer lab',
  },
  {
    year: '2018+',
    icon: Bus,
    category: 'Infrastructure' as Category,
    title: 'Fleet Expansion & Transport Services',
    desc: 'The school expanded its learner transport services with the acquisition of additional vehicles, making quality education more accessible to children across the wider Kabati, Kimorori Wempa ward and neighbouring areas.',
    highlight: 'Multiple new vehicles added to the fleet',
    color: 'yellow',
    image: '/achievement-6.jpg',
    imageAlt: 'Kabati Fly-over School bus fleet parked at the school compound',
  },
  {
    year: '2018+',
    icon: Music,
    category: 'Co-Curricular' as Category,
    title: 'Thriving Co-Curricular Programme',
    desc: 'The school launched and strengthened a wide range of co-curricular activities — music, sports, scouting, journalism and martial arts — creating a holistic learning environment. These programmes have significantly boosted the overall development and confidence of our learners.',
    highlight: 'Music · Sports · Scouting · Journalism · Martial Arts',
    color: 'green',
    image: '/achievement-7.jpg',
    imageAlt: 'Kabati Fly-over School scouts marching during co-curricular activities',
  },
  {
    year: '2018+',
    icon: MapPin,
    category: 'Infrastructure' as Category,
    title: 'Land Expansion — Two More Plots',
    desc: 'Building on the success of the permanent campus, the directors acquired two additional plots to support future growth, giving the school room to expand its facilities, playgrounds and learning spaces for generations to come.',
    highlight: '2 additional plots acquired',
    color: 'blue',
    image: '/achievement-8.jpg',
    imageAlt: 'Aerial view of Kabati Fly-over Annex School campus showing expanded grounds',
  },
  {
    year: '2020',
    icon: Building,
    category: 'Infrastructure' as Category,
    title: 'Junior School Construction Begins',
    desc: 'Even during the challenging COVID-19 pandemic period, the Board of Directors pressed forward with vision and determination. Construction of the Junior School block commenced in 2020 — a bold investment in the future of every learner at Kabati Fly-over School.',
    highlight: 'Construction started during the Corona period — resilience defined',
    color: 'yellow',
    image: '/achievement-9.jpg',
    imageAlt: 'Kabati Fly-over Annex School building — ECDE Centre, Lower Primary and Junior Secondary',
  },
  {
    year: '2023',
    icon: GraduationCap,
    category: 'Academic' as Category,
    title: 'First Junior School Intake — Grade 7',
    desc: "A landmark moment in the school's history. Kabati Fly-over School welcomed its first Grade 7 cohort under Kenya's Competency Based Curriculum, expanding its offering from Pre-Primary all the way through Junior Secondary School. A new chapter begins.",
    highlight: 'First Grade 7 class admitted — CBC Junior School operational',
    color: 'green',
    image: '/achievement-10.jpg',
    imageAlt: 'Junior School learners in a full classroom at Kabati Fly-over School',
  },
];

const colorMap: Record<string, { badge: string; icon: string; border: string; highlight: string; imageBorder: string }> = {
  green: {
    badge: 'bg-green-600 text-white',
    icon: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
    border: 'hover:border-green-400',
    highlight: 'bg-green-50 border-green-200 text-green-700',
    imageBorder: 'border-green-200',
  },
  blue: {
    badge: 'bg-blue-600 text-white',
    icon: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
    border: 'hover:border-blue-400',
    highlight: 'bg-blue-50 border-blue-200 text-blue-700',
    imageBorder: 'border-blue-200',
  },
  yellow: {
    badge: 'bg-yellow-500 text-white',
    icon: 'bg-yellow-100 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white',
    border: 'hover:border-yellow-400',
    highlight: 'bg-yellow-50 border-yellow-200 text-yellow-700',
    imageBorder: 'border-yellow-200',
  },
};

const stats = [
  { icon: Star,          value: '349.33', label: 'First KCPE Mean Score (2009)' },
  { icon: Trophy,        value: '975+',   label: 'Learners Today' },
  { icon: Building,      value: '3',      label: 'Plots Owned' },
  { icon: GraduationCap, value: '2023',   label: 'Junior School Opened' },
];

const categories: Category[] = ['All', 'Academic', 'Infrastructure', 'Co-Curricular', 'Growth'];

export function Achievements() {
  useSEO({
    title: "Achievements & Milestones | Kabati Fly-over School",
    description: "18 years of academic excellence, infrastructure growth and co-curricular success at Kabati Fly-over School. From 64 learners in 2007 to 975 today in Kenol, Murang'a, Kenya.",
    canonical: 'https://kabatiflyoverschool.com/#achievements',
  });

  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered = activeCategory === 'All'
    ? milestones
    : milestones.filter((m) => m.category === activeCategory);

  return (
    <div>
      {/* Hero with background image */}
      <section
        className="relative text-white py-20"
        style={{
          backgroundImage: 'url(/achievements-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/80 to-green-600/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Achievements &amp; Milestones
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto drop-shadow">
            Eighteen years of relentless growth, excellence and community impact —
            from 64 learners in a rented room to 975 learners on our own campus.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-100 py-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <Icon className="text-green-600" size={22} />
                </div>
                <span className="text-2xl font-bold text-gray-800">{value}</span>
                <span className="text-xs text-gray-500 mt-1 text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200
                  ${activeCategory === cat
                    ? 'bg-green-600 text-white border-green-600 shadow-md scale-105'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-green-400 hover:text-green-600'
                  }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full
                    ${activeCategory === cat ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {milestones.filter((m) => m.category === cat).length}
                  </span>
                )}
                {cat === 'All' && (
                  <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full
                    ${activeCategory === cat ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {milestones.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 mb-8 text-center">
            Showing <span className="font-semibold text-gray-600">{filtered.length}</span>{' '}
            {activeCategory === 'All' ? 'milestones' : `"${activeCategory}" milestone${filtered.length !== 1 ? 's' : ''}`}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => {
              const Icon = item.icon;
              const c = colorMap[item.color];
              return (
                <div
                  key={item.title}
                  className={`group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden
                    transition-all duration-300 ease-in-out
                    hover:shadow-xl hover:-translate-y-1 ${c.border} cursor-default`}
                >
                  {/* Image — only for cards that have one */}
                  {item.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Subtle gradient so text/badge sits cleanly */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      {/* Year badge overlaid on image */}
                      <span className="absolute bottom-3 right-3 text-xs font-bold text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                  )}

                  <div className="relative z-10 p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>

                    <div className="relative">
                      <div className={`flex items-center ${item.image ? 'justify-between mb-4' : 'justify-between mb-4'}`}>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${c.icon}`}>
                          <Icon size={22} />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${c.badge}`}>
                            {item.category}
                          </span>
                          {/* Only show year badge here if no image (already shown on image) */}
                          {!item.image && (
                            <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                              {item.year}
                            </span>
                          )}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-green-700 transition-colors duration-200 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {item.desc}
                      </p>
                      <div className={`border rounded-lg px-3 py-2 text-xs font-medium flex items-start gap-2 ${c.highlight}`}>
                        <Award size={13} className="mt-0.5 flex-shrink-0" />
                        <span>{item.highlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Be Part of Our Story</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Every milestone in our journey has been made possible by dedicated teachers,
            committed parents and the learners who give their best every day. Join us and
            let your child be part of the next great chapter at Kabati Fly-over School.
          </p>
          <a
            href="tel:+254708192030"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
          >
            Enquire About Admissions
          </a>
        </div>
      </section>
    </div>
  );
}
