import { Target, Eye, Heart } from 'lucide-react';

export function About() {
  return (
    <div>
      <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Us</h1>
          <p className="text-xl text-center text-green-100">
            Building the future, one child at a time
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
          <div className="prose prose-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              Kabati Fly-over School has been a cornerstone of educational
              excellence in Kenol, Kenya. Our institution is dedicated to providing a
              nurturing and stimulating environment where every child can discover their
              unique talents and reach their fullest potential.
            </p>
            <p className="mb-4">
              We believe that education extends beyond textbooks and examinations. Our
              approach combines rigorous academic standards with character development,
              ensuring that our students grow into well-rounded individuals who are
              prepared to make positive contributions to society.
            </p>
            <p>
              Through our commitment to teamwork and dedication, we have created a
              community where students, teachers, and parents work together to achieve
              common goals. Our track record of success speaks to the quality of
              education and care we provide to every student who walks through our doors.
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
                Unlocking Your Child's potential to the fullest
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a centre of academic excellence aimed at producing a holistic
                character.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Core Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Teamwork and commitment
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Experienced Teachers
              </h3>
              <p className="text-gray-600">
                Our dedicated staff brings years of teaching experience and a genuine
                passion for nurturing young minds.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Modern Facilities
              </h3>
              <p className="text-gray-600">
                Well-equipped classrooms and learning spaces that create an optimal
                environment for education.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Comprehensive Curriculum
              </h3>
              <p className="text-gray-600">
                A balanced curriculum that emphasizes both academic excellence and
                personal development.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Community Focus
              </h3>
              <p className="text-gray-600">
                Strong partnerships with parents and the local community to support
                student success.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Co-Curricular Activities
              </h3>
              <p className="text-gray-600">
                Diverse programs in sports, arts, and clubs that help students discover
                and develop their talents.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Safe Environment
              </h3>
              <p className="text-gray-600">
                A secure and welcoming campus where students feel valued and protected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
