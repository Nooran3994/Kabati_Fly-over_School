import { Target, Eye, Heart } from 'lucide-react';

export function About() {
  return (
    <div>
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Us</h1>
          <p className="text-xl text-center text-green-100">Building the future, one child at a time</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
          <div className="prose prose-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              Kabati Flyover School Limited is a Private Educational institution located in
              Kabati area, Kimorori Wempa ward, Murang'a South Sub county, Muranga county.
              The school is committed to providing quality education, strong discipline and
              a supportive learning environment for learners from Pre-Primary, Upper Primary
              and Junior School levels.
            </p>
            <p className="mb-4">
              We believe that education extends beyond textbooks and examinations. Our
              approach combines rigorous academic standards under Kenya's Competency Based
              Curriculum (CBC) with character development, ensuring that our students grow
              into well-rounded individuals who are prepared to make positive contributions
              to society.
            </p>
            <p>
              Through our commitment to teamwork and dedication, we have created a
              community where students, teachers and parents work together to achieve
              common goals. Our track record of success speaks to the quality of education
              and care we provide to every learner who joins our institution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Target className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Unlocking your child's potential to the fullest through quality education,
                strong discipline and a supportive learning environment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a centre of academic excellence aimed at producing a holistic
                character ready for the modern world.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Core Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Teamwork, commitment, discipline, integrity and respect — values that guide
                every learner through their educational journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Experienced Teachers</h3>
              <p className="text-gray-600">
                Our dedicated staff brings years of teaching experience and a genuine
                passion for nurturing young minds under the CBC framework.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Strong Discipline</h3>
              <p className="text-gray-600">
                A structured and disciplined environment that builds responsible, focused
                and respectful learners.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">CBC-Aligned Curriculum</h3>
              <p className="text-gray-600">
                Full delivery of Kenya's Competency Based Curriculum from Pre-Primary
                through Junior Secondary School (Grade 9).
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Community Focus</h3>
              <p className="text-gray-600">
                Strong partnerships with parents and the local Kabati community to support
                every learner's success.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Co-Curricular Activities</h3>
              <p className="text-gray-600">
                Diverse programmes in sports, arts and clubs that help students discover
                and develop their talents beyond the classroom.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Safe Environment</h3>
              <p className="text-gray-600">
                A secure and welcoming campus in Kabati area where every learner feels
                valued, safe and supported.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
