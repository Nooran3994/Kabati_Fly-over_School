import { Mail, Phone, MapPin, MailOpen } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Kabati Flyover School is a Private Educational institution committed
              to unlocking every child's potential through quality education, strong
              discipline and holistic character development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-green-400 transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">School Policies</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">News &amp; Events</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm text-gray-300">

              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-green-400 mt-1 flex-shrink-0" />
                <span>
                  Kabati area, Kimorori Wempa ward,<br />
                  Murang'a South Sub county,<br />
                  Muranga county, Kenya
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <MailOpen size={18} className="text-green-400 flex-shrink-0" />
                <span>P.O. Box 195</span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-green-400 flex-shrink-0" />
                <span>+254 708 192 030</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-green-400 flex-shrink-0" />
                <span>kabatiflyoverschool@gmail.com</span>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kabati Fly-over School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
