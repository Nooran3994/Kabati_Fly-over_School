import { useEffect, useState } from 'react';
import { BookOpen, Users, Award, GraduationCap } from 'lucide-react';
import { supabase, News } from '../lib/supabase';

export function Home() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('published_date', { ascending: false })
        .limit(3);

      if (error) throw error;
      setNews(data || []);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Kabati Fly-over Primary School
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-green-100">
              Shining to the top
            </p>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Unlocking your child's potential to the fullest through quality education,
              character development, and a nurturing learning environment in Kenol, Kenya.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Quality Education
              </h3>
              <p className="text-gray-600">
                Comprehensive curriculum designed to foster academic excellence and
                critical thinking skills.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Dedicated Staff
              </h3>
              <p className="text-gray-600">
                Experienced and passionate teachers committed to nurturing every child's
                potential.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Proven Excellence
              </h3>
              <p className="text-gray-600">
                Recognized for outstanding performance in academics, sports, and
                co-curricular activities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Holistic Development
              </h3>
              <p className="text-gray-600">
                Building character, values, and life skills alongside academic knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Latest News & Updates
          </h2>

          {loading ? (
            <div className="text-center text-gray-600">Loading news...</div>
          ) : news.length === 0 ? (
            <div className="text-center text-gray-600">No news available at the moment.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="text-sm text-green-600 font-semibold mb-2">
                      {formatDate(item.published_date)}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Join Our Community
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover how Kabati Fly-over Primary School can help your child reach their
            full potential. Contact us today to learn more about admissions and our
            programs.
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
