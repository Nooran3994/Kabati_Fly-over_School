import { useState } from 'react';
import { Mail, Phone, Clock, Facebook, Twitter, Instagram, CheckCircle, AlertCircle, MailOpen } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

// ─────────────────────────────────────────────────────────────
// SETUP: Replace YOUR_FORMSPREE_ID with your actual Formspree ID
// Steps:
//   1. Go to https://formspree.io and sign up (free)
//   2. Create a new form → set email to kabatiflyoverschool@gmail.com
//   3. Copy the form ID (e.g. "xrgwkpzd") and paste it below
// ─────────────────────────────────────────────────────────────
const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  useSEO({
    title: "Contact Us | Kabati Fly-over School — +254 708 192 030",
    description: "Contact Kabati Fly-over School in Kenol, Kenya. Call +254 708 192 030 or email kabatiflyoverschool@gmail.com. Office hours: Mon–Fri 7:30 AM – 4:30 PM, Sat 8:00 AM – 12:00 PM.",
    canonical: 'https://kabatiflyoverschool.com/#contact',
  });

  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          _replyto: form.email,
          _subject: `Website Enquiry: ${form.subject}`,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div>
      {/* ── Hero with background image ── */}
      <section
        className="relative text-white py-24"
        style={{
          backgroundImage: 'url(/contact-hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/80 to-green-600/65"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl text-green-100 drop-shadow">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* ── Left — map + contact details ── */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Get in Touch</h2>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're a parent interested in enrolling your child, have
                  questions about our programmes, or simply want to learn more about
                  Kabati Fly-over School, we're here to help.
                </p>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.250088786655!2d37.11632931072729!3d-0.9670053990195827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4da0b371aac3%3A0xffedf86f860848d0!2sKabati%20Flyover%20School!5e0!3m2!1sen!2ske!4v1773566206484!5m2!1sen!2ske"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kabati Fly-over School Location"
                ></iframe>
              </div>

              {/* Contact details */}
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-800 mb-0.5">
                      Phone Number
                    </h3>
                    <a
                      href="tel:+254708192030"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      +254 708 192 030
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-800 mb-0.5">
                      Email Address
                    </h3>
                    <a
                      href="mailto:kabatiflyoverschool@gmail.com"
                      className="text-green-600 hover:text-green-700 transition-colors"
                    >
                      kabatiflyoverschool@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MailOpen className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-800 mb-0.5">
                      Postal Address
                    </h3>
                    <p className="text-gray-600 text-sm">P.O. Box 195</p>
                    <p className="text-gray-600 text-sm">Kenol, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-11 h-11 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-800 mb-0.5">
                      Office Hours
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Monday – Friday: 7:30 AM – 4:30 PM
                    </p>
                    <p className="text-gray-600 text-sm">
                      Saturday: 8:00 AM – 12:00 PM
                    </p>
                    <p className="text-gray-600 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right — contact form ── */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Send Us a Message
              </h2>

              {/* Success */}
              {status === 'success' && (
                <div className="flex items-start gap-3 bg-green-50 border border-green-300 text-green-800 rounded-lg px-4 py-4 mb-6">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm mt-0.5">
                      Thank you for reaching out. We'll get back to you as soon
                      as possible.
                    </p>
                  </div>
                </div>
              )}

              {/* Error */}
              {status === 'error' && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-300 text-red-800 rounded-lg px-4 py-4 mb-6">
                  <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Something went wrong.</p>
                    <p className="text-sm mt-0.5">
                      Please try again or email us directly at{' '}
                      <a
                        href="mailto:kabatiflyoverschool@gmail.com"
                        className="underline"
                      >
                        kabatiflyoverschool@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white transition-shadow"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white transition-shadow"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white transition-shadow"
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white transition-shadow"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none bg-white transition-shadow"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  className={`w-full py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg text-white
                    ${status === 'sending'
                      ? 'bg-green-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 active:scale-95'
                    }`}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Connect with us ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Connect With Us
          </h2>
          <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
            Follow us on social media to stay updated with the latest news, events
            and achievements at Kabati Fly-over School.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors shadow-md hover:shadow-lg"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors shadow-md hover:shadow-lg"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors shadow-md hover:shadow-lg"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
