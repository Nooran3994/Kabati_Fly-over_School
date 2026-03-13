import { useEffect, useState } from 'react';
import { Trophy, Star } from 'lucide-react';
import { supabase, Achievement } from '../lib/supabase';

export function Achievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const { data, error } = await supabase
        .from('achievements')
        .select('*')
        .order('year', { ascending: false });

      if (error) throw error;
      setAchievements(data || []);
    } catch (error) {
      console.error('Error fetching achievements:', error);
    } finally {
      setLoading(false);
    }
  };

  const groupedAchievements = achievements.reduce((acc, achievement) => {
    if (!acc[achievement.year]) {
      acc[achievement.year] = [];
    }
    acc[achievement.year].push(achievement);
    return acc;
  }, {} as Record<number, Achievement[]>);

  const years = Object.keys(groupedAchievements)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div>
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Achievements
          </h1>
          <p className="text-xl text-center text-green-100">
            Celebrating excellence and success
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At Kabati Fly-over Primary School, we take pride in the remarkable
              accomplishments of our students and staff. Our commitment to excellence has
              been recognized through numerous awards and accolades in academics, sports,
              and co-curricular activities.
            </p>
          </div>

          {loading ? (
            <div className="text-center text-gray-600">Loading achievements...</div>
          ) : achievements.length === 0 ? (
            <div className="text-center text-gray-600">
              No achievements available at the moment.
            </div>
          ) : (
            <div className="space-y-12">
              {years.map((year) => (
                <div key={year}>
                  <div className="flex items-center mb-6">
                    <div className="bg-green-600 text-white px-6 py-2 rounded-full font-bold text-xl">
                      {year}
                    </div>
                    <div className="flex-1 h-0.5 bg-gray-300 ml-4"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {groupedAchievements[year].map((achievement) => (
                      <div
                        key={achievement.id}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-t-4 border-green-500"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Trophy className="text-green-600" size={24} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">
                              {achievement.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="text-green-600" size={40} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                  Striving for Excellence
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  These achievements are a testament to the hard work, dedication, and
                  teamwork of our students, teachers, and the entire school community.
                  We continue to set high standards and support every student in reaching
                  their full potential.
                </p>
                <p className="text-md text-gray-600 italic">
                  "Success is not final, failure is not fatal: it is the courage to
                  continue that counts."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
